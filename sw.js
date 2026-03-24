const CACHE_NAME = 'gotapu-v1';
const ASSETS = [
  '/XxxGotapu/index.html',
  '/XxxGotapu/auth.html',
  '/XxxGotapu/style.css',
  '/XxxGotapu/bildirimler.html',
  '/XxxGotapu/degerleme.html',
  '/XxxGotapu/eslesmeler.html',
  '/XxxGotapu/favoriler.html',
  '/XxxGotapu/hizmetler.html',
  '/XxxGotapu/ilan-detay.html',
  '/XxxGotapu/ilan-duzenle.html',
  '/XxxGotapu/ilan-ver.html',
  '/XxxGotapu/mesajlar.html',
  '/XxxGotapu/profil.html',
  '/XxxGotapu/rapor.html',
  '/XxxGotapu/site-yonetimi.html',
  '/XxxGotapu/admin.html'
];

// Kurulum — tüm sayfaları önbelleğe al
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Aktivasyon — eski cache'leri temizle
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — önce ağ, yoksa cache
self.addEventListener('fetch', e => {
  // Supabase API isteklerini cache'leme
  if (e.request.url.includes('supabase.co')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Başarılı yanıtı cache'e de kaydet
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
