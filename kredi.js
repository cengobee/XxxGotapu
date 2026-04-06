// ============================================================
// GoTapu Kredi Sistemi — kredi.js
// Her sayfaya: <script src="kredi.js"></script> ile ekle
// ============================================================

const KrediSistemi = (() => {

  // ── Supabase bağlantısı (zaten window.supabase var)
  const sb = () => window.supabase;

  // ── Bakiye önbelleği (sayfa yenilenmeden gereksiz sorgu atma)
  let _bakiyeCache = null;
  let _cacheZaman = 0;
  const CACHE_SURESI = 30000; // 30 saniye

  // ────────────────────────────────────────────────
  // 1. BAKİYE OKUMA
  // ────────────────────────────────────────────────

  async function bakiyeGetir(zorla = false) {
    const simdi = Date.now();
    if (!zorla && _bakiyeCache !== null && (simdi - _cacheZaman) < CACHE_SURESI) {
      return _bakiyeCache;
    }
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return null;

    const { data, error } = await sb()
      .from('agent_credits')
      .select('bakiye, toplam_yuklenen, toplam_harcanan, son_dolum')
      .eq('agent_id', user.id)
      .single();

    if (error || !data) return null;
    _bakiyeCache = data;
    _cacheZaman = simdi;
    return data;
  }

  function cacheSifirla() {
    _bakiyeCache = null;
    _cacheZaman = 0;
  }

  // ────────────────────────────────────────────────
  // 2. PROFİL AÇMA (Alıcı profili kredi karşılığı aç)
  // ────────────────────────────────────────────────

  async function profilAc(buyerId, ilanTipi, ilanId = null) {
    // ilanTipi: 'kiralik' | 'satilik'
    const { data, error } = await sb().rpc('kredi_harca', {
      p_agent_id: (await sb().auth.getUser()).data.user.id,
      p_buyer_id: buyerId,
      p_ilan_tipi: ilanTipi,
      p_ilan_id: ilanId
    });

    cacheSifirla();

    if (error) return { basarili: false, hata: 'sunucu_hatasi', mesaj: error.message };
    return data;
  }

  // Profil daha önce açılmış mı?
  async function profilAcikMi(buyerId) {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return false;
    const { data } = await sb()
      .from('profil_acmalar')
      .select('id')
      .eq('agent_id', user.id)
      .eq('buyer_id', buyerId)
      .maybeSingle();
    return !!data;
  }

  // ────────────────────────────────────────────────
  // 3. ÖDEME TALEBİ OLUŞTUR (IBAN ile bildirim)
  // ────────────────────────────────────────────────

  async function odemeTalebiOlustur({ paketId, krediMiktari, fiyatTl, gonderenAd, transferTarihi, aciklama }) {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return { basarili: false, mesaj: 'Giriş yapmanız gerekiyor.' };

    const { data, error } = await sb()
      .from('odeme_talepleri')
      .insert({
        agent_id: user.id,
        paket_id: paketId,
        kredi_miktari: krediMiktari,
        fiyat_tl: fiyatTl,
        gonderen_ad: gonderenAd,
        transfer_tarihi: transferTarihi,
        aciklama: aciklama,
        durum: 'bekliyor'
      })
      .select()
      .single();

    if (error) return { basarili: false, mesaj: error.message };
    return { basarili: true, talep: data };
  }

  // Kullanıcının ödeme talepleri
  async function odemeTalepleriGetir() {
    const { data, error } = await sb()
      .from('odeme_talepleri')
      .select(`*, kredi_paketleri(paket_adi)`)
      .order('created_at', { ascending: false });
    if (error) return [];
    return data;
  }

  // ────────────────────────────────────────────────
  // 4. KREDİ PAKETLERİ
  // ────────────────────────────────────────────────

  async function paketleriGetir() {
    const { data, error } = await sb()
      .from('kredi_paketleri')
      .select('*')
      .eq('aktif', true)
      .order('kredi_miktari');
    if (error) return [];
    return data;
  }

  // ────────────────────────────────────────────────
  // 5. KREDİ HAREKETLERİ (Özet)
  // ────────────────────────────────────────────────

  async function hareketleriGetir(limit = 20) {
    const { data, error } = await sb()
      .from('kredi_islemleri')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) return [];
    return data;
  }

  // Günlük kalan açma hakkı
  async function gunlukHakGetir() {
    const { data: { user } } = await sb().auth.getUser();
    if (!user) return { kalan: 0, kullanilan: 0, limit: 3 };

    const bugun = new Date().toISOString().split('T')[0];
    const { count } = await sb()
      .from('profil_acmalar')
      .select('id', { count: 'exact', head: true })
      .eq('agent_id', user.id)
      .gte('tarih', bugun + 'T00:00:00')
      .lt('tarih', bugun + 'T23:59:59');

    const kullanilan = count || 0;
    return { kalan: Math.max(0, 3 - kullanilan), kullanilan, limit: 3 };
  }

  // ────────────────────────────────────────────────
  // 6. UI YARDIMCI FONKSİYONLARI
  // ────────────────────────────────────────────────

  // Bakiye widget'ını güncelle (header'da göstermek için)
  async function bakiyeWidgetGuncelle(elementId = 'kredi-bakiye-widget') {
    const el = document.getElementById(elementId);
    if (!el) return;
    const bakiye = await bakiyeGetir();
    if (!bakiye) {
      el.style.display = 'none';
      return;
    }
    el.innerHTML = `
      <span class="kredi-ikon">💎</span>
      <span class="kredi-sayi">${bakiye.bakiye}</span>
      <span class="kredi-label">kredi</span>
    `;
    el.style.display = 'flex';
  }

  // Blur kart HTML'i oluştur (eşleşmeler sayfası için)
  function blurKartHTML(aliciProfil, ilanTipi) {
    const krediGereken = ilanTipi === 'satilik' ? 2 : 1;
    const fiyatLabel = ilanTipi === 'satilik' ? '2 kredi' : '1 kredi';
    const tipLabel = ilanTipi === 'satilik' ? 'Satılık' : 'Kiralık';

    return `
      <div class="blur-kart" data-buyer-id="${aliciProfil.id}" data-ilan-tipi="${ilanTipi}">
        <div class="blur-kart-ust">
          <div class="blur-avatar">👤</div>
          <div class="blur-bilgi">
            <div class="blur-isim">●●● ●●●●●</div>
            <div class="blur-konum">📍 ${aliciProfil.sehir || '—'} / ${aliciProfil.ilce || '—'}</div>
          </div>
          <div class="blur-tip-badge ${ilanTipi}">${tipLabel}</div>
        </div>
        <div class="blur-detay">
          <div class="blur-detay-item">🏠 ${aliciProfil.oda_sayisi || '—'} oda</div>
          <div class="blur-detay-item">💰 ${aliciProfil.butce_min ? aliciProfil.butce_min.toLocaleString('tr-TR') + '₺' : '—'} – ${aliciProfil.butce_max ? aliciProfil.butce_max.toLocaleString('tr-TR') + '₺' : '—'}</div>
        </div>
        <div class="blur-overlay">
          <div class="blur-kilit">🔒</div>
          <div class="blur-aciklama">İletişim bilgileri gizli</div>
          <button class="blur-ac-btn" onclick="KrediSistemi.profilAcModal('${aliciProfil.id}', '${ilanTipi}')">
            ${fiyatLabel} harca → Profili Aç
          </button>
        </div>
      </div>
    `;
  }

  // Profil açma modalı göster
  async function profilAcModal(buyerId, ilanTipi) {
    const bakiye = await bakiyeGetir(true);
    const krediGereken = ilanTipi === 'satilik' ? 2 : 1;
    const hak = await gunlukHakGetir();

    if (!bakiye) {
      _toast('Kredi hesabınız bulunamadı. Lütfen kredi yükleyin.', 'hata');
      return;
    }

    if (hak.kalan === 0) {
      _toast('Günlük 3 profil açma limitine ulaştınız. Yarın tekrar deneyin.', 'uyari');
      return;
    }

    if (bakiye.bakiye < krediGereken) {
      _toast(`Yetersiz kredi! Gereken: ${krediGereken}, Mevcut: ${bakiye.bakiye}`, 'hata');
      setTimeout(() => { window.location.href = 'odeme.html'; }, 1500);
      return;
    }

    const onay = confirm(
      `Bu profili açmak ${krediGereken} kredi harcayacak.\n` +
      `Mevcut bakiye: ${bakiye.bakiye} kredi\n\n` +
      `Devam etmek istiyor musunuz?`
    );

    if (!onay) return;

    const sonuc = await profilAc(buyerId, ilanTipi);

    if (sonuc.basarili) {
      _toast(`Profil açıldı! Kalan kredi: ${sonuc.kalan_bakiye}`, 'basari');
      // Kart içeriğini güncelle
      const kart = document.querySelector(`[data-buyer-id="${buyerId}"]`);
      if (kart) {
        kart.querySelector('.blur-overlay').remove();
        kart.classList.add('acik-kart');
        kart.querySelector('.blur-isim').textContent = '🔓 Profil Açıldı';
      }
      await bakiyeWidgetGuncelle();
    } else {
      _toast(sonuc.mesaj || 'Bir hata oluştu.', 'hata');
    }
  }

  // ────────────────────────────────────────────────
  // 7. TOAST BİLDİRİM (hafif, bağımlılık yok)
  // ────────────────────────────────────────────────

  function _toast(mesaj, tip = 'bilgi') {
    let konteyner = document.getElementById('kredi-toast-konteyner');
    if (!konteyner) {
      konteyner = document.createElement('div');
      konteyner.id = 'kredi-toast-konteyner';
      konteyner.style.cssText = `
        position:fixed; bottom:24px; right:24px; z-index:9999;
        display:flex; flex-direction:column; gap:8px; pointer-events:none;
      `;
      document.body.appendChild(konteyner);
    }

    const renkler = {
      basari: '#10b981',
      hata: '#ef4444',
      uyari: '#f59e0b',
      bilgi: '#3b82f6'
    };

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: ${renkler[tip] || renkler.bilgi};
      color: white;
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      pointer-events: auto;
      animation: krediToastGir 0.3s ease;
      max-width: 320px;
    `;
    toast.textContent = mesaj;
    konteyner.appendChild(toast);

    // CSS animasyonu inject et (sadece bir kere)
    if (!document.getElementById('kredi-toast-css')) {
      const stil = document.createElement('style');
      stil.id = 'kredi-toast-css';
      stil.textContent = `
        @keyframes krediToastGir { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes krediToastCik { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(10px); } }
      `;
      document.head.appendChild(stil);
    }

    setTimeout(() => {
      toast.style.animation = 'krediToastCik 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ────────────────────────────────────────────────
  // 8. ADMİN FONKSİYONLARI
  // ────────────────────────────────────────────────

  async function adminKrediYukle(agentId, miktar, talepId = null, aciklama = 'Admin yüklemesi') {
    const { data: { user } } = await sb().auth.getUser();
    const { data, error } = await sb().rpc('admin_kredi_yukle', {
      p_agent_id: agentId,
      p_miktar: miktar,
      p_talep_id: talepId,
      p_admin_id: user.id,
      p_aciklama: aciklama
    });
    if (error) return { basarili: false, mesaj: error.message };
    return { basarili: true, ...data };
  }

  async function bekleyenTalepleriGetir() {
    const { data, error } = await sb()
      .from('bekleyen_odeme_talepleri')
      .select('*');
    if (error) return [];
    return data;
  }

  // ────────────────────────────────────────────────
  // PUBLIC API
  // ────────────────────────────────────────────────

  return {
    bakiyeGetir,
    bakiyeWidgetGuncelle,
    profilAc,
    profilAcikMi,
    profilAcModal,
    blurKartHTML,
    gunlukHakGetir,
    odemeTalebiOlustur,
    odemeTalepleriGetir,
    paketleriGetir,
    hareketleriGetir,
    cacheSifirla,
    // Admin
    adminKrediYukle,
    bekleyenTalepleriGetir,
    // Yardımcı
    toast: _toast
  };

})();

// Global erişim
window.KrediSistemi = KrediSistemi;

// Sayfa yüklenince bakiye widget'ını otomatik güncelle
document.addEventListener('DOMContentLoaded', () => {
  KrediSistemi.bakiyeWidgetGuncelle();
});
