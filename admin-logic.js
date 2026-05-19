// ══════════════════════════════════════════════
// GoTapu Admin Panel — admin-logic.js
// ══════════════════════════════════════════════

const SUPABASE_URL = 'https://ncmzfaszaowiynzjdefb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbXpmYXN6YW93aXluempkZWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NDEwOTQsImV4cCI6MjA4OTQxNzA5NH0.Kw1JQ65KQFPU0r6mIT9buFkMrolnH14_jRvLY7o63tY';
const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

const ADMIN_EMAILS = ['cengizhangazelci@gmail.com'];
const kategoriAdlari = { temizlik:'Temizlik', boya:'Boya', nakliye:'Nakliye', cilingir:'Çilingir', tadilat:'Tadilat', sigorta:'Sigorta', teknik:'Teknik Servis', dekorasyon:'Dekorasyon', tesisat:'Tesisat', elektrik:'Elektrik', ilacalama:'İlaçlama', haliyikama:'Halı Yıkama', aracyikama:'Araç Yıkama', emlakci:'Emlakçı', vasıfsız:'Vasıfsız' };
const kategoriEm = { temizlik:'🧹', boya:'🖌️', nakliye:'🚚', cilingir:'🔑', tadilat:'🔧', sigorta:'🛡️', teknik:'📱', dekorasyon:'🛋️', tesisat:'🔩', elektrik:'⚡', ilacalama:'🦟', haliyikama:'🪞', aracyikama:'🚗', emlakci:'🏠', vasıfsız:'👷' };

// Veri cache
let tumTeklifler=[], tumIlanlar=[], tumKullanicilar=[], tumMesajlar=[], tumSikayetler=[], tumRaporlar=[], tumKurumsal=[], tumOdemeler=[], tumOnecikanlar=[];
let tumUrunler=[], tumMagazalar=[], tumRestoranlar=[], tumYemekSiparisler=[];
let tumMarketler=[], tumMarketSiparisler=[], tumSuruculer=[], tumYolculuklar=[];
let tumMuzikler=[], tumEtkinlikler=[], tumGruplar=[];

// Durum takip
let adminUserId = null;
let kurumsalTipAktif='tumu', kurumsalOnayAktif='tumu', kurumsalAramaQ='';
let aktifOdemeDurum = 'bekliyor';
let aktifUrunDurum='bekliyor', aktifMagazaDurum='bekliyor', urunAramaQ='', magazaAramaQ='';
let aktifRestoranDurum='bekliyor', aktifSiparisDurum='bekliyor', restoranAramaQ='';
let aktifMarketDurum='bekliyor', aktifMarketSiparisDurum='bekliyor';
let aktifSuruculerDurum='bekliyor', aktifYolculukDurum='aktif';
let aktifMuzikDurum='bekliyor', muzikAramaQ='';
let aktifEtkinlikDurum='bekliyor', etkinlikAramaQ='';
let aktifGrupDurum='bekliyor', grupAramaQ='';

const TÜM_SEKMELER = ['ozet','onay','ilanlar','teklifler','kullanicilar','kurumsal','odemeler','raporlar','mesajlar','sikayetler','onecikanlar','bankalar','alisveris','yemek','market','taksi','muzik','etkinlikler','gruplar'];

// ── AUTH ──────────────────────────────────────
sb.auth.getSession().then(({ data }) => {
  if (!data.session) { window.location.href = 'index.html'; return; }
  const email = data.session.user.email;
  adminUserId = data.session.user.id;
  if (!ADMIN_EMAILS.includes(email)) {
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px"><div style="font-size:60px">🚫</div><div style="font-size:20px;font-weight:900">Yetkisiz Erişim</div><a href="index.html" style="color:var(--gold)">Ana Sayfaya Dön</a></div>';
    return;
  }
  baslangicSekmesi();
  tumunuYukle();
});

function sekmeAc(sekme, btn) {
  TÜM_SEKMELER.forEach(s => {
    document.getElementById('sekme-'+s).style.display = s===sekme ? 'block' : 'none';
  });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  history.replaceState(null, '', '#'+sekme);
}

function baslangicSekmesi() {
  const hash = location.hash.replace('#','');
  const sekme = TÜM_SEKMELER.includes(hash) ? hash : 'ozet';
  const idx = TÜM_SEKMELER.indexOf(sekme);
  const btn = document.querySelectorAll('.tab-btn')[idx];
  sekmeAc(sekme, btn||null);
}

async function tumunuYukle() {
  await Promise.all([
    ozetYukle(), onayBekleyenleriYukle(), ilanlariYukle(),
    teklifleriYukle(), kullanicilariYukle(), kurumsalUyeleriYukle(),
    odemetalepleriniYukle(), raporlariYukle(), mesajlariYukle(),
    sikayetleriYukle(), bankalariYukle(), onecikanlariYukle(),
    alisverisYukle(), yemekYukle(), marketYukle(),
    taksiYukle(), muzikYukle(), etkinliklerYukle(), gruplarYukle()
  ]);
}

// ── YARDIMCI ──────────────────────────────────
function emptyHTML(ikon, metin) {
  return `<div class="empty" style="padding:30px;text-align:center">
    <div class="empty-icon">${ikon}</div>
    <div class="empty-title">${metin}</div>
    <div style="font-size:12px;color:var(--text3);margin-top:6px">Tablo henüz oluşturulmamış veya kayıt yok.</div>
  </div>`;
}

function durumMetin(d) {
  const map = { onaylandi:'✅ Onaylı', reddedildi:'❌ Reddedildi', bekliyor:'⏳ Bekliyor', askiya_alindi:'⛔ Askıda', iptal:'🚫 İptal', aktif:'✅ Aktif' };
  return map[d] || d || '⏳ Bekliyor';
}

function siparisMetin(d) {
  const map = { bekliyor:'⏳ Bekliyor', hazirlaniyor:'👨‍🍳 Hazırlanıyor', yolda:'🛵 Yolda', teslim_edildi:'✅ Teslim', iptal:'❌ İptal' };
  return map[d] || d || '—';
}

function badgeGuncelle(id, sayi) {
  const b = document.getElementById(id);
  if (!b) return;
  if (sayi > 0) { b.textContent = sayi; b.style.display = 'inline'; }
  else b.style.display = 'none';
}

async function veriCek(tablo, kolonlar, sira) {
  const { data, error } = await sb.from(tablo).select(kolonlar||'*').order(sira||'created_at', { ascending: false });
  if (error) return null;
  return data || [];
}

function toast(mesaj, tip='bilgi') {
  const el = document.createElement('div');
  const renkler = { basari:'#10b981', hata:'#ef4444', bilgi:'#3b82f6' };
  el.style.cssText = `position:fixed;bottom:24px;right:16px;z-index:9999;background:${renkler[tip]||renkler.bilgi};color:white;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:0 4px 20px rgba(0,0,0,0.2);max-width:320px`;
  el.textContent = mesaj;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function detayKapat() { document.getElementById('detayModal').classList.remove('open'); }
async function cikis() { await sb.auth.signOut(); window.location.href = 'index.html'; }

// Genel modül onay/red/sil
async function modulOnayla(tablo, id, kullaniciFld, bildirimBaslik, bildirimMesaj, sonraFnAdi) {
  await sb.from(tablo).update({ onay_durumu: 'onaylandi' }).eq('id', id);
  const { data: kayit } = await sb.from(tablo).select(kullaniciFld).eq('id', id).single();
  if (kayit) await sb.from('bildirimler').insert({ user_id: kayit[kullaniciFld], tip: 'onay', baslik: bildirimBaslik, mesaj: bildirimMesaj, okundu: false });
  if (window[sonraFnAdi]) await window[sonraFnAdi]();
}

async function modulReddet(tablo, id, kullaniciFld, bildirimBaslik, sonraFnAdi) {
  const sebep = prompt('Red sebebi:');
  if (sebep === null) return;
  await sb.from(tablo).update({ onay_durumu: 'reddedildi' }).eq('id', id);
  const { data: kayit } = await sb.from(tablo).select(kullaniciFld).eq('id', id).single();
  if (kayit) await sb.from('bildirimler').insert({ user_id: kayit[kullaniciFld], tip: 'red', baslik: '❌ ' + bildirimBaslik, mesaj: `${bildirimBaslik} reddedildi.${sebep?' Sebep: '+sebep:''}`, okundu: false });
  if (window[sonraFnAdi]) await window[sonraFnAdi]();
}

async function modulSil(tablo, id, sonraFnAdi) {
  if (!confirm('Silmek istiyor musunuz?')) return;
  await sb.from(tablo).delete().eq('id', id);
  if (window[sonraFnAdi]) await window[sonraFnAdi]();
}

// Genel kart HTML
function genelKartHTML(opts) {
  const d = opts.durum || 'bekliyor';
  const dText = opts.durumText || durumMetin(d);
  const dClass = d==='onaylandi'?'durum-onaylandi':d==='reddedildi'?'durum-reddedildi':d==='askiya_alindi'?'durum-iptal':'durum-bekliyor';
  return `<div class="admin-card" id="kart-${opts.tablo}-${opts.id}">
    <div class="admin-card-head">
      <div style="flex:1;min-width:0">
        <span class="durum-badge ${dClass}" style="margin-bottom:4px;display:inline-block">${dText}</span>
        <div class="admin-card-title">${opts.baslik}</div>
        <div class="admin-card-meta">${opts.meta}</div>
      </div>
    </div>
    <div class="admin-card-actions">
      ${d!=='onaylandi'&&d!=='askiya_alindi'?`<button class="act-btn act-green" onclick="modulOnayla('${opts.tablo}','${opts.id}','${opts.kullaniciFld}','✅ ${opts.bildirimBaslik} onaylandı','${opts.bildirimBaslik} onaylandı, yayına alındı.','${opts.sonraFnAdi}')">✅ Onayla</button>`:''}
      ${d!=='reddedildi'&&d!=='askiya_alindi'?`<button class="act-btn act-rust" onclick="modulReddet('${opts.tablo}','${opts.id}','${opts.kullaniciFld}','${opts.bildirimBaslik}','${opts.sonraFnAdi}')">❌ Reddet</button>`:''}
      <button class="act-btn act-rust" onclick="modulSil('${opts.tablo}','${opts.id}','${opts.sonraFnAdi}')">🗑️ Sil</button>
      ${opts.ekstraBtn||''}
    </div>
  </div>`;
}

// ── ÖZET ──────────────────────────────────────
async function ozetYukle() {
  const [t,i,k,onay,kurumsal,odeme] = await Promise.all([
    sb.from('teklifler').select('*',{count:'exact',head:true}),
    sb.from('ilanlar').select('*',{count:'exact',head:true}),
    sb.from('profiles').select('*',{count:'exact',head:true}),
    sb.from('ilanlar').select('*',{count:'exact',head:true}).eq('onay_durumu','bekliyor'),
    sb.from('profiles').select('*',{count:'exact',head:true}).eq('kurumsal_onay','bekliyor'),
    sb.from('odeme_talepleri').select('*',{count:'exact',head:true}).eq('durum','bekliyor'),
  ]);
  if (onay.count>0) { const b=document.getElementById('onayBadge'); b.textContent=onay.count; b.style.display='inline'; }
  if (kurumsal.count>0) { const b=document.getElementById('kurumsalBadge'); b.textContent=kurumsal.count; b.style.display='inline'; }
  if (odeme.count>0) { const b=document.getElementById('odemeBadge'); b.textContent=odeme.count; b.style.display='inline'; }
  else document.getElementById('odemeBadge').style.display='none';
  const { data: onayliOdemeler } = await sb.from('odeme_talepleri').select('fiyat_tl').eq('durum','onaylandi');
  const toplamGelir = (onayliOdemeler||[]).reduce((t,o)=>t+Number(o.fiyat_tl||0),0);
  document.getElementById('istatistikler').innerHTML = `
    <div class="stat-card"><div class="stat-card-icon">⏳</div><div class="stat-card-num" style="color:var(--rust)">${onay.count||0}</div><div class="stat-card-lbl">Onay Bekleyen İlan</div></div>
    <div class="stat-card"><div class="stat-card-icon">💎</div><div class="stat-card-num" style="color:var(--gold)">${odeme.count||0}</div><div class="stat-card-lbl">Bekleyen Kredi Talebi</div></div>
    <div class="stat-card"><div class="stat-card-icon">🏠</div><div class="stat-card-num">${i.count||0}</div><div class="stat-card-lbl">Toplam İlan</div></div>
    <div class="stat-card"><div class="stat-card-icon">👥</div><div class="stat-card-num">${k.count||0}</div><div class="stat-card-lbl">Toplam Kullanıcı</div></div>
    <div class="stat-card"><div class="stat-card-icon">🏢</div><div class="stat-card-num">${kurumsal.count||0}</div><div class="stat-card-lbl">Kurumsal Başvuru</div></div>
    <div class="stat-card"><div class="stat-card-icon">💰</div><div class="stat-card-num">${toplamGelir.toLocaleString('tr-TR')} ₺</div><div class="stat-card-lbl">Toplam Kredi Geliri</div></div>`;
  const { data: sonT } = await sb.from('teklifler').select('*').order('created_at',{ascending:false}).limit(3);
  document.getElementById('sonTeklifler').innerHTML = (sonT||[]).map(t=>teklifKartHTML(t)).join('') || emptyHTML('📋','Teklif yok');
  const { data: sonI } = await sb.from('ilanlar').select('*').order('created_at',{ascending:false}).limit(3);
  document.getElementById('sonIlanlar').innerHTML = (sonI||[]).map(i=>ilanKartHTML(i)).join('') || emptyHTML('🏠','İlan yok');
}

// ── KREDİ ÖDEMELERİ ──────────────────────────
async function odemetalepleriniYukle() {
  const { data } = await sb.from('odeme_talepleri')
    .select('*, profiles:agent_id(id,full_name,firma_adi,email,phone,kullanici_tipi), kredi_paketleri:paket_id(paket_adi)')
    .order('created_at', { ascending: false });
  tumOdemeler = data || [];
  const bekleyenSayi = tumOdemeler.filter(o => o.durum === 'bekliyor').length;
  badgeGuncelle('odemeBadge', bekleyenSayi);
  const buAy = new Date(); buAy.setDate(1); buAy.setHours(0,0,0,0);
  const buAyOnaylanan = tumOdemeler.filter(o => o.durum==='onaylandi' && new Date(o.onay_tarihi)>=buAy);
  const buAyGelir = buAyOnaylanan.reduce((t,o) => t+Number(o.fiyat_tl||0), 0);
  document.getElementById('ozetBekleyen').textContent = bekleyenSayi;
  document.getElementById('ozetOnaylanan').textContent = buAyOnaylanan.length;
  document.getElementById('ozetGelir').textContent = buAyGelir.toLocaleString('tr-TR')+' ₺';
  odemeListesiGoster(aktifOdemeDurum);
}

function odemeListesiGoster(durum) {
  aktifOdemeDurum = durum;
  const liste = durum==='tumu' ? tumOdemeler : tumOdemeler.filter(o=>o.durum===durum);
  const el = document.getElementById('odemeListesi');
  if (!liste.length) {
    const mesajlar = { bekliyor:'⏳ Bekleyen ödeme yok', onaylandi:'✅ Onaylanmış talep yok', reddedildi:'❌ Reddedilmiş talep yok', tumu:'Hiç ödeme talebi yok' };
    el.innerHTML = emptyHTML('💎', mesajlar[durum]||'Kayıt yok');
    return;
  }
  el.innerHTML = liste.map(o => odemeKartHTML(o)).join('');
}

function odemeKartHTML(o) {
  const p = o.profiles||{}; const paket = o.kredi_paketleri?.paket_adi||'—'; const tarih = new Date(o.created_at).toLocaleDateString('tr-TR');
  const sahibi = p.firma_adi||p.full_name||'Kullanıcı';
  const dClass = o.durum==='onaylandi'?'onaylandi':o.durum==='reddedildi'?'reddedildi':'bekliyor';
  const dText = o.durum==='onaylandi'?'✅ Onaylandı':o.durum==='reddedildi'?'❌ Reddedildi':'⏳ İnceleniyor';
  return `<div class="odeme-kart ${dClass}" id="odeme-kart-${o.id}">
    <div class="odeme-kart-ust">
      <div class="odeme-kart-bilgi">
        <div class="odeme-kart-firma">${sahibi}</div>
        <div class="odeme-kart-kisi">👤 ${p.full_name||'—'} • ${p.kullanici_tipi||'bireysel'}</div>
        <div class="odeme-kart-meta">📧 ${p.email||'—'}<br>📦 ${paket} · 🗓️ ${tarih}${o.transfer_tarihi?` · Transfer: ${new Date(o.transfer_tarihi).toLocaleDateString('tr-TR')}`:''}</div>
      </div>
      <div class="odeme-tutar-blok">
        <div class="odeme-tutar">${Number(o.fiyat_tl).toLocaleString('tr-TR')} ₺</div>
        <div class="odeme-kredi">💎 ${o.kredi_miktari} kredi</div>
        <div style="margin-top:6px"><span class="durum-badge durum-${dClass}">${dText}</span></div>
      </div>
    </div>
    ${o.gonderen_ad||o.aciklama?`<div class="odeme-transfer-bilgi">${o.gonderen_ad?`<b>Transfer Eden:</b> ${o.gonderen_ad}<br>`:''} ${o.transfer_tarihi?`<b>Transfer Tarihi:</b> ${new Date(o.transfer_tarihi).toLocaleDateString('tr-TR')}<br>`:''} ${o.aciklama?`<b>Not:</b> ${o.aciklama}`:''}</div>`:''}
    ${o.admin_notu?`<div style="background:rgba(74,144,217,0.08);border:1px solid rgba(74,144,217,0.2);border-radius:8px;padding:8px 12px;font-size:12px;color:var(--text2);margin-bottom:10px"><b>Admin Notu:</b> ${o.admin_notu}</div>`:''}
    ${o.durum==='bekliyor'?`
      <textarea class="odeme-not-input" id="not-${o.id}" rows="2" placeholder="Admin notu (opsiyonel)"></textarea>
      <div style="display:flex;gap:8px">
        <button class="odeme-onay-btn" id="onayBtn-${o.id}" onclick="odemeOnayla('${o.id}','${p.id}',${o.kredi_miktari},'${o.fiyat_tl}')">✅ ${o.kredi_miktari} Kredi Yükle</button>
        <button class="odeme-ret-btn" onclick="odemeReddet('${o.id}','${p.id}')">❌ Reddet</button>
      </div>`:`
      <div style="display:flex;gap:8px">
        <button class="act-btn act-blue" onclick="kullaniciKrediGoruntule('${p.id}')">💎 Bakiye Gör</button>
        ${p.email?`<button class="act-btn act-gold" onclick="kullaniciMesajGonderOdeme('${p.id}')">📩 Mesaj</button>`:''}
      </div>`}
  </div>`;
}

function odemeFiltrele(durum, el) {
  document.querySelectorAll('#odemeFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold'));
  el.classList.add('act-gold');
  odemeListesiGoster(durum);
}

async function odemeOnayla(talepId, agentId, krediMiktari, fiyatTl) {
  const not = document.getElementById('not-'+talepId)?.value.trim()||null;
  const onayBtn = document.getElementById('onayBtn-'+talepId);
  if (onayBtn) { onayBtn.disabled=true; onayBtn.textContent='⏳ Yükleniyor...'; }
  const { data: sonuc, error } = await sb.rpc('admin_kredi_yukle', {
    p_agent_id: agentId, p_miktar: krediMiktari, p_talep_id: talepId,
    p_admin_id: adminUserId, p_aciklama: `${krediMiktari} kredi yüklendi — ${Number(fiyatTl).toLocaleString('tr-TR')} ₺`
  });
  if (error) { alert('Hata: '+error.message); if (onayBtn) { onayBtn.disabled=false; onayBtn.textContent=`✅ ${krediMiktari} Kredi Yükle`; } return; }
  if (not) await sb.from('odeme_talepleri').update({ admin_notu: not }).eq('id', talepId);
  await sb.from('bildirimler').insert({ user_id: agentId, tip:'kredi_yuklendi', baslik:`✅ ${krediMiktari} Kredi Hesabınıza Yüklendi!`, mesaj:`${Number(fiyatTl).toLocaleString('tr-TR')} ₺ ödemeniz onaylandı. ${krediMiktari} kredi eklendi.${not?' Not: '+not:''}`, okundu:false });
  const kart = document.getElementById('odeme-kart-'+talepId);
  if (kart) { kart.style.transition='opacity .3s,transform .3s'; kart.style.opacity='0'; kart.style.transform='translateX(20px)'; setTimeout(()=>kart.remove(),300); }
  await odemetalepleriniYukle(); await ozetYukle();
  toast(`✅ ${krediMiktari} kredi yüklendi! Yeni bakiye: ${sonuc?.yeni_bakiye||'—'}`, 'basari');
}

async function odemeReddet(talepId, agentId) {
  const sebep = prompt('Red sebebi:'); if (sebep===null) return;
  await sb.from('odeme_talepleri').update({ durum:'reddedildi', admin_notu:sebep||null, onaylayan_admin:adminUserId, onay_tarihi:new Date().toISOString() }).eq('id', talepId);
  await sb.from('bildirimler').insert({ user_id:agentId, tip:'kredi_red', baslik:'❌ Ödeme Talebiniz Reddedildi', mesaj:`Ödeme talebiniz reddedildi.${sebep?' Sebep: '+sebep:''} Sorularınız için iletişime geçin.`, okundu:false });
  const kart = document.getElementById('odeme-kart-'+talepId); if (kart) { kart.style.opacity='0'; setTimeout(()=>kart.remove(),300); }
  await odemetalepleriniYukle();
  toast('Talep reddedildi.', 'bilgi');
}

async function kullaniciKrediGoruntule(agentId) {
  const { data: kredi } = await sb.from('agent_credits').select('*').eq('agent_id', agentId).single();
  const { data: hareketler } = await sb.from('kredi_islemleri').select('*').eq('agent_id', agentId).order('created_at',{ascending:false}).limit(10);
  const profil = tumKullanicilar.find(k=>k.id===agentId)||{};
  const hareketHTML = (hareketler||[]).map(h => {
    const renk = h.miktar>0?'var(--green)':'var(--rust)';
    return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-top:1px solid var(--border)">
      <div><div style="font-size:13px;font-weight:700">${h.aciklama||h.islem_tipi}</div><div style="font-size:11px;color:var(--text3)">${new Date(h.created_at).toLocaleDateString('tr-TR')}</div></div>
      <div style="font-size:14px;font-weight:900;color:${renk}">${h.miktar>0?'+':''}${h.miktar}</div>
    </div>`;
  }).join('');
  document.getElementById('detayIcerik').innerHTML = `
    <div style="font-size:18px;font-weight:900;margin-bottom:16px">💎 Kredi Detayı</div>
    <div style="background:linear-gradient(135deg,#1a1a2e,#0f3460);border-radius:14px;padding:20px;text-align:center;margin-bottom:16px">
      <div style="font-size:11px;color:rgba(255,255,255,0.4);font-weight:700;text-transform:uppercase;letter-spacing:1px">Mevcut Bakiye</div>
      <div style="font-size:48px;font-weight:900;color:#f5c518">${kredi?.bakiye||0}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">kredi</div>
    </div>
    <div class="detay-row"><div class="detay-key">Kullanıcı</div><div class="detay-val">${profil.full_name||agentId}</div></div>
    <div class="detay-row"><div class="detay-key">Toplam Yüklenen</div><div class="detay-val" style="color:var(--green)">${kredi?.toplam_yuklenen||0} kredi</div></div>
    <div class="detay-row"><div class="detay-key">Toplam Harcanan</div><div class="detay-val" style="color:var(--rust)">${kredi?.toplam_harcanan||0} kredi</div></div>
    <div style="margin-top:16px"><div style="font-size:12px;font-weight:800;color:var(--text3);margin-bottom:8px">SON HAREKETLER</div>${hareketHTML||'<div style="color:var(--text3);font-size:13px;padding:12px 0">Hareket yok</div>'}</div>
    <div style="margin-top:16px;display:flex;gap:8px">
      <input type="number" id="bonusKrediMiktar" placeholder="Miktar" min="1" class="arama-input" style="margin-bottom:0;flex:1">
      <button class="act-btn act-green" style="flex-shrink:0" onclick="bonusKrediYukle('${agentId}')">💎 Bonus Yükle</button>
    </div>
    <button class="btn btn-outline btn-md" style="width:100%;margin-top:12px" onclick="detayKapat()">Kapat</button>`;
  document.getElementById('detayModal').classList.add('open');
}

async function bonusKrediYukle(agentId) {
  const miktar = parseInt(document.getElementById('bonusKrediMiktar')?.value);
  if (!miktar||miktar<1) { alert('Geçerli miktar girin!'); return; }
  const { error } = await sb.rpc('admin_kredi_yukle', { p_agent_id:agentId, p_miktar:miktar, p_admin_id:adminUserId, p_aciklama:'Admin bonus kredi' });
  if (error) { alert('Hata: '+error.message); return; }
  toast(`✅ ${miktar} bonus kredi yüklendi!`, 'basari');
  detayKapat(); await odemetalepleriniYukle();
}

async function kullaniciMesajGonderOdeme(aliciId) {
  const metin = prompt('Kullanıcıya mesaj gönder:'); if (!metin) return;
  await sb.from('mesajlar').insert({ gonderen_id:adminUserId, alici_id:aliciId, icerik:'📢 GoTapu: '+metin, okundu:false });
  toast('✅ Mesaj gönderildi!', 'basari');
}

async function manuelKrediYukle() {
  const giris = document.getElementById('manuelKullanici').value.trim();
  const miktar = parseInt(document.getElementById('manuelMiktar').value);
  const aciklama = document.getElementById('manuelAciklama').value.trim()||'Manuel yükleme';
  if (!giris) { alert('Kullanıcı e-posta veya ID girin!'); return; }
  if (!miktar||miktar<1) { alert('Geçerli miktar girin!'); return; }
  let agentId = giris;
  if (giris.includes('@')) {
    const { data: p } = await sb.from('profiles').select('id').eq('email',giris).single();
    if (!p) { alert('Bu e-posta ile kullanıcı bulunamadı!'); return; }
    agentId = p.id;
  }
  const { error } = await sb.rpc('admin_kredi_yukle', { p_agent_id:agentId, p_miktar:miktar, p_admin_id:adminUserId, p_aciklama:aciklama });
  if (error) { alert('Hata: '+error.message); return; }
  await sb.from('bildirimler').insert({ user_id:agentId, tip:'kredi_yuklendi', baslik:`✅ ${miktar} Kredi Yüklendi`, mesaj:`Hesabınıza ${miktar} kredi eklendi. (${aciklama})`, okundu:false });
  document.getElementById('manuelKullanici').value='';
  document.getElementById('manuelMiktar').value='';
  document.getElementById('manuelAciklama').value='';
  toast(`✅ ${miktar} kredi yüklendi!`, 'basari');
  await odemetalepleriniYukle();
}

// ── ONAY BEKLEYENLEr ──────────────────────────
async function onayBekleyenleriYukle() {
  const { data } = await sb.from('ilanlar').select('*').eq('onay_durumu','bekliyor').order('created_at',{ascending:true});
  const el = document.getElementById('onayListesi');
  if (!data||!data.length) {
    el.innerHTML = '<div class="empty" style="padding:40px 20px;text-align:center"><div class="empty-icon">✅</div><div class="empty-title">Onay bekleyen ilan yok</div></div>';
    document.getElementById('onayBadge').style.display = 'none';
    return;
  }
  document.getElementById('onayBadge').textContent = data.length;
  document.getElementById('onayBadge').style.display = 'inline';
  el.innerHTML = `<div class="onay-banner"><div><div style="font-size:14px;font-weight:900;color:var(--gold)">⏳ ${data.length} İlan Onay Bekliyor</div></div>
    <button class="act-btn act-green" onclick="hepsiniOnayla()">✅ Hepsini Onayla</button></div>
    ${data.map(i => onayKartHTML(i)).join('')}`;
}

function onayKartHTML(i) {
  const tarih = new Date(i.created_at).toLocaleDateString('tr-TR');
  const k = i.kriterler||{};
  return `<div class="admin-card onay-bekliyor" id="onay-kart-${i.id}">
    <div class="admin-card-head">
      <div style="flex:1;min-width:0">
        <span class="durum-badge durum-bekliyor" style="margin-bottom:6px;display:inline-block">⏳ Onay Bekliyor</span>
        <div class="admin-card-title">${i.baslik}</div>
        <div class="admin-card-meta">💰 ${Number(i.fiyat).toLocaleString('tr-TR')} ₺ • 📍 ${i.konum||''} • 📅 ${tarih}</div>
        <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
          <span class="tag ${i.tip==='kiralik'?'tag-green':'tag-rust'}">${i.tip==='kiralik'?'KİRALIK':'SATILIK'}</span>
          ${i.oda_sayisi?`<span class="tag tag-gold">🛏 ${i.oda_sayisi}</span>`:''}
          ${i.metrekare?`<span class="tag tag-gold">📐 ${i.metrekare}m²</span>`:''}
          ${k.emlak_tipi?`<span class="tag">${k.emlak_tipi}</span>`:''}
        </div>
      </div>
      ${i.foto_url?`<img src="${i.foto_url}" style="width:70px;height:70px;border-radius:10px;object-fit:cover;flex-shrink:0;margin-left:10px">`:''}
    </div>
    ${i.aciklama?`<div style="font-size:13px;color:var(--text2);margin:8px 0;padding:8px;background:var(--bg2);border-radius:8px;line-height:1.5">${i.aciklama}</div>`:''}
    <div class="admin-card-actions">
      <button class="act-btn act-green" style="flex:1;padding:10px;justify-content:center;font-size:14px" onclick="ilanOnayla('${i.id}')">✅ Onayla</button>
      <button class="act-btn act-rust" style="flex:1;padding:10px;justify-content:center;font-size:14px" onclick="ilanReddet('${i.id}')">❌ Reddet</button>
      <a href="ilan-detay.html?id=${i.id}" class="act-btn act-blue">👁️ Önizle</a>
    </div>
  </div>`;
}

async function ilanOnayla(id) {
  await sb.from('ilanlar').update({onay_durumu:'onaylandi'}).eq('id',id);
  const {data:ilan} = await sb.from('ilanlar').select('user_id,baslik').eq('id',id).single();
  if (ilan) await sb.from('bildirimler').insert({user_id:ilan.user_id,tip:'ilan_onay',baslik:'✅ İlanınız Onaylandı!',mesaj:`"${ilan.baslik}" ilanınız yayına alındı.`,ilan_id:id,okundu:false});
  const kart = document.getElementById(`onay-kart-${id}`);
  if (kart) { kart.style.transition='opacity .3s'; kart.style.opacity='0'; setTimeout(()=>kart.remove(),300); }
  await ozetYukle(); await ilanlariYukle();
}

async function ilanReddet(id) {
  const sebep = prompt('Red sebebi:'); if (sebep===null) return;
  await sb.from('ilanlar').update({onay_durumu:'reddedildi'}).eq('id',id);
  const {data:ilan} = await sb.from('ilanlar').select('user_id,baslik').eq('id',id).single();
  if (ilan) await sb.from('bildirimler').insert({user_id:ilan.user_id,tip:'ilan_red',baslik:'❌ İlanınız Reddedildi',mesaj:`"${ilan.baslik}" reddedildi.${sebep?' Sebep: '+sebep:''}`,ilan_id:id,okundu:false});
  const kart = document.getElementById(`onay-kart-${id}`);
  if (kart) { kart.style.opacity='0'; setTimeout(()=>kart.remove(),300); }
  await ozetYukle(); await ilanlariYukle();
}

async function hepsiniOnayla() {
  if (!confirm('Tüm bekleyen ilanları onaylamak istiyor musunuz?')) return;
  const {data} = await sb.from('ilanlar').select('id,user_id,baslik').eq('onay_durumu','bekliyor');
  if (!data) return;
  for (const ilan of data) {
    await sb.from('ilanlar').update({onay_durumu:'onaylandi'}).eq('id',ilan.id);
    await sb.from('bildirimler').insert({user_id:ilan.user_id,tip:'ilan_onay',baslik:'✅ İlanınız Onaylandı!',mesaj:`"${ilan.baslik}" yayına alındı.`,ilan_id:ilan.id,okundu:false});
  }
  await tumunuYukle();
  toast(`✅ ${data.length} ilan onaylandı!`, 'basari');
}

// ── İLANLAR ──────────────────────────────────
async function ilanlariYukle() {
  const {data} = await sb.from('ilanlar').select('*').order('created_at',{ascending:false});
  tumIlanlar = data||[]; ilanlariGoster(tumIlanlar);
}
function ilanlariGoster(liste) {
  const el = document.getElementById('ilanListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🏠','İlan bulunamadı'); return; }
  el.innerHTML = liste.map(i=>ilanKartHTML(i)).join('');
}
function ilanFiltrele(f,el) {
  document.querySelectorAll('#ilanFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold');
  ilanlariGoster(f==='tumu'?tumIlanlar:tumIlanlar.filter(i=>i.onay_durumu===f));
}
function ilanKartHTML(i) {
  const tarih = new Date(i.created_at).toLocaleDateString('tr-TR');
  const od = i.onay_durumu||'bekliyor';
  const odc = od==='onaylandi'?'durum-onaylandi':od==='reddedildi'?'durum-reddedildi':'durum-bekliyor';
  const odt = od==='onaylandi'?'✅ Onaylı':od==='reddedildi'?'❌ Reddedildi':'⏳ Bekliyor';
  return `<div class="admin-card"><div class="admin-card-head"><div style="flex:1;min-width:0">
    <span class="durum-badge ${odc}" style="margin-bottom:4px;display:inline-block">${odt}</span>
    <div class="admin-card-title">${i.baslik}</div>
    <div class="admin-card-meta">💰 ${Number(i.fiyat).toLocaleString('tr-TR')} ₺ • 📍 ${i.konum||''} • 📅 ${tarih}</div>
    <div style="margin-top:4px"><span class="tag ${i.tip==='kiralik'?'tag-green':'tag-rust'}">${i.tip==='kiralik'?'KİRALIK':'SATILIK'}</span>
    ${i.one_cikan?'<span class="tag tag-gold">⭐ ÖNE ÇIKAN</span>':''}</div></div>
    ${i.foto_url?`<img src="${i.foto_url}" style="width:60px;height:60px;border-radius:10px;object-fit:cover;flex-shrink:0;margin-left:8px">`:''}</div>
    <div class="admin-card-actions">
      <a href="ilan-detay.html?id=${i.id}" class="act-btn act-blue">👁️ Gör</a>
      ${od!=='onaylandi'?`<button class="act-btn act-green" onclick="hizliOnayla('${i.id}')">✅ Onayla</button>`:''}
      ${od!=='reddedildi'?`<button class="act-btn act-rust" onclick="hizliReddet('${i.id}')">❌ Reddet</button>`:''}
      <button class="act-btn ${i.one_cikan?'act-rust':'act-green'}" onclick="oneCikanToggle('${i.id}',${i.one_cikan})">${i.one_cikan?'⭐ Kaldır':'⭐ Öne Çıkar'}</button>
      <button class="act-btn act-rust" onclick="ilanSilAdmin('${i.id}')">🗑️ Sil</button>
    </div></div>`;
}
async function hizliOnayla(id) { await sb.from('ilanlar').update({onay_durumu:'onaylandi'}).eq('id',id); const {data:ilan}=await sb.from('ilanlar').select('user_id,baslik').eq('id',id).single(); if(ilan)await sb.from('bildirimler').insert({user_id:ilan.user_id,tip:'ilan_onay',baslik:'✅ İlanınız Onaylandı!',mesaj:`"${ilan.baslik}" yayına alındı.`,ilan_id:id,okundu:false}); await ilanlariYukle();await ozetYukle();await onayBekleyenleriYukle(); }
async function hizliReddet(id) { await sb.from('ilanlar').update({onay_durumu:'reddedildi'}).eq('id',id); await ilanlariYukle();await ozetYukle();await onayBekleyenleriYukle(); }
async function oneCikanToggle(id,m) {
  if (m) { await sb.from('ilanlar').update({one_cikan:false,one_cikarma_tipi:null,one_cikarma_bitis:null}).eq('id',id); }
  else { const b=new Date(); b.setDate(b.getDate()+30); await sb.from('ilanlar').update({one_cikan:true,one_cikarma_tipi:'standart',one_cikarma_bitis:b.toISOString()}).eq('id',id); }
  await ilanlariYukle(); await onecikanlariYukle();
}
async function ilanSilAdmin(id) { if(!confirm('Bu ilanı silmek istediğinizden emin misiniz?'))return; await sb.from('ilanlar').delete().eq('id',id); await ilanlariYukle();await ozetYukle();await onayBekleyenleriYukle(); }
function ilanAra(q) { ilanlariGoster(tumIlanlar.filter(i=>(i.baslik||'').toLowerCase().includes(q.toLowerCase())||(i.konum||'').toLowerCase().includes(q.toLowerCase()))); }

// ── TEKLİFLER ─────────────────────────────────
async function teklifleriYukle() { const {data}=await sb.from('teklifler').select('*').order('created_at',{ascending:false}); tumTeklifler=data||[]; teklifleriGoster(tumTeklifler); }
function teklifleriGoster(l) { const el=document.getElementById('teklifListesi'); if(!l.length){el.innerHTML=emptyHTML('📋','Teklif bulunamadı');return;} el.innerHTML=l.map(t=>teklifKartHTML(t)).join(''); }
function teklifKartHTML(t) {
  const durum = t.durum||'bekliyor';
  return `<div class="admin-card"><div class="admin-card-head"><div>
    <div class="admin-card-title">${kategoriEm[t.kategori]||'📋'} ${kategoriAdlari[t.kategori]||t.kategori}</div>
    <div class="admin-card-meta">👤 ${t.ad_soyad||'İsimsiz'} • 📞 ${t.telefon||'Yok'} • 📅 ${new Date(t.created_at).toLocaleDateString('tr-TR')}</div></div>
    <span class="durum-badge durum-${durum}">${durum}</span></div>
    <div class="admin-card-actions">
      <button class="act-btn act-blue" onclick="teklifDetay('${t.id}')">👁️ Detay</button>
      ${t.telefon?`<a href="tel:${t.telefon}" class="act-btn act-green">📞 Ara</a>`:''}
      <button class="act-btn act-green" onclick="durumGuncelle('${t.id}','isleniyor')">🔄 İşleme Al</button>
      <button class="act-btn act-gold" onclick="durumGuncelle('${t.id}','tamamlandi')">✅ Tamamla</button>
      <button class="act-btn act-rust" onclick="teklifSil('${t.id}')">🗑️ Sil</button>
    </div></div>`;
}
function teklifFiltrele(f,el) { document.querySelectorAll('#teklifFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); teklifleriGoster(f==='tumu'?tumTeklifler:tumTeklifler.filter(t=>t.durum===f)); }
function teklifAra(q) { teklifleriGoster(tumTeklifler.filter(t=>(t.ad_soyad||'').toLowerCase().includes(q.toLowerCase())||(t.telefon||'').includes(q))); }
async function teklifDetay(id) {
  const t = tumTeklifler.find(x=>x.id===id); if(!t) return;
  document.getElementById('detayIcerik').innerHTML = `<div style="font-size:20px;font-weight:900;margin-bottom:16px">${kategoriEm[t.kategori]||'📋'} ${kategoriAdlari[t.kategori]||t.kategori}</div>
    <div class="detay-row"><div class="detay-key">Ad Soyad</div><div class="detay-val">${t.ad_soyad||'-'}</div></div>
    <div class="detay-row"><div class="detay-key">Telefon</div><div class="detay-val"><a href="tel:${t.telefon}" style="color:var(--gold)">${t.telefon||'-'}</a></div></div>
    <div class="detay-row"><div class="detay-key">Tarih</div><div class="detay-val">${new Date(t.created_at).toLocaleString('tr-TR')}</div></div>
    <button class="btn btn-outline btn-md" style="width:100%;margin-top:16px" onclick="detayKapat()">Kapat</button>`;
  document.getElementById('detayModal').classList.add('open');
}
async function durumGuncelle(id,durum) { await sb.from('teklifler').update({durum}).eq('id',id); await teklifleriYukle(); }
async function teklifSil(id) { if(!confirm('Silmek istiyor musunuz?'))return; await sb.from('teklifler').delete().eq('id',id); await teklifleriYukle(); }

// ── KULLANICILAR ──────────────────────────────
async function kullanicilariYukle() { const {data}=await sb.from('profiles').select('*').order('created_at',{ascending:false}); tumKullanicilar=data||[]; kullanicilariGoster(tumKullanicilar); }
function kullanicilariGoster(l) {
  const el = document.getElementById('kullaniciListesi');
  if (!l.length) { el.innerHTML=emptyHTML('👥','Kullanıcı bulunamadı'); return; }
  el.innerHTML = l.map(k=>`<div class="kullanici-item" onclick="kullaniciDetay('${k.id}')">
    <div class="kullanici-avatar">${k.avatar_url?`<img src="${k.avatar_url}">`:'👤'}</div>
    <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:800">${k.full_name||'İsimsiz'}</div><div style="font-size:12px;color:var(--text3)">${k.email||''}</div></div>
    ${k.verified?'<span class="tag tag-green">✓</span>':''}
  </div>`).join('');
}
function kullaniciAra(q) { kullanicilariGoster(tumKullanicilar.filter(k=>(k.full_name||'').toLowerCase().includes(q.toLowerCase())||(k.email||'').toLowerCase().includes(q.toLowerCase())||(k.phone||'').includes(q))); }
async function kullaniciDetay(id) {
  const k = tumKullanicilar.find(x=>x.id===id); if(!k) return;
  document.getElementById('detayIcerik').innerHTML = `<div style="font-size:18px;font-weight:900;margin-bottom:16px">${k.full_name||'İsimsiz'}</div>
    <div class="detay-row"><div class="detay-key">E-posta</div><div class="detay-val">${k.email||'-'}</div></div>
    <div class="detay-row"><div class="detay-key">Telefon</div><div class="detay-val"><a href="tel:${k.phone}" style="color:var(--gold)">${k.phone||'-'}</a></div></div>
    <div class="detay-row"><div class="detay-key">Şehir</div><div class="detay-val">${k.sehir||'-'}</div></div>
    <div class="detay-row"><div class="detay-key">Kayıt</div><div class="detay-val">${new Date(k.created_at).toLocaleDateString('tr-TR')}</div></div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="act-btn act-blue" onclick="kullaniciKrediGoruntule('${k.id}')">💎 Kredi</button>
      <button class="act-btn ${k.verified?'act-rust':'act-green'}" onclick="kullaniciDogrula('${k.id}',${k.verified})">${k.verified?'✗ Doğrulamayı Kaldır':'✓ Doğrula'}</button>
    </div>
    <button class="btn btn-outline btn-md" style="width:100%;margin-top:10px" onclick="detayKapat()">Kapat</button>`;
  document.getElementById('detayModal').classList.add('open');
}
async function kullaniciDogrula(id,m) { await sb.from('profiles').update({verified:!m}).eq('id',id); await kullanicilariYukle(); detayKapat(); }

// ── KURUMSAL ──────────────────────────────────
async function kurumsalUyeleriYukle() {
  const {data} = await sb.from('profiles').select('*').in('kullanici_tipi',['kurumsal','freelancer']).order('created_at',{ascending:false});
  tumKurumsal = data||[];
  const bek = tumKurumsal.filter(k=>k.kurumsal_onay==='bekliyor').length;
  badgeGuncelle('kurumsalBadge', bek);
  kurumsalListeGoster();
}
function kurumsalListeGoster() {
  let l = [...tumKurumsal];
  if (kurumsalTipAktif!=='tumu') l=l.filter(k=>k.kullanici_tipi===kurumsalTipAktif);
  if (kurumsalOnayAktif!=='tumu') l=l.filter(k=>(k.kurumsal_onay||'bekliyor')===kurumsalOnayAktif);
  if (kurumsalAramaQ) { const q=kurumsalAramaQ.toLowerCase(); l=l.filter(k=>(k.full_name||'').toLowerCase().includes(q)||(k.firma_adi||'').toLowerCase().includes(q)||(k.email||'').toLowerCase().includes(q)); }
  const el = document.getElementById('kurumsalListesi');
  if (!l.length) { el.innerHTML=emptyHTML('🏢','Kurumsal üye bulunamadı'); return; }
  el.innerHTML = l.map(k=>kurumsalKartHTML(k)).join('');
}
function kurumsalKartHTML(k) {
  const onay = k.kurumsal_onay||'bekliyor';
  const odc = onay==='onaylandi'?'durum-onaylandi':onay==='reddedildi'?'durum-reddedildi':'durum-bekliyor';
  const odt = onay==='onaylandi'?'✅ Onaylı':onay==='reddedildi'?'❌ Reddedildi':'⏳ Bekliyor';
  return `<div class="kurumsal-kart ${onay}">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
      <div><div style="font-size:14px;font-weight:900">${k.firma_adi||k.full_name||'İsimsiz'}</div>
      <div style="font-size:12px;color:var(--text2)">👤 ${k.full_name||'-'} • 📞 <a href="tel:${k.phone}" style="color:var(--gold)">${k.phone||'-'}</a></div>
      <div style="font-size:12px;color:var(--text3)">${k.email||'-'} • ${new Date(k.created_at).toLocaleDateString('tr-TR')}</div></div>
      <span class="durum-badge ${odc}">${odt}</span>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${k.phone?`<a href="tel:${k.phone}" class="act-btn act-green">📞 Ara</a>`:''}
      ${onay!=='onaylandi'?`<button class="act-btn act-green" onclick="kurumsalOnayla('${k.id}')">✅ Onayla</button>`:''}
      ${onay!=='reddedildi'?`<button class="act-btn act-rust" onclick="kurumsalReddet('${k.id}')">❌ Reddet</button>`:''}
      <button class="act-btn act-blue" onclick="kullaniciKrediGoruntule('${k.id}')">💎 Kredi</button>
    </div>
  </div>`;
}
function kurumsalFiltrele(tip,deger,el) {
  if (tip==='tip') { kurumsalTipAktif=deger; document.querySelectorAll('#kurumsalTipFiltre .act-btn').forEach(b=>b.classList.remove('act-gold')); }
  else { kurumsalOnayAktif=deger; document.querySelectorAll('#kurumsalOnayFiltre .act-btn').forEach(b=>b.classList.remove('act-gold')); }
  el.classList.add('act-gold'); kurumsalListeGoster();
}
function kurumsalAra(q) { kurumsalAramaQ=q; kurumsalListeGoster(); }
async function kurumsalOnayla(id) { await sb.from('profiles').update({kurumsal_onay:'onaylandi',onaylandi:true,onay_tarihi:new Date().toISOString()}).eq('id',id); await sb.from('bildirimler').insert({user_id:id,tip:'kurumsal_onay',baslik:'✅ Başvurunuz Onaylandı!',mesaj:'Kurumsal üyelik başvurunuz onaylandı.',okundu:false}); await kurumsalUyeleriYukle(); }
async function kurumsalReddet(id) { const s=prompt('Red sebebi:'); if(s===null)return; await sb.from('profiles').update({kurumsal_onay:'reddedildi'}).eq('id',id); await sb.from('bildirimler').insert({user_id:id,tip:'kurumsal_red',baslik:'❌ Başvurunuz Reddedildi',mesaj:`Kurumsal başvurunuz reddedildi.${s?' Sebep: '+s:''}`,okundu:false}); await kurumsalUyeleriYukle(); }

// ── RAPORLAR ──────────────────────────────────
async function raporlariYukle() { const {data}=await sb.from('degerleme_raporlari').select('*,ilan:ilan_id(baslik,konum,fiyat)').order('created_at',{ascending:false}); tumRaporlar=data||[]; raporlariGoster(tumRaporlar); }
function raporlariGoster(l) {
  const el=document.getElementById('raporListesi'); if(!l.length){el.innerHTML=emptyHTML('📊','Rapor bulunamadı');return;}
  el.innerHTML=l.map(r=>`<div class="rapor-kart"><div class="rapor-kart-head"><div>
    <div class="admin-card-title">📊 ${r.ilan?.baslik||'İlan'}</div>
    <div class="admin-card-meta">📍 ${r.ilan?.konum||''} • ${new Date(r.created_at).toLocaleDateString('tr-TR')}</div></div>
    <span class="durum-badge ${r.durum==='tamamlandi'?'durum-tamamlandi':'durum-bekliyor'}">${r.durum}</span></div>
    <div class="admin-card-actions"><a href="rapor.html?ilan_id=${r.ilan_id}" class="act-btn act-blue">👁️ Raporu Gör</a><button class="act-btn act-rust" onclick="raporSilAdmin('${r.id}')">🗑️ Sil</button></div></div>`).join('');
}
function raporFiltrele(f,el) { document.querySelectorAll('#raporFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); raporlariGoster(f==='tumu'?tumRaporlar:tumRaporlar.filter(r=>r.durum===f)); }
async function raporSilAdmin(id) { if(!confirm('Silmek istiyor musunuz?'))return; await sb.from('degerleme_raporlari').delete().eq('id',id); await raporlariYukle(); }

// ── MESAJLAR & ŞİKAYETLER ────────────────────
async function mesajlariYukle() {
  const {data}=await sb.from('mesajlar').select('*').order('created_at',{ascending:false}).limit(50); tumMesajlar=data||[];
  const el=document.getElementById('mesajListesi');
  el.innerHTML=!tumMesajlar.length?emptyHTML('💬','Mesaj yok'):tumMesajlar.map(m=>`<div class="admin-card"><div class="admin-card-title" style="font-size:13px">${m.icerik}</div><div class="admin-card-meta">${new Date(m.created_at).toLocaleString('tr-TR')} • ${m.okundu?'✅':'🔴'}</div></div>`).join('');
}
async function sikayetleriYukle() { const {data}=await sb.from('sikayetler').select('*').order('created_at',{ascending:false}); tumSikayetler=data||[]; sikayetleriGoster(tumSikayetler); }
function sikayetleriGoster(l) {
  const el=document.getElementById('sikayetListesi'); if(!l.length){el.innerHTML=emptyHTML('🚨','Şikayet yok');return;}
  el.innerHTML=l.map(s=>`<div class="admin-card"><div class="admin-card-head"><div>
    <div class="admin-card-title">${s.sebep}</div>
    <div class="admin-card-meta">${s.hedef_tip} • ${new Date(s.created_at).toLocaleDateString('tr-TR')}</div>
    ${s.aciklama?`<div style="font-size:12px;color:var(--text2);margin-top:4px">${s.aciklama}</div>`:''}</div>
    <span class="durum-badge durum-${s.durum||'bekliyor'}">${s.durum||'bekliyor'}</span></div>
    <div class="admin-card-actions">
      ${s.hedef_tip==='ilan'?`<a href="ilan-detay.html?id=${s.hedef_id}" class="act-btn act-blue">👁️ Gör</a>`:''}
      <button class="act-btn act-green" onclick="sikayetDurumGuncelle('${s.id}','cozuldu')">✅ Çözüldü</button>
      <button class="act-btn act-rust" onclick="sikayetSilAdmin('${s.id}')">🗑️ Sil</button>
    </div></div>`).join('');
}
function sikayetFiltrele(f,el) { document.querySelectorAll('#sikayetFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); sikayetleriGoster(f==='tumu'?tumSikayetler:tumSikayetler.filter(s=>s.durum===f)); }
async function sikayetDurumGuncelle(id,d) { await sb.from('sikayetler').update({durum:d}).eq('id',id); await sikayetleriYukle(); }
async function sikayetSilAdmin(id) { if(!confirm('Silmek istiyor musunuz?'))return; await sb.from('sikayetler').delete().eq('id',id); await sikayetleriYukle(); }

// ── ÖNE ÇIKANLAR ──────────────────────────────
async function onecikanlariYukle() {
  const simdi = new Date().toISOString();
  const {data} = await sb.from('ilanlar').select('id,baslik,konum,fiyat,tip,user_id,one_cikarma_tipi,one_cikarma_bitis,meta_reklam_aktif,meta_reklam_bitis,goruntulenmesayisi,favori_sayisi').or(`one_cikarma_bitis.gt.${simdi},meta_reklam_bitis.gt.${simdi}`).order('one_cikarma_bitis',{ascending:false});
  tumOnecikanlar = data||[];
  if (tumOnecikanlar.length>0) { const b=document.getElementById('onecikanBadge'); b.textContent=tumOnecikanlar.length; b.style.display='inline'; }
  onecikanListesiGoster('tumu');
}
function onecikanListesiGoster(filtre) {
  let liste = [...tumOnecikanlar];
  if (filtre==='premium') liste=liste.filter(i=>i.one_cikarma_tipi==='premium');
  else if (filtre==='standart') liste=liste.filter(i=>i.one_cikarma_tipi==='standart');
  else if (filtre==='meta') liste=liste.filter(i=>i.meta_reklam_aktif);
  const el = document.getElementById('onecikanListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🚀','Aktif öne çıkarma yok'); return; }
  el.innerHTML = liste.map(i => {
    const simdi=new Date(); const ob=i.one_cikarma_bitis?new Date(i.one_cikarma_bitis):null; const mb=i.meta_reklam_bitis?new Date(i.meta_reklam_bitis):null;
    const ok=ob&&ob>simdi?Math.ceil((ob-simdi)/86400000):null; const mk=mb&&mb>simdi?Math.ceil((mb-simdi)/86400000):null;
    const tr=i.one_cikarma_tipi==='premium'?'<span style="background:rgba(255,107,53,0.15);color:#ff6b35;border-radius:50px;padding:2px 8px;font-size:10px;font-weight:800">🌟 Premium</span>':i.one_cikarma_tipi==='standart'?'<span style="background:rgba(245,200,66,0.15);color:var(--gold);border-radius:50px;padding:2px 8px;font-size:10px;font-weight:800">⭐ Standart</span>':'';
    const mr=i.meta_reklam_aktif&&mk?'<span style="background:rgba(74,144,217,0.15);color:#4a90d9;border-radius:50px;padding:2px 8px;font-size:10px;font-weight:800">📢 Meta</span>':'';
    return `<div class="admin-card"><div class="admin-card-head"><div style="flex:1;min-width:0">
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:6px">${tr}${mr}</div>
      <div class="admin-card-title">${i.baslik}</div>
      <div class="admin-card-meta">💰 ${Number(i.fiyat).toLocaleString('tr-TR')} ₺ • 📍 ${i.konum||''}</div>
      <div style="display:flex;gap:10px;margin-top:4px;flex-wrap:wrap">
        ${ok?`<span style="font-size:11px;color:var(--gold);font-weight:700">⭐ ${ok} gün kaldı</span>`:''}
        ${mk?`<span style="font-size:11px;color:#4a90d9;font-weight:700">📢 ${mk} gün kaldı</span>`:''}
        <span style="font-size:11px;color:var(--text3);font-weight:700">👁 ${(i.goruntulenmesayisi||0).toLocaleString('tr-TR')}</span>
        <span style="font-size:11px;color:var(--text3);font-weight:700">❤️ ${i.favori_sayisi||0}</span>
      </div></div></div>
      <div class="admin-card-actions"><a href="ilan-detay.html?id=${i.id}" class="act-btn act-blue">👁️ İlanı Gör</a><button class="act-btn act-rust" onclick="oneCikarmaSonlandir('${i.id}')">⏹️ Sonlandır</button></div>
    </div>`;
  }).join('');
}
function onecikanFiltrele(f,el) { document.querySelectorAll('#onecikanFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); onecikanListesiGoster(f); }
async function oneCikarmaSonlandir(id) { if(!confirm('Öne çıkarma sonlandırılsın mı?'))return; await sb.from('ilanlar').update({one_cikarma_tipi:null,one_cikarma_bitis:null,meta_reklam_aktif:false,meta_reklam_bitis:null}).eq('id',id); await onecikanlariYukle(); toast('Öne çıkarma sonlandırıldı.','bilgi'); }

// ── BANKALAR ──────────────────────────────────
async function bankalariYukle() {
  const el=document.getElementById('bankaListesiAdmin'); if(!el) return;
  const {data,error}=await sb.from('banka_faizleri').select('*').order('aylik_faiz',{ascending:true});
  if (error) { el.innerHTML=`<div class="faiz-bilgi-kutu" style="border-color:rgba(232,96,58,0.3);color:var(--rust)">⚠️ Tablo bulunamadı. Hata: ${error.message}</div>`; return; }
  if (!data||!data.length) { el.innerHTML=emptyHTML('🏦','Banka eklenmedi'); return; }
  el.innerHTML = data.map(b=>bankaKartHTML(b)).join('');
  const fi=document.getElementById('yeniBankaFaiz');
  if (fi) fi.addEventListener('input', function() {
    const faiz=parseFloat(this.value); const oi=document.getElementById('yeniBankaOnizleme'); const ti=document.getElementById('yeniOnizlemeTaksit');
    if (faiz>0&&oi&&ti) { ti.textContent=Math.round(hesaplaTaksit(2000000,faiz,120)).toLocaleString('tr-TR')+' TL'; oi.style.display='block'; }
    else if (oi) oi.style.display='none';
  });
}
function bankaKartHTML(b) {
  const ornekTaksit = b.aylik_faiz>0?Math.round(hesaplaTaksit(2000000,b.aylik_faiz,120)).toLocaleString('tr-TR')+' TL':'—';
  return `<div class="banka-yonetim-kart ${b.aktif?'aktif-kart':'pasif-kart'}" id="banka-kart-${b.id}">
    <div class="banka-isim-row"><span class="banka-ikon">🏦</span>
      <input type="text" class="banka-isim-input" id="banka-ad-${b.id}" value="${b.banka_adi}" placeholder="Banka adı">
      <button class="aktif-toggle ${b.aktif?'on':''}" id="banka-toggle-${b.id}" onclick="bankaToggle('${b.id}',${b.aktif})"><span class="toggle-dot"></span><span id="banka-toggle-label-${b.id}">${b.aktif?'Aktif':'Pasif'}</span></button>
    </div>
    <div class="faiz-row"><span class="faiz-label">Aylık Faiz:</span>
      <div class="faiz-input-wrap"><span style="font-size:16px;font-weight:800;color:var(--text3)">%</span>
        <input type="number" class="faiz-input" id="banka-faiz-${b.id}" value="${b.aylik_faiz}" step="0.01" min="0.01" max="99" oninput="bankaOnizlemeGuncelle('${b.id}')">
        <span class="faiz-birim">aylık</span></div>
    </div>
    <div class="faiz-onizleme">2M TL, 120 ay → <span class="faiz-onizleme-val" id="banka-onizleme-${b.id}">${ornekTaksit}</span>/ay</div>
    <div style="display:flex;gap:8px;margin-top:12px">
      <button class="banka-kaydet-btn" id="banka-kaydet-btn-${b.id}" onclick="bankaKaydet('${b.id}')">💾 Kaydet</button>
      <button class="act-btn act-rust" onclick="bankaSil('${b.id}')">🗑️</button>
    </div>
  </div>`;
}
function bankaOnizlemeGuncelle(id) { const fi=document.getElementById(`banka-faiz-${id}`); const oi=document.getElementById(`banka-onizleme-${id}`); if(fi&&oi&&parseFloat(fi.value)>0) oi.textContent=Math.round(hesaplaTaksit(2000000,parseFloat(fi.value),120)).toLocaleString('tr-TR')+' TL'; }
function bankaToggle(id,m) { const btn=document.getElementById(`banka-toggle-${id}`); const lbl=document.getElementById(`banka-toggle-label-${id}`); if(!m){btn.classList.add('on');lbl.textContent='Aktif';}else{btn.classList.remove('on');lbl.textContent='Pasif';} }
async function bankaKaydet(id) {
  const ad=document.getElementById(`banka-ad-${id}`)?.value.trim(); const faiz=parseFloat(document.getElementById(`banka-faiz-${id}`)?.value); const aktif=document.getElementById(`banka-toggle-${id}`)?.classList.contains('on');
  if(!ad){alert('Banka adı boş olamaz!');return;} if(isNaN(faiz)||faiz<=0){alert('Geçerli faiz girin!');return;}
  const {error}=await sb.from('banka_faizleri').update({banka_adi:ad,aylik_faiz:faiz,aktif,updated_at:new Date().toISOString()}).eq('id',id);
  if (error){alert('Hata: '+error.message);return;}
  const btn=document.getElementById(`banka-kaydet-btn-${id}`); if(btn){btn.classList.add('kaydedildi');btn.textContent='✅ Kaydedildi!';setTimeout(()=>{btn.classList.remove('kaydedildi');btn.innerHTML='💾 Kaydet';},2000);}
  const kart=document.getElementById(`banka-kart-${id}`); if(kart){kart.classList.remove('aktif-kart','pasif-kart');kart.classList.add(aktif?'aktif-kart':'pasif-kart');}
}
async function bankaSil(id) { if(!confirm('Bu bankayı silmek istiyor musunuz?'))return; await sb.from('banka_faizleri').delete().eq('id',id); await bankalariYukle(); }
async function yeniBankaEkle() {
  const ad=document.getElementById('yeniBankaAd').value.trim(); const faiz=parseFloat(document.getElementById('yeniBankaFaiz').value);
  if(!ad){alert('Banka adı girin!');return;} if(isNaN(faiz)||faiz<=0){alert('Geçerli faiz girin!');return;}
  const {error}=await sb.from('banka_faizleri').insert({banka_adi:ad,aylik_faiz:faiz,aktif:true});
  if(error){alert('Hata: '+error.message);return;}
  document.getElementById('yeniBankaAd').value=''; document.getElementById('yeniBankaFaiz').value=''; document.getElementById('yeniBankaOnizleme').style.display='none';
  toast('✅ '+ad+' eklendi!','basari'); await bankalariYukle();
}
function hesaplaTaksit(k,r,n) { const ri=r/100; if(ri===0)return k/n; return k*ri*Math.pow(1+ri,n)/(Math.pow(1+ri,n)-1); }

// ══════════════════════════════════════════════
// 🛍️ ALIŞVERİŞ
// ══════════════════════════════════════════════
async function alisverisYukle() {
  const [urunler, magazalar] = await Promise.all([
    veriCek('urunler','id,ad,fiyat,onay_durumu,user_id,created_at'),
    veriCek('magazalar','id,ad,onay_durumu,user_id,created_at')
  ]);
  tumUrunler = urunler||[]; tumMagazalar = magazalar||[];
  const bek = tumUrunler.filter(u=>u.onay_durumu==='bekliyor').length + tumMagazalar.filter(m=>m.onay_durumu==='bekliyor').length;
  badgeGuncelle('alisverisOnayBadge', bek);
  const g = id => document.getElementById(id);
  if(g('av-bekleyen')) g('av-bekleyen').textContent = bek;
  if(g('av-onaylandi')) g('av-onaylandi').textContent = tumUrunler.filter(u=>u.onay_durumu==='onaylandi').length;
  if(g('av-magaza')) g('av-magaza').textContent = tumMagazalar.filter(m=>m.onay_durumu==='onaylandi').length;
  urunListesiGoster(aktifUrunDurum);
  magazaListesiGoster(aktifMagazaDurum);
}
function alisverisAltSekme(alt, el) {
  document.getElementById('alisveris-urunler').style.display = alt==='urunler'?'block':'none';
  document.getElementById('alisveris-magazalar').style.display = alt==='magazalar'?'block':'none';
  document.querySelectorAll('#alisverisAltFiltre .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold');
}
function urunListesiGoster(durum) {
  aktifUrunDurum = durum;
  let liste = durum==='tumu'?tumUrunler:tumUrunler.filter(u=>u.onay_durumu===durum);
  if (urunAramaQ) liste = liste.filter(u=>(u.ad||'').toLowerCase().includes(urunAramaQ));
  const el = document.getElementById('urunListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('📦','Ürün bulunamadı'); return; }
  el.innerHTML = liste.map(u => genelKartHTML({
    id:u.id, tablo:'urunler', kullaniciFld:'user_id',
    baslik: u.ad||'İsimsiz Ürün',
    meta: `💰 ${Number(u.fiyat||0).toLocaleString('tr-TR')} ₺ • 📅 ${new Date(u.created_at).toLocaleDateString('tr-TR')}`,
    durum: u.onay_durumu||'bekliyor', durumText: durumMetin(u.onay_durumu),
    bildirimBaslik: 'Ürününüz', sonraFnAdi: 'alisverisYukle'
  })).join('');
}
function magazaListesiGoster(durum) {
  aktifMagazaDurum = durum;
  let liste = durum==='tumu'?tumMagazalar:tumMagazalar.filter(m=>m.onay_durumu===durum);
  if (magazaAramaQ) liste = liste.filter(m=>(m.ad||'').toLowerCase().includes(magazaAramaQ));
  const el = document.getElementById('magazaListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🏪','Mağaza bulunamadı'); return; }
  el.innerHTML = liste.map(m => genelKartHTML({
    id:m.id, tablo:'magazalar', kullaniciFld:'user_id',
    baslik: m.ad||'İsimsiz Mağaza',
    meta: `📅 ${new Date(m.created_at).toLocaleDateString('tr-TR')}`,
    durum: m.onay_durumu||'bekliyor', durumText: durumMetin(m.onay_durumu),
    bildirimBaslik: 'Mağazanız', sonraFnAdi: 'alisverisYukle'
  })).join('');
}
function urunFiltrele(d,el) { document.querySelectorAll('#urunFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); urunListesiGoster(d); }
function magazaFiltrele(d,el) { document.querySelectorAll('#magazaFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); magazaListesiGoster(d); }
function urunAra(q) { urunAramaQ=q.toLowerCase(); urunListesiGoster(aktifUrunDurum); }
function magazaAra(q) { magazaAramaQ=q.toLowerCase(); magazaListesiGoster(aktifMagazaDurum); }

// ══════════════════════════════════════════════
// 🍔 YEMEK
// ══════════════════════════════════════════════
async function yemekYukle() {
  const [restoranlar, siparisler] = await Promise.all([
    veriCek('restoranlar','id,ad,onay_durumu,user_id,created_at'),
    veriCek('yemek_siparisler','id,durum,toplam_fiyat,user_id,created_at')
  ]);
  tumRestoranlar = restoranlar||[]; tumYemekSiparisler = siparisler||[];
  const bek = tumRestoranlar.filter(r=>r.onay_durumu==='bekliyor').length;
  badgeGuncelle('yemekOnayBadge', bek);
  const g = id => document.getElementById(id);
  if(g('ym-bekleyen')) g('ym-bekleyen').textContent = bek;
  if(g('ym-onaylandi')) g('ym-onaylandi').textContent = tumRestoranlar.filter(r=>r.onay_durumu==='onaylandi').length;
  if(g('ym-siparis')) g('ym-siparis').textContent = tumYemekSiparisler.filter(s=>['bekliyor','hazirlaniyor','yolda'].includes(s.durum)).length;
  restoranListesiGoster(aktifRestoranDurum);
  siparisListesiGoster(aktifSiparisDurum);
}
function yemekAltSekme(alt, el) {
  document.getElementById('yemek-restoranlar').style.display = alt==='restoranlar'?'block':'none';
  document.getElementById('yemek-siparisler').style.display = alt==='siparisler'?'block':'none';
  document.querySelectorAll('#yemekAltFiltre .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold');
}
function restoranListesiGoster(durum) {
  aktifRestoranDurum = durum;
  const liste = durum==='tumu'?tumRestoranlar:tumRestoranlar.filter(r=>r.onay_durumu===durum);
  const el = document.getElementById('restoranListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🍽️','Restoran bulunamadı'); return; }
  el.innerHTML = liste.map(r => genelKartHTML({
    id:r.id, tablo:'restoranlar', kullaniciFld:'user_id',
    baslik: r.ad||'İsimsiz Restoran',
    meta: `📅 ${new Date(r.created_at).toLocaleDateString('tr-TR')}`,
    durum: r.onay_durumu||'bekliyor', durumText: durumMetin(r.onay_durumu),
    bildirimBaslik: 'Restoranınız', sonraFnAdi: 'yemekYukle'
  })).join('');
}
function siparisListesiGoster(durum) {
  aktifSiparisDurum = durum;
  const liste = durum==='tumu'?tumYemekSiparisler:tumYemekSiparisler.filter(s=>s.durum===durum);
  const el = document.getElementById('siparisListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('📦','Sipariş bulunamadı'); return; }
  el.innerHTML = liste.map(s => `<div class="admin-card">
    <div class="admin-card-head"><div>
      <div class="admin-card-title">Sipariş #${s.id.substring(0,8)}</div>
      <div class="admin-card-meta">💰 ${Number(s.toplam_fiyat||0).toLocaleString('tr-TR')} ₺ • 📅 ${new Date(s.created_at).toLocaleDateString('tr-TR')}</div></div>
      <span class="durum-badge durum-${s.durum==='teslim_edildi'?'tamamlandi':s.durum==='iptal'?'iptal':'isleniyor'}">${siparisMetin(s.durum)}</span>
    </div>
    <div class="admin-card-actions">
      ${s.durum==='bekliyor'?`<button class="act-btn act-green" onclick="siparisDurumGuncelle('yemek_siparisler','${s.id}','hazirlaniyor','yemekYukle')">👨‍🍳 Hazırla</button>`:''}
      ${s.durum==='hazirlaniyor'?`<button class="act-btn act-blue" onclick="siparisDurumGuncelle('yemek_siparisler','${s.id}','yolda','yemekYukle')">🛵 Yola Çık</button>`:''}
      ${s.durum==='yolda'?`<button class="act-btn act-green" onclick="siparisDurumGuncelle('yemek_siparisler','${s.id}','teslim_edildi','yemekYukle')">✅ Teslim Et</button>`:''}
      ${!['teslim_edildi','iptal'].includes(s.durum)?`<button class="act-btn act-rust" onclick="siparisDurumGuncelle('yemek_siparisler','${s.id}','iptal','yemekYukle')">❌ İptal</button>`:''}
    </div></div>`).join('');
}
function restoranFiltrele(d,el) { document.querySelectorAll('#restoranFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); restoranListesiGoster(d); }
function restoranAra(q) { restoranAramaQ=q.toLowerCase(); restoranListesiGoster(aktifRestoranDurum); }
function siparisFiltrele(d,el) { document.querySelectorAll('#siparisFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); siparisListesiGoster(d); }
async function siparisDurumGuncelle(tablo, id, durum, sonraFnAdi) {
  await sb.from(tablo).update({durum}).eq('id',id);
  if (window[sonraFnAdi]) await window[sonraFnAdi]();
}

// ══════════════════════════════════════════════
// 🛒 MARKET
// ══════════════════════════════════════════════
async function marketYukle() {
  const [marketler, siparisler] = await Promise.all([
    veriCek('marketler','id,ad,onay_durumu,user_id,created_at'),
    veriCek('market_siparisler','id,durum,toplam_fiyat,user_id,created_at')
  ]);
  tumMarketler = marketler||[]; tumMarketSiparisler = siparisler||[];
  const bek = tumMarketler.filter(m=>m.onay_durumu==='bekliyor').length;
  badgeGuncelle('marketOnayBadge', bek);
  const g = id => document.getElementById(id);
  if(g('mk-bekleyen')) g('mk-bekleyen').textContent = bek;
  if(g('mk-onaylandi')) g('mk-onaylandi').textContent = tumMarketler.filter(m=>m.onay_durumu==='onaylandi').length;
  if(g('mk-siparis')) g('mk-siparis').textContent = tumMarketSiparisler.filter(s=>['bekliyor','hazirlaniyor','yolda'].includes(s.durum)).length;
  marketListesiGoster(aktifMarketDurum);
  marketSiparisListesiGoster(aktifMarketSiparisDurum);
}
function marketAltSekme(alt, el) {
  document.getElementById('market-marketler').style.display = alt==='marketler'?'block':'none';
  document.getElementById('market-market-siparisler').style.display = alt==='market-siparisler'?'block':'none';
  document.querySelectorAll('#marketAltFiltre .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold');
}
function marketListesiGoster(durum) {
  aktifMarketDurum = durum;
  const liste = durum==='tumu'?tumMarketler:tumMarketler.filter(m=>m.onay_durumu===durum);
  const el = document.getElementById('marketListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🏪','Market bulunamadı'); return; }
  el.innerHTML = liste.map(m => genelKartHTML({
    id:m.id, tablo:'marketler', kullaniciFld:'user_id',
    baslik: m.ad||'İsimsiz Market',
    meta: `📅 ${new Date(m.created_at).toLocaleDateString('tr-TR')}`,
    durum: m.onay_durumu||'bekliyor', durumText: durumMetin(m.onay_durumu),
    bildirimBaslik: 'Marketiniz', sonraFnAdi: 'marketYukle'
  })).join('');
}
function marketSiparisListesiGoster(durum) {
  aktifMarketSiparisDurum = durum;
  const liste = durum==='tumu'?tumMarketSiparisler:tumMarketSiparisler.filter(s=>s.durum===durum);
  const el = document.getElementById('marketSiparisListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('📦','Market siparişi bulunamadı'); return; }
  el.innerHTML = liste.map(s => `<div class="admin-card">
    <div class="admin-card-head"><div>
      <div class="admin-card-title">Market Siparişi #${s.id.substring(0,8)}</div>
      <div class="admin-card-meta">💰 ${Number(s.toplam_fiyat||0).toLocaleString('tr-TR')} ₺ • 📅 ${new Date(s.created_at).toLocaleDateString('tr-TR')}</div></div>
      <span class="durum-badge durum-${s.durum==='teslim_edildi'?'tamamlandi':s.durum==='iptal'?'iptal':'isleniyor'}">${siparisMetin(s.durum)}</span>
    </div>
    <div class="admin-card-actions">
      ${s.durum==='bekliyor'?`<button class="act-btn act-green" onclick="siparisDurumGuncelle('market_siparisler','${s.id}','hazirlaniyor','marketYukle')">📦 Hazırla</button>`:''}
      ${s.durum==='hazirlaniyor'?`<button class="act-btn act-blue" onclick="siparisDurumGuncelle('market_siparisler','${s.id}','yolda','marketYukle')">🛵 Yola Çık</button>`:''}
      ${s.durum==='yolda'?`<button class="act-btn act-green" onclick="siparisDurumGuncelle('market_siparisler','${s.id}','teslim_edildi','marketYukle')">✅ Teslim Et</button>`:''}
    </div></div>`).join('');
}
function marketFiltrele(d,el) { document.querySelectorAll('#marketFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); marketListesiGoster(d); }
function marketAra(q) { /* TODO: arama implementasyonu */ }
function marketSiparisFiltrele(d,el) { document.querySelectorAll('#marketSiparisFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); marketSiparisListesiGoster(d); }

// ══════════════════════════════════════════════
// 🚕 TAKSİ
// ══════════════════════════════════════════════
async function taksiYukle() {
  const [suruculer, yolculuklar] = await Promise.all([
    veriCek('taksi_suruculer','id,ad_soyad,plaka,onay_durumu,user_id,created_at,puan'),
    veriCek('taksi_yolculuklar','id,durum,ucret,user_id,created_at,nereden,nereye')
  ]);
  tumSuruculer = suruculer||[]; tumYolculuklar = yolculuklar||[];
  const bek = tumSuruculer.filter(s=>s.onay_durumu==='bekliyor').length;
  badgeGuncelle('taksiOnayBadge', bek);
  const g = id => document.getElementById(id);
  if(g('tx-bekleyen')) g('tx-bekleyen').textContent = bek;
  if(g('tx-aktif')) g('tx-aktif').textContent = tumSuruculer.filter(s=>s.onay_durumu==='onaylandi').length;
  if(g('tx-yolculuk')) g('tx-yolculuk').textContent = tumYolculuklar.filter(y=>y.durum==='aktif').length;
  suruculerListesiGoster(aktifSuruculerDurum);
  yolculukListesiGoster(aktifYolculukDurum);
}
function taksiAltSekme(alt, el) {
  document.getElementById('taksi-suruculer').style.display = alt==='suruculer'?'block':'none';
  document.getElementById('taksi-yolculuklar').style.display = alt==='yolculuklar'?'block':'none';
  document.querySelectorAll('#taksiAltFiltre .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold');
}
function suruculerListesiGoster(durum) {
  aktifSuruculerDurum = durum;
  const liste = durum==='tumu'?tumSuruculer:tumSuruculer.filter(s=>s.onay_durumu===durum);
  const el = document.getElementById('suruculerListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🚕','Sürücü bulunamadı'); return; }
  el.innerHTML = liste.map(s => genelKartHTML({
    id:s.id, tablo:'taksi_suruculer', kullaniciFld:'user_id',
    baslik: `${s.ad_soyad||'İsimsiz'} — ${s.plaka||'Plaka yok'}`,
    meta: `⭐ Puan: ${s.puan||'—'} • 📅 ${new Date(s.created_at).toLocaleDateString('tr-TR')}`,
    durum: s.onay_durumu||'bekliyor', durumText: durumMetin(s.onay_durumu),
    bildirimBaslik: 'Sürücü başvurunuz', sonraFnAdi: 'taksiYukle',
    ekstraBtn: s.onay_durumu==='onaylandi'?`<button class="act-btn act-rust" onclick="suruculerAskiya('${s.id}')">⛔ Askıya Al</button>`:''
  })).join('');
}
async function suruculerAskiya(id) {
  if(!confirm('Sürücüyü askıya almak istiyor musunuz?'))return;
  await sb.from('taksi_suruculer').update({onay_durumu:'askiya_alindi'}).eq('id',id);
  await taksiYukle(); toast('Sürücü askıya alındı.','bilgi');
}
function yolculukListesiGoster(durum) {
  aktifYolculukDurum = durum;
  const liste = durum==='tumu'?tumYolculuklar:tumYolculuklar.filter(y=>y.durum===durum);
  const el = document.getElementById('yolculukListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🗺️','Yolculuk bulunamadı'); return; }
  el.innerHTML = liste.map(y => `<div class="admin-card">
    <div class="admin-card-head"><div>
      <div class="admin-card-title">📍 ${y.nereden||'—'} → ${y.nereye||'—'}</div>
      <div class="admin-card-meta">💰 ${Number(y.ucret||0).toLocaleString('tr-TR')} ₺ • 📅 ${new Date(y.created_at).toLocaleDateString('tr-TR')}</div></div>
      <span class="durum-badge durum-${y.durum==='tamamlandi'?'tamamlandi':y.durum==='iptal'?'iptal':'isleniyor'}">${y.durum||'—'}</span>
    </div></div>`).join('');
}
function suruculerFiltrele(d,el) { document.querySelectorAll('#suruculerFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); suruculerListesiGoster(d); }
function suruculerAra(q) { /* TODO */ }
function yolculukFiltrele(d,el) { document.querySelectorAll('#yolculukFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); yolculukListesiGoster(d); }

// ══════════════════════════════════════════════
// 🎵 MÜZİK
// ══════════════════════════════════════════════
async function muzikYukle() {
  const muzikler = await veriCek('muzikler','id,baslik,sanatci,onay_durumu,user_id,created_at');
  tumMuzikler = muzikler||[];
  const bek = tumMuzikler.filter(m=>m.onay_durumu==='bekliyor').length;
  badgeGuncelle('muzikOnayBadge', bek);
  const g = id => document.getElementById(id);
  if(g('mz-bekleyen')) g('mz-bekleyen').textContent = bek;
  if(g('mz-onaylandi')) g('mz-onaylandi').textContent = tumMuzikler.filter(m=>m.onay_durumu==='onaylandi').length;
  if(g('mz-toplam')) g('mz-toplam').textContent = tumMuzikler.length;
  muzikListesiGoster(aktifMuzikDurum);
}
function muzikListesiGoster(durum) {
  aktifMuzikDurum = durum;
  let liste = durum==='tumu'?tumMuzikler:tumMuzikler.filter(m=>m.onay_durumu===durum);
  if (muzikAramaQ) liste = liste.filter(m=>(m.baslik||'').toLowerCase().includes(muzikAramaQ)||(m.sanatci||'').toLowerCase().includes(muzikAramaQ));
  const el = document.getElementById('muzikListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🎵','Parça bulunamadı'); return; }
  el.innerHTML = liste.map(m => genelKartHTML({
    id:m.id, tablo:'muzikler', kullaniciFld:'user_id',
    baslik: `🎵 ${m.baslik||'İsimsiz'} — ${m.sanatci||'Bilinmeyen Sanatçı'}`,
    meta: `📅 ${new Date(m.created_at).toLocaleDateString('tr-TR')}`,
    durum: m.onay_durumu||'bekliyor', durumText: durumMetin(m.onay_durumu),
    bildirimBaslik: 'Müzik yüklemeniz', sonraFnAdi: 'muzikYukle'
  })).join('');
}
function muzikFiltrele(d,el) { document.querySelectorAll('#muzikFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); muzikListesiGoster(d); }
function muzikAra(q) { muzikAramaQ=q.toLowerCase(); muzikListesiGoster(aktifMuzikDurum); }

// ══════════════════════════════════════════════
// 🎟️ ETKİNLİKLER
// ══════════════════════════════════════════════
async function etkinliklerYukle() {
  const etkinlikler = await veriCek('etkinlikler','id,baslik,yer,tarih,onay_durumu,user_id,created_at,fiyat,bilet_satilan');
  tumEtkinlikler = etkinlikler||[];
  const bek = tumEtkinlikler.filter(e=>e.onay_durumu==='bekliyor').length;
  badgeGuncelle('etkinlikOnayBadge', bek);
  const g = id => document.getElementById(id);
  if(g('et-bekleyen')) g('et-bekleyen').textContent = bek;
  if(g('et-onaylandi')) g('et-onaylandi').textContent = tumEtkinlikler.filter(e=>e.onay_durumu==='onaylandi').length;
  if(g('et-bilet')) g('et-bilet').textContent = tumEtkinlikler.reduce((t,e)=>t+(e.bilet_satilan||0),0);
  etkinlikListesiGoster(aktifEtkinlikDurum);
}
function etkinlikListesiGoster(durum) {
  aktifEtkinlikDurum = durum;
  let liste = durum==='tumu'?tumEtkinlikler:tumEtkinlikler.filter(e=>e.onay_durumu===durum);
  if (etkinlikAramaQ) liste = liste.filter(e=>(e.baslik||'').toLowerCase().includes(etkinlikAramaQ));
  const el = document.getElementById('etkinlikListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('🎟️','Etkinlik bulunamadı'); return; }
  el.innerHTML = liste.map(e => genelKartHTML({
    id:e.id, tablo:'etkinlikler', kullaniciFld:'user_id',
    baslik: e.baslik||'İsimsiz Etkinlik',
    meta: `📍 ${e.yer||'—'} • 📅 ${e.tarih?new Date(e.tarih).toLocaleDateString('tr-TR'):new Date(e.created_at).toLocaleDateString('tr-TR')} • 💰 ${Number(e.fiyat||0).toLocaleString('tr-TR')} ₺`,
    durum: e.onay_durumu||'bekliyor', durumText: durumMetin(e.onay_durumu),
    bildirimBaslik: 'Etkinliğiniz', sonraFnAdi: 'etkinliklerYukle',
    ekstraBtn: e.onay_durumu==='onaylandi'?`<button class="act-btn act-rust" onclick="etkinlikIptal('${e.id}')">🚫 İptal Et</button>`:''
  })).join('');
}
async function etkinlikIptal(id) {
  if(!confirm('Etkinliği iptal etmek istiyor musunuz?'))return;
  await sb.from('etkinlikler').update({onay_durumu:'iptal'}).eq('id',id);
  await etkinliklerYukle(); toast('Etkinlik iptal edildi.','bilgi');
}
function etkinlikFiltrele(d,el) { document.querySelectorAll('#etkinlikFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); etkinlikListesiGoster(d); }
function etkinlikAra(q) { etkinlikAramaQ=q.toLowerCase(); etkinlikListesiGoster(aktifEtkinlikDurum); }

// ══════════════════════════════════════════════
// 👥 GRUPLAR
// ══════════════════════════════════════════════
async function gruplarYukle() {
  const gruplar = await veriCek('gruplar','id,ad,aciklama,onay_durumu,user_id,created_at,uye_sayisi,sikayet_sayisi');
  tumGruplar = gruplar||[];
  const bek = tumGruplar.filter(g=>g.onay_durumu==='bekliyor').length;
  badgeGuncelle('grupOnayBadge', bek);
  const el = id => document.getElementById(id);
  if(el('gr-bekleyen')) el('gr-bekleyen').textContent = bek;
  if(el('gr-aktif')) el('gr-aktif').textContent = tumGruplar.filter(g=>g.onay_durumu==='aktif').length;
  if(el('gr-sik')) el('gr-sik').textContent = tumGruplar.filter(g=>(g.sikayet_sayisi||0)>0).length;
  grupListesiGoster(aktifGrupDurum);
}
function grupListesiGoster(durum) {
  aktifGrupDurum = durum;
  let liste = durum==='tumu'?tumGruplar:tumGruplar.filter(g=>g.onay_durumu===durum);
  if (grupAramaQ) liste = liste.filter(g=>(g.ad||'').toLowerCase().includes(grupAramaQ));
  const el = document.getElementById('grupListesi');
  if (!liste.length) { el.innerHTML=emptyHTML('👥','Grup bulunamadı'); return; }
  el.innerHTML = liste.map(g => {
    const sikUyari = (g.sikayet_sayisi||0)>0 ? ` <span class="tag tag-rust">⚠️ ${g.sikayet_sayisi} şikayet</span>` : '';
    return genelKartHTML({
      id:g.id, tablo:'gruplar', kullaniciFld:'user_id',
      baslik: g.ad||'İsimsiz Grup',
      meta: `👥 ${g.uye_sayisi||0} üye • 📅 ${new Date(g.created_at).toLocaleDateString('tr-TR')}${sikUyari}`,
      durum: g.onay_durumu||'bekliyor', durumText: durumMetin(g.onay_durumu),
      bildirimBaslik: 'Grubunuz', sonraFnAdi: 'gruplarYukle',
      ekstraBtn: g.onay_durumu==='aktif'?`<button class="act-btn act-rust" onclick="grupAskiya('${g.id}')">⛔ Askıya Al</button>`:''
    });
  }).join('');
}
async function grupAskiya(id) {
  if(!confirm('Grubu askıya almak istiyor musunuz?'))return;
  await sb.from('gruplar').update({onay_durumu:'askiya_alindi'}).eq('id',id);
  await gruplarYukle(); toast('Grup askıya alındı.','bilgi');
}
function grupFiltrele(d,el) { document.querySelectorAll('#grupFiltreler .act-btn').forEach(b=>b.classList.remove('act-gold')); el.classList.add('act-gold'); grupListesiGoster(d); }
function grupAra(q) { grupAramaQ=q.toLowerCase(); grupListesiGoster(aktifGrupDurum); }
