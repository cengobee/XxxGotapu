// ============================================================
// GoTapu Kredi Sistemi — kredi.js v2
// Tüm sayfalara: <script src="kredi.js"></script> ile ekle
// ============================================================

const KrediSistemi = (() => {

  const sb = () => window._sbClient || window.supabase;

  let _bakiyeCache = null;
  let _cacheZaman  = 0;
  const CACHE_SURESI = 30000;

  // ─────────────────────────────────────────
  // 1. BAKİYE
  // ─────────────────────────────────────────

  async function bakiyeGetir(zorla = false) {
    const simdi = Date.now();
    if (!zorla && _bakiyeCache !== null && (simdi - _cacheZaman) < CACHE_SURESI) {
      return _bakiyeCache;
    }
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return null;
    const { data } = await sb()
      .from('agent_credits')
      .select('bakiye, toplam_yuklenen, toplam_harcanan')
      .eq('agent_id', user.id)
      .single();
    _bakiyeCache = data;
    _cacheZaman  = simdi;
    return data;
  }

  function cacheSifirla() { _bakiyeCache = null; _cacheZaman = 0; }

  // ─────────────────────────────────────────
  // 2. GÖRÜNTÜLENME KAYDET
  // ─────────────────────────────────────────

  async function ilanGoruntule(ilanId) {
    const { data: { user } } = await sb().auth.getUser();
    const userId = user?.id || null;

    // IP hash — güvenli tahmini
    let ipHash = null;
    if (!userId) {
      try {
        const r = await fetch('https://api.ipify.org?format=json');
        const j = await r.json();
        // Basit hash (tam IP saklamıyoruz)
        ipHash = btoa(j.ip).substring(0, 16);
      } catch(_) {
        ipHash = 'anon_' + navigator.userAgent.length;
      }
    }

    const { data } = await sb().rpc('ilan_goruntule', {
      p_ilan_id:  ilanId,
      p_user_id:  userId,
      p_ip_hash:  ipHash
    });
    return data;
  }

  // ─────────────────────────────────────────
  // 3. İLAN İSTATİSTİKLERİ (profil sayfası için)
  // ─────────────────────────────────────────

  async function ilanIstatistikGetir(ilanId) {
    const { data } = await sb()
      .from('ilan_istatistikler')
      .select('goruntulenmesayisi,favori_sayisi,one_cikarma_tipi,one_cikarma_bitis,one_cikarma_aktif,meta_aktif,meta_gorunum_sayisi')
      .eq('id', ilanId)
      .single();
    return data;
  }

  // ─────────────────────────────────────────
  // 4. ÖNEÇIKARMA PAKETLERİ
  // ─────────────────────────────────────────

  async function paketleriGetir() {
    const { data } = await sb()
      .from('one_cikarma_paketleri')
      .select('*')
      .eq('aktif', true)
      .order('sira');
    return data || [];
  }

  async function ilanOneCikar(ilanId, paketKod) {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return { basarili: false, hata: 'giris_gerekli' };
    const { data, error } = await sb().rpc('ilan_one_cikar', {
      p_user_id:   user.id,
      p_ilan_id:   ilanId,
      p_paket_kod: paketKod
    });
    if (error) return { basarili: false, hata: error.message };
    cacheSifirla();
    return data;
  }

  // ─────────────────────────────────────────
  // 5. EŞLEŞME KREDİ GEÇİDİ
  // ─────────────────────────────────────────

  // tip: 'profil' (10 kredi) veya 'iletisim' (20 kredi)
  async function eslesmeAc(buyerId, tip = 'profil') {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return { basarili: false, hata: 'giris_gerekli' };
    const { data, error } = await sb().rpc('eslesme_iletisim_ac', {
      p_agent_id: user.id,
      p_buyer_id: buyerId,
      p_tip:      tip
    });
    if (error) return { basarili: false, hata: error.message };
    cacheSifirla();
    return data;
  }

  // Daha önce açılmış mı?
  async function eslesmeAcikMi(buyerId, tip = 'profil') {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return false;
    const { data } = await sb()
      .from('kredi_harcamalari')
      .select('id')
      .eq('user_id', user.id)
      .eq('islem_tipi', 'eslesme_' + tip)
      .like('aciklama', '%' + buyerId + '%')
      .maybeSingle();
    return !!data;
  }

  // ─────────────────────────────────────────
  // 6. KREDİ HARCAMA GEÇMİŞİ
  // ─────────────────────────────────────────

  async function harcamaGecmisiGetir(limit = 20) {
    const { data } = await sb()
      .from('kredi_harcamalari')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    return data || [];
  }

  // ─────────────────────────────────────────
  // 7. ÖDEME / KREDİ YÜKLEME
  // ─────────────────────────────────────────

  async function odemeTalebiOlustur({ paketId, krediMiktari, fiyatTl, gonderenAd, transferTarihi, aciklama }) {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return { basarili: false, mesaj: 'Giriş yapmanız gerekiyor.' };
    const { data, error } = await sb()
      .from('odeme_talepleri')
      .insert({ agent_id: user.id, paket_id: paketId, kredi_miktari: krediMiktari, fiyat_tl: fiyatTl, gonderen_ad: gonderenAd, transfer_tarihi: transferTarihi, aciklama, durum: 'bekliyor' })
      .select().single();
    if (error) return { basarili: false, mesaj: error.message };
    return { basarili: true, talep: data };
  }

  async function krediPaketleriGetir() {
    const { data } = await sb()
      .from('kredi_paketleri')
      .select('*')
      .eq('aktif', true)
      .order('kredi_miktari');
    return data || [];
  }

  // ─────────────────────────────────────────
  // 8. UI: BAKİYE WIDGET
  // ─────────────────────────────────────────

  async function bakiyeWidgetGuncelle(elementId = 'kredi-bakiye-widget') {
    const el = document.getElementById(elementId);
    if (!el) return;
    const b = await bakiyeGetir();
    if (!b) { el.style.display = 'none'; return; }
    el.innerHTML = `<span style="font-size:14px">💎</span><span style="font-weight:900;color:var(--gold)">${b.bakiye}</span><span style="font-size:11px;color:var(--text3)">kredi</span>`;
    el.style.cssText += 'display:flex;align-items:center;gap:5px;';
  }

  // ─────────────────────────────────────────
  // 9. UI: ÖNE ÇIKAR MODAL (profil sayfasından tetiklenir)
  // ─────────────────────────────────────────

  async function oneCikarModal(ilanId, ilanBaslik) {
    const bakiye  = await bakiyeGetir(true);
    const paketler = await paketleriGetir();

    if (!bakiye) {
      toast('Kredi hesabınız bulunamadı.', 'hata');
      return;
    }

    const ilanStat = await ilanIstatistikGetir(ilanId);

    // Aktif öne çıkarma bilgisi
    let mevcutBilgi = '';
    if (ilanStat?.one_cikarma_aktif) {
      const kalan = Math.ceil((new Date(ilanStat.one_cikarma_bitis) - new Date()) / 86400000);
      mevcutBilgi = `<div style="background:rgba(46,204,113,0.1);border:1px solid rgba(46,204,113,0.2);border-radius:10px;padding:10px 14px;font-size:13px;font-weight:700;color:var(--green);margin-bottom:16px">✅ Şu an aktif: ${ilanStat.one_cikarma_tipi === 'premium' ? 'Premium' : 'Standart'} — ${kalan} gün kaldı</div>`;
    }
    if (ilanStat?.meta_aktif) {
      const kalan = Math.ceil((new Date(ilanStat.meta_reklam_bitis) - new Date()) / 86400000);
      mevcutBilgi += `<div style="background:rgba(74,144,217,0.1);border:1px solid rgba(74,144,217,0.2);border-radius:10px;padding:10px 14px;font-size:13px;font-weight:700;color:#4a90d9;margin-bottom:16px">📢 Meta Reklam aktif — ${kalan} gün kaldı</div>`;
    }

    const paketHTML = paketler.map(p => {
      const ozellikler = JSON.parse(p.ozellikler || '[]');
      const yeterlimi  = bakiye.bakiye >= p.kredi_bedel;
      const ikonlar    = { standart: '⭐', premium: '🌟', meta: '📢' };
      const renkler    = { standart: 'var(--gold)', premium: '#ff6b35', meta: '#4a90d9' };

      return `
        <div style="background:var(--card);border:2px solid ${yeterlimi ? renkler[p.kod] || 'var(--border)' : 'var(--border)'};border-radius:14px;padding:16px;margin-bottom:12px;opacity:${yeterlimi ? '1' : '0.6'}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:15px;font-weight:900;color:${renkler[p.kod] || 'var(--text)'}">${ikonlar[p.kod] || '📦'} ${p.ad}</div>
            <div style="font-size:18px;font-weight:900;color:var(--gold)">${p.kredi_bedel} <span style="font-size:12px">kredi</span></div>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px">
            ${ozellikler.map(o => `<span style="background:var(--card2);border:1px solid var(--border);border-radius:50px;padding:3px 10px;font-size:11px;font-weight:700;color:var(--text2)">${o}</span>`).join('')}
          </div>
          ${yeterlimi
            ? `<button onclick="_oneCikarOnayla('${ilanId}','${p.kod}','${p.ad}',${p.kredi_bedel})" style="width:100%;padding:11px;border-radius:50px;background:${renkler[p.kod] || 'var(--gold)'};color:white;border:none;font-family:Nunito,sans-serif;font-size:13px;font-weight:900;cursor:pointer">Seç → ${p.kredi_bedel} kredi harca</button>`
            : `<div style="text-align:center;font-size:12px;color:var(--text3);font-weight:700">Yetersiz kredi — <a href="odeme.html" style="color:var(--gold)">Kredi Yükle →</a></div>`
          }
        </div>`;
    }).join('');

    const modal = document.createElement('div');
    modal.id = 'oneCikarModal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:400;background:rgba(0,0,0,0.75);display:flex;align-items:flex-end';
    modal.innerHTML = `
      <div style="background:var(--bg2);border-radius:24px 24px 0 0;padding:24px 20px 40px;width:100%;max-height:92vh;overflow-y:auto">
        <div style="width:40px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 20px"></div>
        <h3 style="font-size:18px;font-weight:900;margin-bottom:4px">🚀 İlanı Öne Çıkar</h3>
        <div style="font-size:12px;color:var(--text3);margin-bottom:16px">${ilanBaslik}</div>
        <div style="display:flex;align-items:center;gap:8px;background:var(--card);border-radius:10px;padding:10px 14px;margin-bottom:16px">
          <span style="font-size:20px">💎</span>
          <div><div style="font-size:11px;color:var(--text3);font-weight:700">Mevcut Krediniz</div><div style="font-size:18px;font-weight:900;color:var(--gold)">${bakiye.bakiye} kredi</div></div>
          <a href="odeme.html" style="margin-left:auto;background:var(--card2);border:1px solid var(--border);border-radius:50px;padding:6px 14px;font-size:12px;font-weight:800;color:var(--text);text-decoration:none">+ Yükle</a>
        </div>
        ${mevcutBilgi}
        <div id="oneCikarPaketler">${paketHTML}</div>
        <button onclick="document.getElementById('oneCikarModal').remove()" style="width:100%;padding:13px;border-radius:50px;background:var(--card);border:1px solid var(--border);font-family:Nunito,sans-serif;font-size:14px;font-weight:800;color:var(--text);cursor:pointer;margin-top:4px">İptal</button>
      </div>`;
    document.body.appendChild(modal);
    modal.onclick = e => { if (e.target === modal) modal.remove(); };
  }

  // Öne çıkar onay adımı
  window._oneCikarOnayla = async function(ilanId, paketKod, paketAd, krediMiktar) {
    if (!confirm(`"${paketAd}" paketi seçildi.\n${krediMiktar} kredi harcanacak.\nDevam edilsin mi?`)) return;

    const btn = event.target;
    btn.textContent = '⏳ İşleniyor...';
    btn.disabled = true;

    const sonuc = await ilanOneCikar(ilanId, paketKod);

    if (sonuc?.basarili) {
      document.getElementById('oneCikarModal')?.remove();
      toast(`✅ İlan öne çıkarıldı! Kalan kredi: ${sonuc.kalan_bakiye}`, 'basari');
      await bakiyeWidgetGuncelle();
      setTimeout(() => location.reload(), 1500);
    } else {
      btn.textContent = 'Tekrar Dene';
      btn.disabled = false;
      if (sonuc?.hata === 'yetersiz_kredi') {
        toast(`Yetersiz kredi! Gereken: ${sonuc.gereken}, Mevcut: ${sonuc.mevcut}`, 'hata');
        setTimeout(() => { window.location.href = 'odeme.html'; }, 2000);
      } else {
        toast('Bir hata oluştu: ' + (sonuc?.hata || 'Bilinmiyor'), 'hata');
      }
    }
  };

  // ─────────────────────────────────────────
  // 10. UI: EŞLEŞME PROFİL AÇ MODAL
  // ─────────────────────────────────────────

  async function eslesmeProfilAcModal(buyerId, buyerSehir, ilanId) {
    // Daha önce açılmış mı?
    const profilAcik     = await eslesmeAcikMi(buyerId, 'profil');
    const iletisimAcik   = await eslesmeAcikMi(buyerId, 'iletisim');

    if (profilAcik && iletisimAcik) {
      toast('Bu profil zaten açık.', 'bilgi');
      return;
    }

    const bakiye = await bakiyeGetir(true);
    if (!bakiye) {
      toast('Kredi hesabınız bulunamadı.', 'hata');
      return;
    }

    const modal = document.createElement('div');
    modal.id = 'eslesmeModal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:400;background:rgba(0,0,0,0.75);display:flex;align-items:flex-end';
    modal.innerHTML = `
      <div style="background:var(--bg2);border-radius:24px 24px 0 0;padding:24px 20px 40px;width:100%">
        <div style="width:40px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 20px"></div>
        <h3 style="font-size:18px;font-weight:900;margin-bottom:4px">🔓 Alıcı Bilgilerini Aç</h3>
        <div style="font-size:12px;color:var(--text3);margin-bottom:16px">📍 ${buyerSehir || 'Konum belirtilmemiş'}</div>
        <div style="display:flex;align-items:center;gap:8px;background:var(--card);border-radius:10px;padding:10px 14px;margin-bottom:16px">
          <span style="font-size:20px">💎</span>
          <div><div style="font-size:11px;color:var(--text3);font-weight:700">Krediniz</div><div style="font-size:18px;font-weight:900;color:var(--gold)">${bakiye.bakiye} kredi</div></div>
        </div>

        ${!profilAcik ? `
        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px">
          <div style="font-size:15px;font-weight:900;margin-bottom:6px">👤 Profil Görüntüle — 10 kredi</div>
          <div style="font-size:12px;color:var(--text2);margin-bottom:12px;line-height:1.5">Alıcının adı, profil detayları ve tercih notları görünür.</div>
          <button onclick="_eslesmeAcOnayla('${buyerId}','profil','${ilanId}')" style="width:100%;padding:11px;border-radius:50px;background:var(--gold);color:var(--bg);border:none;font-family:Nunito,sans-serif;font-size:13px;font-weight:900;cursor:pointer;${bakiye.bakiye < 10 ? 'opacity:0.5' : ''}">
            ${bakiye.bakiye >= 10 ? '10 kredi harca → Profili Gör' : 'Yetersiz kredi'}
          </button>
        </div>` : '<div style="background:rgba(46,204,113,0.1);border-radius:10px;padding:10px 14px;font-size:13px;font-weight:700;color:var(--green);margin-bottom:12px">✅ Profil zaten açık</div>'}

        ${!iletisimAcik ? `
        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px">
          <div style="font-size:15px;font-weight:900;margin-bottom:6px">📞 İletişim Bilgileri — 20 kredi</div>
          <div style="font-size:12px;color:var(--text2);margin-bottom:12px;line-height:1.5">Telefon numarası ve e-posta adresi görünür.</div>
          <button onclick="_eslesmeAcOnayla('${buyerId}','iletisim','${ilanId}')" style="width:100%;padding:11px;border-radius:50px;background:#4a90d9;color:white;border:none;font-family:Nunito,sans-serif;font-size:13px;font-weight:900;cursor:pointer;${bakiye.bakiye < 20 ? 'opacity:0.5' : ''}">
            ${bakiye.bakiye >= 20 ? '20 kredi harca → İletişimi Gör' : 'Yetersiz kredi — <a href="odeme.html" style="color:white">Kredi Yükle</a>'}
          </button>
        </div>` : '<div style="background:rgba(46,204,113,0.1);border-radius:10px;padding:10px 14px;font-size:13px;font-weight:700;color:var(--green);margin-bottom:12px">✅ İletişim bilgileri zaten açık</div>'}

        <button onclick="document.getElementById('eslesmeModal').remove()" style="width:100%;padding:13px;border-radius:50px;background:var(--card);border:1px solid var(--border);font-family:Nunito,sans-serif;font-size:14px;font-weight:800;color:var(--text);cursor:pointer;margin-top:4px">Kapat</button>
      </div>`;
    document.body.appendChild(modal);
    modal.onclick = e => { if (e.target === modal) modal.remove(); };
  }

  window._eslesmeAcOnayla = async function(buyerId, tip, ilanId) {
    const btn = event.target;
    btn.textContent = '⏳ İşleniyor...';
    btn.disabled = true;

    const sonuc = await eslesmeAc(buyerId, tip);

    if (sonuc?.basarili) {
      document.getElementById('eslesmeModal')?.remove();
      toast(`✅ ${tip === 'iletisim' ? 'İletişim bilgileri' : 'Profil'} açıldı! Kalan: ${sonuc.kalan_bakiye} kredi`, 'basari');
      await bakiyeWidgetGuncelle();
      // Sayfayı yenile — açılan bilgiler görünsün
      setTimeout(() => location.reload(), 1000);
    } else {
      btn.textContent = 'Tekrar Dene';
      btn.disabled = false;
      if (sonuc?.hata === 'yetersiz_kredi') {
        toast(`Yetersiz kredi! Gereken: ${sonuc.gereken}`, 'hata');
        setTimeout(() => { window.location.href = 'odeme.html'; }, 2000);
      } else {
        toast('Hata: ' + (sonuc?.hata || 'Bilinmiyor'), 'hata');
      }
    }
  };

  // ─────────────────────────────────────────
  // 11. UI: İLAN İSTATİSTİK SATIRI HTML
  // (profil.html ilan kartlarına eklenir)
  // ─────────────────────────────────────────

  function istatistikSatiriHTML(ilan) {
    const goruntuleme = ilan.goruntulenmesayisi || 0;
    const favori      = ilan.favori_sayisi || 0;
    const oneCiktiMi  = ilan.one_cikarma_tipi && ilan.one_cikarma_bitis && new Date(ilan.one_cikarma_bitis) > new Date();
    const metaAktif   = ilan.meta_reklam_aktif && ilan.meta_reklam_bitis && new Date(ilan.meta_reklam_bitis) > new Date();

    const rozetler = [];
    if (ilan.one_cikarma_tipi === 'premium' && oneCiktiMi) rozetler.push('<span style="background:rgba(255,107,53,0.15);color:#ff6b35;border-radius:50px;padding:2px 8px;font-size:10px;font-weight:800">🌟 Premium</span>');
    else if (ilan.one_cikarma_tipi === 'standart' && oneCiktiMi) rozetler.push('<span style="background:rgba(245,200,66,0.15);color:var(--gold);border-radius:50px;padding:2px 8px;font-size:10px;font-weight:800">⭐ Öne Çıkan</span>');
    if (metaAktif) rozetler.push('<span style="background:rgba(74,144,217,0.15);color:#4a90d9;border-radius:50px;padding:2px 8px;font-size:10px;font-weight:800">📢 Meta Reklam</span>');

    return `
      <div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-top:1px solid var(--border);margin-top:6px;flex-wrap:wrap">
        <span style="font-size:11px;font-weight:700;color:var(--text3)">👁 ${goruntuleme.toLocaleString('tr-TR')} görüntülenme</span>
        <span style="font-size:11px;font-weight:700;color:var(--text3)">❤️ ${favori} favori</span>
        ${rozetler.join('')}
        <button onclick="KrediSistemi.oneCikarModal('${ilan.id}','${(ilan.baslik||'').replace(/'/g,"\\'")}');event.stopPropagation()" style="margin-left:auto;background:var(--gold);color:var(--bg);border:none;border-radius:50px;padding:5px 12px;font-size:11px;font-weight:900;cursor:pointer;font-family:Nunito,sans-serif">🚀 Öne Çıkar</button>
      </div>`;
  }

  // ─────────────────────────────────────────
  // 12. ADMIN
  // ─────────────────────────────────────────

  async function adminKrediYukle(agentId, miktar, talepId = null, aciklama = 'Admin yüklemesi') {
    const { data: { user } } = await sb().auth.getUser();
    const { data, error } = await sb().rpc('admin_kredi_yukle', {
      p_agent_id: agentId, p_miktar: miktar,
      p_talep_id: talepId, p_admin_id: user.id, p_aciklama: aciklama
    });
    if (error) return { basarili: false, mesaj: error.message };
    return { basarili: true, ...data };
  }

  async function aktifOneCikanlariGetir() {
    const { data } = await sb()
      .from('ilan_istatistikler')
      .select('id,baslik,user_id,one_cikarma_tipi,one_cikarma_bitis,meta_aktif,meta_reklam_bitis')
      .or('one_cikarma_aktif.eq.true,meta_aktif.eq.true')
      .order('one_cikarma_bitis', { ascending: true });
    return data || [];
  }

  // ─────────────────────────────────────────
  // 13. TOAST
  // ─────────────────────────────────────────

  function toast(mesaj, tip = 'bilgi') {
    let k = document.getElementById('kredi-toast-k');
    if (!k) {
      k = document.createElement('div');
      k.id = 'kredi-toast-k';
      k.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;width:90%;max-width:360px';
      document.body.appendChild(k);
    }
    if (!document.getElementById('kredi-toast-css')) {
      const s = document.createElement('style');
      s.id = 'kredi-toast-css';
      s.textContent = '@keyframes tgir{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes tcik{from{opacity:1}to{opacity:0;transform:translateY(8px)}}';
      document.head.appendChild(s);
    }
    const renk = { basari:'#10b981', hata:'#ef4444', uyari:'#f59e0b', bilgi:'#3b82f6' }[tip] || '#3b82f6';
    const t = document.createElement('div');
    t.style.cssText = `background:${renk};color:white;padding:12px 18px;border-radius:14px;font-size:14px;font-weight:700;box-shadow:0 4px 20px rgba(0,0,0,0.2);animation:tgir .25s ease;text-align:center;pointer-events:auto`;
    t.textContent = mesaj;
    k.appendChild(t);
    setTimeout(() => { t.style.animation = 'tcik .25s ease forwards'; setTimeout(() => t.remove(), 250); }, 3000);
  }

  // PUBLIC API
  return {
    bakiyeGetir, bakiyeWidgetGuncelle, cacheSifirla,
    ilanGoruntule, ilanIstatistikGetir,
    paketleriGetir, ilanOneCikar, oneCikarModal, istatistikSatiriHTML,
    eslesmeAc, eslesmeAcikMi, eslesmeProfilAcModal,
    harcamaGecmisiGetir, odemeTalebiOlustur, krediPaketleriGetir,
    adminKrediYukle, aktifOneCikanlariGetir,
    toast
  };

})();

window.KrediSistemi = KrediSistemi;

document.addEventListener('DOMContentLoaded', () => {
  KrediSistemi.bakiyeWidgetGuncelle();
});
