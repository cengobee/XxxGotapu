/**
 * GoTapu — navbar.js
 * Tüm sayfalarda ortak: Top Nav, Drawer, Mega App Modal, Bottom Nav, Paylaşım Sheet
 *
 * KULLANIM: Her HTML sayfasının </body> kapanışından ÖNCE şunu ekle:
 *   <script src="navbar.js"></script>
 *
 * Sayfaya özel ayarlar için body tag'ına data attribute ekle:
 *   <body data-page="home">       → Anasayfa (bottom nav'da Anasayfa aktif)
 *   <body data-page="kesfet">     → Keşfet aktif
 *   <body data-page="eslesme">    → Eşleşme aktif
 *   <body data-page="mesajlar">   → Mesajlar aktif
 *   <body data-page="profil">     → Profil aktif (sağdaki ikonla)
 *
 * SUPABASE: Sayfada zaten sb client varsa onu kullanır,
 *           yoksa kendi başlatır.
 */

(function () {
  /* ─── SUPABASE CONFIG ─────────────────────────────── */
  const SUPA_URL = 'https://ncmzfaszaowiynzjdefb.supabase.co';
  const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbXpmYXN6YW93aXluempkZWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NDEwOTQsImV4cCI6MjA4OTQxNzA5NH0.Kw1JQ65KQFPU0r6mIT9buFkMrolnH14_jRvLY7o63tY';

  /* ─── TEMA ────────────────────────────────────────── */
  const savedTheme = localStorage.getItem('gotapu_tema');
  if (savedTheme === 'light') document.body.classList.add('light');

  /* ─── AKTİF SAYFA ────────────────────────────────── */
  const PAGE = document.body.dataset.page || 'home';

  /* ─── CSS ────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    /* ── NAV WRAPPER ── */
    #gt-top-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      height: var(--nav-h, 58px);
      background: var(--bg2, #111520);
      border-bottom: 1px solid var(--border, rgba(255,255,255,0.09));
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 16px;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    #gt-top-nav .gt-nav-logo {
      font-size: 22px; font-weight: 900;
      background: linear-gradient(135deg, #E8603A, #ff8557);
      -webkit-background-clip: text; background-clip: text; color: transparent;
      text-decoration: none; letter-spacing: -0.5px;
    }
    #gt-top-nav .gt-nav-sag { display: flex; align-items: center; gap: 8px; }
    #gt-top-nav .gt-nav-ikon {
      width: 38px; height: 38px; border-radius: 50%;
      background: var(--card, #161b28);
      border: none; cursor: pointer; color: var(--text2, rgba(255,255,255,0.88));
      display: flex; align-items: center; justify-content: center;
      text-decoration: none; position: relative;
      flex-shrink: 0;
    }
    #gt-top-nav .gt-hamburger {
      display: flex; flex-direction: column; gap: 5px;
      cursor: pointer; background: none; border: none; padding: 4px;
    }
    #gt-top-nav .gt-hamburger span {
      display: block; height: 2px; border-radius: 2px;
      background: var(--text2, rgba(255,255,255,0.88));
    }
    #gt-top-nav .gt-hamburger span:nth-child(1) { width: 22px; }
    #gt-top-nav .gt-hamburger span:nth-child(2) { width: 14px; }
    #gt-top-nav .gt-hamburger span:nth-child(3) { width: 22px; }

    /* ── DRAWER ── */
    #gt-drawer-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.65); z-index: 300;
      backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    }
    #gt-drawer-overlay.acik { display: block; }
    #gt-drawer {
      position: fixed; top: 0; left: -290px; width: 270px; height: 100%;
      background: var(--bg2, #111520);
      border-right: 1px solid var(--border, rgba(255,255,255,0.09));
      z-index: 301; transition: left .28s cubic-bezier(.4,0,.2,1);
      overflow-y: auto; padding-bottom: 40px;
    }
    #gt-drawer.acik { left: 0; }
    .gt-drawer-head {
      background: linear-gradient(135deg, #E8603A 0%, #ff8557 100%);
      padding: 24px 16px 20px; position: relative;
    }
    .gt-drawer-head-g {
      pointer-events: none; position: absolute;
      top: -30px; right: -30px; width: 120px; height: 120px;
      border-radius: 50%; background: rgba(255,255,255,0.12); filter: blur(28px);
    }
    .gt-drawer-logo { font-size: 22px; font-weight: 900; color: #fff; letter-spacing: -0.5px; }
    .gt-drawer-sub { font-size: 11px; color: rgba(255,255,255,.75); margin-top: 4px; font-weight: 600; }
    .gt-drawer-kapat {
      position: absolute; top: 14px; right: 14px;
      width: 30px; height: 30px; border-radius: 50%;
      background: rgba(255,255,255,.22); border: none; color: #fff;
      font-size: 16px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
    }
    .gt-drawer-acc-btn {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px; border-bottom: 1px solid var(--border, rgba(255,255,255,0.09));
      background: transparent; width: 100%;
      border-left: none; border-right: none; border-top: none; cursor: pointer;
    }
    .gt-drawer-acc-baslik {
      font-size: 14px; font-weight: 800;
      color: var(--text, #fff); font-family: 'Nunito', sans-serif;
    }
    .gt-drawer-acc-ok {
      font-size: 18px; color: var(--text3, rgba(255,255,255,0.48));
      transition: transform .2s; display: inline-block;
    }
    .gt-drawer-acc-btn.acik .gt-drawer-acc-ok { transform: rotate(90deg); }
    .gt-drawer-sub-panel { display: none; background: var(--card, #161b28); }
    .gt-drawer-sub-panel.acik { display: block; }
    .gt-drawer-sub-item {
      display: flex; align-items: center; justify-content: space-between;
      padding: 11px 16px 11px 26px;
      border-bottom: 1px solid var(--border, rgba(255,255,255,0.09));
      text-decoration: none;
    }
    .gt-drawer-sub-metin {
      font-size: 13px; font-weight: 700;
      color: var(--text2, rgba(255,255,255,0.88)); font-family: 'Nunito', sans-serif;
    }
    .gt-drawer-sub-ok { font-size: 14px; color: var(--text3, rgba(255,255,255,0.48)); }
    .gt-drawer-item {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid var(--border, rgba(255,255,255,0.09));
      text-decoration: none; background: transparent; width: 100%;
      border-left: none; border-right: none; border-top: none; cursor: pointer;
    }
    .gt-drawer-item-metin {
      font-size: 14px; font-weight: 700;
      color: var(--text, #fff); font-family: 'Nunito', sans-serif;
    }
    .gt-drawer-item-ok { font-size: 16px; color: var(--text3, rgba(255,255,255,0.48)); }
    .gt-drawer-ayrac { height: 6px; background: var(--bg, #0a0d14); border-bottom: 1px solid var(--border, rgba(255,255,255,0.09)); }

    /* ── MEGA APP MODAL ── */
    #gt-mega-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.75); z-index: 400; align-items: flex-end;
    }
    #gt-mega-overlay.acik { display: flex; }
    .gt-mega-sheet {
      background: var(--bg2, #111520);
      border-radius: 24px 24px 0 0; width: 100%;
      max-height: 92vh; overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding-bottom: env(safe-area-inset-bottom, 16px);
    }
    .gt-mega-header {
      background: linear-gradient(135deg, #E8603A 0%, #ff8557 100%);
      padding: 20px 18px 16px; border-radius: 24px 24px 0 0;
      position: sticky; top: 0; z-index: 2;
    }
    .gt-mega-header-ust {
      display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px;
    }
    .gt-mega-logo { font-size: 20px; font-weight: 900; color: #fff; letter-spacing: -0.5px; }
    .gt-mega-sub { font-size: 11px; color: rgba(255,255,255,.78); margin-top: 3px; font-weight: 600; }
    .gt-mega-badge {
      display: inline-flex; align-items: center; gap: 4px;
      background: rgba(255,255,255,.2); border-radius: 50px;
      padding: 3px 10px; font-size: 10px; font-weight: 700; color: #fff; margin-top: 6px;
    }
    .gt-mega-kapat {
      width: 32px; height: 32px; border-radius: 50%;
      background: rgba(255,255,255,.22); border: none; color: #fff;
      font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .gt-mega-arama-wrap {
      display: flex; align-items: center; gap: 10px;
      background: rgba(255,255,255,.18); border-radius: 14px; padding: 10px 14px;
    }
    .gt-mega-arama-input {
      background: transparent; border: none; outline: none; color: #fff;
      font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 600; flex: 1;
    }
    .gt-mega-arama-input::placeholder { color: rgba(255,255,255,.62); }
    .gt-mega-govde { padding: 0 14px 14px; }
    .gt-mega-kat-baslik {
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 2px 10px;
      font-size: 11px; font-weight: 900; color: var(--text3, rgba(255,255,255,0.48));
      letter-spacing: 1.6px; text-transform: uppercase;
    }
    .gt-mega-kat-sayi {
      background: #E8603A; color: #fff; font-size: 10px; font-weight: 800;
      padding: 2px 8px; border-radius: 50px; letter-spacing: 0; text-transform: none;
    }
    .gt-mega-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }
    .gt-mega-kart {
      background: var(--card, #161b28); border-radius: 16px;
      padding: 16px 8px 14px; display: flex; flex-direction: column;
      align-items: center; gap: 9px; text-decoration: none;
      border: 1px solid var(--border2, rgba(255,255,255,0.15));
      box-shadow: 0 3px 16px rgba(0,0,0,0.35);
      transition: transform .13s, box-shadow .13s; position: relative; overflow: hidden;
    }
    .gt-mega-kart::after {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 40%;
      background: linear-gradient(180deg, rgba(255,255,255,.05) 0%, transparent 100%);
      pointer-events: none;
    }
    .gt-mega-kart:active { transform: scale(0.92); }
    .gt-mega-kart-ikon {
      width: 52px; height: 52px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 24px; flex-shrink: 0; box-shadow: 0 4px 14px rgba(0,0,0,0.32);
    }
    .gt-ikon-pazar  { background: linear-gradient(135deg, #ff6b35, #f7931e); }
    .gt-ikon-hizmet { background: linear-gradient(135deg, #00b4d8, #0077b6); }
    .gt-ikon-sosyal { background: linear-gradient(135deg, #9b5de5, #f15bb5); }
    .gt-ikon-yasam  { background: linear-gradient(135deg, #06d6a0, #118ab2); }
    .gt-mega-kart-ad {
      font-size: 12px; font-weight: 800; color: var(--text, #fff);
      text-align: center; line-height: 1.25;
    }
    .gt-mega-kart-alt {
      font-size: 10px; color: var(--text3, rgba(255,255,255,0.48));
      text-align: center; font-weight: 600; line-height: 1.35;
    }
    .gt-mega-bilgi {
      margin: 14px 0 4px; background: var(--card, #161b28);
      border-radius: 14px; padding: 14px 16px; text-align: center;
      font-size: 12px; color: var(--text3, rgba(255,255,255,0.48));
      font-weight: 700; border: 1px solid var(--border, rgba(255,255,255,0.09));
    }
    .gt-mega-bilgi strong { color: #E8603A; }

    /* ── PAYLAŞIM SHEET ── */
    #gt-paylasim-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.65); z-index: 400; align-items: flex-end;
    }
    #gt-paylasim-overlay.acik { display: flex; }
    .gt-paylasim-sheet {
      background: var(--card, #161b28);
      border-radius: 22px 22px 0 0; padding: 16px 16px;
      padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 28px); width: 100%;
    }
    .gt-paylasim-handle {
      width: 36px; height: 4px; border-radius: 2px;
      background: var(--border2, rgba(255,255,255,0.15)); margin: 0 auto 16px;
    }
    .gt-paylasim-baslik {
      text-align: center; font-size: 15px; font-weight: 900;
      color: var(--text, #fff); margin-bottom: 16px;
    }
    .gt-paylasim-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .gt-paylasim-item {
      display: flex; align-items: center; gap: 10px;
      padding: 14px; border-radius: 14px;
      border: 1px solid var(--border, rgba(255,255,255,0.09));
      background: var(--bg2, #111520); cursor: pointer; text-decoration: none;
      transition: background .15s;
    }
    .gt-paylasim-item:active { background: var(--card2, #1c2235); }
    .gt-paylasim-metin { font-size: 12px; font-weight: 800; color: var(--text, #fff); }

    /* ── BOTTOM NAV ── */
    #gt-bottom-nav {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
      height: var(--bot-h, 66px);
      background: var(--bg2, #111520);
      border-top: 1px solid var(--border, rgba(255,255,255,0.09));
      display: flex; align-items: center;
      padding: 0 4px;
      padding-bottom: env(safe-area-inset-bottom, 0);
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      will-change: transform; transform: translateZ(0);
    }
    .gt-bnav-item {
      flex: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 3px; text-decoration: none;
      background: none; border: none; cursor: pointer;
      font-family: 'Nunito', sans-serif;
      color: var(--text3, rgba(255,255,255,0.48));
      position: relative; min-width: 0; height: var(--bot-h, 66px);
    }
    .gt-bnav-item.aktif { color: #E8603A; }
    .gt-bnav-label { font-size: 10px; font-weight: 700; white-space: nowrap; }
    .gt-bnav-orta { flex: 1; display: flex; align-items: center; justify-content: center; height: var(--bot-h, 66px); }
    .gt-bnav-plus {
      width: 50px; height: 50px; border-radius: 50%;
      background: linear-gradient(135deg, #E8603A, #ff8557);
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-size: 30px; font-weight: 900;
      margin-top: -18px;
      box-shadow: 0 4px 22px rgba(232,96,58,0.6);
      border: none; cursor: pointer; font-family: 'Nunito', sans-serif; line-height: 1;
    }
    .gt-bnav-badge {
      position: absolute; top: 6px; right: calc(50% - 18px);
      background: #E8603A; color: #fff; font-size: 9px; font-weight: 800;
      min-width: 15px; height: 15px; border-radius: 50%;
      display: none; align-items: center; justify-content: center; padding: 0 2px;
    }

    /* ── TEMA GEÇİŞ ── */
    #gt-tema-btn {
      width: 38px; height: 38px; border-radius: 50%;
      background: var(--card, #161b28);
      border: none; cursor: pointer; font-size: 18px;
      display: flex; align-items: center; justify-content: center;
    }

    /* Işık modu uyumu */
    body.light #gt-top-nav,
    body.light #gt-bottom-nav { background: rgba(255,255,255,0.92); }
    body.light .gt-drawer-item-metin,
    body.light .gt-drawer-acc-baslik { color: var(--text, #0d1117); }
    body.light .gt-mega-kart { background: #fff; }
    body.light .gt-mega-kart-ad { color: var(--text, #0d1117); }
    body.light .gt-paylasim-item { background: #f2f4f8; }
    body.light .gt-paylasim-metin { color: #0d1117; }

    @media (min-width: 900px) {
      #gt-bottom-nav { display: none !important; }
      body { padding-bottom: 40px !important; }
    }
  `;
  document.head.appendChild(style);

  /* ─── TOP NAV HTML ───────────────────────────────── */
  const topNav = document.createElement('nav');
  topNav.id = 'gt-top-nav';
  topNav.innerHTML = `
    <button class="gt-hamburger" id="gt-hamburger-btn" aria-label="Menü">
      <span></span><span></span><span></span>
    </button>
    <a href="home.html" class="gt-nav-logo">GoTapu</a>
    <div class="gt-nav-sag">
      <button class="gt-nav-ikon" id="gt-arama-btn" aria-label="Ara">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </button>
      <a href="bildirimler.html" class="gt-nav-ikon" id="gt-bildirim-btn" aria-label="Bildirimler">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <span id="gt-bildirim-badge" class="gt-bnav-badge" style="top:-4px;right:-4px;"></span>
      </a>
      <button class="gt-nav-ikon" id="gt-tema-btn" aria-label="Tema değiştir">
        <span id="gt-tema-ikon"></span>
      </button>
    </div>
  `;
  document.body.insertBefore(topNav, document.body.firstChild);

  /* ─── DRAWER HTML ────────────────────────────────── */
  const drawerOverlay = document.createElement('div');
  drawerOverlay.id = 'gt-drawer-overlay';
  drawerOverlay.onclick = () => gtDrawerKapat();
  document.body.appendChild(drawerOverlay);

  const drawer = document.createElement('div');
  drawer.id = 'gt-drawer';
  drawer.innerHTML = `
    <div class="gt-drawer-head">
      <div class="gt-drawer-head-g"></div>
      <div class="gt-drawer-logo">GoTapu</div>
      <div class="gt-drawer-sub">✦ Mega App — tek çatı altında</div>
      <button class="gt-drawer-kapat" onclick="gtDrawerKapat()">✕</button>
    </div>

    <button class="gt-drawer-acc-btn" id="gt-ilanlar-btn" onclick="gtIlanlarToggle()">
      <span class="gt-drawer-acc-baslik">🏷️ İlanlar</span>
      <span class="gt-drawer-acc-ok">›</span>
    </button>
    <div class="gt-drawer-sub-panel" id="gt-ilanlar-sub">
      <a class="gt-drawer-sub-item" href="ilanlar.html?kategori=emlak"><span class="gt-drawer-sub-metin">Emlak</span><span class="gt-drawer-sub-ok">›</span></a>
      <a class="gt-drawer-sub-item" href="ilanlar.html?kategori=vasita"><span class="gt-drawer-sub-metin">Vasıta</span><span class="gt-drawer-sub-ok">›</span></a>
      <a class="gt-drawer-sub-item" href="ilanlar.html?kategori=ikinciel"><span class="gt-drawer-sub-metin">2. El Eşya</span><span class="gt-drawer-sub-ok">›</span></a>
      <a class="gt-drawer-sub-item" href="ilanlar.html?kategori=yedekparca"><span class="gt-drawer-sub-metin">Yedek Parça</span><span class="gt-drawer-sub-ok">›</span></a>
      <a class="gt-drawer-sub-item" href="ilanlar.html?kategori=pet"><span class="gt-drawer-sub-metin">Pet</span><span class="gt-drawer-sub-ok">›</span></a>
      <a class="gt-drawer-sub-item" href="ilanlar.html?kategori=isbulma"><span class="gt-drawer-sub-metin">İş Bulma</span><span class="gt-drawer-sub-ok">›</span></a>
    </div>
    <div class="gt-drawer-ayrac"></div>
    <a class="gt-drawer-item" href="alisveris.html"><span class="gt-drawer-item-metin">🛍️ Alışveriş</span><span class="gt-drawer-item-ok">›</span></a>
    <a class="gt-drawer-item" href="yemek.html"><span class="gt-drawer-item-metin">🍔 Yemek</span><span class="gt-drawer-item-ok">›</span></a>
    <a class="gt-drawer-item" href="market.html"><span class="gt-drawer-item-metin">🛒 Market</span><span class="gt-drawer-item-ok">›</span></a>
    <a class="gt-drawer-item" href="taksi.html"><span class="gt-drawer-item-metin">🚕 Taksi</span><span class="gt-drawer-item-ok">›</span></a>
    <a class="gt-drawer-item" href="muzik.html"><span class="gt-drawer-item-metin">🎵 Müzik</span><span class="gt-drawer-item-ok">›</span></a>
    <a class="gt-drawer-item" href="etkinlikler.html"><span class="gt-drawer-item-metin">🎟️ Etkinlikler</span><span class="gt-drawer-item-ok">›</span></a>
    <a class="gt-drawer-item" href="gruplar.html"><span class="gt-drawer-item-metin">👥 Gruplar</span><span class="gt-drawer-item-ok">›</span></a>
    <div class="gt-drawer-ayrac"></div>
    <a class="gt-drawer-item" href="profil.html"><span class="gt-drawer-item-metin">👤 Profilim</span><span class="gt-drawer-item-ok">›</span></a>
    <button class="gt-drawer-item" onclick="gtCikisYap()"><span class="gt-drawer-item-metin" style="color:#E8603A">Çıkış Yap</span><span class="gt-drawer-item-ok">›</span></button>
  `;
  document.body.appendChild(drawer);

  /* ─── MEGA APP MODAL HTML ────────────────────────── */
  const megaOverlay = document.createElement('div');
  megaOverlay.id = 'gt-mega-overlay';
  megaOverlay.onclick = (e) => { if (e.target === megaOverlay) gtMegaKapat(); };
  megaOverlay.innerHTML = `
    <div class="gt-mega-sheet">
      <div class="gt-mega-header">
        <div class="gt-mega-header-ust">
          <div>
            <div class="gt-mega-logo">GoTapu</div>
            <div class="gt-mega-sub">Tüm uygulamalar tek çatı altında</div>
            <div class="gt-mega-badge">✦ Mega App</div>
          </div>
          <button class="gt-mega-kapat" onclick="gtMegaKapat()">✕</button>
        </div>
        <div class="gt-mega-arama-wrap">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input class="gt-mega-arama-input" id="gt-mega-arama" placeholder="Uygulamalarda ara…" oninput="gtMegaFiltrele(this.value)">
        </div>
      </div>
      <div class="gt-mega-govde">
        <div class="gt-mega-kat-baslik">Pazar <span class="gt-mega-kat-sayi">5</span></div>
        <div class="gt-mega-grid">
          <a class="gt-mega-kart" href="ilanlar.html"><div class="gt-mega-kart-ikon gt-ikon-pazar">🏷️</div><div class="gt-mega-kart-ad">İlanlar</div><div class="gt-mega-kart-alt">Emlak, vasıta, 2.el</div></a>
          <a class="gt-mega-kart" href="alisveris.html"><div class="gt-mega-kart-ikon gt-ikon-pazar">🛍️</div><div class="gt-mega-kart-ad">Alışveriş</div><div class="gt-mega-kart-alt">%1 komisyonla mağaza</div></a>
          <a class="gt-mega-kart" href="ilanlar.html?kategori=ikinciel"><div class="gt-mega-kart-ikon gt-ikon-pazar">♻️</div><div class="gt-mega-kart-ad">2. El</div><div class="gt-mega-kart-alt">Garantili 2. el ürünler</div></a>
          <a class="gt-mega-kart" href="mobilya.html"><div class="gt-mega-kart-ikon gt-ikon-pazar">🛋️</div><div class="gt-mega-kart-ad">Mobilya</div><div class="gt-mega-kart-alt">Evine özel tasarım</div></a>
          <a class="gt-mega-kart" href="ilanlar.html?kategori=isbulma"><div class="gt-mega-kart-ikon gt-ikon-pazar">💼</div><div class="gt-mega-kart-ad">İş İlanları</div><div class="gt-mega-kart-alt">Tam zamanlı, freelance</div></a>
        </div>
        <div class="gt-mega-kat-baslik">Hizmet <span class="gt-mega-kat-sayi">7</span></div>
        <div class="gt-mega-grid">
          <a class="gt-mega-kart" href="taksi.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">🚕</div><div class="gt-mega-kart-ad">Taksi</div><div class="gt-mega-kart-alt">Şoför çağır</div></a>
          <a class="gt-mega-kart" href="yemek.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">🍔</div><div class="gt-mega-kart-ad">Yemek</div><div class="gt-mega-kart-alt">Komşu mutfağından</div></a>
          <a class="gt-mega-kart" href="yoresel.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">🥘</div><div class="gt-mega-kart-ad">Yöresel</div><div class="gt-mega-kart-alt">Ev yapımı lezzetler</div></a>
          <a class="gt-mega-kart" href="kurye.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">🛵</div><div class="gt-mega-kart-ad">Kurye</div><div class="gt-mega-kart-alt">Aynı gün teslimat</div></a>
          <a class="gt-mega-kart" href="nakliyat.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">📦</div><div class="gt-mega-kart-ad">Nakliyat</div><div class="gt-mega-kart-alt">Şehir içi & arası</div></a>
          <a class="gt-mega-kart" href="hizmetler.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">🔧</div><div class="gt-mega-kart-ad">Usta</div><div class="gt-mega-kart-alt">Tesisat, elektrik</div></a>
          <a class="gt-mega-kart" href="temizlik.html"><div class="gt-mega-kart-ikon gt-ikon-hizmet">🧹</div><div class="gt-mega-kart-ad">Temizlik</div><div class="gt-mega-kart-alt">Ev & ofis</div></a>
        </div>
        <div class="gt-mega-kat-baslik">Sosyal <span class="gt-mega-kat-sayi">3</span></div>
        <div class="gt-mega-grid">
          <a class="gt-mega-kart" href="eslesmeler.html"><div class="gt-mega-kart-ikon gt-ikon-sosyal">❤️</div><div class="gt-mega-kart-ad">Eşleşme</div><div class="gt-mega-kart-alt">Ev, araba, insan</div></a>
          <a class="gt-mega-kart" href="etkinlikler.html"><div class="gt-mega-kart-ikon gt-ikon-sosyal">🎟️</div><div class="gt-mega-kart-ad">Etkinlikler</div><div class="gt-mega-kart-alt">Konser, buluşma</div></a>
          <a class="gt-mega-kart" href="gruplar.html"><div class="gt-mega-kart-ikon gt-ikon-sosyal">👥</div><div class="gt-mega-kart-ad">Topluluklar</div><div class="gt-mega-kart-alt">İlgi alanı grupları</div></a>
        </div>
        <div class="gt-mega-kat-baslik">Yaşam <span class="gt-mega-kat-sayi">5</span></div>
        <div class="gt-mega-grid">
          <a class="gt-mega-kart" href="sana-ozel.html"><div class="gt-mega-kart-ikon gt-ikon-yasam">🏠</div><div class="gt-mega-kart-ad">Senin Evin</div><div class="gt-mega-kart-alt">3D ev tasarla</div></a>
          <a class="gt-mega-kart" href="saglik.html"><div class="gt-mega-kart-ikon gt-ikon-yasam">🩺</div><div class="gt-mega-kart-ad">Sağlık</div><div class="gt-mega-kart-alt">Doktor, randevu</div></a>
          <a class="gt-mega-kart" href="egitim.html"><div class="gt-mega-kart-ikon gt-ikon-yasam">🎓</div><div class="gt-mega-kart-ad">Eğitim</div><div class="gt-mega-kart-alt">Özel ders, kurs</div></a>
          <a class="gt-mega-kart" href="ilanlar.html?kategori=pet"><div class="gt-mega-kart-ikon gt-ikon-yasam">🐾</div><div class="gt-mega-kart-ad">Evcil Dostlar</div><div class="gt-mega-kart-alt">Veteriner, bakım</div></a>
          <a class="gt-mega-kart" href="profil.html#cuzdan"><div class="gt-mega-kart-ikon gt-ikon-yasam">💳</div><div class="gt-mega-kart-ad">Cüzdan</div><div class="gt-mega-kart-alt">Ödeme, kredi</div></a>
        </div>
        <div class="gt-mega-bilgi">Komisyon <strong>%1</strong> · Referans linkin <strong>%1/yıl</strong></div>
      </div>
    </div>
  `;
  document.body.appendChild(megaOverlay);

  /* ─── PAYLAŞIM SHEET HTML ────────────────────────── */
  const paylasimOverlay = document.createElement('div');
  paylasimOverlay.id = 'gt-paylasim-overlay';
  paylasimOverlay.onclick = (e) => { if (e.target === paylasimOverlay) gtPaylasimKapat(); };
  paylasimOverlay.innerHTML = `
    <div class="gt-paylasim-sheet">
      <div class="gt-paylasim-handle"></div>
      <div class="gt-paylasim-baslik">Ne paylaşmak istersin?</div>
      <div class="gt-paylasim-grid">
        <a class="gt-paylasim-item" href="#"><span style="font-size:22px">🎬</span><span class="gt-paylasim-metin">Video Yükle</span></a>
        <a class="gt-paylasim-item" href="#"><span style="font-size:22px">📷</span><span class="gt-paylasim-metin">Fotoğraf Paylaş</span></a>
        <a class="gt-paylasim-item" href="#"><span style="font-size:22px">✏️</span><span class="gt-paylasim-metin">Yazı Yaz</span></a>
        <a class="gt-paylasim-item" href="ilan-ver.html"><span style="font-size:22px">📋</span><span class="gt-paylasim-metin">İlan Ver</span></a>
        <a class="gt-paylasim-item" href="alisveris.html"><span style="font-size:22px">🛒</span><span class="gt-paylasim-metin">Ürün Sat</span></a>
        <a class="gt-paylasim-item" href="sana-ozel.html"><span style="font-size:22px">✨</span><span class="gt-paylasim-metin">Sana Özel</span></a>
      </div>
    </div>
  `;
  document.body.appendChild(paylasimOverlay);

  /* ─── BOTTOM NAV HTML ────────────────────────────── */
  const pages = [
    { id: 'home',     href: 'home.html',       label: 'Anasayfa', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22" fill="var(--bg2,#111520)"/></svg>`, badge: '' },
    { id: 'kesfet',   href: 'kesfet.html',     label: 'Keşfet',   icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`, badge: '' },
    { id: '__plus',   href: '#',               label: '',         icon: '', badge: '' },
    { id: 'eslesme',  href: 'eslesmeler.html', label: 'Eşleşme',  icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, badge: 'gt-eslesme-badge' },
    { id: 'mesajlar', href: 'mesajlar.html',   label: 'Mesajlar', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, badge: 'gt-mesaj-badge' },
  ];

  const bottomNav = document.createElement('nav');
  bottomNav.id = 'gt-bottom-nav';
  bottomNav.setAttribute('aria-label', 'Ana navigasyon');
  bottomNav.innerHTML = pages.map(p => {
    if (p.id === '__plus') return `
      <div class="gt-bnav-orta">
        <button class="gt-bnav-plus" onclick="gtPaylasimAc()" aria-label="Paylaş">+</button>
      </div>`;
    const aktif = PAGE === p.id ? ' aktif' : '';
    return `
      <a href="${p.href}" class="gt-bnav-item${aktif}" aria-label="${p.label}">
        ${p.icon}
        ${p.badge ? `<span class="gt-bnav-badge" id="${p.badge}"></span>` : ''}
        <span class="gt-bnav-label">${p.label}</span>
      </a>`;
  }).join('');
  document.body.appendChild(bottomNav);

  /* ─── TEMA İKONUNU SET ET ────────────────────────── */
  function updateTemaIkon() {
    const ikon = document.getElementById('gt-tema-ikon');
    if (ikon) ikon.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  }
  updateTemaIkon();

  /* ─── GLOBAL FONKSİYONLAR ────────────────────────── */
  window.gtDrawerAc   = () => { drawer.classList.add('acik'); drawerOverlay.classList.add('acik'); };
  window.gtDrawerKapat = () => { drawer.classList.remove('acik'); drawerOverlay.classList.remove('acik'); };
  window.gtIlanlarToggle = () => {
    document.getElementById('gt-ilanlar-btn').classList.toggle('acik');
    document.getElementById('gt-ilanlar-sub').classList.toggle('acik');
  };
  window.gtMegaAc = () => {
    megaOverlay.classList.add('acik');
    const inp = document.getElementById('gt-mega-arama');
    if (inp) { inp.value = ''; gtMegaFiltrele(''); }
  };
  window.gtMegaKapat = () => megaOverlay.classList.remove('acik');
  window.gtMegaFiltrele = (q) => {
    q = q.toLowerCase().trim();
    document.querySelectorAll('.gt-mega-kart').forEach(k => {
      const ad = k.querySelector('.gt-mega-kart-ad').textContent.toLowerCase();
      const alt = k.querySelector('.gt-mega-kart-alt').textContent.toLowerCase();
      k.style.display = (q === '' || ad.includes(q) || alt.includes(q)) ? 'flex' : 'none';
    });
  };
  window.gtPaylasimAc  = () => paylasimOverlay.classList.add('acik');
  window.gtPaylasimKapat = () => paylasimOverlay.classList.remove('acik');
  window.gtCikisYap = async () => {
    const sb = window._sbClient;
    if (sb) await sb.auth.signOut();
    window.location.href = 'index.html';
  };
  window.gtTemaToggle = () => {
    document.body.classList.toggle('light');
    localStorage.setItem('gotapu_tema', document.body.classList.contains('light') ? 'light' : 'dark');
    updateTemaIkon();
  };

  /* ─── EVENT BAĞLA ────────────────────────────────── */
  document.getElementById('gt-hamburger-btn').addEventListener('click', gtDrawerAc);
  document.getElementById('gt-tema-btn').addEventListener('click', gtTemaToggle);
  document.getElementById('gt-arama-btn').addEventListener('click', () => { window.location.href = 'ilanlar.html'; });

  /* ─── BADGE'LER (Supabase varsa) ─────────────────── */
  function gtBadgeYukle() {
    const sb = window._sbClient;
    if (!sb) return;
    sb.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      const uid = data.user.id;
      // Mesaj badge
      sb.from('mesajlar').select('*', { count: 'exact', head: true })
        .eq('alici_id', uid).eq('okundu', false)
        .then(({ count }) => {
          if (count > 0) {
            const b = document.getElementById('gt-mesaj-badge');
            if (b) { b.textContent = count > 9 ? '9+' : count; b.style.display = 'flex'; }
          }
        });
      // Bildirim badge
      sb.from('bildirimler').select('*', { count: 'exact', head: true })
        .eq('user_id', uid).eq('okundu', false)
        .then(({ count }) => {
          if (count > 0) {
            const b = document.getElementById('gt-bildirim-badge');
            if (b) { b.textContent = count > 9 ? '9+' : count; b.style.display = 'flex'; }
          }
        });
      // Eşleşme badge (tercihler varsa)
      try {
        const t = JSON.parse(localStorage.getItem('gotapu_tercihler') || '{}');
        if (t.sehir || t.minFiyat || t.oda?.length) {
          const b = document.getElementById('gt-eslesme-badge');
          if (b) b.style.display = 'flex';
        }
      } catch (e) {}
    });
  }

  // Supabase client hazır olunca badge'leri yükle
  // (sayfa kendi sb'sini window._sbClient'a atar, biz de 500ms sonra deneriz)
  setTimeout(gtBadgeYukle, 600);

})();
