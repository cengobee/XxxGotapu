/**
 * GoTapu — Kategori Tanımları
 * kategoriler.js
 *
 * Tüm ana kategoriler, alt kategoriler ve form kriterleri burada tanımlanır.
 * ilan-ver.html bu dosyayı <script src="kategoriler.js"> ile çeker.
 *
 * Yapı:
 *   GOTATPU_KATEGORILER  → ana kategori listesi (anasayfa, nav için)
 *   EMLAK_TIPLERI        → emlak alt tipleri (satıcı + alıcı formu)
 *   EMLAK_KRITERLER      → konut/arsa/isyeri form alanları
 *   VASITA_KATEGORILER   → vasıta ağacı (iskelet — marka/model sonra eklenecek)
 *   IKINCI_EL_KATEGORILER→ ikinci el kategori ağacı (iskelet)
 *   HIZMET_KATEGORILER   → hizmetler kategori listesi (iskelet)
 */

// ─────────────────────────────────────────────
// 1. ANA KATEGORİLER
// ─────────────────────────────────────────────
const GOTAPU_KATEGORILER = [
  { id: 'emlak',    label: '🏠 Emlak',      aktif: true  },
  { id: 'vasita',   label: '🚗 Vasıta',     aktif: false }, // yakında
  { id: 'ikinciEl', label: '📦 İkinci El',  aktif: false }, // yakında
  { id: 'hizmet',   label: '🔧 Hizmetler',  aktif: true  },
];

// ─────────────────────────────────────────────
// 2. EMLAK
// ─────────────────────────────────────────────

/** Satıcı formundaki emlak tipi butonları */
const EMLAK_TIPLERI = [
  { label: '🏢 Daire',          grup: 'konut'  },
  { label: '🏡 Villa',          grup: 'konut'  },
  { label: '🏠 Müstakil',       grup: 'konut'  },
  { label: '🏘️ Residence',      grup: 'konut'  },
  { label: '🏗️ Arsa',           grup: 'arsa'   },
  { label: '🌳 Tarla/Bağ Bahçe',grup: 'arsa'   },
  { label: '🏪 İşyeri/Ofis',    grup: 'isyeri' },
  { label: '🏭 Depo/Fabrika',   grup: 'isyeri' },
  { label: '🚪 Oda',            grup: 'konut'  },
];

/** Alıcı formundaki emlak tipi listesi */
const EMLAK_TIPLERI_ALICI = [
  { label: '🏢 Daire',          grup: 'konut'  },
  { label: '🏡 Villa',          grup: 'konut'  },
  { label: '🏠 Müstakil',       grup: 'konut'  },
  { label: '🏘️ Residence',      grup: 'konut'  },
  { label: '🌊 Yazlık',         grup: 'konut'  },
  { label: '🏗️ Arsa',           grup: 'arsa'   },
  { label: '🌾 Tarla',          grup: 'arsa'   },
  { label: '🍇 Bağ & Bahçe',    grup: 'arsa'   },
  { label: '🏪 İşyeri / Ofis',  grup: 'isyeri' },
  { label: '🏭 Depo / Fabrika', grup: 'isyeri' },
  { label: '💼 Büro',           grup: 'isyeri' },
];

/** Konut form kriterleri */
const KONUT_KRITERLER = {
  odaSayisi: [
    'Stüdyo','1+0','1+1','2+1','3+1','3+2',
    '4+1','4+2','5+1','5+2','6+1 ve üzeri'
  ],
  banyoSayisi: ['1','2','3','4+'],
  katlar: [
    'Bodrum Kat','Zemin Kat','Bahçe Katı','Giriş Katı',
    'Kot 1','Kot 2','Yüksek Giriş','Asma Kat',
    '1. Kat','2. Kat','3. Kat','4. Kat','5. Kat',
    '6. Kat','7. Kat','8. Kat','9. Kat','10. Kat',
    '11-15. Kat','16-20. Kat','20+ Kat','Çatı Katı','Teras Katı'
  ],
  binaKatSayisi: ['1','2','3','4','5','6','7','8','9','10','11-15','16-20','20+'],
  binaYasi: ['0 (Sıfır)','1-5 Yıl','6-10 Yıl','11-15 Yıl','16-20 Yıl','21-30 Yıl','30+ Yıl'],
  isitmaTipleri: [
    'Kombi (Doğalgaz)','Kombi (LPG)','Merkezi Isıtma','Merkezi (Pay Ölçer)',
    'Kat Kaloriferi','Klima','Yerden Isıtma','Güneş Enerjisi',
    'Soba','Şömine','VRF Sistemi','Isıtma Yok'
  ],
  cepheler: ['⬆️ Kuzey','⬇️ Güney','➡️ Doğu','⬅️ Batı','↗️ Kuzey-Doğu','↖️ Kuzey-Batı','↘️ Güney-Doğu','↙️ Güney-Batı'],
  kullanimDurumu: ['Boş','Kiracılı','Mülk Sahibi Kullanıyor'],
  tapuDurumu: ['Kat Mülkiyeti','Kat İrtifakı','Hisseli Tapu','Arsa Tapusu','Kooperatif Tapusu'],
  esyaDurumu: ['Eşyalı','Yarı Eşyalı','Eşyasız (Boş)'],
  krediUygunluk: ['Evet','Hayır'],
  icOzellikler: [
    '🚿 Duşakabin','🛁 Küvet','🪟 Amerikan Mutfak','🍳 Açık Mutfak',
    '👗 Giyinme Odası','🪞 Antre / Hol','🌿 Balkon','🌿 Teras',
    '🛁 Jakuzi','🪟 Çift Camlı Pencere','🔐 Çelik Kapı','🔔 Alarm Sistemi',
    '📺 Uydu / Kablo TV','🌐 İnternet Altyapısı','🎨 Yerden Isıtma',
    '🪵 Parke / Laminat','🪨 Seramik / Granit','📦 Depo / Kiler',
    '🏠 Bodrum (Özel)','🖥️ Görüntülü Diafon','🤖 Akıllı Ev Sistemi'
  ],
  disOzellikler: [
    '🛗 Asansör','🅿️ Kapalı Otopark','🚗 Açık Otopark',
    '🏊 Yüzme Havuzu (Açık)','🏊 Yüzme Havuzu (Kapalı)',
    '🏋️ Fitness / Spor Salonu','🧖 Sauna / Hamam',
    '👮 Güvenlik / Kapıcı','📷 Kamera Sistemi','🌳 Yeşil Alan',
    '🏸 Tenis Kortu','⚽ Basketbol / Spor Alanı','🧒 Çocuk Oyun Parkı',
    '🏪 Site İçi Market','⚡ Jeneratör','♿ Engelli Erişimi'
  ],
};

/** Arsa form kriterleri */
const ARSA_KRITERLER = {
  tapuTurleri: [
    'Müstakil Tapulu','Hisseli Tapu','Özel Mülk',
    'Hazine','Belediye','Vakıf Tapusu','Tarla Tapusu'
  ],
  imarDurumlari: [
    'İmarlı','İmarsız','Ada İmarlı','Köy İmarlı','Konut İmarlı',
    'Ticaret İmarlı','Sanayi İmarlı','Turizm İmarlı','Tarla / Tarım Arazisi'
  ],
  gabari: ['1 Kat','2 Kat','3 Kat','4 Kat','5 Kat','6+ Kat','Serbest'],
  krediUygunluk: ['Evet','Hayır'],
  ozellikler: [
    '🔲 Köşe Parsel','🛣️ Yola Cepheli','🌊 Denize Cepheli / Yakın',
    '🏞️ Göle / Nehre Cepheli','🌲 Ormana Yakın','🏔️ Manzaralı',
    '⚡ Elektrik Var','💧 Su Var','🔥 Doğalgaz Bağlantısı',
    '🛣️ Yol Bağlantısı (Asfalt)','🧱 Çevre Duvarı Var','🏗️ Ruhsatlı Yapı Mevcut',
    '💧 Sulak / Sulama Kanalı','🌳 Ağaçlık','🫒 Zeytinlik',
    '🍇 Bağ / Bahçe','🌾 Tarıma Elverişli','⬛ Düz Arazi','📐 Eğimli Arazi'
  ],
};

/** İşyeri form kriterleri */
const ISYERI_KRITERLER = {
  isyeriTurleri: [
    'Dükkan / Mağaza','Ofis / Büro','Depo / Antrepo',
    'Fabrika / Atölye','Restoran / Kafe (Hazır)','Showroom',
    'Fırın (Hazır)','Kuaför (Hazır)','Eczane Devir',
    'Klinik / Muayenehane','Eğitim Kurumu','Diğer'
  ],
  katlar: [
    'Bodrum','Zemin (Cadde)','1. Kat','2. Kat',
    '3. Kat','4. Kat','5. Kat ve üzeri','Çatı Katı'
  ],
  binaYasi: ['0 (Sıfır)','1-5 Yıl','6-10 Yıl','11-15 Yıl','16-20 Yıl','21+ Yıl'],
  isitmaTipleri: ['Merkezi','Kombi','Klima','Yerden Isıtma','Soba','Yok'],
  kullanimDurumu: ['Boş','Kiracılı','Mal Sahibi Kullanıyor','Devir (Halihazır Müşterili)'],
  tapuDurumu: ['Kat Mülkiyeti','Kat İrtifakı','Hisseli Tapu','Arsa Tapusu'],
  cephe: ['Caddeye Cepheli','Köşe Dükkan','Yan Sokak','AVM İçi','Pasaj İçi'],
  ozellikler: [
    '🛗 Asansör','🅿️ Otopark','💡 Aydınlatma Sistemi',
    '❄️ Klima / İklimlendirme','🔒 Güvenlik Sistemi','📷 Kamera',
    '♿ Engelli Erişimi','🔥 Doğalgaz Bağlantısı','⚡ 3 Fazlı Elektrik',
    '🚿 WC / Lavabo','🏪 Vitrin','🚚 Yükleme Rampası'
  ],
};

// ─────────────────────────────────────────────
// 3. VASITA (iskelet — marka/model sonra eklenecek)
// ─────────────────────────────────────────────
const VASITA_KATEGORILER = {
  /**
   * Sahibinden hiyerarşisi:
   * Vasıta → Alt Kategori → Marka → Model → Seri/Kasa → Donanım Paketi
   * Şimdilik sadece üst 2 seviye tanımlı.
   */
  altKategoriler: [
    { id: 'otomobil',    label: '🚗 Otomobil'           },
    { id: 'suv',         label: '🚙 SUV & Arazi'         },
    { id: 'ticari',      label: '🚐 Ticari Araç'         },
    { id: 'motosiklet',  label: '🏍️ Motosiklet'          },
    { id: 'karavan',     label: '🏕️ Karavan'             },
    { id: 'tekne',       label: '⛵ Tekne / Deniz Aracı' },
    { id: 'tarim',       label: '🚜 Tarım / İş Makinesi' },
    { id: 'klasik',      label: '🏎️ Klasik / Koleksiyon' },
  ],
  // Markalar ve modeller ileride buraya eklenecek:
  // markalar: { otomobil: [...], suv: [...], ... }

  /** Ortak vasıta form kriterleri */
  kriterler: {
    yakitTipleri: ['Benzin','Dizel','LPG','Elektrik','Hibrit','Hibrit (Şarj Edilebilir)'],
    vitesler: ['Manuel','Otomatik','Yarı Otomatik','CVT'],
    renkler: [
      'Beyaz','Siyah','Gri','Gümüş','Kırmızı','Mavi','Yeşil',
      'Sarı','Turuncu','Kahverengi','Bej','Mor','Altın'
    ],
    kasaTipleri: [
      'Sedan','Hatchback','Station Wagon','SUV','Crossover',
      'Coupe','Cabriolet','Minivan','Pick-up','Panel Van'
    ],
    durumlar: ['Sıfır','İkinci El','Hasar Kayıtlı'],
    garantiDurumlari: ['Garantili','Garantisiz'],
    takaslar: ['Takas Var','Takas Yok'],
    ozellikler: [
      '❄️ Klima','🔥 Isıtmalı Koltuk','🔊 Ses Sistemi',
      '📱 Apple CarPlay / Android Auto','🅿️ Park Sensörü',
      '📷 Geri Görüş Kamerası','🛞 Deri Döşeme','🌐 Navigasyon',
      '💡 LED Far','⚡ Şarj Soketi','🔑 Keyless Entry',
      '🚗 Cruise Control','🛡️ Hava Yastığı (Çoklu)',
      '🔒 Merkezi Kilit','🪟 Elektrikli Cam','🪞 Elektrikli Ayna'
    ],
  },
};

// ─────────────────────────────────────────────
// 4. İKİNCİ EL (iskelet)
// ─────────────────────────────────────────────
const IKINCI_EL_KATEGORILER = [
  { id: 'elektronik',   label: '📱 Elektronik & Telefon'     },
  { id: 'bilgisayar',   label: '💻 Bilgisayar & Tablet'      },
  { id: 'beyazesya',    label: '🧺 Beyaz Eşya'               },
  { id: 'mobilya',      label: '🛋️ Mobilya & Dekorasyon'     },
  { id: 'giyim',        label: '👗 Giyim & Aksesuar'          },
  { id: 'spor',         label: '⚽ Spor & Outdoor'            },
  { id: 'kitap',        label: '📚 Kitap & Müzik & Film'      },
  { id: 'oyuncak',      label: '🧸 Oyuncak & Bebek Ürünleri' },
  { id: 'hobi',         label: '🎨 Hobi & Koleksiyon'         },
  { id: 'yardimci',     label: '🔧 Alet & Ekipman'            },
  { id: 'diger',        label: '📦 Diğer'                     },
];

// ─────────────────────────────────────────────
// 5. HİZMETLER (iskelet)
// ─────────────────────────────────────────────
const HIZMET_KATEGORILER = [
  { id: 'tadilat',      label: '🔨 Tadilat & Tamirat'        },
  { id: 'temizlik',     label: '🧹 Ev & İşyeri Temizliği'    },
  { id: 'tasima',       label: '🚛 Nakliyat & Taşımacılık'   },
  { id: 'boya',         label: '🎨 Boyacı'                   },
  { id: 'tesisatci',    label: '🔧 Tesisatçı'                 },
  { id: 'elektrikci',   label: '⚡ Elektrikçi'                },
  { id: 'marangoz',     label: '🪵 Marangoz & Doğramacı'     },
  { id: 'bahce',        label: '🌱 Bahçıvan & Peyzaj'        },
  { id: 'guvenlik',     label: '🔒 Güvenlik Sistemleri'      },
  { id: 'iklimlendirme',label: '❄️ Klima & Isıtma'           },
  { id: 'cocukbakimi',  label: '👶 Çocuk Bakımı'             },
  { id: 'yasli',        label: '🧓 Yaşlı & Hasta Bakımı'     },
  { id: 'ders',         label: '📖 Özel Ders & Eğitim'       },
  { id: 'diger',        label: '📋 Diğer Hizmetler'          },
];

// ─────────────────────────────────────────────
// YARDIMCI FONKSİYONLAR
// ─────────────────────────────────────────────

/**
 * Bir select elementini verilen dizi ile doldurur.
 * @param {string} selectId  - select elementinin id'si
 * @param {string[]} options - seçenek metinleri
 * @param {string} placeholder - ilk boş seçenek metni
 */
function kategoriSelectDoldur(selectId, options, placeholder = 'Seçiniz') {
  const el = document.getElementById(selectId);
  if (!el) return;
  el.innerHTML = `<option value="">${placeholder}</option>` +
    options.map(o => `<option>${o}</option>`).join('');
}

/**
 * Satıcı formundaki emlak tipi butonlarını EMLAK_TIPLERI'nden oluşturur.
 * @param {string} containerId - sec-row div'inin id'si
 * @param {Function} onClickFn - tıklama fonksiyonu (string olarak, onclick attr için)
 */
function emlakTipleriniOlustur(containerId = 'emlakTipi', onClickFn = 'secEmlakBtn(this)') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EMLAK_TIPLERI.map((tip, i) =>
    `<button class="sec-btn${i === 0 ? ' active' : ''}" data-tip="${tip.grup}" onclick="${onClickFn}">${tip.label}</button>`
  ).join('');
}

/**
 * Alıcı formundaki emlak tipi liste öğelerini EMLAK_TIPLERI_ALICI'dan oluşturur.
 * @param {string} containerId - coklu-liste div'inin id'si
 * @param {string} onClickFn  - onclick attribute değeri
 */
function aliciEmlakListesiOlustur(containerId = 'aliciEmlakListe', onClickFn = 'aliciEmlakSec(this)') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = EMLAK_TIPLERI_ALICI.map(tip =>
    `<div class="coklu-item" data-grup="${tip.grup}" onclick="${onClickFn}">
      <span>${tip.label}</span><span class="coklu-check"></span>
    </div>`
  ).join('');
}

/**
 * Tüm Emlak form select'lerini kategoriler.js'deki verilerle doldurur.
 * ilan-ver.html sayfa yüklenince çağrılır.
 */
function emlakSelectleriniDoldur() {
  // Konut
  kategoriSelectDoldur('odaSayisi',       KONUT_KRITERLER.odaSayisi);
  kategoriSelectDoldur('banyoSayisi',     KONUT_KRITERLER.banyoSayisi);
  kategoriSelectDoldur('katSec',          KONUT_KRITERLER.katlar,        'Seçiniz');
  kategoriSelectDoldur('katSayisi',       KONUT_KRITERLER.binaKatSayisi, 'Seçiniz');
  kategoriSelectDoldur('binaYasi',        KONUT_KRITERLER.binaYasi);
  kategoriSelectDoldur('isitmaSel',       KONUT_KRITERLER.isitmaTipleri);
  kategoriSelectDoldur('kullanimDurumu',  KONUT_KRITERLER.kullanimDurumu);
  kategoriSelectDoldur('tapuDurumu',      KONUT_KRITERLER.tapuDurumu);
  kategoriSelectDoldur('esyaDurumu',      KONUT_KRITERLER.esyaDurumu);
  kategoriSelectDoldur('krediUygun',      KONUT_KRITERLER.krediUygunluk);

  // Arsa
  kategoriSelectDoldur('arsaTapuTuru',    ARSA_KRITERLER.tapuTurleri);
  kategoriSelectDoldur('imarDurumu',      ARSA_KRITERLER.imarDurumlari);
  kategoriSelectDoldur('gabari',          ARSA_KRITERLER.gabari);
  kategoriSelectDoldur('arsaKrediUygun',  ARSA_KRITERLER.krediUygunluk);

  // İşyeri
  kategoriSelectDoldur('isyeriTuru',            ISYERI_KRITERLER.isyeriTurleri);
  kategoriSelectDoldur('isyeriKat',             ISYERI_KRITERLER.katlar);
  kategoriSelectDoldur('isyeriBinaYasi',        ISYERI_KRITERLER.binaYasi);
  kategoriSelectDoldur('isyeriIsitma',          ISYERI_KRITERLER.isitmaTipleri);
  kategoriSelectDoldur('isyeriKullanimDurumu',  ISYERI_KRITERLER.kullanimDurumu);
  kategoriSelectDoldur('isyeriTapuDurumu',      ISYERI_KRITERLER.tapuDurumu);
  kategoriSelectDoldur('isyeriCephe',           ISYERI_KRITERLER.cephe);
}

// ─────────────────────────────────────────────
// 6. KATEGORİ AĞACI (kategoriler editöründen üretildi)
// ─────────────────────────────────────────────
/**
 * Sahibinden.com benzeri tam hiyerarşik kategori ağacı.
 * Yapı: [ { id, name, children?, fields? }, ... ]
 * Bu veri kategoriler editöründen indirilip buraya yapıştırılarak güncellenir.
 */
const KATEGORI_AGACI = [
  {
    "id": "cat_emlak",
    "name": "Emlak",
    "children": [
      {
        "id": "cat_konut",
        "name": "Konut",
        "children": [
          {
            "id": "cat_satilik",
            "name": "Satılık",
            "children": [
              {
                "id": "k_sat_daire",
                "name": "Daire",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_sat_rezidans",
                "name": "Rezidans",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_sat_mustikel",
                "name": "Müstakil Ev",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_sat_villa",
                "name": "Villa",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_sat_ciftlik",
                "name": "Çiftlik Evi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc1",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc2",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Boş",
                      "Kiracılı",
                      "Ev Sahibi Kullanıyor"
                    ]
                  }
                ]
              },
              {
                "id": "k_sat_kosk",
                "name": "Köşk & Konak",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc1",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc2",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Boş",
                      "Kiracılı",
                      "Ev Sahibi Kullanıyor"
                    ]
                  }
                ]
              },
              {
                "id": "k_sat_yali",
                "name": "Yalı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc1",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc2",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Boş",
                      "Kiracılı",
                      "Ev Sahibi Kullanıyor"
                    ]
                  }
                ]
              },
              {
                "id": "k_sat_yalidaire",
                "name": "Yalı Dairesi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_sat_yazlik",
                "name": "Yazlık",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_sat_kooperatif",
                "name": "Kooperatif",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          },
          {
            "id": "cat_kiralik",
            "name": "Kiralık",
            "children": [
              {
                "id": "k_kir_daire",
                "name": "Daire",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_kir_rezidans",
                "name": "Rezidans",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_kir_mustikel",
                "name": "Müstakil Ev",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_kir_villa",
                "name": "Villa",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_kir_ciftlik",
                "name": "Çiftlik Evi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc1",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc2",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Boş",
                      "Kiracılı",
                      "Ev Sahibi Kullanıyor"
                    ]
                  }
                ]
              },
              {
                "id": "k_kir_kosk",
                "name": "Köşk & Konak",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc1",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc2",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Boş",
                      "Kiracılı",
                      "Ev Sahibi Kullanıyor"
                    ]
                  }
                ]
              },
              {
                "id": "k_kir_yali",
                "name": "Yalı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc1",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kc2",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Boş",
                      "Kiracılı",
                      "Ev Sahibi Kullanıyor"
                    ]
                  }
                ]
              },
              {
                "id": "k_kir_yalidaire",
                "name": "Yalı Dairesi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          },
          {
            "id": "cat_turistik",
            "name": "Turistik Günlük Kiralık",
            "children": [
              {
                "id": "k_tur_daire",
                "name": "Daire",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat (Gecelik)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "kd2",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "kd3",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "kd4",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd5",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "kd6",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd7",
                    "name": "Yatak Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd11",
                    "name": "İzin Belge No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  }
                ]
              },
              {
                "id": "k_tur_rezidans",
                "name": "Rezidans",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat (Gecelik)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "kd2",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "kd3",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "kd4",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd5",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "kd6",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd7",
                    "name": "Yatak Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd11",
                    "name": "İzin Belge No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  }
                ]
              },
              {
                "id": "k_tur_mustikel",
                "name": "Müstakil Ev",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat (Gecelik)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "kd2",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "kd3",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "kd4",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd5",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "kd6",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd7",
                    "name": "Yatak Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd11",
                    "name": "İzin Belge No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  }
                ]
              },
              {
                "id": "k_tur_villa",
                "name": "Villa",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat (Gecelik)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "kd2",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "kd3",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "kd4",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd5",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "kd6",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd7",
                    "name": "Yatak Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd11",
                    "name": "İzin Belge No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  }
                ]
              },
              {
                "id": "k_tur_devremulk",
                "name": "Devre Mülk",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "ke1",
                    "name": "Devre Mülk Adı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "ke2",
                    "name": "Dönem",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ke3",
                    "name": "Süre",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ke4",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "ke5",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ke6",
                    "name": "Yatak Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ke7",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ke8",
                    "name": "İzin Belge No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  }
                ]
              },
              {
                "id": "k_tur_apart",
                "name": "Apart & Pansiyon",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat (Gecelik)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "kd2",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "kd3",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "kd4",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd5",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "kd6",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd7",
                    "name": "Yatak Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kd8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kd11",
                    "name": "İzin Belge No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "cat_devren_konut",
            "name": "Devren Satılık Konut",
            "children": [
              {
                "id": "k_dev_daire",
                "name": "Daire",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kf1",
                    "name": "Kalan Ödeme Tutarı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kf2",
                    "name": "Kalan Taksit",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "k_dev_villa",
                "name": "Villa",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "kf1",
                    "name": "Kalan Ödeme Tutarı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "kf2",
                    "name": "Kalan Taksit",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_isyeri",
        "name": "İş Yeri",
        "children": [
          {
            "id": "cat_iy_satilik",
            "name": "Satılık",
            "children": [
              {
                "id": "iy_akaryakit",
                "name": "Akaryakıt İstasyonu",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_pompa",
                    "name": "Pompa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_gunluk_satis",
                    "name": "Günlük Satış (Litre)",
                    "type": "number",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_apart_daire",
                "name": "Apartman Dairesi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_atolye",
                "name": "Atölye",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_avm",
                "name": "AVM",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor_sayisi",
                    "name": "Asansör Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark_kapasite",
                    "name": "Otopark Kapasitesi",
                    "type": "number",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_bufe",
                "name": "Büfe",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_buro",
                "name": "Büro & Ofis",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_ciftlik",
                "name": "Çiftlik",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_depo",
                "name": "Depo & Antrepo",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_dugun",
                "name": "Düğün Salonu",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_dukkan",
                "name": "Dükkan & Mağaza",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_enerji",
                "name": "Enerji Santrali",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_tip",
                    "name": "Tesis Tipi",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Biyokütle & Biyogaz",
                      "Güneş Enerjisi",
                      "Hidroelektrik",
                      "Jeotermal",
                      "Rüzgar Enerjisi",
                      "Termik"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kullanim",
                    "name": "Kullanım Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Aktif",
                      "Pasif"
                    ]
                  }
                ]
              },
              {
                "id": "iy_fabrika",
                "name": "Fabrika & Üretim Tesisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_adedi",
                    "name": "Bina Adedi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_garaj",
                "name": "Garaj & Park Yeri",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_imalathane",
                "name": "İmalathane",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_ish",
                "name": "İş Hanı Katı & Ofisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kafe",
                "name": "Kafe & Bar",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kantin",
                "name": "Kantin",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir",
                "name": "Kır & Kahvaltı Bahçesi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kiraathane",
                "name": "Kıraathane",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_komple",
                "name": "Komple Bina",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_daire_sayisi",
                    "name": "Daire/Birim Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_maden",
                "name": "Maden Ocağı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_otopark",
                "name": "Otopark & Garaj",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_otoyikama",
                "name": "Oto Yıkama & Kuaför",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_pastane",
                "name": "Pastane, Fırın & Tatlıcı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_pazar",
                "name": "Pazar Yeri",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_plaza",
                "name": "Plaza",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor_sayisi",
                    "name": "Asansör Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark_kapasite",
                    "name": "Otopark Kapasitesi",
                    "type": "number",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_plaza_kati",
                "name": "Plaza Katı & Ofisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_radyo",
                "name": "Radyo İstasyonu & TV Kanalı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_restoran",
                "name": "Restoran & Lokanta",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_rezidans_kati",
                "name": "Rezidans Katı & Ofisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_saglik",
                "name": "Sağlık Merkezi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Muayene/Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_sinema",
                "name": "Sinema & Konferans Salonu",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_spa",
                "name": "SPA, Hamam & Sauna",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_havuz",
                    "name": "Havuz",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_spor",
                "name": "Spor Tesisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_havuz",
                    "name": "Havuz",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_villa",
                "name": "Villa",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_yurt",
                "name": "Yurt",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          },
          {
            "id": "cat_iy_kiralik",
            "name": "Kiralık",
            "children": [
              {
                "id": "iy_kir_akaryakit",
                "name": "Akaryakıt İstasyonu",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_pompa",
                    "name": "Pompa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_gunluk_satis",
                    "name": "Günlük Satış (Litre)",
                    "type": "number",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_buro",
                "name": "Büro & Ofis",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_depo",
                "name": "Depo & Antrepo",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_dugun",
                "name": "Düğün Salonu",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_dukkan",
                "name": "Dükkan & Mağaza",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_fabrika",
                "name": "Fabrika & Üretim Tesisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_adedi",
                    "name": "Bina Adedi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_kafe",
                "name": "Kafe & Bar",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_ish",
                "name": "İş Hanı Katı & Ofisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_plaza_kati",
                "name": "Plaza Katı & Ofisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_restoran",
                "name": "Restoran & Lokanta",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_masa",
                    "name": "Masa Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_saglik",
                "name": "Sağlık Merkezi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_oda",
                    "name": "Muayene/Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_spor",
                "name": "Spor Tesisi",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kapasite",
                    "name": "Kişi Kapasitesi",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kat",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_havuz",
                    "name": "Havuz",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "iy_kir_depo2",
                "name": "Soğuk Hava Deposu",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_giris_yukseklik",
                    "name": "Giriş Yüksekliği (m)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_acik_alan",
                    "name": "Açık Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_kapali_alan",
                    "name": "Kapalı Alan (m²)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_arsa",
        "name": "Arsa",
        "children": [
          {
            "id": "cat_arsa_satilik",
            "name": "Satılık",
            "children": [
              {
                "id": "arsa_konut_imarlı",
                "name": "Konut İmarlı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar1",
                    "name": "İmar Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Konut",
                      "Ticari",
                      "Sanayi",
                      "Tarım",
                      "Turizm",
                      "Orman",
                      "Muhtelif"
                    ]
                  },
                  {
                    "id": "ar2",
                    "name": "Ada No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar3",
                    "name": "Parsel No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar4",
                    "name": "KAKS (Emsal)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ar5",
                    "name": "Gabari",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ar6",
                    "name": "Takas",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar7",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "arsa_ticari",
                "name": "Ticari İmarlı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar1",
                    "name": "İmar Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Ticari",
                      "Konut",
                      "Sanayi",
                      "Tarım",
                      "Muhtelif"
                    ]
                  },
                  {
                    "id": "ar2",
                    "name": "Ada No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar3",
                    "name": "Parsel No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar4",
                    "name": "KAKS (Emsal)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ar5",
                    "name": "Gabari",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ar6",
                    "name": "Takas",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar7",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "arsa_tarla",
                "name": "Tarla",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar1",
                    "name": "İmar Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Tarım",
                      "Muhtelif",
                      "İmarsız"
                    ]
                  },
                  {
                    "id": "ar2",
                    "name": "Ada No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar3",
                    "name": "Parsel No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar8",
                    "name": "Sulama İmkânı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar7",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "arsa_bahce",
                "name": "Bağ & Bahçe",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar2",
                    "name": "Ada No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar3",
                    "name": "Parsel No",
                    "type": "text",
                    "required": false
                  },
                  {
                    "id": "ar8",
                    "name": "Sulama İmkânı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ar7",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_bina",
        "name": "Bina",
        "children": [
          {
            "id": "cat_bina_satilik",
            "name": "Satılık",
            "children": [
              {
                "id": "bina_apartman",
                "name": "Apartman",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "bn1",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "bn2",
                    "name": "Daire Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "bn3",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "bn4",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yok"
                    ]
                  },
                  {
                    "id": "bn5",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "bn6",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "bn7",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "bn8",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "bina_villa",
                "name": "Villa",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka1",
                    "name": "Oda Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Stüdyo (1+0)",
                      "1+1",
                      "2+1",
                      "3+1",
                      "4+1",
                      "5+1",
                      "6+1 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka2",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka3",
                    "name": "Bulunduğu Kat",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Bodrum",
                      "Zemin",
                      "Bahçe Katı",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10 ve üzeri"
                    ]
                  },
                  {
                    "id": "ka4",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka5",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Soba",
                      "Yerden Isıtma",
                      "Klima",
                      "Yok"
                    ]
                  },
                  {
                    "id": "ka6",
                    "name": "Banyo Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka7",
                    "name": "Mutfak",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Açık Mutfak",
                      "Kapalı Mutfak",
                      "Amerikan Mutfak"
                    ]
                  },
                  {
                    "id": "ka8",
                    "name": "Balkon",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka9",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka10",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka11",
                    "name": "Eşyalı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "ka12",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "ka13",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "ka14",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "bina_is",
                "name": "İş Hanı",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_durum",
                    "name": "Yapının Durumu",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Sıfır",
                      "İkinci El",
                      "Boş",
                      "Kiracılı"
                    ]
                  },
                  {
                    "id": "iy_kredi",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_aidat",
                    "name": "Aidat (TL)",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_bina_yasi",
                    "name": "Bina Yaşı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "0 (Sıfır)",
                      "1-5",
                      "6-10",
                      "11-15",
                      "16-20",
                      "21 ve üzeri"
                    ]
                  },
                  {
                    "id": "iy_isinma",
                    "name": "Isıtma",
                    "type": "select",
                    "required": false,
                    "options": [
                      "Doğalgaz (Kombi)",
                      "Merkezi",
                      "Klima",
                      "Soba",
                      "Yerden Isıtma",
                      "Yok"
                    ]
                  },
                  {
                    "id": "iy_kat_sayisi",
                    "name": "Kat Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_daire_sayisi",
                    "name": "Daire/Birim Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "iy_asansor",
                    "name": "Asansör",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_otopark",
                    "name": "Otopark",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "iy_zemin",
                    "name": "Zemin Etüdü",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_devremulk_ana",
        "name": "Devre Mülk",
        "children": [
          {
            "id": "dm_satilik",
            "name": "Satılık",
            "fields": [
              {
                "id": "u1",
                "name": "İlan Başlığı",
                "type": "text",
                "required": true
              },
              {
                "id": "u2",
                "name": "Açıklama",
                "type": "text",
                "required": true
              },
              {
                "id": "u3",
                "name": "Fiyat",
                "type": "number",
                "required": true
              },
              {
                "id": "ke1",
                "name": "Devre Mülk Adı",
                "type": "text",
                "required": true
              },
              {
                "id": "ke2",
                "name": "Dönem",
                "type": "text",
                "required": false
              },
              {
                "id": "ke3",
                "name": "Süre",
                "type": "text",
                "required": false
              },
              {
                "id": "u4",
                "name": "m² (Brüt)",
                "type": "number",
                "required": false
              },
              {
                "id": "ke4",
                "name": "Oda Sayısı",
                "type": "select",
                "required": false,
                "options": [
                  "1+1",
                  "2+1",
                  "3+1",
                  "4+1"
                ]
              },
              {
                "id": "ke5",
                "name": "Kişi Kapasitesi",
                "type": "number",
                "required": false
              },
              {
                "id": "ke6",
                "name": "Yatak Sayısı",
                "type": "number",
                "required": false
              },
              {
                "id": "ke7",
                "name": "Banyo Sayısı",
                "type": "number",
                "required": false
              },
              {
                "id": "ke8",
                "name": "İzin Belge No",
                "type": "text",
                "required": false
              },
              {
                "id": "u8",
                "name": "Kimden",
                "type": "select",
                "required": true,
                "options": [
                  "Sahibinden",
                  "Emlakçı"
                ]
              }
            ]
          },
          {
            "id": "dm_kiralik",
            "name": "Kiralık",
            "fields": [
              {
                "id": "u1",
                "name": "İlan Başlığı",
                "type": "text",
                "required": true
              },
              {
                "id": "u2",
                "name": "Açıklama",
                "type": "text",
                "required": true
              },
              {
                "id": "u3",
                "name": "Fiyat",
                "type": "number",
                "required": true
              },
              {
                "id": "ke1",
                "name": "Devre Mülk Adı",
                "type": "text",
                "required": true
              },
              {
                "id": "ke2",
                "name": "Dönem",
                "type": "text",
                "required": false
              },
              {
                "id": "ke3",
                "name": "Süre",
                "type": "text",
                "required": false
              },
              {
                "id": "u4",
                "name": "m² (Brüt)",
                "type": "number",
                "required": false
              },
              {
                "id": "ke4",
                "name": "Oda Sayısı",
                "type": "select",
                "required": false,
                "options": [
                  "1+1",
                  "2+1",
                  "3+1",
                  "4+1"
                ]
              },
              {
                "id": "ke5",
                "name": "Kişi Kapasitesi",
                "type": "number",
                "required": false
              },
              {
                "id": "ke6",
                "name": "Yatak Sayısı",
                "type": "number",
                "required": false
              },
              {
                "id": "ke7",
                "name": "Banyo Sayısı",
                "type": "number",
                "required": false
              },
              {
                "id": "ke8",
                "name": "İzin Belge No",
                "type": "text",
                "required": false
              },
              {
                "id": "u8",
                "name": "Kimden",
                "type": "select",
                "required": true,
                "options": [
                  "Sahibinden",
                  "Emlakçı"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "cat_turistik_tesis",
        "name": "Turistik Tesis",
        "children": [
          {
            "id": "cat_tt_satilik",
            "name": "Satılık",
            "children": [
              {
                "id": "tt_otel",
                "name": "Otel",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt1",
                    "name": "Yıldız Sayısı",
                    "type": "select",
                    "required": false,
                    "options": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  },
                  {
                    "id": "tt2",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt3",
                    "name": "Kapasite",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt4",
                    "name": "Havuz",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt5",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "tt_motel",
                "name": "Motel",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt2",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt3",
                    "name": "Kapasite",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt5",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "tt_pansiyon",
                "name": "Pansiyon",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt2",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt3",
                    "name": "Kapasite",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt5",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "tt_tatil",
                "name": "Tatil Köyü",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt2",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt3",
                    "name": "Kapasite",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt4",
                    "name": "Havuz",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt5",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "tt_apart",
                "name": "Apart Otel",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt2",
                    "name": "Oda Sayısı",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt3",
                    "name": "Kapasite",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt5",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              },
              {
                "id": "tt_kamp",
                "name": "Kamp & Karavan",
                "fields": [
                  {
                    "id": "u1",
                    "name": "İlan Başlığı",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u2",
                    "name": "Açıklama",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u3",
                    "name": "Fiyat",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u4",
                    "name": "m² (Brüt)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u5",
                    "name": "m² (Net)",
                    "type": "number",
                    "required": true
                  },
                  {
                    "id": "u6",
                    "name": "Tapu Durumu",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Kat Mülkiyetli",
                      "Kat İrtifaklı",
                      "Hisseli Tapu",
                      "Müstakil Tapulu",
                      "Arsa Tapulu",
                      "Kooperatif Hisseli Tapu",
                      "Yurt Dışı Tapulu",
                      "Tapu Kaydı Yok"
                    ]
                  },
                  {
                    "id": "u7",
                    "name": "Taşınmaz Numarası",
                    "type": "text",
                    "required": true
                  },
                  {
                    "id": "u8",
                    "name": "Kimden",
                    "type": "select",
                    "required": true,
                    "options": [
                      "Sahibinden",
                      "Emlakçı"
                    ]
                  },
                  {
                    "id": "u9",
                    "name": "Takaslı",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt3",
                    "name": "Kapasite",
                    "type": "number",
                    "required": false
                  },
                  {
                    "id": "tt4",
                    "name": "Havuz",
                    "type": "bool",
                    "required": false
                  },
                  {
                    "id": "tt5",
                    "name": "Krediye Uygun",
                    "type": "bool",
                    "required": false
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cat_vasita",
    "name": "Vasıta",
    "children": [
      {
        "id": "hfrsk4g",
        "name": "Otomobil",
        "children": [
          {
            "id": "v442m6v",
            "name": "Abarth",
            "children": [
              {
                "id": "rz9sywe",
                "name": "500E",
                "children": [
                  {
                    "id": "x384ze2",
                    "name": "Cabrio"
                  }
                ]
              }
            ]
          },
          {
            "id": "j1xnqme",
            "name": "Acura",
            "children": [
              {
                "id": "5fb26xy",
                "name": "ILX",
                "children": [
                  {
                    "id": "wpdc61i",
                    "name": "2.0"
                  }
                ]
              }
            ]
          },
          {
            "id": "jz390sf",
            "name": "Aion",
            "children": [
              {
                "id": "t0kca7f",
                "name": "S",
                "children": [
                  {
                    "id": "foa1546",
                    "name": "580"
                  }
                ]
              }
            ]
          },
          {
            "id": "t36lh2r",
            "name": "Alfa Romeo",
            "children": [
              {
                "id": "8vf5hk5",
                "name": "Giulia",
                "children": [
                  {
                    "id": "n4v5xn4",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "11b2j9t",
                        "name": "Competizione"
                      },
                      {
                        "id": "z88ldqm",
                        "name": "Lusso"
                      },
                      {
                        "id": "yh618xw",
                        "name": "Veloce"
                      }
                    ]
                  },
                  {
                    "id": "bfqoa3a",
                    "name": "2.0 T",
                    "children": [
                      {
                        "id": "pnb4ntn",
                        "name": "Sprint"
                      },
                      {
                        "id": "3wdf3z3",
                        "name": "Veloce"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ksrji7h",
                "name": "Giulia Quadrifoglio",
                "children": [
                  {
                    "id": "jytaiah",
                    "name": "2.9"
                  }
                ]
              },
              {
                "id": "sydtfh4",
                "name": "Giulietta",
                "children": [
                  {
                    "id": "fioc9sh",
                    "name": "1.4 TB",
                    "children": [
                      {
                        "id": "2p8hdlu",
                        "name": "Distinctive"
                      },
                      {
                        "id": "uzsozxz",
                        "name": "MultiAir Distinctive"
                      },
                      {
                        "id": "rdtbuif",
                        "name": "Multiair Progression Pluse"
                      },
                      {
                        "id": "mcu5eb3",
                        "name": "Multiair Super TCT"
                      },
                      {
                        "id": "h9o751z",
                        "name": "Progression Plus"
                      }
                    ]
                  },
                  {
                    "id": "3nv2h75",
                    "name": "1.6 JTD",
                    "children": [
                      {
                        "id": "6nkiq6k",
                        "name": "Distinctive"
                      },
                      {
                        "id": "d98biwy",
                        "name": "Giulietta"
                      },
                      {
                        "id": "kmrh6uh",
                        "name": "Progression"
                      },
                      {
                        "id": "s5awh5j",
                        "name": "Progression Plus"
                      },
                      {
                        "id": "byzmv5m",
                        "name": "Sprint"
                      },
                      {
                        "id": "wc13m6f",
                        "name": "Super TCT"
                      },
                      {
                        "id": "02xkuln",
                        "name": "TI"
                      }
                    ]
                  },
                  {
                    "id": "96brv9d",
                    "name": "1.75 TBI",
                    "children": [
                      {
                        "id": "rwt10pm",
                        "name": "Quadrifoglio Verde"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "kqt7wmv",
                "name": "145",
                "children": [
                  {
                    "id": "7ztg3mg",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "52oveik",
                        "name": "TS STD"
                      }
                    ]
                  },
                  {
                    "id": "8t3tdnm",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "j5lt5zt",
                        "name": "1.6"
                      },
                      {
                        "id": "2g8qh1b",
                        "name": "L"
                      },
                      {
                        "id": "ufygzwl",
                        "name": "TS"
                      },
                      {
                        "id": "oktdca5",
                        "name": "TS Sportivo"
                      }
                    ]
                  },
                  {
                    "id": "h6q61d9",
                    "name": "1.7"
                  },
                  {
                    "id": "uv7plg2",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "95vetnx",
                        "name": "TS QV"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "b9anc5i",
                "name": "146",
                "children": [
                  {
                    "id": "uls6clu",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "w8ih2zz",
                        "name": "TS"
                      },
                      {
                        "id": "rkuvlge",
                        "name": "TS Ritmo"
                      }
                    ]
                  },
                  {
                    "id": "d98qcy7",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "98empl3",
                        "name": "L"
                      },
                      {
                        "id": "fa958el",
                        "name": "TS"
                      }
                    ]
                  },
                  {
                    "id": "oni7wva",
                    "name": "2.0 Ti"
                  }
                ]
              },
              {
                "id": "zyzl631",
                "name": "147",
                "children": [
                  {
                    "id": "i0cwdzm",
                    "name": "1.6 TS",
                    "children": [
                      {
                        "id": "ukfbl09",
                        "name": "Black Line"
                      },
                      {
                        "id": "3l5v2yc",
                        "name": "Distinctive"
                      },
                      {
                        "id": "tj24m8r",
                        "name": "Progression"
                      }
                    ]
                  },
                  {
                    "id": "18ii2qp",
                    "name": "2.0 TS",
                    "children": [
                      {
                        "id": "4h78r24",
                        "name": "Selespeed Distinctive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "5brfm18",
                "name": "155",
                "children": [
                  {
                    "id": "4bh8lrm",
                    "name": "2.0"
                  }
                ]
              },
              {
                "id": "7eiot2y",
                "name": "156",
                "children": [
                  {
                    "id": "yc4h8k5",
                    "name": "1.6 TS",
                    "children": [
                      {
                        "id": "qqlavkg",
                        "name": "1.6 TS"
                      },
                      {
                        "id": "v7nwrju",
                        "name": "Distinctive"
                      },
                      {
                        "id": "ggu81dc",
                        "name": "Progression"
                      }
                    ]
                  },
                  {
                    "id": "8qvsh2c",
                    "name": "1.9 JTD",
                    "children": [
                      {
                        "id": "yznuv02",
                        "name": "İmpression"
                      }
                    ]
                  },
                  {
                    "id": "b85dsyi",
                    "name": "2.0 JTS",
                    "children": [
                      {
                        "id": "bhc68qm",
                        "name": "Distinctive"
                      }
                    ]
                  },
                  {
                    "id": "5dvk04m",
                    "name": "2.0 TS",
                    "children": [
                      {
                        "id": "4jildx2",
                        "name": "2.0 TS"
                      },
                      {
                        "id": "r8fm4yt",
                        "name": "Distinctive"
                      },
                      {
                        "id": "9v3abpm",
                        "name": "Executive"
                      },
                      {
                        "id": "p4kw8io",
                        "name": "Selespeed"
                      }
                    ]
                  },
                  {
                    "id": "qpyf6pv",
                    "name": "2.5",
                    "children": [
                      {
                        "id": "4jm7ezh",
                        "name": "2.5"
                      },
                      {
                        "id": "ft6vlnb",
                        "name": "Distinctive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "f3qwjd7",
                "name": "159",
                "children": [
                  {
                    "id": "vlyupo5",
                    "name": "1.8 MPI",
                    "children": [
                      {
                        "id": "nlbxxp6",
                        "name": "Distinctive"
                      },
                      {
                        "id": "8kpkmhl",
                        "name": "Distinctive Plus"
                      }
                    ]
                  },
                  {
                    "id": "fup508a",
                    "name": "1.9 JTD",
                    "children": [
                      {
                        "id": "r406trg",
                        "name": "Distinctive"
                      },
                      {
                        "id": "qvsk3po",
                        "name": "Distinctive Plus"
                      },
                      {
                        "id": "m0ehgc7",
                        "name": "Progression"
                      }
                    ]
                  },
                  {
                    "id": "zjo6ljx",
                    "name": "1.9 JTS",
                    "children": [
                      {
                        "id": "au8raiy",
                        "name": "Distinctive"
                      },
                      {
                        "id": "7cg5pus",
                        "name": "Progression"
                      }
                    ]
                  },
                  {
                    "id": "ardl39u",
                    "name": "2.4 JTD",
                    "children": [
                      {
                        "id": "x3il9yo",
                        "name": "Distinctive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "msh5901",
                "name": "164",
                "children": [
                  {
                    "id": "8k7ku9e",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "dtkm7d5",
                        "name": "TS"
                      },
                      {
                        "id": "ci97pd4",
                        "name": "Turbo"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "222nnnk",
                "name": "166",
                "children": [
                  {
                    "id": "8kuzfec",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "05pl07e",
                        "name": "TB"
                      },
                      {
                        "id": "fbsejs3",
                        "name": "TS"
                      },
                      {
                        "id": "aaoq7bm",
                        "name": "TS Distinctive"
                      }
                    ]
                  },
                  {
                    "id": "1qkax4h",
                    "name": "2.4",
                    "children": [
                      {
                        "id": "7r1rwug",
                        "name": "JTD"
                      }
                    ]
                  },
                  {
                    "id": "noh5hst",
                    "name": "3.0",
                    "children": [
                      {
                        "id": "mh75wll",
                        "name": "Sportronic"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "iza55db",
                "name": "33",
                "children": [
                  {
                    "id": "0qhfqn7",
                    "name": "1.5",
                    "children": [
                      {
                        "id": "ciju8ts",
                        "name": "Giardinetta"
                      },
                      {
                        "id": "59sllns",
                        "name": "IE"
                      }
                    ]
                  },
                  {
                    "id": "2ei5hyb",
                    "name": "1.7",
                    "children": [
                      {
                        "id": "865r2g3",
                        "name": "IE"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "5m5ue70",
                "name": "75",
                "children": [
                  {
                    "id": "kw79exe",
                    "name": "1.8 T"
                  }
                ]
              },
              {
                "id": "tmurasv",
                "name": "Brera",
                "children": [
                  {
                    "id": "5go6507",
                    "name": "2.2",
                    "children": [
                      {
                        "id": "iq8cyj2",
                        "name": "JTS"
                      },
                      {
                        "id": "p5sf5qm",
                        "name": "JTS Sky Window"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "85amt3k",
                "name": "GT",
                "children": [
                  {
                    "id": "vp831s9",
                    "name": "1.9 JTD",
                    "children": [
                      {
                        "id": "b0z3r0o",
                        "name": "Q2"
                      }
                    ]
                  },
                  {
                    "id": "iwj8trd",
                    "name": "2.0 JTS",
                    "children": [
                      {
                        "id": "hzaahkj",
                        "name": "Dis. Selespeed"
                      },
                      {
                        "id": "pcz6f98",
                        "name": "Distinctive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "n1pr2g5",
                "name": "GTV",
                "children": [
                  {
                    "id": "h7357i6",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "0q434e0",
                        "name": "TB"
                      },
                      {
                        "id": "4g280xo",
                        "name": "TS"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "zda2en3",
                "name": "Mito",
                "children": [
                  {
                    "id": "pprsr3l",
                    "name": "1.3 JTD",
                    "children": [
                      {
                        "id": "ruehly5",
                        "name": "City"
                      }
                    ]
                  },
                  {
                    "id": "ypsqq1l",
                    "name": "1.4 T",
                    "children": [
                      {
                        "id": "0vjshvu",
                        "name": "Distinctive"
                      },
                      {
                        "id": "959qawf",
                        "name": "MultiAir Distinctive"
                      },
                      {
                        "id": "8rvwxp0",
                        "name": "MultiAir Quadrifologlio Verde"
                      },
                      {
                        "id": "ksdbhpo",
                        "name": "MultiAir TCT"
                      },
                      {
                        "id": "bjat93h",
                        "name": "MultiAir TCT Sportivo"
                      },
                      {
                        "id": "02tc2dc",
                        "name": "Progression"
                      }
                    ]
                  },
                  {
                    "id": "ebrwpgq",
                    "name": "1.6 JTD",
                    "children": [
                      {
                        "id": "foen23p",
                        "name": "Distinctive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "700s0dj",
                "name": "Spider",
                "children": [
                  {
                    "id": "dp9w0tx",
                    "name": "2.0 TS"
                  },
                  {
                    "id": "1dh6ycv",
                    "name": "2.2 JTS"
                  }
                ]
              }
            ]
          },
          {
            "id": "akdccpe",
            "name": "Alpine",
            "children": [
              {
                "id": "y9dmdgn",
                "name": "A290",
                "children": [
                  {
                    "id": "btiizz1",
                    "name": "GT"
                  },
                  {
                    "id": "i1nu965",
                    "name": "GT Performance"
                  },
                  {
                    "id": "n22789z",
                    "name": "GTS"
                  }
                ]
              }
            ]
          },
          {
            "id": "jag8x6s",
            "name": "Anadol",
            "children": [
              {
                "id": "xnqfese",
                "name": "A",
                "children": [
                  {
                    "id": "qa2ofxj",
                    "name": "A2"
                  },
                  {
                    "id": "34xxbmk",
                    "name": "A2 SL"
                  }
                ]
              }
            ]
          },
          {
            "id": "nssxk01",
            "name": "Arora",
            "children": [
              {
                "id": "h65anhd",
                "name": "S1"
              }
            ]
          },
          {
            "id": "g9jxlb2",
            "name": "Aston Martin",
            "children": [
              {
                "id": "kdyk7os",
                "name": "Cygnet",
                "children": [
                  {
                    "id": "uj6wky0",
                    "name": "1.33 VVT-i"
                  }
                ]
              },
              {
                "id": "e8zh5o8",
                "name": "DB11",
                "children": [
                  {
                    "id": "6e866fb",
                    "name": "Coupe"
                  }
                ]
              },
              {
                "id": "msglfd8",
                "name": "DB12",
                "children": [
                  {
                    "id": "1w73fvj",
                    "name": "Volante"
                  }
                ]
              },
              {
                "id": "tihgcel",
                "name": "DB7",
                "children": [
                  {
                    "id": "bvmfyys",
                    "name": "Copue"
                  },
                  {
                    "id": "jwlnbyp",
                    "name": "Volante"
                  }
                ]
              },
              {
                "id": "5lvbgkg",
                "name": "DB9",
                "children": [
                  {
                    "id": "ffg4o8k",
                    "name": "Coupe"
                  },
                  {
                    "id": "bu5g866",
                    "name": "GT 007 Bond Edition"
                  }
                ]
              },
              {
                "id": "waej085",
                "name": "DBS",
                "children": [
                  {
                    "id": "sgkbwvw",
                    "name": "DBC Coupe"
                  }
                ]
              },
              {
                "id": "c480qil",
                "name": "Rapide",
                "children": [
                  {
                    "id": "3qux9ec",
                    "name": "V12 Rapide"
                  },
                  {
                    "id": "jhc842k",
                    "name": "V12 Rapide S"
                  },
                  {
                    "id": "jwpbfx1",
                    "name": "V12 Rapide AMR"
                  }
                ]
              },
              {
                "id": "dn8h8n4",
                "name": "Vanquish",
                "children": [
                  {
                    "id": "8oung4t",
                    "name": "V12"
                  }
                ]
              },
              {
                "id": "eyxn1se",
                "name": "Vantage",
                "children": [
                  {
                    "id": "blebzyt",
                    "name": "V8 Vantage"
                  },
                  {
                    "id": "62yqukj",
                    "name": "V8 Vantage F1 Edition"
                  },
                  {
                    "id": "ppd9f4f",
                    "name": "V8 Vantage N420C"
                  },
                  {
                    "id": "un5nyeh",
                    "name": "V8 Vantage Roadster"
                  },
                  {
                    "id": "6g2f7ku",
                    "name": "V8 Vantage S"
                  }
                ]
              }
            ]
          },
          {
            "id": "5xo4gak",
            "name": "Audi",
            "children": [
              {
                "id": "4w9dlw6",
                "name": "A1",
                "children": [
                  {
                    "id": "h9z5fmd",
                    "name": "1.4 TFSI",
                    "children": [
                      {
                        "id": "e3cnzo6",
                        "name": "Ambition"
                      },
                      {
                        "id": "3oo76gf",
                        "name": "Attraction"
                      }
                    ]
                  },
                  {
                    "id": "15xelag",
                    "name": "1.6 TDİ",
                    "children": [
                      {
                        "id": "v8nbl7l",
                        "name": "Ambition"
                      },
                      {
                        "id": "9whll2x",
                        "name": "Attraction"
                      },
                      {
                        "id": "8l8wyv0",
                        "name": "Dynamic"
                      },
                      {
                        "id": "v40vjvk",
                        "name": "S Line"
                      },
                      {
                        "id": "nimxrbn",
                        "name": "Sport"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "s4x1y4o",
                "name": "A3",
                "children": [
                  {
                    "id": "e7w0xll",
                    "name": "A3 Cabrio",
                    "children": [
                      {
                        "id": "onzl6r4",
                        "name": "35 TFSİ",
                        "children": [
                          {
                            "id": "q1ixau4",
                            "name": "Design"
                          },
                          {
                            "id": "hb0n52m",
                            "name": "Sport"
                          }
                        ]
                      },
                      {
                        "id": "r7tqvdf",
                        "name": "1.2 TFSİ"
                      },
                      {
                        "id": "68vueih",
                        "name": "1.4 TFSİ",
                        "children": [
                          {
                            "id": "3r3hleb",
                            "name": "Ambiente"
                          },
                          {
                            "id": "2nr3fgh",
                            "name": "Ambition"
                          },
                          {
                            "id": "l3nwpaj",
                            "name": "Attraction"
                          },
                          {
                            "id": "dzjt2th",
                            "name": "Desing Line"
                          }
                        ]
                      },
                      {
                        "id": "sklcg5u",
                        "name": "1.5 TFSİ",
                        "children": [
                          {
                            "id": "yelv4uj",
                            "name": "Desing Line"
                          },
                          {
                            "id": "wzju1me",
                            "name": "Dynamic"
                          },
                          {
                            "id": "7dbbgsg",
                            "name": "Sport Line"
                          }
                        ]
                      },
                      {
                        "id": "ruesl0u",
                        "name": "1.6"
                      },
                      {
                        "id": "4yskvr6",
                        "name": "1.8 TFSİ"
                      }
                    ]
                  },
                  {
                    "id": "ympf9ij",
                    "name": "A3 Hatchback",
                    "children": [
                      {
                        "id": "dyxcssw",
                        "name": "1.4 TFSİ",
                        "children": [
                          {
                            "id": "cknzjah",
                            "name": "1.4 TFSİ"
                          },
                          {
                            "id": "lmmold2",
                            "name": "Ambiente"
                          },
                          {
                            "id": "7bgo4h1",
                            "name": "Ambition"
                          },
                          {
                            "id": "t7c308r",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "f2lx662",
                        "name": "1.6",
                        "children": [
                          {
                            "id": "wz0fg85",
                            "name": "1.6"
                          },
                          {
                            "id": "a5jwvn5",
                            "name": "Ambiente"
                          },
                          {
                            "id": "s2f3frm",
                            "name": "Ambition"
                          },
                          {
                            "id": "hr2xyq7",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "rtov40h",
                        "name": "1.6 FSİ",
                        "children": [
                          {
                            "id": "7l35vs5",
                            "name": "1.6 FSİ"
                          }
                        ]
                      },
                      {
                        "id": "vqgev3x",
                        "name": "1.6 TDİ",
                        "children": [
                          {
                            "id": "ilp0v9a",
                            "name": "Ambiente"
                          },
                          {
                            "id": "dk2csr6",
                            "name": "Ambition"
                          },
                          {
                            "id": "s7pvgxa",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "gioh135",
                        "name": "1.8",
                        "children": [
                          {
                            "id": "b8sg3ka",
                            "name": "Ambiente"
                          },
                          {
                            "id": "09vnqtu",
                            "name": "Ambition"
                          }
                        ]
                      },
                      {
                        "id": "wzzk188",
                        "name": "1.8 T",
                        "children": [
                          {
                            "id": "1acf0gx",
                            "name": "Ambiente"
                          },
                          {
                            "id": "bpm0qov",
                            "name": "Ambition"
                          }
                        ]
                      },
                      {
                        "id": "0wawbwr",
                        "name": "1.8 TFSİ",
                        "children": [
                          {
                            "id": "doz0b69",
                            "name": "Ambition"
                          }
                        ]
                      },
                      {
                        "id": "09lnnh6",
                        "name": "1.9 TDİ",
                        "children": [
                          {
                            "id": "13zkgb8",
                            "name": "Attraction"
                          },
                          {
                            "id": "laj1fz6",
                            "name": "S-Line"
                          }
                        ]
                      },
                      {
                        "id": "o11mbmd",
                        "name": "2.0 FSİ",
                        "children": [
                          {
                            "id": "kusegsj",
                            "name": "Ambition"
                          },
                          {
                            "id": "w8asipz",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "tbtob2w",
                        "name": "2.0 TDİ",
                        "children": [
                          {
                            "id": "6kzlzje",
                            "name": "2.0 TDİ"
                          },
                          {
                            "id": "0ap3lbl",
                            "name": "Ambition"
                          },
                          {
                            "id": "5q4hfes",
                            "name": "Attraction"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "jpiqbvj",
                    "name": "A3 Sedan",
                    "children": [
                      {
                        "id": "2938k6n",
                        "name": "30 TDİ",
                        "children": [
                          {
                            "id": "79izszd",
                            "name": "Design"
                          },
                          {
                            "id": "74su113",
                            "name": "Dynamic"
                          },
                          {
                            "id": "kcyuwx2",
                            "name": "Sport"
                          }
                        ]
                      },
                      {
                        "id": "k88w8qm",
                        "name": "30 TFSİ",
                        "children": [
                          {
                            "id": "iaeez2y",
                            "name": "Advanced"
                          },
                          {
                            "id": "axjxsoe",
                            "name": "Dynamic"
                          },
                          {
                            "id": "bw1h5r7",
                            "name": "S-Line"
                          },
                          {
                            "id": "eiw3nbl",
                            "name": "Sport"
                          }
                        ]
                      },
                      {
                        "id": "j5mpo62",
                        "name": "35 TFSİ",
                        "children": [
                          {
                            "id": "npgn1cj",
                            "name": "Advanced"
                          },
                          {
                            "id": "vlky5ry",
                            "name": "Desing"
                          },
                          {
                            "id": "d8u7j6i",
                            "name": "Dynamic"
                          },
                          {
                            "id": "sw17zgi",
                            "name": "S Line"
                          },
                          {
                            "id": "nmg2ju6",
                            "name": "Sport"
                          }
                        ]
                      },
                      {
                        "id": "59bdyfg",
                        "name": "1.0 TFSİ",
                        "children": [
                          {
                            "id": "zd55ijp",
                            "name": "1.0 TFSİ"
                          },
                          {
                            "id": "npqjp5k",
                            "name": "Design Line"
                          },
                          {
                            "id": "jki3kwn",
                            "name": "Dynamic"
                          },
                          {
                            "id": "g90clv5",
                            "name": "Sport Line"
                          }
                        ]
                      },
                      {
                        "id": "io76si8",
                        "name": "1.2 TFSİ",
                        "children": [
                          {
                            "id": "e7vbwsw",
                            "name": "Ambition"
                          },
                          {
                            "id": "yqny4nm",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "oill24q",
                        "name": "1.4 TFSİ",
                        "children": [
                          {
                            "id": "mf5nmpi",
                            "name": "Ambiante"
                          },
                          {
                            "id": "bgk2m04",
                            "name": "Ambition"
                          },
                          {
                            "id": "7m0vg9y",
                            "name": "Attraction"
                          },
                          {
                            "id": "j8haehm",
                            "name": "Dynamic"
                          }
                        ]
                      },
                      {
                        "id": "ip9qzub",
                        "name": "1.5 TFSİ",
                        "children": [
                          {
                            "id": "zk29rpc",
                            "name": "Desing Line"
                          },
                          {
                            "id": "zng359k",
                            "name": "Dynamic"
                          },
                          {
                            "id": "bkdprxs",
                            "name": "Sport Line"
                          }
                        ]
                      },
                      {
                        "id": "clgzr6s",
                        "name": "1.6 TDİ",
                        "children": [
                          {
                            "id": "euac63a",
                            "name": "1.6 TDİ"
                          },
                          {
                            "id": "56qm6g2",
                            "name": "Ambiante"
                          },
                          {
                            "id": "l5m85d3",
                            "name": "Ambition"
                          },
                          {
                            "id": "eu5rzon",
                            "name": "Attraction"
                          },
                          {
                            "id": "zy7tdoo",
                            "name": "Design Line"
                          },
                          {
                            "id": "84mytu1",
                            "name": "Dynamic"
                          },
                          {
                            "id": "crj8fs7",
                            "name": "S Line"
                          },
                          {
                            "id": "6ep18ah",
                            "name": "Sport Line"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "0v35kuv",
                    "name": "A3 Sportback",
                    "children": [
                      {
                        "id": "lgsvzch",
                        "name": "30 TDİ",
                        "children": [
                          {
                            "id": "2myzngo",
                            "name": "Desing"
                          },
                          {
                            "id": "suzh3o2",
                            "name": "Dynamic"
                          },
                          {
                            "id": "9kht1hw",
                            "name": "Sport"
                          }
                        ]
                      },
                      {
                        "id": "rnst18u",
                        "name": "30 TFSİ",
                        "children": [
                          {
                            "id": "g93uh4z",
                            "name": "Advanced"
                          },
                          {
                            "id": "l633jg2",
                            "name": "Dynamic"
                          },
                          {
                            "id": "6vlk4su",
                            "name": "S Line"
                          }
                        ]
                      },
                      {
                        "id": "sl9ja3c",
                        "name": "35 TFSİ",
                        "children": [
                          {
                            "id": "31fk8jn",
                            "name": "Advanced"
                          },
                          {
                            "id": "w4yu67h",
                            "name": "Desing"
                          },
                          {
                            "id": "999bpdx",
                            "name": "All Street"
                          },
                          {
                            "id": "yi6a0jj",
                            "name": "Dynamic"
                          },
                          {
                            "id": "gv1fomf",
                            "name": "S Line"
                          },
                          {
                            "id": "jxx90x1",
                            "name": "Sport"
                          }
                        ]
                      },
                      {
                        "id": "dslm0l3",
                        "name": "1.0 TFSİ",
                        "children": [
                          {
                            "id": "nn8jsis",
                            "name": "Design Line"
                          },
                          {
                            "id": "89s3aqx",
                            "name": "Dynamic"
                          },
                          {
                            "id": "283sznl",
                            "name": "Sport Line"
                          },
                          {
                            "id": "lig9oo3",
                            "name": "Standart"
                          }
                        ]
                      },
                      {
                        "id": "xh84rl2",
                        "name": "1.2 TFSİ",
                        "children": [
                          {
                            "id": "7wpteyv",
                            "name": "Ambiante"
                          },
                          {
                            "id": "65sa979",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "ssvuj1e",
                        "name": "1.4 TFSİ",
                        "children": [
                          {
                            "id": "osk60k5",
                            "name": "1.4 TFSİ"
                          },
                          {
                            "id": "1uum7ku",
                            "name": "Ambiante"
                          },
                          {
                            "id": "0jlkaxt",
                            "name": "Ambition"
                          },
                          {
                            "id": "zdaq0o7",
                            "name": "Attraction"
                          },
                          {
                            "id": "rzasu60",
                            "name": "Dynamic"
                          },
                          {
                            "id": "6v18mcz",
                            "name": "Sport Line"
                          }
                        ]
                      },
                      {
                        "id": "vz8jsu8",
                        "name": "1.5 TFSİ",
                        "children": [
                          {
                            "id": "dbbbm2r",
                            "name": "Design Line"
                          },
                          {
                            "id": "bn50cgz",
                            "name": "Dynamic"
                          },
                          {
                            "id": "qu02s0t",
                            "name": "S Line"
                          },
                          {
                            "id": "tgazi9e",
                            "name": "Sport Line"
                          }
                        ]
                      },
                      {
                        "id": "uhgbmkz",
                        "name": "1.6 FSİ"
                      },
                      {
                        "id": "0w2t3kz",
                        "name": "1.6 TDİ",
                        "children": [
                          {
                            "id": "83ssclz",
                            "name": "Standart"
                          },
                          {
                            "id": "lg81y5n",
                            "name": "Ambiente"
                          },
                          {
                            "id": "pzvpz39",
                            "name": "Ambition"
                          },
                          {
                            "id": "gr0kwx9",
                            "name": "Attraction"
                          },
                          {
                            "id": "87e4vxo",
                            "name": "Design Line"
                          },
                          {
                            "id": "2kczg03",
                            "name": "Dynamic"
                          },
                          {
                            "id": "opur63q",
                            "name": "Sport Line"
                          }
                        ]
                      },
                      {
                        "id": "byu95iy",
                        "name": "1.8",
                        "children": [
                          {
                            "id": "huei3cb",
                            "name": "Ambiente"
                          }
                        ]
                      },
                      {
                        "id": "1hyqfgm",
                        "name": "1.8 T",
                        "children": [
                          {
                            "id": "8kx58s9",
                            "name": "Ambiente"
                          },
                          {
                            "id": "gecuoho",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "a9n57xn",
                        "name": "1.8 TFSİ",
                        "children": [
                          {
                            "id": "8nugfop",
                            "name": "Ambition"
                          },
                          {
                            "id": "78nnn5i",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "ycyt37q",
                        "name": "2.0 TFSİ",
                        "children": [
                          {
                            "id": "czfm8gz",
                            "name": "2.0 TFSİ"
                          },
                          {
                            "id": "0s2y698",
                            "name": "Ambition Quattro"
                          }
                        ]
                      },
                      {
                        "id": "5jua2nf",
                        "name": "1.9 TDİ",
                        "children": [
                          {
                            "id": "u5xzhat",
                            "name": "1.9 TDİ"
                          }
                        ]
                      },
                      {
                        "id": "b7ylryg",
                        "name": "2.0 FSİ",
                        "children": [
                          {
                            "id": "jjvqnxy",
                            "name": "Ambition"
                          }
                        ]
                      },
                      {
                        "id": "63m9mbq",
                        "name": "2.0 TDİ",
                        "children": [
                          {
                            "id": "ok1zmq9",
                            "name": "Ambition"
                          },
                          {
                            "id": "pvo0i4x",
                            "name": "Ambition Quattro"
                          },
                          {
                            "id": "yjdh9kw",
                            "name": "Attraction"
                          }
                        ]
                      },
                      {
                        "id": "jw5x55q",
                        "name": "1.6",
                        "children": [
                          {
                            "id": "5bptm8i",
                            "name": "1.6"
                          },
                          {
                            "id": "5gm3qcq",
                            "name": "Ambition"
                          },
                          {
                            "id": "uxri36s",
                            "name": "Ambiente"
                          },
                          {
                            "id": "xkqq234",
                            "name": "Attraction"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "9szg54f",
                "name": "A4",
                "children": [
                  {
                    "id": "vclv2dw",
                    "name": "A4 Avant",
                    "children": [
                      {
                        "id": "2a0lspx",
                        "name": "35 TDİ",
                        "children": [
                          {
                            "id": "q708uqu",
                            "name": "S Line"
                          }
                        ]
                      },
                      {
                        "id": "64jlgip",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "k27autb",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "k7wkw12",
                        "name": "1.4 TFSİ"
                      },
                      {
                        "id": "3eauut1",
                        "name": "1.8"
                      },
                      {
                        "id": "w60b0bp",
                        "name": "1.8 T"
                      },
                      {
                        "id": "o75hrfy",
                        "name": "1.8 TFSİ"
                      },
                      {
                        "id": "h8gqmwx",
                        "name": "1.9 TDİ"
                      },
                      {
                        "id": "7jl7akp",
                        "name": "2.0"
                      },
                      {
                        "id": "ccfeb5y",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "dqbfrnk",
                        "name": "2.0 TDİ Design"
                      },
                      {
                        "id": "0wzdt2p",
                        "name": "2.0 TDİ Dynamic"
                      },
                      {
                        "id": "c6a3wki",
                        "name": "2.0 Quattro Design"
                      },
                      {
                        "id": "n0fqepv",
                        "name": "2.0 TDİ S Line"
                      },
                      {
                        "id": "u9v682c",
                        "name": "2.0 TDİ Sport"
                      },
                      {
                        "id": "okxq1zw",
                        "name": "2.0 TFSİ Quattro"
                      },
                      {
                        "id": "zx7px74",
                        "name": "2.0 TFSİ Quattro Dynamic"
                      },
                      {
                        "id": "06fnvan",
                        "name": "2.5 TDİ"
                      },
                      {
                        "id": "0vw8tit",
                        "name": "2.5 TDİ Quattro"
                      },
                      {
                        "id": "56hpdi9",
                        "name": "3.0 Quattro"
                      }
                    ]
                  },
                  {
                    "id": "0fc08b8",
                    "name": "A4 Cabrio",
                    "children": [
                      {
                        "id": "3wfpx9x",
                        "name": "1.8 T"
                      },
                      {
                        "id": "xavxpzy",
                        "name": "2.5 TDİ"
                      },
                      {
                        "id": "tmdwyqd",
                        "name": "3.0"
                      }
                    ]
                  },
                  {
                    "id": "38hga83",
                    "name": "A4 Sedan",
                    "children": [
                      {
                        "id": "9dafycl",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "5qjx9dh",
                            "name": "Advanced"
                          },
                          {
                            "id": "d0fyd6d",
                            "name": "Quattro Advanced"
                          },
                          {
                            "id": "jphx6ah",
                            "name": "Design"
                          },
                          {
                            "id": "fd9wsba",
                            "name": "S Line"
                          },
                          {
                            "id": "36zy1tz",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "qhbuqzr",
                        "name": "45 TFSİ",
                        "children": [
                          {
                            "id": "j0mox0o",
                            "name": "Quattro Advanced"
                          },
                          {
                            "id": "8bpe3hp",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "wwb96wm",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "znm2zyf",
                        "name": "1.4 TFSİ"
                      },
                      {
                        "id": "kiewp5r",
                        "name": "1.4 TFSİ Design"
                      },
                      {
                        "id": "bmguu31",
                        "name": "1.4 TFSİ Dynamic"
                      },
                      {
                        "id": "ism1odd",
                        "name": "1.4 TFSİ Sport"
                      },
                      {
                        "id": "nb0ax43",
                        "name": "1.6"
                      },
                      {
                        "id": "a1vdj1o",
                        "name": "1.8"
                      },
                      {
                        "id": "yjssrgd",
                        "name": "1.8"
                      },
                      {
                        "id": "lu44hup",
                        "name": "1.8 T"
                      },
                      {
                        "id": "5gvna81",
                        "name": "1.8 TFSİ"
                      },
                      {
                        "id": "1alw0x7",
                        "name": "1.8 T Quattro"
                      },
                      {
                        "id": "3awx6io",
                        "name": "1.9 TDİ"
                      },
                      {
                        "id": "evaxfu6",
                        "name": "1.9 TDİ Quattro"
                      },
                      {
                        "id": "11feoki",
                        "name": "2.0"
                      },
                      {
                        "id": "usk1kxj",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "j72kb0r",
                        "name": "2.0 TDİ Dynamic"
                      },
                      {
                        "id": "49xbidw",
                        "name": "2.0 TDİ Design"
                      },
                      {
                        "id": "a3vz642",
                        "name": "2.0 TDİ S Line"
                      },
                      {
                        "id": "piye6fe",
                        "name": "2.0 TDİ Sport"
                      },
                      {
                        "id": "a4xaxvv",
                        "name": "2.0 Quattro"
                      },
                      {
                        "id": "pedycyh",
                        "name": "2.0 TDİ Quattro Design"
                      },
                      {
                        "id": "1k21ylk",
                        "name": "2.0 TDİ Quattro Dynamic"
                      },
                      {
                        "id": "ksfgcje",
                        "name": "2.0 TDİ Quattro Sport"
                      },
                      {
                        "id": "00ejvmp",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "kphn9un",
                        "name": "2.0 TFSİ Quattro"
                      },
                      {
                        "id": "f8fnosw",
                        "name": "2.0 TFSİ Quattro S Line"
                      },
                      {
                        "id": "6jv3qep",
                        "name": "2.4"
                      },
                      {
                        "id": "4yi4zxw",
                        "name": "2.5 TDİ"
                      },
                      {
                        "id": "ag4n2sz",
                        "name": "2.5 TDİ Quattro"
                      },
                      {
                        "id": "tweng5j",
                        "name": "2.7 TDİ"
                      },
                      {
                        "id": "eq19y0d",
                        "name": "2.8 Quattro"
                      },
                      {
                        "id": "zwp82xi",
                        "name": "3.0"
                      },
                      {
                        "id": "xn7vejg",
                        "name": "3.0 Quatttro"
                      },
                      {
                        "id": "w3cg8ic",
                        "name": "3.0 TDİ Quattro"
                      },
                      {
                        "id": "wvvfil0",
                        "name": "3.2 FSİ"
                      }
                    ]
                  },
                  {
                    "id": "lpp3jbb",
                    "name": "A4 Allroad Quattro",
                    "children": [
                      {
                        "id": "pjo4pux",
                        "name": "40 TDİ"
                      },
                      {
                        "id": "i7vfoc9",
                        "name": "45 TFSİ"
                      },
                      {
                        "id": "25kmc6h",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "7jgxcxo",
                        "name": "2.0 TFSİ"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "4cvivhh",
                "name": "A5",
                "children": [
                  {
                    "id": "8hpctfm",
                    "name": "A5 Avant",
                    "children": [
                      {
                        "id": "g5jjtoa",
                        "name": "2.0 TFSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "mh0qsts",
                    "name": "A5 Cabrio",
                    "children": [
                      {
                        "id": "1a0iack",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "h52jlj2",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "1i3o6y2",
                        "name": "45 TFSİ",
                        "children": [
                          {
                            "id": "z60vcgm",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "w5ws67g",
                        "name": "1.8 TFSİ"
                      },
                      {
                        "id": "toabjw0",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "amnz0jj",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "op1gs4f",
                        "name": "2.0 TFSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "lu75gqk",
                    "name": "A5 Coupe",
                    "children": [
                      {
                        "id": "w29ijbf",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "nmc414e",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "f9varex",
                            "name": "Quattro S Line"
                          },
                          {
                            "id": "w53najd",
                            "name": "Quattro Sport"
                          }
                        ]
                      },
                      {
                        "id": "j7s3bjz",
                        "name": "45 TFSİ",
                        "children": [
                          {
                            "id": "t5qjhyy",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "u6w7hn4",
                        "name": "1.4 TFSİ Design"
                      },
                      {
                        "id": "ynbxk9w",
                        "name": "1.4 TFSİ Sport"
                      },
                      {
                        "id": "gp3syym",
                        "name": "1.8 TFSİ Sport"
                      },
                      {
                        "id": "te8mdr3",
                        "name": "1.8 TFSİ"
                      },
                      {
                        "id": "r35p9td",
                        "name": "1.8 TFSİ S Line"
                      },
                      {
                        "id": "tjm4hqd",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "9v9jn7d",
                        "name": "2.0 TDİ Quattro"
                      },
                      {
                        "id": "p27diz0",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "g7b3i67",
                        "name": "2.0 TFSİ Quattro"
                      },
                      {
                        "id": "9z2jbwg",
                        "name": "2.7 TDİ"
                      },
                      {
                        "id": "nhfs9cm",
                        "name": "3.0 TDİ Quattro"
                      },
                      {
                        "id": "817ecxs",
                        "name": "3.2 FSİ"
                      }
                    ]
                  },
                  {
                    "id": "fmwrvq7",
                    "name": "A5 Sedan",
                    "children": [
                      {
                        "id": "4hfep4a",
                        "name": "2.0 TDİ Quattro"
                      },
                      {
                        "id": "z5joeik",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "dbp2dz8",
                        "name": "2.0 TFSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "jsosegp",
                    "name": "A5 Sportback",
                    "children": [
                      {
                        "id": "0rhc0c9",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "g2fcju3",
                            "name": "Quattro Advanced"
                          },
                          {
                            "id": "rym3ycv",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "8a9tz4p",
                            "name": "Quattro S Line"
                          },
                          {
                            "id": "y0o2fx3",
                            "name": "Quattro Sport"
                          }
                        ]
                      },
                      {
                        "id": "61w7eg0",
                        "name": "45 TFSİ"
                      },
                      {
                        "id": "cpnwo32",
                        "name": "1.4 TFSİ Design"
                      },
                      {
                        "id": "0ee9qex",
                        "name": "1.4 TFSİ Dynamic"
                      },
                      {
                        "id": "qydeeh1",
                        "name": "1.4 TFSİ Sport"
                      },
                      {
                        "id": "wryquqa",
                        "name": "1.8 TFSİ"
                      },
                      {
                        "id": "i99epfr",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "i6e4k8s",
                        "name": "2.0 TDİ Quattro"
                      },
                      {
                        "id": "7v7jbuz",
                        "name": "2.0 TDİ Quattro Sports"
                      },
                      {
                        "id": "75egydn",
                        "name": "2.0 TDİ Design"
                      },
                      {
                        "id": "estbjl8",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "i9s421k",
                        "name": "2.0 TFSİ Quattro"
                      },
                      {
                        "id": "pi6m7k0",
                        "name": "3.0 TDİ Quattro"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d2oep7v",
                "name": "A6",
                "children": [
                  {
                    "id": "d2jjg4f",
                    "name": "A6 Sedan",
                    "children": [
                      {
                        "id": "2uaa7jv",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "bgrsbnn",
                            "name": "Quattro Advanced"
                          },
                          {
                            "id": "zbnypph",
                            "name": "Quattro S Line"
                          },
                          {
                            "id": "l0def49",
                            "name": "Design"
                          },
                          {
                            "id": "xg0l112",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "2wlhjn0",
                            "name": "Sport"
                          },
                          {
                            "id": "artun9u",
                            "name": "Quattro Sport"
                          }
                        ]
                      },
                      {
                        "id": "lvdymxe",
                        "name": "45 TFSİ",
                        "children": [
                          {
                            "id": "p1cotwr",
                            "name": "Quattro Sport"
                          },
                          {
                            "id": "1k575bn",
                            "name": "Quattro Advanced"
                          },
                          {
                            "id": "148hvn1",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "xibkbpl",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "036e4s1",
                        "name": "50 TDİ",
                        "children": [
                          {
                            "id": "lsdsn3i",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "a7bcqji",
                            "name": "Quattro Sport"
                          }
                        ]
                      },
                      {
                        "id": "mzoslvy",
                        "name": "55 TFSİ",
                        "children": [
                          {
                            "id": "3pvy6xb",
                            "name": "E Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "h0xx6ja",
                        "name": "1.8 T",
                        "children": [
                          {
                            "id": "8w5purl",
                            "name": "1.8 T"
                          },
                          {
                            "id": "k7pt8me",
                            "name": "Advance"
                          }
                        ]
                      },
                      {
                        "id": "57tx7wg",
                        "name": "1.9 TDİ"
                      },
                      {
                        "id": "rlw7zxn",
                        "name": "2.0"
                      },
                      {
                        "id": "cdb5e0x",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "pov5abs",
                        "name": "2.0 TDİ Quattro"
                      },
                      {
                        "id": "qhgikrr",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "234bsqt",
                        "name": "2.0 TFSİ Quattro"
                      },
                      {
                        "id": "tmhw11h",
                        "name": "2.4"
                      },
                      {
                        "id": "c9sa6mw",
                        "name": "2.4 Quattro"
                      },
                      {
                        "id": "7fuokc6",
                        "name": "2.5 TDİ"
                      },
                      {
                        "id": "845nzlz",
                        "name": "2.5 TDİ Quattro"
                      },
                      {
                        "id": "h50p12p",
                        "name": "2.7 TDİ"
                      },
                      {
                        "id": "fx68sac",
                        "name": "2.7 TDİ Quattro"
                      },
                      {
                        "id": "i3gt6n9",
                        "name": "2.7 T Quattro"
                      },
                      {
                        "id": "cdua8r4",
                        "name": "2.8",
                        "children": [
                          {
                            "id": "s0es3p2",
                            "name": "2.8"
                          },
                          {
                            "id": "fruv3h9",
                            "name": "Quattro"
                          }
                        ]
                      },
                      {
                        "id": "gksp2yl",
                        "name": "3.0 Quattro"
                      },
                      {
                        "id": "d8koddw",
                        "name": "3.0 TDİ Quattro"
                      },
                      {
                        "id": "5ztctbr",
                        "name": "3.0 TFSİ Quattro"
                      },
                      {
                        "id": "sgqm3f5",
                        "name": "3.2 FSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "fjbf68q",
                    "name": "A6 Avant",
                    "children": [
                      {
                        "id": "wmtp84t",
                        "name": "40 TDİ",
                        "children": [
                          {
                            "id": "lpgzbh8",
                            "name": "Quattro Advanced"
                          },
                          {
                            "id": "srzwzy0",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "t3ks1m8",
                            "name": "Quattro S Line"
                          }
                        ]
                      },
                      {
                        "id": "f4n3awd",
                        "name": "45 TFSİ",
                        "children": [
                          {
                            "id": "60jqjwt",
                            "name": "Quattro Design"
                          },
                          {
                            "id": "znyerr8",
                            "name": "Quattro S Line"
                          },
                          {
                            "id": "26ppt8l",
                            "name": "Quattro Sport"
                          }
                        ]
                      },
                      {
                        "id": "zgiymny",
                        "name": "1.8 T Quattro"
                      },
                      {
                        "id": "bpezumv",
                        "name": "1.9 TDİ"
                      },
                      {
                        "id": "gkwfe60",
                        "name": "2.0 TDİ"
                      },
                      {
                        "id": "t7crezb",
                        "name": "2.0 TDİ Quattro"
                      },
                      {
                        "id": "vmltfdx",
                        "name": "2.4"
                      },
                      {
                        "id": "bp3nhjm",
                        "name": "2.5 TDİ Quattro"
                      },
                      {
                        "id": "83dwqup",
                        "name": "2.7 TDİ"
                      },
                      {
                        "id": "wq45oi8",
                        "name": "2.7 TDİ Quattro"
                      },
                      {
                        "id": "zw1gdhm",
                        "name": "2.8"
                      },
                      {
                        "id": "30xyn7q",
                        "name": "2.8 Quattro"
                      },
                      {
                        "id": "l7u9fec",
                        "name": "3.0 TDİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "zp0qla9",
                    "name": "A6 Allroad Quattro",
                    "children": [
                      {
                        "id": "x15d8pf",
                        "name": "40 TDİ"
                      },
                      {
                        "id": "c9qvmfn",
                        "name": "2.5 TDİ"
                      },
                      {
                        "id": "n86a2uo",
                        "name": "2.7 TDİ"
                      },
                      {
                        "id": "q0ajd43",
                        "name": "2.7 T"
                      },
                      {
                        "id": "u91k4qz",
                        "name": "3.0 TDİ"
                      },
                      {
                        "id": "f238n2o",
                        "name": "4.2 FSİ"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "c6nfx5y",
                "name": "A6 E-Tron",
                "children": [
                  {
                    "id": "0bpsvtz",
                    "name": "A6 E-Tron Avant",
                    "children": [
                      {
                        "id": "sicnpu3",
                        "name": "Standart"
                      }
                    ]
                  },
                  {
                    "id": "dwov43x",
                    "name": "A6 E-Tron Sportback",
                    "children": [
                      {
                        "id": "0tknpie",
                        "name": "Performance"
                      },
                      {
                        "id": "6ctsp3t",
                        "name": "Standart"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "0trhwb6",
                "name": "A7",
                "children": [
                  {
                    "id": "g66t9ew",
                    "name": "40 TDİ"
                  },
                  {
                    "id": "6prv8k6",
                    "name": "45 TFSİ"
                  },
                  {
                    "id": "wxo4o1x",
                    "name": "50 TDİ"
                  },
                  {
                    "id": "4q2igav",
                    "name": "55 TFSİ"
                  },
                  {
                    "id": "4w7ouap",
                    "name": "2.0 TFSİ"
                  },
                  {
                    "id": "6f81574",
                    "name": "3.0 TDİ"
                  },
                  {
                    "id": "wscmoj8",
                    "name": "3.0 TFSİ"
                  }
                ]
              },
              {
                "id": "u43qli5",
                "name": "A8",
                "children": [
                  {
                    "id": "w0vszb5",
                    "name": "50 TDİ",
                    "children": [
                      {
                        "id": "2vt3cgq",
                        "name": "Quattro Long"
                      }
                    ]
                  },
                  {
                    "id": "eo3mgbu",
                    "name": "55 TFSİ",
                    "children": [
                      {
                        "id": "o2be5i8",
                        "name": "Quattro Long"
                      }
                    ]
                  },
                  {
                    "id": "9lkohhj",
                    "name": "60 TFSİ",
                    "children": [
                      {
                        "id": "rufen1p",
                        "name": "Quattro Long"
                      }
                    ]
                  },
                  {
                    "id": "3h3qbc6",
                    "name": "2.0 TFSİ Quattro"
                  },
                  {
                    "id": "gbfadpd",
                    "name": "2.5 TDİ"
                  },
                  {
                    "id": "zpr9pgo",
                    "name": "2.5 TDİ Quattro"
                  },
                  {
                    "id": "ra79o2h",
                    "name": "2.8"
                  },
                  {
                    "id": "k3xhc0c",
                    "name": "3.0 TDİ",
                    "children": [
                      {
                        "id": "5mxn7ve",
                        "name": "Quattro"
                      },
                      {
                        "id": "63mz7g1",
                        "name": "Quattro Long"
                      }
                    ]
                  },
                  {
                    "id": "0yov952",
                    "name": "4.0 TDİ Quattro"
                  },
                  {
                    "id": "qm07p4z",
                    "name": "4.0 TFSİ Quattro"
                  },
                  {
                    "id": "63x303h",
                    "name": "4.2",
                    "children": [
                      {
                        "id": "6wfas0f",
                        "name": "FSİ Quattro"
                      },
                      {
                        "id": "p00epnj",
                        "name": "FSİ Quattro Long"
                      },
                      {
                        "id": "8snw83z",
                        "name": "Quattro"
                      },
                      {
                        "id": "szv1hsf",
                        "name": "Quattro Long"
                      }
                    ]
                  },
                  {
                    "id": "js6lv8g",
                    "name": "4.2 TDİ",
                    "children": [
                      {
                        "id": "nga4rm6",
                        "name": "Quattro"
                      },
                      {
                        "id": "03yx7jo",
                        "name": "Quattro Long"
                      }
                    ]
                  },
                  {
                    "id": "lfkpejx",
                    "name": "6.0",
                    "children": [
                      {
                        "id": "4qfzsdv",
                        "name": "Quattro"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "yz53j1b",
                "name": "E-Tron GT",
                "children": [
                  {
                    "id": "5d9babd",
                    "name": "GT Quattro"
                  },
                  {
                    "id": "4ej3qyn",
                    "name": "GT RS"
                  }
                ]
              },
              {
                "id": "06olsmc",
                "name": "R8",
                "children": [
                  {
                    "id": "fvf0d4r",
                    "name": "4.2 FSİ",
                    "children": [
                      {
                        "id": "kfxjlup",
                        "name": "Quattro"
                      },
                      {
                        "id": "cgdrbxd",
                        "name": "Quattro R-Tronic"
                      }
                    ]
                  },
                  {
                    "id": "mocdfnn",
                    "name": "5.2 FSİ",
                    "children": [
                      {
                        "id": "95i0xu9",
                        "name": "Quattro R-Tronic"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ekdct8r",
                "name": "RS",
                "children": [
                  {
                    "id": "ck8hn7e",
                    "name": "RS3"
                  },
                  {
                    "id": "rc8x9e9",
                    "name": "RS4"
                  },
                  {
                    "id": "02etld9",
                    "name": "RS5"
                  },
                  {
                    "id": "vpyii6f",
                    "name": "RS6"
                  },
                  {
                    "id": "rbnwto0",
                    "name": "RS7"
                  }
                ]
              },
              {
                "id": "9mxus75",
                "name": "S",
                "children": [
                  {
                    "id": "26fw85g",
                    "name": "S3",
                    "children": [
                      {
                        "id": "erx64l5",
                        "name": "2.0 TFSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "o1fxrjh",
                    "name": "S4",
                    "children": [
                      {
                        "id": "grjk0oc",
                        "name": "3.0 TFSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "scajpye",
                    "name": "S5",
                    "children": [
                      {
                        "id": "gjyb7qw",
                        "name": "3.0 TFSİ Quattro"
                      },
                      {
                        "id": "469ohj2",
                        "name": "4.2 FSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "eie7gdh",
                    "name": "S6",
                    "children": [
                      {
                        "id": "lwtxx8l",
                        "name": "3.0 TDİ Quattro"
                      },
                      {
                        "id": "14itwvx",
                        "name": "4.2 Quattro"
                      }
                    ]
                  },
                  {
                    "id": "kr6mawo",
                    "name": "S7",
                    "children": [
                      {
                        "id": "4ysz728",
                        "name": "4.0 TFSİ Quattro"
                      }
                    ]
                  },
                  {
                    "id": "05iqxp1",
                    "name": "S8",
                    "children": [
                      {
                        "id": "0ua8mre",
                        "name": "4.0 TFSİ Quattro"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "2bde9o8",
                "name": "TT",
                "children": [
                  {
                    "id": "fdug9m4",
                    "name": "1.8",
                    "children": [
                      {
                        "id": "rbrls2a",
                        "name": "1.8 T"
                      },
                      {
                        "id": "tvx32ov",
                        "name": "T Quattro"
                      }
                    ]
                  },
                  {
                    "id": "trg31q8",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "xfrc9kk",
                        "name": "TFSİ"
                      },
                      {
                        "id": "l4hl4ol",
                        "name": "TFSİ Quattro"
                      },
                      {
                        "id": "quf4rdz",
                        "name": "TFSİ S Quattro"
                      }
                    ]
                  },
                  {
                    "id": "joeuvsn",
                    "name": "2.5 TFSİ",
                    "children": [
                      {
                        "id": "a33xqow",
                        "name": "RS Coupe"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "frbdc0e",
                "name": "TTS",
                "children": [
                  {
                    "id": "pw2bgop",
                    "name": "2.0 TFSİ",
                    "children": [
                      {
                        "id": "uqhkw1g",
                        "name": "2.0 TFSİ"
                      },
                      {
                        "id": "n411i2x",
                        "name": "Quattro"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ncaguhk",
                "name": "80 Serisi",
                "children": [
                  {
                    "id": "r0e4dqi",
                    "name": "1.6"
                  },
                  {
                    "id": "216bdfd",
                    "name": "1.6 D"
                  },
                  {
                    "id": "fclgp6q",
                    "name": "1.6 TD"
                  },
                  {
                    "id": "89dxrrh",
                    "name": "1.8"
                  },
                  {
                    "id": "6im42g0",
                    "name": "1.8 S"
                  },
                  {
                    "id": "utg3jhl",
                    "name": "1.9"
                  },
                  {
                    "id": "93uad12",
                    "name": "1.9 TD"
                  },
                  {
                    "id": "nee6llx",
                    "name": "1.9 TDİ"
                  },
                  {
                    "id": "zsezc09",
                    "name": "2.0"
                  },
                  {
                    "id": "emxxu1t",
                    "name": "2.0 Quattro"
                  }
                ]
              },
              {
                "id": "igbubzp",
                "name": "90 Serisi",
                "children": [
                  {
                    "id": "7bpdx3v",
                    "name": "2.0"
                  }
                ]
              },
              {
                "id": "99q7y5c",
                "name": "100 Serisi",
                "children": [
                  {
                    "id": "67zwjqb",
                    "name": "1.9"
                  },
                  {
                    "id": "986jftk",
                    "name": "2.0"
                  },
                  {
                    "id": "99lspg0",
                    "name": "2.0 D"
                  },
                  {
                    "id": "e25ls8k",
                    "name": "2.3"
                  }
                ]
              },
              {
                "id": "vwpbkih",
                "name": "200 Serisi",
                "children": [
                  {
                    "id": "0e3cvhy",
                    "name": "2.2"
                  }
                ]
              }
            ]
          },
          {
            "id": "1j0v9eb",
            "name": "Bentley",
            "children": [
              {
                "id": "r4tvu0r",
                "name": "Continental",
                "children": [
                  {
                    "id": "4vbyjmc",
                    "name": "Flying Spur",
                    "children": [
                      {
                        "id": "08tojyy",
                        "name": "Flying Spur Speed"
                      }
                    ]
                  },
                  {
                    "id": "1ypzqmr",
                    "name": "GT"
                  },
                  {
                    "id": "2ztt8ae",
                    "name": "GTC"
                  },
                  {
                    "id": "eit7he4",
                    "name": "GT Speed"
                  },
                  {
                    "id": "a9617rj",
                    "name": "GT Supersports"
                  }
                ]
              },
              {
                "id": "yx4tu8u",
                "name": "Flying Spur",
                "children": [
                  {
                    "id": "nrv7eed",
                    "name": "4.0"
                  },
                  {
                    "id": "tl93ecw",
                    "name": "6.0"
                  }
                ]
              },
              {
                "id": "w2qcs4q",
                "name": "Mulsanne",
                "children": [
                  {
                    "id": "vvzd71w",
                    "name": "6.75"
                  }
                ]
              }
            ]
          },
          {
            "id": "5umbjeb",
            "name": "BMW",
            "children": [
              {
                "id": "aiaj48z",
                "name": "1 Seri",
                "children": [
                  {
                    "id": "c2x1yv8",
                    "name": "116d",
                    "children": [
                      {
                        "id": "c7van33",
                        "name": "Standart"
                      },
                      {
                        "id": "wboyzv5",
                        "name": "Comfort"
                      },
                      {
                        "id": "v3vvu3j",
                        "name": "First Edition M Sport"
                      },
                      {
                        "id": "sdaop7k",
                        "name": "First Edition Sport Line"
                      },
                      {
                        "id": "2125gcn",
                        "name": "Joy"
                      },
                      {
                        "id": "lhph25b",
                        "name": "Joy Plus"
                      },
                      {
                        "id": "crijmfv",
                        "name": "M Plus"
                      },
                      {
                        "id": "4o3i6ph",
                        "name": "M Sport"
                      },
                      {
                        "id": "suy9np4",
                        "name": "One Edition"
                      },
                      {
                        "id": "ydkj81h",
                        "name": "Sport Line"
                      },
                      {
                        "id": "v8rpftu",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "tj1snp9",
                        "name": "Urban Line"
                      },
                      {
                        "id": "n7s80x6",
                        "name": "Urban PLus"
                      }
                    ]
                  },
                  {
                    "id": "a3bjybv",
                    "name": "116d ED",
                    "children": [
                      {
                        "id": "46hajme",
                        "name": "Efficient Dynamics"
                      },
                      {
                        "id": "0lqcwfd",
                        "name": "Joy"
                      },
                      {
                        "id": "8uaru30",
                        "name": "Joy Plus"
                      },
                      {
                        "id": "9oiw8nx",
                        "name": "Urban Line"
                      },
                      {
                        "id": "pjzixle",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "w1qdk2y",
                    "name": "116i",
                    "children": [
                      {
                        "id": "x7idg0k",
                        "name": "Standart"
                      },
                      {
                        "id": "q3sh0lr",
                        "name": "Advantage"
                      },
                      {
                        "id": "obm2hcc",
                        "name": "Comfort"
                      },
                      {
                        "id": "pjtla13",
                        "name": "Joy Edition"
                      },
                      {
                        "id": "vvyy5w5",
                        "name": "Premium"
                      },
                      {
                        "id": "a0mc5lp",
                        "name": "M Sport"
                      },
                      {
                        "id": "9q9ox8j",
                        "name": "Pure"
                      },
                      {
                        "id": "g9w4mir",
                        "name": "Sport"
                      },
                      {
                        "id": "seegzts",
                        "name": "Sport Edition"
                      },
                      {
                        "id": "pikbbde",
                        "name": "Sport Line"
                      },
                      {
                        "id": "spx0mpm",
                        "name": "Technology"
                      },
                      {
                        "id": "onqtru1",
                        "name": "Urban Line"
                      }
                    ]
                  },
                  {
                    "id": "1j4e13k",
                    "name": "118d"
                  },
                  {
                    "id": "mkb9289",
                    "name": "118i",
                    "children": [
                      {
                        "id": "s4zbwg3",
                        "name": "Standart"
                      },
                      {
                        "id": "12lnev5",
                        "name": "Advantage"
                      },
                      {
                        "id": "141fa6f",
                        "name": "Comfort"
                      },
                      {
                        "id": "7orblae",
                        "name": "First Edition M Sport"
                      },
                      {
                        "id": "995ua46",
                        "name": "First Edition Sport Line"
                      },
                      {
                        "id": "l4iy2m9",
                        "name": "Joy"
                      },
                      {
                        "id": "fiy0ugp",
                        "name": "Joy Plus"
                      },
                      {
                        "id": "c0n02uv",
                        "name": "M PLus"
                      },
                      {
                        "id": "cxg2mx6",
                        "name": "M Sport"
                      },
                      {
                        "id": "oaif8bq",
                        "name": "One Edition"
                      },
                      {
                        "id": "u2wi09y",
                        "name": "One Edition M"
                      },
                      {
                        "id": "3e3e2y8",
                        "name": "Premium"
                      },
                      {
                        "id": "wcypf4y",
                        "name": "Premium Line"
                      },
                      {
                        "id": "iblp1sz",
                        "name": "Pure"
                      },
                      {
                        "id": "4xrur1s",
                        "name": "Sport Line"
                      },
                      {
                        "id": "w9vcfi4",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "wz1ipsk",
                        "name": "Urban Line"
                      },
                      {
                        "id": "ibxdnk5",
                        "name": "Urban PLus"
                      }
                    ]
                  },
                  {
                    "id": "d9jxzwj",
                    "name": "120",
                    "children": [
                      {
                        "id": "wars75e",
                        "name": "M Sport"
                      },
                      {
                        "id": "oj22xpy",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "wtdzl3g",
                    "name": "120d"
                  },
                  {
                    "id": "or1zly4",
                    "name": "120i",
                    "children": [
                      {
                        "id": "bx7opau",
                        "name": "M Sport"
                      },
                      {
                        "id": "im2gw2v",
                        "name": "M PLus"
                      },
                      {
                        "id": "oo6erwe",
                        "name": "Standart"
                      }
                    ]
                  },
                  {
                    "id": "t9r1bcp",
                    "name": "128ia"
                  },
                  {
                    "id": "hb0ymhq",
                    "name": "128ti",
                    "children": [
                      {
                        "id": "oyg36gg",
                        "name": "Heritage"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "lwn748x",
                "name": "2 Seri",
                "children": [
                  {
                    "id": "dkkb9qj",
                    "name": "216d Gran Tourer",
                    "children": [
                      {
                        "id": "jiq4q3x",
                        "name": "Gran Tourer"
                      },
                      {
                        "id": "r3n9yq1",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "ea401wb",
                        "name": "Luxury Plus"
                      },
                      {
                        "id": "7fzjm1h",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "efk6pnc",
                    "name": "216d Active Tourer",
                    "children": [
                      {
                        "id": "wf5b03r",
                        "name": "Active Tourer"
                      },
                      {
                        "id": "mbpgkoo",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "xk4xdf0",
                        "name": "M Sport"
                      },
                      {
                        "id": "p8n7gfq",
                        "name": "Premium Line"
                      },
                      {
                        "id": "tk41g90",
                        "name": "Prestige"
                      },
                      {
                        "id": "mlaci8m",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "m0uqrm4",
                    "name": "216d Gran Coupe",
                    "children": [
                      {
                        "id": "krwdkks",
                        "name": "First Edition Luxury Line"
                      },
                      {
                        "id": "7rqcj60",
                        "name": "First Edition M Sport"
                      },
                      {
                        "id": "yn5zxdo",
                        "name": "First Edition Sport Line"
                      },
                      {
                        "id": "b7avkx1",
                        "name": "M Sport"
                      },
                      {
                        "id": "gkwaq97",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "n7qe3jd",
                    "name": "218i",
                    "children": [
                      {
                        "id": "3cui7g5",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "i15ckhf",
                        "name": "M Sport"
                      },
                      {
                        "id": "z5r49uk",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "qe4az82",
                    "name": "218i Active Tourer",
                    "children": [
                      {
                        "id": "cge8pia",
                        "name": "Active Tourer"
                      },
                      {
                        "id": "7odijyr",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "dptyk3n",
                        "name": "Luxury Plus"
                      },
                      {
                        "id": "mry7ewi",
                        "name": "M Sport"
                      },
                      {
                        "id": "dsm5cce",
                        "name": "Sport Line"
                      },
                      {
                        "id": "afpnblu",
                        "name": "Sport Plus"
                      }
                    ]
                  },
                  {
                    "id": "g5fdfg9",
                    "name": "218i Gran Coupe",
                    "children": [
                      {
                        "id": "xrnrsyl",
                        "name": "First Edition Sport Line"
                      },
                      {
                        "id": "jxwwaba",
                        "name": "First Edition M Sport"
                      },
                      {
                        "id": "8mpy2b5",
                        "name": "First Edition Sport Line"
                      },
                      {
                        "id": "zxeugdn",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "234pykx",
                        "name": "M Sport"
                      },
                      {
                        "id": "mddw48k",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "jziee37",
                    "name": "220d",
                    "children": [
                      {
                        "id": "b6pub9u",
                        "name": "Standart"
                      },
                      {
                        "id": "uv5q8vc",
                        "name": "M Sport"
                      }
                    ]
                  },
                  {
                    "id": "u5u58u4",
                    "name": "220 Gran Coupe",
                    "children": [
                      {
                        "id": "f5ddk64",
                        "name": "M Sport"
                      },
                      {
                        "id": "08mx3zj",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "i7medgu",
                    "name": "220i Active Tourer",
                    "children": [
                      {
                        "id": "7fv9819",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "5uvy7bs",
                        "name": "M Sport"
                      }
                    ]
                  },
                  {
                    "id": "597do8a",
                    "name": "230e xDrive Active Tourer",
                    "children": [
                      {
                        "id": "1ak97j3",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "ujgexcv",
                        "name": "M Sport"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ht8mkqb",
                "name": "3 Seri",
                "children": [
                  {
                    "id": "jikubhx",
                    "name": "315"
                  },
                  {
                    "id": "nx7825i",
                    "name": "316"
                  },
                  {
                    "id": "iavylde",
                    "name": "316Ci"
                  },
                  {
                    "id": "yb81jmy",
                    "name": "316i",
                    "children": [
                      {
                        "id": "g96svqw",
                        "name": "Standart"
                      },
                      {
                        "id": "jpreqnz",
                        "name": "Advantage"
                      },
                      {
                        "id": "8m4xpok",
                        "name": "Comfort"
                      },
                      {
                        "id": "3fgpjvd",
                        "name": "Compact"
                      },
                      {
                        "id": "ycae4wn",
                        "name": "Exclusive"
                      },
                      {
                        "id": "db01gt6",
                        "name": "Lifestyle Edition"
                      },
                      {
                        "id": "omwrv2b",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "1rhzkdq",
                        "name": "Modern Line"
                      },
                      {
                        "id": "f08ioq0",
                        "name": "M Sport"
                      },
                      {
                        "id": "8ext8j3",
                        "name": "Premium"
                      },
                      {
                        "id": "41921ws",
                        "name": "Sport"
                      },
                      {
                        "id": "8k42ndz",
                        "name": "Sport Line"
                      },
                      {
                        "id": "u46ic31",
                        "name": "Technology"
                      },
                      {
                        "id": "e8y5zdp",
                        "name": "Techno Plus"
                      },
                      {
                        "id": "9oluexg",
                        "name": "Touring"
                      }
                    ]
                  },
                  {
                    "id": "mmh62yn",
                    "name": "316Ti",
                    "children": [
                      {
                        "id": "nox3sou",
                        "name": "Compact"
                      }
                    ]
                  },
                  {
                    "id": "pjeylbf",
                    "name": "318Ci"
                  },
                  {
                    "id": "ls6cej4",
                    "name": "318d",
                    "children": [
                      {
                        "id": "hzlihll",
                        "name": "Standart"
                      },
                      {
                        "id": "qytjald",
                        "name": "Touring"
                      },
                      {
                        "id": "seskjds",
                        "name": "Luxury Plus"
                      },
                      {
                        "id": "hos0345",
                        "name": "M PLus"
                      },
                      {
                        "id": "ezpykz3",
                        "name": "Prestige"
                      },
                      {
                        "id": "vw9ag69",
                        "name": "Premium"
                      },
                      {
                        "id": "fhgl923",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "706zomw",
                        "name": "40TH Year Edition"
                      }
                    ]
                  },
                  {
                    "id": "1c823tc",
                    "name": "318i",
                    "children": [
                      {
                        "id": "ef3yjfo",
                        "name": "Standart"
                      },
                      {
                        "id": "bm48i1p",
                        "name": "Edition Luxury Line"
                      },
                      {
                        "id": "bgv2cmq",
                        "name": "Edition M Sport"
                      },
                      {
                        "id": "pxsq7cc",
                        "name": "Edition M Sport Executive"
                      },
                      {
                        "id": "p3hj6y1",
                        "name": "Edition Sport Line"
                      },
                      {
                        "id": "ibzzuy1",
                        "name": "Joy"
                      },
                      {
                        "id": "hj94d0d",
                        "name": "Luxury Plus"
                      },
                      {
                        "id": "405hf50",
                        "name": "M Joy"
                      },
                      {
                        "id": "jh7xlqv",
                        "name": "M Joy Plus"
                      },
                      {
                        "id": "vcrzybe",
                        "name": "M PLus"
                      },
                      {
                        "id": "10gkga0",
                        "name": "M Sport"
                      },
                      {
                        "id": "rew2fyr",
                        "name": "Premium Line"
                      },
                      {
                        "id": "ymaviyq",
                        "name": "Prestige"
                      },
                      {
                        "id": "ckugkfy",
                        "name": "Pure"
                      },
                      {
                        "id": "q5wdv8v",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "ri6tgp6",
                        "name": "Touring"
                      },
                      {
                        "id": "mc62r6m",
                        "name": "40 Th Year Edition"
                      }
                    ]
                  },
                  {
                    "id": "omabuy3",
                    "name": "318is"
                  },
                  {
                    "id": "u631zx6",
                    "name": "318ti",
                    "children": [
                      {
                        "id": "zsddkhh",
                        "name": "Compact"
                      }
                    ]
                  },
                  {
                    "id": "97d8e12",
                    "name": "320Cd"
                  },
                  {
                    "id": "53uihna",
                    "name": "320Ci"
                  },
                  {
                    "id": "wdhj0u0",
                    "name": "320d",
                    "children": [
                      {
                        "id": "8thf3iq",
                        "name": "Standart"
                      },
                      {
                        "id": "lhb2sok",
                        "name": "Advantage"
                      },
                      {
                        "id": "f9k4gu5",
                        "name": "Comfort"
                      },
                      {
                        "id": "j8e4em2",
                        "name": "Edition Comfort"
                      },
                      {
                        "id": "rktfb6f",
                        "name": "Edition Luxury Line"
                      },
                      {
                        "id": "ch2gw5j",
                        "name": "Edition M Sport"
                      },
                      {
                        "id": "3pw90es",
                        "name": "Premium"
                      },
                      {
                        "id": "3bh5q3r",
                        "name": "Premium Line"
                      },
                      {
                        "id": "646nw1i",
                        "name": "Prestige"
                      },
                      {
                        "id": "edbqvoo",
                        "name": "Sport"
                      },
                      {
                        "id": "s9ef75n",
                        "name": "Sport Line"
                      },
                      {
                        "id": "rx1g67q",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "u31ca6y",
                        "name": "Technology"
                      },
                      {
                        "id": "nm8xnel",
                        "name": "Techno Plus"
                      },
                      {
                        "id": "fkhesfm",
                        "name": "Touring"
                      },
                      {
                        "id": "2sjnqdh",
                        "name": "40TH Year Edition"
                      }
                    ]
                  },
                  {
                    "id": "vp29y31",
                    "name": "320d GT",
                    "children": [
                      {
                        "id": "1lfbgti",
                        "name": "Gran Turismo"
                      },
                      {
                        "id": "t1j63ou",
                        "name": "Luxury"
                      },
                      {
                        "id": "x8e5tgr",
                        "name": "Modern Line"
                      },
                      {
                        "id": "gfqt2pk",
                        "name": "M Sport"
                      },
                      {
                        "id": "7irem4d",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "myixh3m",
                    "name": "320d xDrive GT",
                    "children": [
                      {
                        "id": "4u1g7xc",
                        "name": "Luxury"
                      },
                      {
                        "id": "8uajc0x",
                        "name": "Modern Line"
                      },
                      {
                        "id": "cfs3dwv",
                        "name": "M Sport"
                      },
                      {
                        "id": "qvf3tsv",
                        "name": "Sport Line"
                      },
                      {
                        "id": "m5o17sa",
                        "name": "Techno Plus"
                      }
                    ]
                  },
                  {
                    "id": "61gv1rt",
                    "name": "320i",
                    "children": [
                      {
                        "id": "b1nocrw",
                        "name": "320i"
                      },
                      {
                        "id": "54noeow",
                        "name": "Edition M Sport"
                      },
                      {
                        "id": "7n7lic3",
                        "name": "Executive M Sport"
                      },
                      {
                        "id": "0wct33x",
                        "name": "50 Jahre Edition"
                      },
                      {
                        "id": "s9pflq1",
                        "name": "50TH Year M Edition"
                      },
                      {
                        "id": "655dw0y",
                        "name": "Cabrio"
                      },
                      {
                        "id": "plrtcaw",
                        "name": "First Edition Luxury Line"
                      },
                      {
                        "id": "ciqgb8s",
                        "name": "First Edition M Sport"
                      },
                      {
                        "id": "elfpznn",
                        "name": "First Edition Sport Line"
                      },
                      {
                        "id": "97atvrv",
                        "name": "Gran Tourismo"
                      },
                      {
                        "id": "jog4beb",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "pzae238",
                        "name": "M Sport"
                      },
                      {
                        "id": "efebnr4",
                        "name": "Premium"
                      },
                      {
                        "id": "9hmk1md",
                        "name": "Touring"
                      },
                      {
                        "id": "ktkl1ag",
                        "name": "Sport Line"
                      }
                    ]
                  },
                  {
                    "id": "b4sowt6",
                    "name": "320i ED",
                    "children": [
                      {
                        "id": "gh7ihla",
                        "name": "40TH Year Edition"
                      },
                      {
                        "id": "zo68qkz",
                        "name": "Edition"
                      },
                      {
                        "id": "3by783t",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "aex455u",
                        "name": "Luxury Line Plus"
                      },
                      {
                        "id": "tvykp43",
                        "name": "Luxury M Plus"
                      },
                      {
                        "id": "mxkidlt",
                        "name": "Modern Line"
                      },
                      {
                        "id": "5t6qhuy",
                        "name": "Modern Line Plus"
                      },
                      {
                        "id": "yw4u0ku",
                        "name": "M Plus"
                      },
                      {
                        "id": "zrgkgdr",
                        "name": "M Sport"
                      },
                      {
                        "id": "wh56ebn",
                        "name": "Sport Line"
                      },
                      {
                        "id": "bw5aev7",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "1af3q02",
                        "name": "Standart"
                      },
                      {
                        "id": "5t6d5fk",
                        "name": "Techno Plus"
                      }
                    ]
                  },
                  {
                    "id": "khbtext",
                    "name": "320Si"
                  },
                  {
                    "id": "0gh6qii",
                    "name": "320TD",
                    "children": [
                      {
                        "id": "trvwmug",
                        "name": "Compact"
                      }
                    ]
                  },
                  {
                    "id": "a19bwci",
                    "name": "323Cİ"
                  },
                  {
                    "id": "nzz9c01",
                    "name": "323Tİ"
                  },
                  {
                    "id": "iz7dle0",
                    "name": "325Cİ"
                  },
                  {
                    "id": "1t7do97",
                    "name": "325İ",
                    "children": [
                      {
                        "id": "7el2b9c",
                        "name": "Standart"
                      },
                      {
                        "id": "8q531ft",
                        "name": "Cabrio"
                      },
                      {
                        "id": "c2ciu84",
                        "name": "Touring"
                      }
                    ]
                  },
                  {
                    "id": "04kir9g",
                    "name": "325i xDrive",
                    "children": [
                      {
                        "id": "iau20u0",
                        "name": "Standart"
                      }
                    ]
                  },
                  {
                    "id": "q20rkpa",
                    "name": "325TDS"
                  },
                  {
                    "id": "nnhsshe",
                    "name": "325Xİ"
                  },
                  {
                    "id": "5dr0ktz",
                    "name": "328İ",
                    "children": [
                      {
                        "id": "zjotzyz",
                        "name": "328i"
                      },
                      {
                        "id": "5sy0c3d",
                        "name": "Luxury Line"
                      },
                      {
                        "id": "98j8qoh",
                        "name": "Comfort"
                      },
                      {
                        "id": "9cpx29q",
                        "name": "M Sport"
                      },
                      {
                        "id": "vtf3x1l",
                        "name": "Sport Line"
                      },
                      {
                        "id": "z1urgzf",
                        "name": "Technology"
                      }
                    ]
                  },
                  {
                    "id": "qhiiizn",
                    "name": "328İ xDrive"
                  },
                  {
                    "id": "ry2r698",
                    "name": "330 CD"
                  },
                  {
                    "id": "2jtj80e",
                    "name": "330Cİ"
                  },
                  {
                    "id": "23gvzau",
                    "name": "330D",
                    "children": [
                      {
                        "id": "8hyrf2o",
                        "name": "Standart"
                      },
                      {
                        "id": "lnizscp",
                        "name": "M Sport"
                      },
                      {
                        "id": "ydnxv1d",
                        "name": "Touring"
                      }
                    ]
                  },
                  {
                    "id": "z4v93ih",
                    "name": "330İ",
                    "children": [
                      {
                        "id": "mxq44eq",
                        "name": "Standart"
                      },
                      {
                        "id": "y3gzhei",
                        "name": "Edition M Sport"
                      },
                      {
                        "id": "p8bz1e1",
                        "name": "M Sport"
                      }
                    ]
                  },
                  {
                    "id": "xh8p4t7",
                    "name": "330İ xDrive",
                    "children": [
                      {
                        "id": "dw9dar1",
                        "name": "Edition M Sport"
                      },
                      {
                        "id": "yvft61h",
                        "name": "M Sport"
                      }
                    ]
                  },
                  {
                    "id": "405w3xh",
                    "name": "330xd"
                  },
                  {
                    "id": "iij0rty",
                    "name": "330xi",
                    "children": [
                      {
                        "id": "6olr6e3",
                        "name": "Standart"
                      },
                      {
                        "id": "awq9g2s",
                        "name": "Touring"
                      }
                    ]
                  },
                  {
                    "id": "okor46p",
                    "name": "335D"
                  },
                  {
                    "id": "abd9evo",
                    "name": "335İ"
                  },
                  {
                    "id": "uqdvhgl",
                    "name": "340D xDrive",
                    "children": [
                      {
                        "id": "m0bl9it",
                        "name": "Touring M Sport"
                      }
                    ]
                  },
                  {
                    "id": "prkq4tt",
                    "name": "340i xDrive"
                  },
                  {
                    "id": "bknbb1t",
                    "name": "323i",
                    "children": [
                      {
                        "id": "7sjltz4",
                        "name": "Standart"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "he4y6gi",
                "name": "4 Seri"
              },
              {
                "id": "o31qmii",
                "name": "5 Seri"
              },
              {
                "id": "q9vi80x",
                "name": "6 Seri"
              },
              {
                "id": "ws96qul",
                "name": "7 Seri"
              },
              {
                "id": "vqjej1e",
                "name": "8 seri"
              },
              {
                "id": "3j0uzzs",
                "name": "İ Seri"
              },
              {
                "id": "2grzihn",
                "name": "M Seri"
              },
              {
                "id": "pf3tots",
                "name": "Z Seri"
              }
            ]
          },
          {
            "id": "iwett4s",
            "name": "Buick",
            "children": [
              {
                "id": "gt7talp",
                "name": "Century",
                "children": [
                  {
                    "id": "hvbu7xn",
                    "name": "3.3"
                  }
                ]
              },
              {
                "id": "pf5z3us",
                "name": "Le Sabre",
                "children": [
                  {
                    "id": "cdikwg6",
                    "name": "3.8"
                  }
                ]
              },
              {
                "id": "fjmk26f",
                "name": "Park Avenue",
                "children": [
                  {
                    "id": "cu76ian",
                    "name": "3.8"
                  }
                ]
              },
              {
                "id": "m7mwmf8",
                "name": "Regal",
                "children": [
                  {
                    "id": "1idnp24",
                    "name": "3.8"
                  }
                ]
              },
              {
                "id": "ibwzclt",
                "name": "Riviera",
                "children": [
                  {
                    "id": "1tmbo06",
                    "name": "3.8"
                  }
                ]
              },
              {
                "id": "rgq62n2",
                "name": "Roadmaster",
                "children": [
                  {
                    "id": "96epbeb",
                    "name": "5.7"
                  }
                ]
              }
            ]
          },
          {
            "id": "2qfc4nr",
            "name": "BYD",
            "children": [
              {
                "id": "s61bj3m",
                "name": "Dolphin",
                "children": [
                  {
                    "id": "id3u894",
                    "name": "Comfort"
                  },
                  {
                    "id": "0cl58cf",
                    "name": "Standart"
                  },
                  {
                    "id": "6vx99ho",
                    "name": "Design"
                  }
                ]
              },
              {
                "id": "kvur7ll",
                "name": "F3",
                "children": [
                  {
                    "id": "7tqb7yb",
                    "name": "1.6"
                  }
                ]
              },
              {
                "id": "3uhizqe",
                "name": "Han",
                "children": [
                  {
                    "id": "rgkwoqo",
                    "name": "Executive"
                  }
                ]
              },
              {
                "id": "e8chsd9",
                "name": "Seal",
                "children": [
                  {
                    "id": "zi3vnqa",
                    "name": "Design"
                  },
                  {
                    "id": "dlsrxp0",
                    "name": "Excellence"
                  }
                ]
              }
            ]
          },
          {
            "id": "acsnsc5",
            "name": "Cadillac",
            "children": [
              {
                "id": "dkt3b3o",
                "name": "CTS",
                "children": [
                  {
                    "id": "482df2q",
                    "name": "2.0 l"
                  },
                  {
                    "id": "fpnr70d",
                    "name": "2.8"
                  },
                  {
                    "id": "7s3wory",
                    "name": "3.2"
                  },
                  {
                    "id": "ga4xxtc",
                    "name": "6.0"
                  }
                ]
              },
              {
                "id": "lrg7biy",
                "name": "BLS",
                "children": [
                  {
                    "id": "sscncn1",
                    "name": "1.9D Elegance"
                  }
                ]
              },
              {
                "id": "dmlzkh4",
                "name": "Brougham",
                "children": [
                  {
                    "id": "kqa2j40",
                    "name": "5.7 STD"
                  }
                ]
              },
              {
                "id": "d6tucqp",
                "name": "DeVille",
                "children": [
                  {
                    "id": "uzk171k",
                    "name": "4.6 Consours"
                  },
                  {
                    "id": "64a8dak",
                    "name": "4.6 DTS"
                  }
                ]
              },
              {
                "id": "kqrpn0c",
                "name": "Eldorado",
                "children": [
                  {
                    "id": "cffxgav",
                    "name": "4.9 STD"
                  }
                ]
              },
              {
                "id": "qf9idqy",
                "name": "Fleetwood",
                "children": [
                  {
                    "id": "c53h4eg",
                    "name": "4.9"
                  },
                  {
                    "id": "3breodh",
                    "name": "5.7"
                  }
                ]
              },
              {
                "id": "hif5y16",
                "name": "Seville",
                "children": [
                  {
                    "id": "6c1n98q",
                    "name": "4.6 SLS"
                  },
                  {
                    "id": "8dma2vv",
                    "name": "4.6 STS"
                  }
                ]
              },
              {
                "id": "wv8zyjm",
                "name": "STS",
                "children": [
                  {
                    "id": "5t7js4q",
                    "name": "3.6"
                  },
                  {
                    "id": "d9ff5qh",
                    "name": "4.6"
                  }
                ]
              }
            ]
          },
          {
            "id": "7cjb88s",
            "name": "Chery",
            "children": [
              {
                "id": "4b9r4mb",
                "name": "Alia",
                "children": [
                  {
                    "id": "lpehq0u",
                    "name": "1.6"
                  }
                ]
              },
              {
                "id": "z6nu7pq",
                "name": "Chance",
                "children": [
                  {
                    "id": "o7lbmfr",
                    "name": "2.0 Lusso"
                  }
                ]
              },
              {
                "id": "zhx7g8f",
                "name": "Kimo",
                "children": [
                  {
                    "id": "mms3cqd",
                    "name": "1.3"
                  }
                ]
              },
              {
                "id": "vbs0c0j",
                "name": "Niche",
                "children": [
                  {
                    "id": "12303nx",
                    "name": "1.6 Norma"
                  },
                  {
                    "id": "bun5trl",
                    "name": "2.0 Lusso"
                  }
                ]
              }
            ]
          },
          {
            "id": "3f7w92o",
            "name": "Chevrolet",
            "children": [
              {
                "id": "esegnbr",
                "name": "Aveo",
                "children": [
                  {
                    "id": "v9nyaj6",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "4bywwve",
                        "name": "LS"
                      },
                      {
                        "id": "l9phruq",
                        "name": "s"
                      },
                      {
                        "id": "toe0l5g",
                        "name": "SE"
                      },
                      {
                        "id": "6mcdz91",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "7360urc",
                    "name": "1.3 D",
                    "children": [
                      {
                        "id": "xnjzvpz",
                        "name": "LS"
                      },
                      {
                        "id": "x92kb47",
                        "name": "LT"
                      },
                      {
                        "id": "m8mi4eb",
                        "name": "LTZ"
                      }
                    ]
                  },
                  {
                    "id": "ydsr3mt",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "wxp4f5l",
                        "name": "LS"
                      },
                      {
                        "id": "mxpyxrc",
                        "name": "LT"
                      },
                      {
                        "id": "af8hbwy",
                        "name": "LTZ"
                      },
                      {
                        "id": "fcxisfy",
                        "name": "S"
                      },
                      {
                        "id": "k7mu5ve",
                        "name": "SE"
                      },
                      {
                        "id": "rl2yw5p",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "0r5bhb2",
                "name": "Camaro",
                "children": [
                  {
                    "id": "wueaxm2",
                    "name": "2.0"
                  },
                  {
                    "id": "v39tiiq",
                    "name": "3.6"
                  },
                  {
                    "id": "jqjtg50",
                    "name": "6.2"
                  },
                  {
                    "id": "jac5at2",
                    "name": "RS"
                  },
                  {
                    "id": "3wxj0zs",
                    "name": "SS"
                  },
                  {
                    "id": "onq7g7z",
                    "name": "Z28"
                  }
                ]
              },
              {
                "id": "fkca8bj",
                "name": "Caprice",
                "children": [
                  {
                    "id": "ofoyavs",
                    "name": "5.0 LS"
                  }
                ]
              },
              {
                "id": "00yzwjw",
                "name": "Celebrity",
                "children": [
                  {
                    "id": "ruyq0n1",
                    "name": "3.1"
                  }
                ]
              },
              {
                "id": "73uc1of",
                "name": "Corvette",
                "children": [
                  {
                    "id": "hqpeqsb",
                    "name": "C4"
                  },
                  {
                    "id": "71cyu7i",
                    "name": "C5"
                  },
                  {
                    "id": "eznnd3v",
                    "name": "C6"
                  },
                  {
                    "id": "gn1y6r0",
                    "name": "C7"
                  },
                  {
                    "id": "l3uurc7",
                    "name": "C8"
                  },
                  {
                    "id": "p3nji0v",
                    "name": "Z06"
                  }
                ]
              },
              {
                "id": "sswdczh",
                "name": "Cruze",
                "children": [
                  {
                    "id": "vv4kbyj",
                    "name": "1.4 T",
                    "children": [
                      {
                        "id": "8uyfvsb",
                        "name": "LT"
                      },
                      {
                        "id": "1oh720o",
                        "name": "LTZ"
                      },
                      {
                        "id": "3r5iaft",
                        "name": "Sport"
                      },
                      {
                        "id": "kxxj5bl",
                        "name": "Sport Plus"
                      }
                    ]
                  },
                  {
                    "id": "b5fja79",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "4i215qd",
                        "name": "1.6"
                      },
                      {
                        "id": "3bhnyb8",
                        "name": "Design Edition"
                      },
                      {
                        "id": "n3ipyze",
                        "name": "Design Edition Plus"
                      },
                      {
                        "id": "pidr975",
                        "name": "LS"
                      },
                      {
                        "id": "j5855k7",
                        "name": "LS Plus"
                      },
                      {
                        "id": "5ni2ja2",
                        "name": "LT"
                      },
                      {
                        "id": "14xvxcg",
                        "name": "LT Plus"
                      },
                      {
                        "id": "uqfboof",
                        "name": "Sport"
                      },
                      {
                        "id": "re7gzaw",
                        "name": "Sport Plus"
                      },
                      {
                        "id": "54sysko",
                        "name": "WTCC Edition"
                      },
                      {
                        "id": "os8jcgp",
                        "name": "WTCC Edition Plus"
                      }
                    ]
                  },
                  {
                    "id": "0p9yp5p",
                    "name": "1.8",
                    "children": [
                      {
                        "id": "l6t67o1",
                        "name": "LT"
                      }
                    ]
                  },
                  {
                    "id": "ffi48l9",
                    "name": "2.0 D",
                    "children": [
                      {
                        "id": "a1g29fh",
                        "name": "LT"
                      },
                      {
                        "id": "dwdfhdi",
                        "name": "LTZ"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "5xkfaff",
                "name": "Epica",
                "children": [
                  {
                    "id": "wie0r1e",
                    "name": "2.0 D LT"
                  },
                  {
                    "id": "t6vq6za",
                    "name": "2.0 LT"
                  }
                ]
              },
              {
                "id": "fs4p9wo",
                "name": "Evanda",
                "children": [
                  {
                    "id": "uouj696",
                    "name": "2.0 CDX"
                  },
                  {
                    "id": "203ezho",
                    "name": "2.0 Platinium"
                  }
                ]
              },
              {
                "id": "oz05kkq",
                "name": "İmpala",
                "children": [
                  {
                    "id": "fopdebe",
                    "name": "3.8"
                  },
                  {
                    "id": "kxkbjgl",
                    "name": "5.7"
                  }
                ]
              },
              {
                "id": "57zjuwi",
                "name": "Kalos",
                "children": [
                  {
                    "id": "v2t8fy3",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "giup8oh",
                        "name": "S"
                      },
                      {
                        "id": "9mym0ki",
                        "name": "SE"
                      }
                    ]
                  },
                  {
                    "id": "y06vyep",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "bg42p6o",
                        "name": "S"
                      },
                      {
                        "id": "4f24v05",
                        "name": "SE"
                      },
                      {
                        "id": "rr2lj04",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "hmcq8t1",
                "name": "Lacetti",
                "children": [
                  {
                    "id": "hrjsd5k",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "2xthwvw",
                        "name": "CDX"
                      },
                      {
                        "id": "umw94zi",
                        "name": "SE"
                      },
                      {
                        "id": "mn7k1kf",
                        "name": "SX"
                      },
                      {
                        "id": "dn9ls0s",
                        "name": "WTCC"
                      }
                    ]
                  },
                  {
                    "id": "8x33msp",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "my2oo3d",
                        "name": "CDX"
                      },
                      {
                        "id": "1u7byi6",
                        "name": "SE"
                      },
                      {
                        "id": "7ue14aq",
                        "name": "SX"
                      },
                      {
                        "id": "nnn9djw",
                        "name": "WTCC"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "c534blz",
                "name": "Rezzo",
                "children": [
                  {
                    "id": "uazrm9b",
                    "name": "1.6 SX Comfort"
                  }
                ]
              },
              {
                "id": "kva7xhv",
                "name": "Spark",
                "children": [
                  {
                    "id": "5kxghxy",
                    "name": "0.8",
                    "children": [
                      {
                        "id": "vv9cv9t",
                        "name": "S"
                      },
                      {
                        "id": "cctn5aa",
                        "name": "SE"
                      }
                    ]
                  },
                  {
                    "id": "wcxbwfw",
                    "name": "1.0",
                    "children": [
                      {
                        "id": "8vq2au7",
                        "name": "1.0"
                      },
                      {
                        "id": "z8xgm3d",
                        "name": "SE"
                      },
                      {
                        "id": "jl4irib",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "cjbst62",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "25rgyuw",
                        "name": "LS"
                      },
                      {
                        "id": "13ziqwh",
                        "name": "LT"
                      },
                      {
                        "id": "paz2368",
                        "name": "LTZ"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "xlydmpn",
            "name": "Chrysler",
            "children": [
              {
                "id": "h1h2ovx",
                "name": "300 C",
                "children": [
                  {
                    "id": "bf63xjq",
                    "name": "2.7"
                  },
                  {
                    "id": "ozforb8",
                    "name": "3.0 CRD"
                  },
                  {
                    "id": "erfi9yg",
                    "name": "3.5"
                  },
                  {
                    "id": "yhljme7",
                    "name": "5.7"
                  },
                  {
                    "id": "lg8v69c",
                    "name": "6.1 SRT"
                  }
                ]
              },
              {
                "id": "6f5gcxi",
                "name": "300 M",
                "children": [
                  {
                    "id": "ooht1ht",
                    "name": "3.5"
                  }
                ]
              },
              {
                "id": "1v0wfe8",
                "name": "Concorde",
                "children": [
                  {
                    "id": "vv3nowq",
                    "name": "3.5"
                  }
                ]
              },
              {
                "id": "5s6p96f",
                "name": "Crossfire",
                "children": [
                  {
                    "id": "pmb723a",
                    "name": "Coupe 3.2"
                  },
                  {
                    "id": "t0l135x",
                    "name": "Roadster 3.2"
                  }
                ]
              },
              {
                "id": "79vkpmk",
                "name": "LHS",
                "children": [
                  {
                    "id": "neoh2vz",
                    "name": "3.5"
                  }
                ]
              },
              {
                "id": "97ar8yu",
                "name": "Neon",
                "children": [
                  {
                    "id": "phzsmqk",
                    "name": "2.0"
                  }
                ]
              },
              {
                "id": "2kvachd",
                "name": "PT Cruiser",
                "children": [
                  {
                    "id": "mm1fl6b",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "tkg6hk5",
                        "name": "Classic"
                      }
                    ]
                  },
                  {
                    "id": "ab1k8km",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "do0f5mt",
                        "name": "Limited"
                      }
                    ]
                  },
                  {
                    "id": "cjn0c4j",
                    "name": "2.4",
                    "children": [
                      {
                        "id": "eljarpo",
                        "name": "Limited"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "07vbfwq",
                "name": "Sebring",
                "children": [
                  {
                    "id": "viskizs",
                    "name": "2.0 CRD",
                    "children": [
                      {
                        "id": "ra0b5ti",
                        "name": "Convertible"
                      },
                      {
                        "id": "35btqrw",
                        "name": "Limited"
                      }
                    ]
                  },
                  {
                    "id": "4vm4tfx",
                    "name": "2.4 Limited"
                  },
                  {
                    "id": "8ctvc03",
                    "name": "2.5 LXI"
                  },
                  {
                    "id": "vmkdmp4",
                    "name": "2.7 Limited"
                  },
                  {
                    "id": "893qtrs",
                    "name": "2.7 LX"
                  }
                ]
              },
              {
                "id": "q6vo1rl",
                "name": "Stratus",
                "children": [
                  {
                    "id": "hqf6bx7",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "bqrcq2c",
                        "name": "LE"
                      }
                    ]
                  },
                  {
                    "id": "o402iuj",
                    "name": "2.5",
                    "children": [
                      {
                        "id": "vaehxku",
                        "name": "LX"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "uajzp2v",
            "name": "Citroen",
            "children": [
              {
                "id": "f1zv85c",
                "name": "AMİ",
                "children": [
                  {
                    "id": "ettagq0",
                    "name": "Buggy"
                  },
                  {
                    "id": "vnjqm1l",
                    "name": "Electric"
                  },
                  {
                    "id": "643n6qu",
                    "name": "Peps"
                  },
                  {
                    "id": "inf8ou9",
                    "name": "Pop"
                  },
                  {
                    "id": "lk3dl6d",
                    "name": "Tonic"
                  }
                ]
              },
              {
                "id": "9vcodgl",
                "name": "C-Elysee",
                "children": [
                  {
                    "id": "b8xn9g6",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "0u66pz9",
                        "name": "Live"
                      }
                    ]
                  },
                  {
                    "id": "d0d460b",
                    "name": "1.5 BlueHDI",
                    "children": [
                      {
                        "id": "8tqal8j",
                        "name": "Feel"
                      },
                      {
                        "id": "h74ungp",
                        "name": "Feel Bold"
                      },
                      {
                        "id": "gwfrqa3",
                        "name": "Live"
                      },
                      {
                        "id": "evuvldt",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "ahq6hi1",
                    "name": "1.6 BlueHDI",
                    "children": [
                      {
                        "id": "dshrtre",
                        "name": "Feel"
                      },
                      {
                        "id": "nqetbvb",
                        "name": "Live"
                      },
                      {
                        "id": "4pmox3v",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "h40xdb9",
                    "name": "1.2  VTİ",
                    "children": [
                      {
                        "id": "9st6uo4",
                        "name": "Attraction"
                      },
                      {
                        "id": "8h8zruy",
                        "name": "Confort"
                      },
                      {
                        "id": "np8fmvz",
                        "name": "Exclusive"
                      }
                    ]
                  },
                  {
                    "id": "iuy65nv",
                    "name": "1.6 HDİ",
                    "children": [
                      {
                        "id": "hbc8xv7",
                        "name": "Attraction"
                      },
                      {
                        "id": "618xoqi",
                        "name": "Confort"
                      },
                      {
                        "id": "yi4t3my",
                        "name": "Exclusive"
                      },
                      {
                        "id": "nbd9aun",
                        "name": "Feel"
                      },
                      {
                        "id": "emg8uix",
                        "name": "Live"
                      },
                      {
                        "id": "6xu522b",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "1finiw7",
                    "name": "1.6 VTİ",
                    "children": [
                      {
                        "id": "aj0oipw",
                        "name": "Exclusive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "mzs3qey",
                "name": "C1",
                "children": [
                  {
                    "id": "gk6oxe9",
                    "name": "1.0",
                    "children": [
                      {
                        "id": "a53rxdn",
                        "name": "Confort"
                      },
                      {
                        "id": "5kylmsp",
                        "name": "SX"
                      },
                      {
                        "id": "1h9zwms",
                        "name": "SX Sensodrive"
                      }
                    ]
                  },
                  {
                    "id": "7ltg2h6",
                    "name": "1.0 VTi",
                    "children": [
                      {
                        "id": "3iux004",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "pr3t9ol",
                    "name": "1.4 HDi",
                    "children": [
                      {
                        "id": "sl9qk01",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "38r7mcw",
                "name": "C2",
                "children": [
                  {
                    "id": "oftuva3",
                    "name": "1.1",
                    "children": [
                      {
                        "id": "m0nj7u8",
                        "name": "X"
                      }
                    ]
                  },
                  {
                    "id": "bvuzar6",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "h6rh8ti",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "hd2aia6",
                    "name": "1.4 HDi",
                    "children": [
                      {
                        "id": "2cz5d72",
                        "name": "SX"
                      },
                      {
                        "id": "4lh6kdh",
                        "name": "Tonic"
                      },
                      {
                        "id": "n3tw0xk",
                        "name": "VTR"
                      },
                      {
                        "id": "womtaww",
                        "name": "X Pack"
                      }
                    ]
                  },
                  {
                    "id": "z6gc875",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "w10s4ok",
                        "name": "GT"
                      },
                      {
                        "id": "gqlbqar",
                        "name": "VTR"
                      },
                      {
                        "id": "5amm5rx",
                        "name": "VTS"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "0uqjnw9",
                "name": "C3",
                "children": [
                  {
                    "id": "jcc68k5",
                    "name": "1.2 Puretech",
                    "children": [
                      {
                        "id": "524gm4c",
                        "name": "Elle"
                      },
                      {
                        "id": "glco41k",
                        "name": "Feel"
                      },
                      {
                        "id": "18rfk4d",
                        "name": "Feel Adventure"
                      },
                      {
                        "id": "kh3pfle",
                        "name": "Feel Bold"
                      },
                      {
                        "id": "mhzozrr",
                        "name": "Feel Business"
                      },
                      {
                        "id": "xhovyv3",
                        "name": "Feel S Edition"
                      },
                      {
                        "id": "kkrn5c5",
                        "name": "Live"
                      },
                      {
                        "id": "8bk4za0",
                        "name": "selection"
                      },
                      {
                        "id": "fca5xrv",
                        "name": "Shine"
                      },
                      {
                        "id": "7a6g1ax",
                        "name": "Shine Business"
                      },
                      {
                        "id": "ebj88vk",
                        "name": "Shine S Edition"
                      },
                      {
                        "id": "bgvah7h",
                        "name": "Shine SX Edition"
                      }
                    ]
                  },
                  {
                    "id": "rdo2w8b",
                    "name": "1.2 VTi",
                    "children": [
                      {
                        "id": "2xjf4iq",
                        "name": "Cool"
                      }
                    ]
                  },
                  {
                    "id": "2527rte",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "117mddo",
                        "name": "Attraction"
                      },
                      {
                        "id": "uz60r6o",
                        "name": "Collection"
                      },
                      {
                        "id": "d5ujpts",
                        "name": "Comfort"
                      },
                      {
                        "id": "p2bginn",
                        "name": "Pluriel"
                      },
                      {
                        "id": "4ds63r6",
                        "name": "SensoDrive"
                      },
                      {
                        "id": "rqk7kh8",
                        "name": "SX"
                      },
                      {
                        "id": "9syqf6n",
                        "name": "X Furio"
                      }
                    ]
                  },
                  {
                    "id": "s75r6vp",
                    "name": "1.4 e-HDi",
                    "children": [
                      {
                        "id": "642i900",
                        "name": "Confort"
                      }
                    ]
                  },
                  {
                    "id": "qocvl32",
                    "name": "1.4 HDi",
                    "children": [
                      {
                        "id": "g2h8vs1",
                        "name": "Attraction"
                      },
                      {
                        "id": "88rsl6x",
                        "name": "Collection"
                      },
                      {
                        "id": "k3cvrgd",
                        "name": "Confort"
                      },
                      {
                        "id": "r21j229",
                        "name": "Exclusive"
                      },
                      {
                        "id": "6uc7he3",
                        "name": "SX"
                      },
                      {
                        "id": "ktops9f",
                        "name": "X"
                      },
                      {
                        "id": "vt6y9gh",
                        "name": "X Furio"
                      }
                    ]
                  },
                  {
                    "id": "hmfinr1",
                    "name": "1.4 VTi",
                    "children": [
                      {
                        "id": "ahak3hl",
                        "name": "Collection"
                      },
                      {
                        "id": "h1tg9ej",
                        "name": "Confort"
                      }
                    ]
                  },
                  {
                    "id": "y4j5bif",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "a7nms88",
                        "name": "Pluriel"
                      },
                      {
                        "id": "mcol1fu",
                        "name": "SX"
                      },
                      {
                        "id": "krtccq9",
                        "name": "XTR"
                      }
                    ]
                  },
                  {
                    "id": "63gif2j",
                    "name": "1.6 BlueHDi",
                    "children": [
                      {
                        "id": "776fp81",
                        "name": "Feel"
                      },
                      {
                        "id": "3ueif17",
                        "name": "Live"
                      },
                      {
                        "id": "f5i2a1m",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "u618ujk",
                    "name": "1.6 HDi",
                    "children": [
                      {
                        "id": "aa03fqy",
                        "name": "Exclusive"
                      },
                      {
                        "id": "2mud0q4",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "zax9wpq",
                    "name": "1.6 VTi",
                    "children": [
                      {
                        "id": "wh08jtd",
                        "name": "Confort"
                      },
                      {
                        "id": "g1rkuz3",
                        "name": "Exclusive"
                      },
                      {
                        "id": "pslobvb",
                        "name": "Feel"
                      },
                      {
                        "id": "9oiimub",
                        "name": "Shine"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "h113l3a",
                "name": "e-C3",
                "children": [
                  {
                    "id": "a0fw1cn",
                    "name": "Max"
                  },
                  {
                    "id": "ldu0zeh",
                    "name": "Plus"
                  }
                ]
              },
              {
                "id": "ehk867f",
                "name": "C3 Picasso",
                "children": [
                  {
                    "id": "qonspr9",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "pf72dqi",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "tbjf6ey",
                    "name": "1.6 e-HDi",
                    "children": [
                      {
                        "id": "swpe1m0",
                        "name": "Confort"
                      }
                    ]
                  },
                  {
                    "id": "czu4noi",
                    "name": "1.6 HDi",
                    "children": [
                      {
                        "id": "c4bl8d3",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "8zost0r",
                "name": "C4",
                "children": [
                  {
                    "id": "rtaoo86",
                    "name": "1.2 Hybrid",
                    "children": [
                      {
                        "id": "qlqdl88",
                        "name": "Max"
                      }
                    ]
                  },
                  {
                    "id": "y9p4n2l",
                    "name": "1.2 Puretech",
                    "children": [
                      {
                        "id": "bw24gx1",
                        "name": "Confort"
                      },
                      {
                        "id": "eu7q5qa",
                        "name": "Exclusive"
                      },
                      {
                        "id": "z22uuf8",
                        "name": "Feel"
                      },
                      {
                        "id": "02rqcxv",
                        "name": "Feel Bold"
                      },
                      {
                        "id": "g9c2wzd",
                        "name": "Max"
                      },
                      {
                        "id": "rb0o2a1",
                        "name": "Shine"
                      },
                      {
                        "id": "ev2o3zi",
                        "name": "Shine Bold"
                      },
                      {
                        "id": "9pmozcb",
                        "name": "You"
                      }
                    ]
                  },
                  {
                    "id": "ecbu4jm",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "cie11mx",
                        "name": "Collection"
                      },
                      {
                        "id": "9z7ktra",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "wryoi7d",
                    "name": "1.4 VTi",
                    "children": [
                      {
                        "id": "g4z54gs",
                        "name": "Attraction"
                      },
                      {
                        "id": "gqk737t",
                        "name": "Easy"
                      }
                    ]
                  },
                  {
                    "id": "7bf3ie9",
                    "name": "1.5 BlueHDi",
                    "children": [
                      {
                        "id": "bqvrg7y",
                        "name": "Feel Bold"
                      },
                      {
                        "id": "wohvxf4",
                        "name": "Shine Bold"
                      }
                    ]
                  },
                  {
                    "id": "v50wcer",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "kzcrx9h",
                        "name": "SX"
                      },
                      {
                        "id": "cqa3bal",
                        "name": "SX PK"
                      },
                      {
                        "id": "2bu0ld8",
                        "name": "THP Exclusive"
                      },
                      {
                        "id": "1wt4rff",
                        "name": "VTi Confort"
                      },
                      {
                        "id": "hcwnqsb",
                        "name": "VTR"
                      },
                      {
                        "id": "bec2mw9",
                        "name": "VTRPK"
                      }
                    ]
                  },
                  {
                    "id": "vdjdjix",
                    "name": "1.6 BlueHDi",
                    "children": [
                      {
                        "id": "8whjyd9",
                        "name": "Confort"
                      },
                      {
                        "id": "5gtccg3",
                        "name": "Exclusive"
                      }
                    ]
                  },
                  {
                    "id": "hs9fzj9",
                    "name": "1.6 E-HDi",
                    "children": [
                      {
                        "id": "iab7clk",
                        "name": "Confort"
                      },
                      {
                        "id": "ej6hnmz",
                        "name": "Confort Plus"
                      },
                      {
                        "id": "wz8ckix",
                        "name": "Exclusive"
                      }
                    ]
                  },
                  {
                    "id": "zkk3cl5",
                    "name": "1.6 HDi",
                    "children": [
                      {
                        "id": "x2g8li6",
                        "name": "Attraction"
                      },
                      {
                        "id": "bncmw3c",
                        "name": "Confort"
                      },
                      {
                        "id": "r3g4tlp",
                        "name": "Confort Plus"
                      },
                      {
                        "id": "ze1xwr0",
                        "name": "Easy"
                      },
                      {
                        "id": "asxzpsr",
                        "name": "SX"
                      },
                      {
                        "id": "8w61vuq",
                        "name": "SX PK"
                      },
                      {
                        "id": "09q43pg",
                        "name": "VTRPK"
                      }
                    ]
                  },
                  {
                    "id": "2n1otng",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "ei8xgnd",
                        "name": "VTS"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "02s215b",
                "name": "C4 Grand Picasso",
                "children": [
                  {
                    "id": "p5qyhrs",
                    "name": "1.6 BlueHDi",
                    "children": [
                      {
                        "id": "5zq446x",
                        "name": "Feel"
                      },
                      {
                        "id": "cb45gvp",
                        "name": "İntensive"
                      },
                      {
                        "id": "hk7zarg",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "gv1id4z",
                    "name": "1.6 e-HDi",
                    "children": [
                      {
                        "id": "3rqzu7f",
                        "name": "Dynamic"
                      },
                      {
                        "id": "4yfoqb7",
                        "name": "İntensive"
                      }
                    ]
                  },
                  {
                    "id": "dj8sife",
                    "name": "1.6HDi"
                  },
                  {
                    "id": "liq1chn",
                    "name": "2.0 HDi",
                    "children": [
                      {
                        "id": "os610wf",
                        "name": "Dynamique"
                      },
                      {
                        "id": "7ighzb3",
                        "name": "Exclusive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "g3u5fc2",
                "name": "C4 Picasso",
                "children": [
                  {
                    "id": "o37j7gn",
                    "name": "1.6 BlueHDi",
                    "children": [
                      {
                        "id": "pd6fjag",
                        "name": "Feel"
                      },
                      {
                        "id": "j60bies",
                        "name": "İntensive"
                      },
                      {
                        "id": "q1dft13",
                        "name": "Shine"
                      }
                    ]
                  },
                  {
                    "id": "7by4rnt",
                    "name": "1.6 e-HDi",
                    "children": [
                      {
                        "id": "tr7xlti",
                        "name": "Dynamique"
                      },
                      {
                        "id": "6hw9wh0",
                        "name": "İntensive"
                      }
                    ]
                  },
                  {
                    "id": "h4ken1d",
                    "name": "1.6 HDi",
                    "children": [
                      {
                        "id": "iz93efv",
                        "name": "Dynamique"
                      },
                      {
                        "id": "lbfnj5w",
                        "name": "Exclusive"
                      },
                      {
                        "id": "zwen4tj",
                        "name": "İntensive"
                      },
                      {
                        "id": "fq0aqsf",
                        "name": "SX"
                      },
                      {
                        "id": "40cqhvn",
                        "name": "SX PK"
                      },
                      {
                        "id": "6vljmhk",
                        "name": "VTR PK"
                      }
                    ]
                  },
                  {
                    "id": "rnadqmc",
                    "name": "1.6 THP",
                    "children": [
                      {
                        "id": "oat2fq5",
                        "name": "Exclusive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "6ht2ovq",
                "name": "C4 X",
                "children": [
                  {
                    "id": "gyeouh9",
                    "name": "1.2 Puretech",
                    "children": [
                      {
                        "id": "egdwecd",
                        "name": "Feel"
                      },
                      {
                        "id": "6pj03pe",
                        "name": "Feel Bold"
                      },
                      {
                        "id": "yk8hocb",
                        "name": "Max"
                      },
                      {
                        "id": "yl1l2uo",
                        "name": "Shine"
                      },
                      {
                        "id": "ao9ru2a",
                        "name": "Shine Bold"
                      },
                      {
                        "id": "smm0rxz",
                        "name": "You"
                      }
                    ]
                  },
                  {
                    "id": "ginwx23",
                    "name": "1.5 BlueHDi",
                    "children": [
                      {
                        "id": "m4m80bm",
                        "name": "Feel Bold"
                      },
                      {
                        "id": "a5jlkxw",
                        "name": "Shine"
                      },
                      {
                        "id": "7jjpf40",
                        "name": "Shine Bold"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "smdgwx0",
                "name": "E-C4",
                "children": [
                  {
                    "id": "coeg0x4",
                    "name": "Max"
                  },
                  {
                    "id": "uu3uh8j",
                    "name": "Shine Bold"
                  }
                ]
              },
              {
                "id": "9qvs6cy",
                "name": "E-C4 X",
                "children": [
                  {
                    "id": "nlzc5rf",
                    "name": "Max"
                  },
                  {
                    "id": "dm3j415",
                    "name": "Shine Bold"
                  }
                ]
              },
              {
                "id": "mrm0135",
                "name": "C5",
                "children": [
                  {
                    "id": "fnhmh2u",
                    "name": "1.6 eHDi",
                    "children": [
                      {
                        "id": "ngi5j0w",
                        "name": "Confort"
                      },
                      {
                        "id": "7g0t5uw",
                        "name": "Dynamique"
                      },
                      {
                        "id": "auas26x",
                        "name": "Executive"
                      }
                    ]
                  },
                  {
                    "id": "gfnnig6",
                    "name": "1.6 HDi",
                    "children": [
                      {
                        "id": "xjufbm1",
                        "name": "Confort"
                      },
                      {
                        "id": "oisyzfh",
                        "name": "Dynamique"
                      },
                      {
                        "id": "ku7cp8y",
                        "name": "Executive"
                      },
                      {
                        "id": "3j7b2qw",
                        "name": "SX"
                      },
                      {
                        "id": "mpfnwc9",
                        "name": "SX PK"
                      }
                    ]
                  },
                  {
                    "id": "j65445d",
                    "name": "1.6 THP",
                    "children": [
                      {
                        "id": "1isksh5",
                        "name": "Exclusive"
                      },
                      {
                        "id": "emljiz8",
                        "name": "Dynamique"
                      }
                    ]
                  },
                  {
                    "id": "wjofj9s",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "rhfsg4r",
                        "name": "SX"
                      },
                      {
                        "id": "a2muadv",
                        "name": "SX PK"
                      }
                    ]
                  },
                  {
                    "id": "gn0rtcs",
                    "name": "2.0 HDi",
                    "children": [
                      {
                        "id": "20dd3f4",
                        "name": "Break"
                      },
                      {
                        "id": "o2kgq8g",
                        "name": "Dynamique"
                      },
                      {
                        "id": "ykomo76",
                        "name": "Exclusive"
                      },
                      {
                        "id": "epxut40",
                        "name": "HDİ"
                      },
                      {
                        "id": "crqa8cf",
                        "name": "SX"
                      },
                      {
                        "id": "3rjvlhp",
                        "name": "SX PK"
                      }
                    ]
                  },
                  {
                    "id": "5ogvzys",
                    "name": "2.2 HDi",
                    "children": [
                      {
                        "id": "e7yflnd",
                        "name": "Exclusive"
                      },
                      {
                        "id": "v1eenba",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "jp26x6f",
                    "name": "2.7 HDİ",
                    "children": [
                      {
                        "id": "2e5dgiu",
                        "name": "Exclusive"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bnwo5o0",
                "name": "C6",
                "children": [
                  {
                    "id": "7fp9i8t",
                    "name": "2.7 HDi"
                  }
                ]
              },
              {
                "id": "2h22eji",
                "name": "C8",
                "children": [
                  {
                    "id": "wnq6fld",
                    "name": "2.0 HDi Collection"
                  },
                  {
                    "id": "3efi8ct",
                    "name": "2.0 HDi"
                  },
                  {
                    "id": "w176ssj",
                    "name": "2.0 X"
                  },
                  {
                    "id": "xjriub0",
                    "name": "2.2 HDi SX"
                  }
                ]
              },
              {
                "id": "8081eej",
                "name": "Saxo",
                "children": [
                  {
                    "id": "89xvcgl",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "htonj68",
                        "name": "SX"
                      },
                      {
                        "id": "9i61r8i",
                        "name": "VTS"
                      }
                    ]
                  },
                  {
                    "id": "aueknq2",
                    "name": "1.5D",
                    "children": [
                      {
                        "id": "khz5zyj",
                        "name": "SX"
                      },
                      {
                        "id": "he5r5l8",
                        "name": "X"
                      }
                    ]
                  },
                  {
                    "id": "qg84mt2",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "t84wmbq",
                        "name": "SX"
                      },
                      {
                        "id": "r6rgmg8",
                        "name": "VTR"
                      },
                      {
                        "id": "ko07b5w",
                        "name": "VTS"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "r5m6dnz",
                "name": "Xsara",
                "children": [
                  {
                    "id": "0twcjll",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "mbfq0nh",
                        "name": "HDİ"
                      },
                      {
                        "id": "np7kt1l",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "z9ugocn",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "1e0ib1u",
                        "name": "SX"
                      },
                      {
                        "id": "lnxq82x",
                        "name": "VTR"
                      }
                    ]
                  },
                  {
                    "id": "k5ucutu",
                    "name": "1.8",
                    "children": [
                      {
                        "id": "0af5pzw",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "94zvjet",
                    "name": "1.9",
                    "children": [
                      {
                        "id": "32l7pnq",
                        "name": "TD SX"
                      }
                    ]
                  },
                  {
                    "id": "tyamqyh",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "rw7z98y",
                        "name": "Exclusive"
                      },
                      {
                        "id": "5uiu7yh",
                        "name": "HDi"
                      },
                      {
                        "id": "27uugx8",
                        "name": "VTS"
                      }
                    ]
                  },
                  {
                    "id": "245h08e",
                    "name": "Picasso 1.6",
                    "children": [
                      {
                        "id": "i81163m",
                        "name": "1.6"
                      },
                      {
                        "id": "nln4pcx",
                        "name": "HDi"
                      }
                    ]
                  },
                  {
                    "id": "jx3vdbe",
                    "name": "Picasso 1.8",
                    "children": [
                      {
                        "id": "l4amms3",
                        "name": "1.8"
                      }
                    ]
                  },
                  {
                    "id": "8n93ey1",
                    "name": "Picasso 2.0",
                    "children": [
                      {
                        "id": "ebhmloj",
                        "name": "Exclusive"
                      },
                      {
                        "id": "mj0h59n",
                        "name": "HDi"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "u0365ls",
                "name": "BX",
                "children": [
                  {
                    "id": "8l5xigg",
                    "name": "14"
                  }
                ]
              },
              {
                "id": "w29eejh",
                "name": "Evasion",
                "children": [
                  {
                    "id": "nj7t0ax",
                    "name": "2.0 X"
                  }
                ]
              },
              {
                "id": "c6ycxbv",
                "name": "Xantia",
                "children": [
                  {
                    "id": "mq0bq3w",
                    "name": "1.8"
                  },
                  {
                    "id": "mmvy2ot",
                    "name": "2.0"
                  }
                ]
              },
              {
                "id": "rmsnoog",
                "name": "XM",
                "children": [
                  {
                    "id": "zno0kjy",
                    "name": "2.0"
                  }
                ]
              },
              {
                "id": "1ud9zkd",
                "name": "ZX",
                "children": [
                  {
                    "id": "z4q6yn2",
                    "name": "1.4"
                  },
                  {
                    "id": "funq2fv",
                    "name": "1.8"
                  },
                  {
                    "id": "9b2sex5",
                    "name": "2.0"
                  }
                ]
              }
            ]
          },
          {
            "id": "mhn3alc",
            "name": "Cupra",
            "children": [
              {
                "id": "gvhx2fb",
                "name": "Born",
                "children": [
                  {
                    "id": "1kthfi9",
                    "name": "150 KW"
                  }
                ]
              },
              {
                "id": "m5j4azo",
                "name": "Leon",
                "children": [
                  {
                    "id": "2zxlney",
                    "name": "1.5 eTSİ",
                    "children": [
                      {
                        "id": "8w8s9hu",
                        "name": "Standart"
                      },
                      {
                        "id": "efcp084",
                        "name": "Supreme"
                      },
                      {
                        "id": "pdfowd0",
                        "name": "VZ Line"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "rn4aspk",
            "name": "Dacia",
            "children": [
              {
                "id": "nbo6pbl",
                "name": "Jogger",
                "children": [
                  {
                    "id": "9taej91",
                    "name": "1.0 ECO-G",
                    "children": [
                      {
                        "id": "253rm1j",
                        "name": "Essential"
                      },
                      {
                        "id": "hsqdr8t",
                        "name": "Expression"
                      },
                      {
                        "id": "5dgv970",
                        "name": "Extreme"
                      },
                      {
                        "id": "hx1tuwi",
                        "name": "Seri Limite Extreme"
                      }
                    ]
                  },
                  {
                    "id": "w1i975o",
                    "name": "1.0 Tce",
                    "children": [
                      {
                        "id": "lt4cs5f",
                        "name": "Essential"
                      },
                      {
                        "id": "xn9hwkd",
                        "name": "Expression"
                      },
                      {
                        "id": "9qu1t7z",
                        "name": "Extreme"
                      }
                    ]
                  },
                  {
                    "id": "f22ey8f",
                    "name": "1.6 Hybrid",
                    "children": [
                      {
                        "id": "ld9sbg5",
                        "name": "Extreme"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "9bmjoip",
                "name": "Lodgy",
                "children": [
                  {
                    "id": "7obfb68",
                    "name": "1.3 TCE",
                    "children": [
                      {
                        "id": "t6oyo6p",
                        "name": "Ambiance"
                      }
                    ]
                  },
                  {
                    "id": "nvch4f2",
                    "name": "1.5 BlueDCI",
                    "children": [
                      {
                        "id": "b9py2me",
                        "name": "Ambiance"
                      },
                      {
                        "id": "ydupoth",
                        "name": "Laureate"
                      },
                      {
                        "id": "e5scf5i",
                        "name": "Stepway"
                      }
                    ]
                  },
                  {
                    "id": "qp2ahgi",
                    "name": "1.5 dCi",
                    "children": [
                      {
                        "id": "ab6lno2",
                        "name": "Allroad"
                      },
                      {
                        "id": "qn71paz",
                        "name": "Laureate"
                      },
                      {
                        "id": "2fr81qw",
                        "name": "Stepway"
                      },
                      {
                        "id": "zo8cqbi",
                        "name": "Stepway Style"
                      }
                    ]
                  },
                  {
                    "id": "kf5hw3e",
                    "name": "1.6 ECO-G",
                    "children": [
                      {
                        "id": "uwxgevm",
                        "name": "Ambiance"
                      }
                    ]
                  },
                  {
                    "id": "nn9bpnc",
                    "name": "1.6 SCE",
                    "children": [
                      {
                        "id": "sbrdsqa",
                        "name": "Ambiance"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "wsle5b1",
                "name": "Logan",
                "children": [
                  {
                    "id": "v2cnmzm",
                    "name": "0.9 TCE MCW",
                    "children": [
                      {
                        "id": "naushgz",
                        "name": "Ambiance"
                      }
                    ]
                  },
                  {
                    "id": "zgg1dv9",
                    "name": "1.0 MCW",
                    "children": [
                      {
                        "id": "r198i1w",
                        "name": "Ambiance"
                      }
                    ]
                  },
                  {
                    "id": "174a1nl",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "ouax7lz",
                        "name": "Ambiance"
                      }
                    ]
                  },
                  {
                    "id": "1500j8j",
                    "name": "1.2 MCW",
                    "children": [
                      {
                        "id": "rm4tb9g",
                        "name": "Ambiance"
                      }
                    ]
                  },
                  {
                    "id": "4zux37n",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "ij42ums",
                        "name": "1.4"
                      },
                      {
                        "id": "oxyado6",
                        "name": "Ambiance"
                      },
                      {
                        "id": "kolg856",
                        "name": "Black Line"
                      },
                      {
                        "id": "0q8gobg",
                        "name": "Laureate"
                      }
                    ]
                  },
                  {
                    "id": "qzcze6j",
                    "name": "1.5 dCi",
                    "children": [
                      {
                        "id": "5urnqog",
                        "name": "Ambiance"
                      },
                      {
                        "id": "zpfqj2r",
                        "name": "Black Line"
                      },
                      {
                        "id": "rt48dju",
                        "name": "Laureate"
                      }
                    ]
                  },
                  {
                    "id": "b9lbtpx",
                    "name": "1.5 DCi MCV",
                    "children": [
                      {
                        "id": "xp3h9ux",
                        "name": "Ambiance"
                      },
                      {
                        "id": "j61hmnk",
                        "name": "Black Line"
                      },
                      {
                        "id": "8y66t3l",
                        "name": "Laureate"
                      }
                    ]
                  },
                  {
                    "id": "z5iyx93",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "dn2t6u2",
                        "name": "Ambiance"
                      },
                      {
                        "id": "ltpaeeo",
                        "name": "Laureate"
                      },
                      {
                        "id": "4x6seia",
                        "name": "Prestige"
                      }
                    ]
                  },
                  {
                    "id": "3gkl6bm",
                    "name": "1.6 MCV",
                    "children": [
                      {
                        "id": "ppdojh5",
                        "name": "Ambiance"
                      },
                      {
                        "id": "8ob09e4",
                        "name": "Black Line"
                      },
                      {
                        "id": "3grm8mi",
                        "name": "Laureate"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "7dbrwtc",
                "name": "Sandero",
                "children": [
                  {
                    "id": "7njgmof",
                    "name": "0.9 ECO-G",
                    "children": [
                      {
                        "id": "annmzu4",
                        "name": "Turbo Stepway"
                      }
                    ]
                  },
                  {
                    "id": "q21uub4",
                    "name": "0.9 TCE",
                    "children": [
                      {
                        "id": "rptdo8h",
                        "name": "Turbo Stepway"
                      },
                      {
                        "id": "nazon2q",
                        "name": "Stepway"
                      },
                      {
                        "id": "mtt07fq",
                        "name": "Stepway Ambiance"
                      },
                      {
                        "id": "ggg4hom",
                        "name": "Stepway Easy R"
                      },
                      {
                        "id": "u0zi330",
                        "name": "Stepway Style"
                      },
                      {
                        "id": "ta3m2h8",
                        "name": "Turbo Stepway Easy-R"
                      }
                    ]
                  },
                  {
                    "id": "xr8xrtb",
                    "name": "1.0 SCE",
                    "children": [
                      {
                        "id": "s7usf2g",
                        "name": "Ambiance"
                      },
                      {
                        "id": "3xi7svu",
                        "name": "Comfort"
                      }
                    ]
                  },
                  {
                    "id": "djrg7vp",
                    "name": "1.0TCE",
                    "children": [
                      {
                        "id": "q6q72xi",
                        "name": "Comfort"
                      },
                      {
                        "id": "o0ci84q",
                        "name": "Essential"
                      },
                      {
                        "id": "g629j6v",
                        "name": "Expression"
                      },
                      {
                        "id": "oxd5xq9",
                        "name": "Prestige"
                      },
                      {
                        "id": "9aoon2y",
                        "name": "Stepway Comfort"
                      }
                    ]
                  },
                  {
                    "id": "am5nl6z",
                    "name": "1.0 TCE ECO-G",
                    "children": [
                      {
                        "id": "079bq0n",
                        "name": "Comfort"
                      },
                      {
                        "id": "0t5id1y",
                        "name": "Stepway"
                      }
                    ]
                  },
                  {
                    "id": "hb4cjnc",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "1j1d8u8",
                        "name": "Ambiance"
                      },
                      {
                        "id": "iag1d6k",
                        "name": "Black Line"
                      }
                    ]
                  },
                  {
                    "id": "6yhcxwh",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "gj7tgfh",
                        "name": "Ambiance"
                      },
                      {
                        "id": "krmd572",
                        "name": "Black Line"
                      },
                      {
                        "id": "iho7yes",
                        "name": "Laureate"
                      }
                    ]
                  },
                  {
                    "id": "58m9spu",
                    "name": "1.5 BlueDcİ",
                    "children": [
                      {
                        "id": "xvkxhwq",
                        "name": "Ambiance"
                      },
                      {
                        "id": "ss87m05",
                        "name": "Stepway"
                      }
                    ]
                  },
                  {
                    "id": "0g9iym9",
                    "name": "1.5 DCİ",
                    "children": [
                      {
                        "id": "y9bb78y",
                        "name": "Ambiance"
                      },
                      {
                        "id": "mdn4jrg",
                        "name": "Black Line"
                      },
                      {
                        "id": "dt0aum0",
                        "name": "Laureate"
                      },
                      {
                        "id": "iztclkc",
                        "name": "Stepway"
                      },
                      {
                        "id": "yzid9xr",
                        "name": "Stepway Style"
                      }
                    ]
                  },
                  {
                    "id": "c8z2b1v",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "qjlmyhq",
                        "name": "Laureate"
                      },
                      {
                        "id": "ajf0hao",
                        "name": "Stepway"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "zniqldn",
                "name": "Solenza",
                "children": [
                  {
                    "id": "3mokdgp",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "3cpv35z",
                        "name": "Clima"
                      },
                      {
                        "id": "40xp300",
                        "name": "Comfort"
                      },
                      {
                        "id": "trk0b6g",
                        "name": "Prima"
                      },
                      {
                        "id": "x4ron6f",
                        "name": "Rapsodie"
                      },
                      {
                        "id": "n3cwa1n",
                        "name": "Scala"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "i9mllgy",
            "name": "Daewoo",
            "children": [
              {
                "id": "9hm6b5a",
                "name": "Nexia",
                "children": [
                  {
                    "id": "9v26ezn",
                    "name": "1.5",
                    "children": [
                      {
                        "id": "sslyk21",
                        "name": "GL"
                      },
                      {
                        "id": "hqtoe64",
                        "name": "GLE"
                      },
                      {
                        "id": "r2rz1l7",
                        "name": "GLX"
                      },
                      {
                        "id": "cng74ht",
                        "name": "GTX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "achvpv3",
                "name": "Nubira",
                "children": [
                  {
                    "id": "u4h1wjr",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "sq1jir4",
                        "name": "S"
                      },
                      {
                        "id": "e8jrjr6",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "shzgo0b",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "ggxbkg2",
                        "name": "CDX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "er2jyq1",
                "name": "Espero",
                "children": [
                  {
                    "id": "lqysrnr",
                    "name": "2.0İ"
                  }
                ]
              },
              {
                "id": "so27u20",
                "name": "Lanos",
                "children": [
                  {
                    "id": "e7xag06",
                    "name": "1.3",
                    "children": [
                      {
                        "id": "wuamihk",
                        "name": "S"
                      }
                    ]
                  },
                  {
                    "id": "cstyjsz",
                    "name": "1.5",
                    "children": [
                      {
                        "id": "6pkjw17",
                        "name": "SE"
                      },
                      {
                        "id": "bb9u51r",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "md39k4h",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "qa6ec15",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "q10l4pa",
                "name": "Leganza",
                "children": [
                  {
                    "id": "quq8xol",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "kg3svle",
                        "name": "CDX"
                      },
                      {
                        "id": "iykt7bw",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "x5f1gc6",
                "name": "Matiz",
                "children": [
                  {
                    "id": "bahtcu0",
                    "name": "0.8",
                    "children": [
                      {
                        "id": "nnbwxwl",
                        "name": "S"
                      },
                      {
                        "id": "z7mmjv0",
                        "name": "SE"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "tlw5kkh",
                "name": "Racer",
                "children": [
                  {
                    "id": "h56wy5v",
                    "name": "1.5İ"
                  }
                ]
              },
              {
                "id": "1galbgr",
                "name": "Tico",
                "children": [
                  {
                    "id": "lfsyc5n",
                    "name": "0.8",
                    "children": [
                      {
                        "id": "ifv7nxo",
                        "name": "SX"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "ck3cbca",
            "name": "DS Automobiles",
            "children": [
              {
                "id": "te0hy1s",
                "name": "DS 3",
                "children": [
                  {
                    "id": "stcaxoh",
                    "name": "1.2 Puretech",
                    "children": [
                      {
                        "id": "m3zct69",
                        "name": "Start Stop"
                      }
                    ]
                  },
                  {
                    "id": "dtcvy08",
                    "name": "1.2 VTi",
                    "children": [
                      {
                        "id": "1gy8gsh",
                        "name": "D Style"
                      }
                    ]
                  },
                  {
                    "id": "grout3a",
                    "name": "1.6 e-HDİ",
                    "children": [
                      {
                        "id": "tr7zeyf",
                        "name": "D-Sport"
                      },
                      {
                        "id": "0awr039",
                        "name": "D-Style"
                      }
                    ]
                  },
                  {
                    "id": "6orx209",
                    "name": "1.6 THP",
                    "children": [
                      {
                        "id": "2dqhy5s",
                        "name": "D-Sport"
                      }
                    ]
                  },
                  {
                    "id": "add3n89",
                    "name": "1.6 VTi",
                    "children": [
                      {
                        "id": "0dcsb0h",
                        "name": "Style"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "c9ipz5p",
                "name": "DS 4",
                "children": [
                  {
                    "id": "vlo3z4r",
                    "name": "1.2 Puretech",
                    "children": [
                      {
                        "id": "nfd0bxq",
                        "name": "Esprit de Voyage"
                      },
                      {
                        "id": "nk8scyn",
                        "name": "Pallas"
                      },
                      {
                        "id": "f68wqyu",
                        "name": "Performance Line"
                      }
                    ]
                  },
                  {
                    "id": "cc0wsrh",
                    "name": "1.5 BlueHDi",
                    "children": [
                      {
                        "id": "j8cc8cz",
                        "name": "Esprit Voyage"
                      },
                      {
                        "id": "r63mggx",
                        "name": "Pallas"
                      },
                      {
                        "id": "juhkgbt",
                        "name": "Trocadero"
                      },
                      {
                        "id": "dwb6g58",
                        "name": "Performance Line"
                      }
                    ]
                  },
                  {
                    "id": "gjk74x7",
                    "name": "1.6 BlueHDi",
                    "children": [
                      {
                        "id": "wbgu7lj",
                        "name": "Start Stop"
                      }
                    ]
                  },
                  {
                    "id": "8cm1my6",
                    "name": "1.6 e- HDi",
                    "children": [
                      {
                        "id": "8ga68iw",
                        "name": "D-Sport"
                      },
                      {
                        "id": "w3mab4g",
                        "name": "D-Style"
                      }
                    ]
                  },
                  {
                    "id": "1ufs677",
                    "name": "1.6 Puretech",
                    "children": [
                      {
                        "id": "wc9j3ha",
                        "name": "Trocadero"
                      }
                    ]
                  },
                  {
                    "id": "ouzq7sc",
                    "name": "1.6 THP",
                    "children": [
                      {
                        "id": "iygeuw2",
                        "name": "D-Sport"
                      }
                    ]
                  },
                  {
                    "id": "jic37vs",
                    "name": "1.6 VTi",
                    "children": [
                      {
                        "id": "4mtvrde",
                        "name": "D-Style"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "z5jtmqp",
                "name": "DS 5",
                "children": [
                  {
                    "id": "088xqkv",
                    "name": "1.6 BlueHDi",
                    "children": [
                      {
                        "id": "n9vkbdw",
                        "name": "So Chic"
                      }
                    ]
                  },
                  {
                    "id": "l4nkc5o",
                    "name": "1.6e-HDi",
                    "children": [
                      {
                        "id": "wv0b9mv",
                        "name": "D-Sport"
                      }
                    ]
                  },
                  {
                    "id": "4q51yj5",
                    "name": "1.6 THP",
                    "children": [
                      {
                        "id": "glv68o7",
                        "name": "D-Sport"
                      }
                    ]
                  },
                  {
                    "id": "v8dir9g",
                    "name": "2.0 HDi",
                    "children": [
                      {
                        "id": "c3wxvta",
                        "name": "D-Sport"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "ml8rjn6",
                "name": "DS 9",
                "children": [
                  {
                    "id": "vfuoq3k",
                    "name": "1.6 E-Tense",
                    "children": [
                      {
                        "id": "ftl25z4",
                        "name": "Opera"
                      }
                    ]
                  },
                  {
                    "id": "r10wuuk",
                    "name": "1.6 Puretech",
                    "children": [
                      {
                        "id": "zo43sfi",
                        "name": "Opera"
                      },
                      {
                        "id": "m3fbome",
                        "name": "Performance Line"
                      },
                      {
                        "id": "fc3t0ih",
                        "name": "Rivoli"
                      },
                      {
                        "id": "umd660w",
                        "name": "Rivoli+"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "yazulah",
            "name": "Ferrari",
            "children": [
              {
                "id": "wi9t46m",
                "name": "296",
                "children": [
                  {
                    "id": "j3938z7",
                    "name": "GTB"
                  },
                  {
                    "id": "q86qn2g",
                    "name": "GTS"
                  }
                ]
              },
              {
                "id": "0crb1h5",
                "name": "360",
                "children": [
                  {
                    "id": "j6tvvf0",
                    "name": "Modenna"
                  },
                  {
                    "id": "w4m592t",
                    "name": "Modenna F1"
                  },
                  {
                    "id": "mesmyx9",
                    "name": "Spider F1"
                  }
                ]
              },
              {
                "id": "x9kpd6j",
                "name": "430",
                "children": [
                  {
                    "id": "h73z82d",
                    "name": "F430 Spider"
                  },
                  {
                    "id": "t4fu5mr",
                    "name": "F430"
                  }
                ]
              },
              {
                "id": "rxxu6l3",
                "name": "458",
                "children": [
                  {
                    "id": "gor1pmx",
                    "name": "İtalia"
                  },
                  {
                    "id": "o8x6dli",
                    "name": "Spider"
                  }
                ]
              },
              {
                "id": "bw61l37",
                "name": "488",
                "children": [
                  {
                    "id": "3uantdf",
                    "name": "GTB"
                  },
                  {
                    "id": "bagp0k0",
                    "name": "Pista"
                  },
                  {
                    "id": "25qvtoi",
                    "name": "Spider"
                  }
                ]
              },
              {
                "id": "h6nl6v1",
                "name": "575",
                "children": [
                  {
                    "id": "3d00tsr",
                    "name": "575 M Maranello"
                  }
                ]
              },
              {
                "id": "n52a0h2",
                "name": "599",
                "children": [
                  {
                    "id": "x95hzfe",
                    "name": "599 GTB F1"
                  }
                ]
              },
              {
                "id": "d5txs00",
                "name": "612",
                "children": [
                  {
                    "id": "17r9mkn",
                    "name": "Scaglietti"
                  }
                ]
              },
              {
                "id": "lk9guz9",
                "name": "812",
                "children": [
                  {
                    "id": "j5jlusa",
                    "name": "GTS"
                  }
                ]
              },
              {
                "id": "1bc57yx",
                "name": "California",
                "children": [
                  {
                    "id": "a2nvdbe",
                    "name": "4.3"
                  },
                  {
                    "id": "m3pnjij",
                    "name": "T"
                  }
                ]
              },
              {
                "id": "wwu5ei2",
                "name": "F12",
                "children": [
                  {
                    "id": "rz2c1vq",
                    "name": "Berlinetta"
                  }
                ]
              },
              {
                "id": "gij25tr",
                "name": "F355",
                "children": [
                  {
                    "id": "x1w8i1x",
                    "name": "Spider"
                  }
                ]
              },
              {
                "id": "ke7deu7",
                "name": "F8",
                "children": [
                  {
                    "id": "5pqn4xv",
                    "name": "Spider"
                  },
                  {
                    "id": "uydbdok",
                    "name": "Tributo"
                  }
                ]
              },
              {
                "id": "e16sf0h",
                "name": "FF",
                "children": [
                  {
                    "id": "0x6krqq",
                    "name": "6.3"
                  }
                ]
              },
              {
                "id": "kn4r098",
                "name": "Portofino",
                "children": [
                  {
                    "id": "k3q6ezm",
                    "name": "3.9"
                  }
                ]
              },
              {
                "id": "c5h8n74",
                "name": "Roma",
                "children": [
                  {
                    "id": "bvp68ud",
                    "name": "3.9"
                  }
                ]
              },
              {
                "id": "dzoyqkl",
                "name": "SF90",
                "children": [
                  {
                    "id": "49z2dyn",
                    "name": "Spider 4.0"
                  },
                  {
                    "id": "1nslnh1",
                    "name": "Stradale 4.0"
                  }
                ]
              },
              {
                "id": "2iy3g6r",
                "name": "12 Cilindri",
                "children": [
                  {
                    "id": "v2ynjh9",
                    "name": "6.5"
                  }
                ]
              }
            ]
          },
          {
            "id": "roqt8dx",
            "name": "Fiat",
            "children": [
              {
                "id": "lbc2s12",
                "name": "124 Spider",
                "children": [
                  {
                    "id": "q9l11sn",
                    "name": "1.4 T Multiair"
                  }
                ]
              },
              {
                "id": "xs8jabp",
                "name": "Albea",
                "children": [
                  {
                    "id": "la82mhm",
                    "name": "1.2",
                    "children": [
                      {
                        "id": "lddz9f2",
                        "name": "Active"
                      },
                      {
                        "id": "sva64mw",
                        "name": "Dynamic"
                      },
                      {
                        "id": "x7fsc4b",
                        "name": "EL"
                      },
                      {
                        "id": "0fa2jth",
                        "name": "HL"
                      },
                      {
                        "id": "l68s3dn",
                        "name": "SL"
                      },
                      {
                        "id": "00gtq4z",
                        "name": "Speed"
                      }
                    ]
                  },
                  {
                    "id": "xxryoul",
                    "name": "1.3 Multijet",
                    "children": [
                      {
                        "id": "5xddlik",
                        "name": "Active"
                      },
                      {
                        "id": "aor5m3m",
                        "name": "Dynamic"
                      },
                      {
                        "id": "wr37nq0",
                        "name": "EL"
                      },
                      {
                        "id": "czwmwh1",
                        "name": "SL"
                      }
                    ]
                  },
                  {
                    "id": "v5jwwho",
                    "name": "1.4 Fire",
                    "children": [
                      {
                        "id": "ok0t906",
                        "name": "Dynamic"
                      },
                      {
                        "id": "vk2mci2",
                        "name": "Active"
                      }
                    ]
                  },
                  {
                    "id": "tvlxkw8",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "3k7bf0p",
                        "name": "Dynamic"
                      },
                      {
                        "id": "ydg7ywb",
                        "name": "EL"
                      },
                      {
                        "id": "dhqlpy7",
                        "name": "HL"
                      }
                    ]
                  },
                  {
                    "id": "hj53gkr",
                    "name": "Sole 1.3 Multijet",
                    "children": [
                      {
                        "id": "rx96hl4",
                        "name": "Active"
                      },
                      {
                        "id": "1id3q3e",
                        "name": "Active Plus"
                      },
                      {
                        "id": "rb9l61k",
                        "name": "Dynamic"
                      },
                      {
                        "id": "gk3lvzb",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "e2fwqui",
                        "name": "Premio"
                      },
                      {
                        "id": "y6nkvnx",
                        "name": "Premio Plus"
                      }
                    ]
                  },
                  {
                    "id": "pc472qx",
                    "name": "Sole 1.4 Fire",
                    "children": [
                      {
                        "id": "xcnp42c",
                        "name": "Active"
                      },
                      {
                        "id": "6cnv2rk",
                        "name": "Active Plus"
                      },
                      {
                        "id": "t4y5l8n",
                        "name": "Dynamic"
                      },
                      {
                        "id": "m9nq7lk",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "vpqb376",
                        "name": "Premio"
                      },
                      {
                        "id": "fa0r3iy",
                        "name": "Premio Plus"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "dku3nwp",
                "name": "Brava",
                "children": [
                  {
                    "id": "6677tkp",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "9clkf2s",
                        "name": "ELX"
                      },
                      {
                        "id": "ny82qt0",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "k5vnkpz",
                    "name": "1.9 TD",
                    "children": [
                      {
                        "id": "icvunut",
                        "name": "1.9 TD"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "kngf9ac",
                "name": "Bravo",
                "children": [
                  {
                    "id": "jedbovc",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "l79mwpq",
                        "name": "Active"
                      },
                      {
                        "id": "j5sqwj7",
                        "name": "Active Plus"
                      },
                      {
                        "id": "f0ceygi",
                        "name": "Fire Pop"
                      }
                    ]
                  },
                  {
                    "id": "x5ktupj",
                    "name": "1.4 Multiair",
                    "children": [
                      {
                        "id": "1i3kidk",
                        "name": "Sport Style"
                      }
                    ]
                  },
                  {
                    "id": "sc7gs90",
                    "name": "1.4 T-Jet",
                    "children": [
                      {
                        "id": "a6r8kwu",
                        "name": "Active Plus"
                      },
                      {
                        "id": "nel94mv",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "zca02eu",
                        "name": "Sport Style"
                      }
                    ]
                  },
                  {
                    "id": "eu6kx8o",
                    "name": "1.4 Turbo",
                    "children": [
                      {
                        "id": "y1850zu",
                        "name": "Active"
                      },
                      {
                        "id": "ffar07n",
                        "name": "Dynamic"
                      },
                      {
                        "id": "kle4j4e",
                        "name": "Emotion"
                      },
                      {
                        "id": "ydkrnwk",
                        "name": "Sport"
                      }
                    ]
                  },
                  {
                    "id": "55ytxyx",
                    "name": "1.6",
                    "children": [
                      {
                        "id": "7xaeox9",
                        "name": "1.6"
                      },
                      {
                        "id": "7c5q533",
                        "name": "SX"
                      }
                    ]
                  },
                  {
                    "id": "m6ukkms",
                    "name": "1.6 MJet",
                    "children": [
                      {
                        "id": "wwhclrh",
                        "name": "Active"
                      },
                      {
                        "id": "g2t13r2",
                        "name": "Active Plus"
                      },
                      {
                        "id": "mpwe9jv",
                        "name": "Dynamic"
                      },
                      {
                        "id": "sx2dhdf",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "9wrufh1",
                        "name": "Easy"
                      },
                      {
                        "id": "mzf6lkd",
                        "name": "Emotion"
                      },
                      {
                        "id": "a5kequx",
                        "name": "Pop"
                      },
                      {
                        "id": "l2prfo5",
                        "name": "Sport Style"
                      }
                    ]
                  },
                  {
                    "id": "1s6cxmu",
                    "name": "2.0",
                    "children": [
                      {
                        "id": "34n6c3z",
                        "name": "HGT"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bj0r9uk",
                "name": "126 Bis",
                "children": [
                  {
                    "id": "gr2qq4c",
                    "name": "126"
                  },
                  {
                    "id": "dqwztdu",
                    "name": "650"
                  }
                ]
              },
              {
                "id": "15f4lyb",
                "name": "Coupe",
                "children": [
                  {
                    "id": "xn6gti1",
                    "name": "2.0"
                  },
                  {
                    "id": "rrbuwk7",
                    "name": "2.0 Turbo"
                  }
                ]
              },
              {
                "id": "83sw8ej",
                "name": "Croma",
                "children": [
                  {
                    "id": "k9k8rmc",
                    "name": "2.0 iE"
                  }
                ]
              },
              {
                "id": "v8hv2ga",
                "name": "500 Ailesi",
                "children": [
                  {
                    "id": "c69qx8n",
                    "name": "500 0.9 TwinAir",
                    "children": [
                      {
                        "id": "7kljtc1",
                        "name": "Sport"
                      }
                    ]
                  },
                  {
                    "id": "k458nsg",
                    "name": "500 1.0 Hybrid",
                    "children": [
                      {
                        "id": "s0u31gv",
                        "name": "Dolcevita"
                      },
                      {
                        "id": "a44cprs",
                        "name": "Sport"
                      }
                    ]
                  },
                  {
                    "id": "klbqzwo",
                    "name": "500 1.2",
                    "children": [
                      {
                        "id": "i75o9cw",
                        "name": "8V RockStar Dualogic"
                      },
                      {
                        "id": "rrj8qbw",
                        "name": "Collozione Winter"
                      },
                      {
                        "id": "nswcbxx",
                        "name": "Cult"
                      },
                      {
                        "id": "ehor9n7",
                        "name": "Gucci"
                      },
                      {
                        "id": "nisves2",
                        "name": "Lounge"
                      },
                      {
                        "id": "lm2owvn",
                        "name": "Pop"
                      },
                      {
                        "id": "nebokc9",
                        "name": "Spor"
                      },
                      {
                        "id": "2dmr6hu",
                        "name": "Vintage"
                      }
                    ]
                  },
                  {
                    "id": "r338d8k",
                    "name": "500 1.4",
                    "children": [
                      {
                        "id": "dmaia60",
                        "name": "Lounge"
                      },
                      {
                        "id": "ekss58d",
                        "name": "Pop"
                      },
                      {
                        "id": "jhkelxp",
                        "name": "Sport"
                      }
                    ]
                  },
                  {
                    "id": "si689bl",
                    "name": "500 Abarth",
                    "children": [
                      {
                        "id": "noq42nc",
                        "name": "595 Competizione"
                      }
                    ]
                  },
                  {
                    "id": "1fkue71",
                    "name": "500C 0.9 Twinair",
                    "children": [
                      {
                        "id": "zk9ibmr",
                        "name": "Turbo Sport"
                      }
                    ]
                  },
                  {
                    "id": "h3vbsb5",
                    "name": "500C 1.3 MJet",
                    "children": [
                      {
                        "id": "fogeuwm",
                        "name": "Pop"
                      }
                    ]
                  },
                  {
                    "id": "s4pmh51",
                    "name": "500C 1.4",
                    "children": [
                      {
                        "id": "hzfp6so",
                        "name": "Lounge"
                      }
                    ]
                  },
                  {
                    "id": "zt737um",
                    "name": "500E",
                    "children": [
                      {
                        "id": "ni8pgf6",
                        "name": "La Prima"
                      }
                    ]
                  },
                  {
                    "id": "oyo94dg",
                    "name": "500C 1.2",
                    "children": [
                      {
                        "id": "3lp9jss",
                        "name": "8V Star Dualogic"
                      },
                      {
                        "id": "lgx26cv",
                        "name": "Anniversio"
                      },
                      {
                        "id": "0z16pqe",
                        "name": "Cult"
                      },
                      {
                        "id": "4m0nxt6",
                        "name": "Dolcevita"
                      },
                      {
                        "id": "3tm2cns",
                        "name": "Gucci"
                      },
                      {
                        "id": "hi60myr",
                        "name": "Lounge"
                      },
                      {
                        "id": "xk66idz",
                        "name": "Popstar"
                      }
                    ]
                  },
                  {
                    "id": "ko6nmdy",
                    "name": "500l 1.3 MJet",
                    "children": [
                      {
                        "id": "obrloo6",
                        "name": "Beats Edition"
                      },
                      {
                        "id": "jtpk7n1",
                        "name": "Bi-Color"
                      },
                      {
                        "id": "m85ontv",
                        "name": "Cross Dualogic"
                      },
                      {
                        "id": "keygkew",
                        "name": "Cross Plus"
                      },
                      {
                        "id": "9rqktwp",
                        "name": "Lounge"
                      },
                      {
                        "id": "13ggicj",
                        "name": "Mirror"
                      },
                      {
                        "id": "m9h96my",
                        "name": "Opening Edition"
                      },
                      {
                        "id": "aj2cj42",
                        "name": "Panoramic Edition"
                      },
                      {
                        "id": "k9tuxn6",
                        "name": "Pop"
                      },
                      {
                        "id": "ghda2xq",
                        "name": "Pop Star"
                      },
                      {
                        "id": "vfjg0vf",
                        "name": "RockStar"
                      },
                      {
                        "id": "aoq8n43",
                        "name": "Wagon"
                      }
                    ]
                  },
                  {
                    "id": "x3clnzg",
                    "name": "500L 1.4",
                    "children": [
                      {
                        "id": "v0zhfwz",
                        "name": "Lounge"
                      }
                    ]
                  },
                  {
                    "id": "dw7ery4",
                    "name": "500L 1.6 MJet",
                    "children": [
                      {
                        "id": "y2w8ies",
                        "name": "Beats Edition"
                      },
                      {
                        "id": "0vntyvt",
                        "name": "Lounge"
                      },
                      {
                        "id": "u3iw9qo",
                        "name": "PopStar"
                      },
                      {
                        "id": "l3cevve",
                        "name": "RockStar"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "yyaacu3",
                "name": "Egea",
                "children": [
                  {
                    "id": "hxiv148",
                    "name": "1.0 Firely",
                    "children": [
                      {
                        "id": "pn8vbqt",
                        "name": "Lounge"
                      },
                      {
                        "id": "z0op9hq",
                        "name": "Urban"
                      }
                    ]
                  },
                  {
                    "id": "hnptj38",
                    "name": "1.3 MultiJet",
                    "children": [
                      {
                        "id": "a4tzgwz",
                        "name": "Easy"
                      },
                      {
                        "id": "tvgujtd",
                        "name": "Easy Plus"
                      },
                      {
                        "id": "xkg4as9",
                        "name": "Easy Stil"
                      },
                      {
                        "id": "h987qmu",
                        "name": "Lounge"
                      },
                      {
                        "id": "fu5t72s",
                        "name": "Mirror"
                      },
                      {
                        "id": "rbg2o6g",
                        "name": "Street"
                      },
                      {
                        "id": "ajnlnsi",
                        "name": "Urban"
                      },
                      {
                        "id": "kw2eb2z",
                        "name": "Urban Plus"
                      }
                    ]
                  },
                  {
                    "id": "ahrvjjp",
                    "name": "1.4 Fire",
                    "children": [
                      {
                        "id": "fxzq79z",
                        "name": "Easy"
                      },
                      {
                        "id": "sp076dn",
                        "name": "Easy Plus"
                      },
                      {
                        "id": "fl2pm1q",
                        "name": "Easy Stil"
                      },
                      {
                        "id": "wmj0hlq",
                        "name": "Limited"
                      },
                      {
                        "id": "lh04qvt",
                        "name": "Lounge"
                      },
                      {
                        "id": "s2q70z9",
                        "name": "Lounge Plus"
                      },
                      {
                        "id": "wb3u38t",
                        "name": "Mirror"
                      },
                      {
                        "id": "zvs8gmp",
                        "name": "Street"
                      },
                      {
                        "id": "yorwe4g",
                        "name": "Urban"
                      },
                      {
                        "id": "ex6wx8d",
                        "name": "Urban Plus"
                      }
                    ]
                  },
                  {
                    "id": "8wbd3q0",
                    "name": "1.4 TJet",
                    "children": [
                      {
                        "id": "io7xexn",
                        "name": "Lounge Plus"
                      }
                    ]
                  },
                  {
                    "id": "qrkv8at",
                    "name": "1.5 T4 Hibrit",
                    "children": [
                      {
                        "id": "gu7ti4r",
                        "name": "Easy"
                      },
                      {
                        "id": "7kwvddu",
                        "name": "Limited"
                      },
                      {
                        "id": "q5oca0h",
                        "name": "Lounge"
                      },
                      {
                        "id": "6q2675c",
                        "name": "Urban"
                      }
                    ]
                  },
                  {
                    "id": "hkc4i3d",
                    "name": "1.6 E Torq",
                    "children": [
                      {
                        "id": "3t8ojzd",
                        "name": "Easy"
                      },
                      {
                        "id": "m3ucmg1",
                        "name": "Easy Plus"
                      },
                      {
                        "id": "90acrwi",
                        "name": "Lounge"
                      },
                      {
                        "id": "m3kuq3i",
                        "name": "Lounge Plus"
                      },
                      {
                        "id": "t5m2wxf",
                        "name": "Mirror"
                      },
                      {
                        "id": "mwbdtb3",
                        "name": "S-Design"
                      },
                      {
                        "id": "a2ji03l",
                        "name": "Sport"
                      },
                      {
                        "id": "mrg5t97",
                        "name": "Street,"
                      },
                      {
                        "id": "f4ja7w5",
                        "name": "Urban"
                      },
                      {
                        "id": "st60exl",
                        "name": "Urban Plus"
                      }
                    ]
                  },
                  {
                    "id": "a1qcg52",
                    "name": "1.6 Multijet",
                    "children": [
                      {
                        "id": "2qwhcze",
                        "name": "Comfort"
                      },
                      {
                        "id": "huef5m7",
                        "name": "Easy"
                      },
                      {
                        "id": "9prov2g",
                        "name": "Easy Plus"
                      },
                      {
                        "id": "wlyfgvx",
                        "name": "Easy Stil"
                      },
                      {
                        "id": "muk5rc4",
                        "name": "Limited"
                      },
                      {
                        "id": "5l1od11",
                        "name": "Lounge"
                      },
                      {
                        "id": "rhll6ea",
                        "name": "Lounge Plus"
                      },
                      {
                        "id": "sp2w585",
                        "name": "Mirror"
                      },
                      {
                        "id": "5i9zwbx",
                        "name": "S-Design"
                      },
                      {
                        "id": "6a0br2h",
                        "name": "Sport"
                      },
                      {
                        "id": "yxjzn03",
                        "name": "Strret"
                      },
                      {
                        "id": "vg9amz7",
                        "name": "Urban"
                      },
                      {
                        "id": "6zqiyor",
                        "name": "Urban Plus"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "bwkglby",
                "name": "İdea",
                "children": [
                  {
                    "id": "dq8iupa",
                    "name": "1.3 Multijet",
                    "children": [
                      {
                        "id": "hmi757d",
                        "name": "Active"
                      },
                      {
                        "id": "vjwdg8x",
                        "name": "Dynamic"
                      }
                    ]
                  },
                  {
                    "id": "8iw6tyu",
                    "name": "1.4",
                    "children": [
                      {
                        "id": "xsh7i14",
                        "name": "Active"
                      },
                      {
                        "id": "2xdpu1q",
                        "name": "Dynamic"
                      },
                      {
                        "id": "0wdppim",
                        "name": "Dynamic Plus"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "9u94s0f",
                "name": "Linea",
                "children": [
                  {
                    "id": "8qgotar",
                    "name": "1.3 Multijet",
                    "children": [
                      {
                        "id": "y0drd16",
                        "name": "Active"
                      },
                      {
                        "id": "m7wk0gt",
                        "name": "Active Plus"
                      },
                      {
                        "id": "tvj28q0",
                        "name": "Actual"
                      },
                      {
                        "id": "0ow6lpi",
                        "name": "Actual Plus"
                      },
                      {
                        "id": "ydul1wk",
                        "name": "Dynamic"
                      },
                      {
                        "id": "sprt5hx",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "a8jimbv",
                        "name": "Easy"
                      },
                      {
                        "id": "rmyxfkm",
                        "name": "Emotion"
                      },
                      {
                        "id": "cqfk12t",
                        "name": "Emotion Plus"
                      },
                      {
                        "id": "e35gnjg",
                        "name": "Lounge"
                      },
                      {
                        "id": "qckmhxu",
                        "name": "Mood"
                      },
                      {
                        "id": "wggwo7j",
                        "name": "Pop"
                      },
                      {
                        "id": "nb7ksf3",
                        "name": "Urban"
                      },
                      {
                        "id": "shbcrmh",
                        "name": "VİA"
                      }
                    ]
                  },
                  {
                    "id": "oz5yxry",
                    "name": "1.4 Fire",
                    "children": [
                      {
                        "id": "u304p37",
                        "name": "Active"
                      },
                      {
                        "id": "j1bo968",
                        "name": "Active Plus"
                      },
                      {
                        "id": "1d8aa2x",
                        "name": "Actual"
                      },
                      {
                        "id": "43ihamq",
                        "name": "Actual Plus"
                      },
                      {
                        "id": "0np8m06",
                        "name": "Dynamic"
                      },
                      {
                        "id": "8ecxwpb",
                        "name": "Easy"
                      },
                      {
                        "id": "qjbgiqk",
                        "name": "Mood"
                      },
                      {
                        "id": "1di82kp",
                        "name": "Pop"
                      },
                      {
                        "id": "cuuvdgq",
                        "name": "VİA"
                      }
                    ]
                  },
                  {
                    "id": "hugochq",
                    "name": "1.4 Turbo",
                    "children": [
                      {
                        "id": "bn4aft0",
                        "name": "Active"
                      },
                      {
                        "id": "eb9yaal",
                        "name": "Active Plus"
                      },
                      {
                        "id": "w0vm08g",
                        "name": "Dynamic"
                      },
                      {
                        "id": "ta5m77s",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "ta8deca",
                        "name": "Emotion"
                      },
                      {
                        "id": "80m98l5",
                        "name": "Emotion Plus"
                      }
                    ]
                  },
                  {
                    "id": "vaf53xn",
                    "name": "1.6 Multijet",
                    "children": [
                      {
                        "id": "0aj0zdf",
                        "name": "Active Plus"
                      },
                      {
                        "id": "dus0yef",
                        "name": "Dynamic"
                      },
                      {
                        "id": "z87fhnm",
                        "name": "Dynamic Plus"
                      },
                      {
                        "id": "yw2eyc6",
                        "name": "Easy"
                      },
                      {
                        "id": "jnzwzlg",
                        "name": "Emotion"
                      },
                      {
                        "id": "uf6q621",
                        "name": "Emotion Plus"
                      },
                      {
                        "id": "pntcf28",
                        "name": "Lounge"
                      },
                      {
                        "id": "fmk12up",
                        "name": "Urban"
                      },
                      {
                        "id": "igccn73",
                        "name": "VİA"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "v4v6uew",
                "name": "Marea"
              },
              {
                "id": "6m0p1rh",
                "name": "Mirafiori"
              },
              {
                "id": "bpq3ul2",
                "name": "Palio"
              },
              {
                "id": "y7d4hl5",
                "name": "Panda"
              },
              {
                "id": "vphvb46",
                "name": "Punto"
              },
              {
                "id": "8n6c716",
                "name": "Siena"
              },
              {
                "id": "hr9dhyy",
                "name": "Stilo"
              },
              {
                "id": "geoz6ab",
                "name": "Tempra"
              },
              {
                "id": "2g8cq9v",
                "name": "Tipo"
              },
              {
                "id": "esvi5qy",
                "name": "Topolino"
              },
              {
                "id": "ks7lx7e",
                "name": "UNO"
              }
            ]
          },
          {
            "id": "55ilfn3",
            "name": "Ford"
          },
          {
            "id": "wz4q5ey",
            "name": "Geely"
          },
          {
            "id": "vy8ik1b",
            "name": "Honda"
          },
          {
            "id": "1tc9q4y",
            "name": "Hyundai"
          },
          {
            "id": "9qitxvp",
            "name": "Ikco"
          },
          {
            "id": "bs7unvh",
            "name": "Infiniti"
          },
          {
            "id": "c5zco0f",
            "name": "Jaguar"
          },
          {
            "id": "969r7z7",
            "name": "Jiayuan"
          },
          {
            "id": "z36y19b",
            "name": "Joyce"
          },
          {
            "id": "98f6tc3",
            "name": "Kia"
          },
          {
            "id": "fdogzsi",
            "name": "Kuba"
          },
          {
            "id": "8r4d10q",
            "name": "Lada"
          },
          {
            "id": "3rhxwfo",
            "name": "Lamborghini"
          },
          {
            "id": "d9oxyiy",
            "name": "Lancia"
          },
          {
            "id": "98wb03z",
            "name": "Leapmotor"
          },
          {
            "id": "uo85gym",
            "name": "Lexus"
          },
          {
            "id": "irbxeuw",
            "name": "Lincoln"
          },
          {
            "id": "ffi4mno",
            "name": "Lotus"
          },
          {
            "id": "ql3sl64",
            "name": "Luqi"
          },
          {
            "id": "3sgdt2p",
            "name": "Marcos"
          },
          {
            "id": "kz7kr6y",
            "name": "Maserati"
          },
          {
            "id": "d9u0ff9",
            "name": "Mazda"
          },
          {
            "id": "6bs8mp9",
            "name": "McLaren"
          },
          {
            "id": "lfkesg5",
            "name": "Mercedes-Benz"
          },
          {
            "id": "609qogo",
            "name": "MG"
          },
          {
            "id": "uc5xpcu",
            "name": "Micro"
          },
          {
            "id": "frdzim4",
            "name": "Mini"
          },
          {
            "id": "y0x8duv",
            "name": "Mitsubishi"
          },
          {
            "id": "fnpgkmw",
            "name": "Morgan"
          },
          {
            "id": "qnyy2e8",
            "name": "Nieve"
          },
          {
            "id": "elh3vu9",
            "name": "Niğmer"
          },
          {
            "id": "w5lhono",
            "name": "Nissan"
          },
          {
            "id": "j07jkbs",
            "name": "Opel"
          },
          {
            "id": "29ggrsu",
            "name": "Ortimobil"
          },
          {
            "id": "qwzo8f6",
            "name": "Peugeot"
          },
          {
            "id": "if6d7uw",
            "name": "Plymouth"
          },
          {
            "id": "o75y7nx",
            "name": "Polestar"
          },
          {
            "id": "687hblb",
            "name": "Pontiac"
          },
          {
            "id": "z2xbc1f",
            "name": "Porsche"
          },
          {
            "id": "3d9wzit",
            "name": "Proton"
          },
          {
            "id": "g8ijo8u",
            "name": "Rainwoll"
          },
          {
            "id": "tawvor0",
            "name": "Reeder"
          },
          {
            "id": "snajk3c",
            "name": "Regal Raptor"
          },
          {
            "id": "ugogmbk",
            "name": "Relive"
          },
          {
            "id": "m4nzy41",
            "name": "Renault"
          },
          {
            "id": "sh8yoe2",
            "name": "Rks"
          },
          {
            "id": "2qc9jb0",
            "name": "Rolls-Royce"
          },
          {
            "id": "m52zlwh",
            "name": "Rover"
          },
          {
            "id": "1o3hs8q",
            "name": "Saab"
          },
          {
            "id": "keaqd7u",
            "name": "Saipa"
          },
          {
            "id": "rlmm2bo",
            "name": "Seat"
          },
          {
            "id": "hyii5us",
            "name": "Skoda"
          },
          {
            "id": "jyykrdw",
            "name": "Smart"
          },
          {
            "id": "eaoptak",
            "name": "Subaru"
          },
          {
            "id": "yfamvyh",
            "name": "TOGG"
          },
          {
            "id": "fhrtqix",
            "name": "Toyota"
          },
          {
            "id": "f3jjp8u",
            "name": "Vanderhall"
          },
          {
            "id": "efni8ym",
            "name": "Volkswagen"
          },
          {
            "id": "iiz3mns",
            "name": "Volta"
          },
          {
            "id": "28842sn",
            "name": "Volvo"
          },
          {
            "id": "2gdjh74",
            "name": "XEV"
          },
          {
            "id": "hg1kwnd",
            "name": "Yuki"
          }
        ]
      },
      {
        "id": "6l3u3zg",
        "name": "Arazi,SUV,Pickup"
      },
      {
        "id": "w7yy57h",
        "name": "Elektrikli Araçlar"
      },
      {
        "id": "k31c955",
        "name": "Motosiklet"
      },
      {
        "id": "34glvn3",
        "name": "Minivan,Panelvan"
      },
      {
        "id": "halsn9g",
        "name": "Ticari Araçlar"
      },
      {
        "id": "dto5nxt",
        "name": "Deniz Araçlar"
      },
      {
        "id": "9iwspyt",
        "name": "Hasarlı Araç"
      },
      {
        "id": "7xnbksu",
        "name": "Karavan"
      },
      {
        "id": "h5x7xy4",
        "name": "Klasik"
      },
      {
        "id": "nizoy96",
        "name": "Hava Araçlar"
      },
      {
        "id": "dy242xj",
        "name": "ATV,UTV"
      },
      {
        "id": "o6gsy5c",
        "name": "Engelli Plakalı Araçlar"
      }
    ]
  },
  {
    "id": "cat_yedek",
    "name": "Yedek Parça, Aksesuar & Tuning"
  },
  {
    "id": "cat_alisveris",
    "name": "İkinci El ve Sıfır Alışveriş"
  },
  {
    "id": "cat_is_mak",
    "name": "İş Makineleri & Sanayi"
  },
  {
    "id": "cat_hizmetler",
    "name": "Hizmetler"
  },
  {
    "id": "cat_is_ilan",
    "name": "İş İlanları"
  },
  {
    "id": "otnbghs",
    "name": "Sahiplendir"
  }
];
