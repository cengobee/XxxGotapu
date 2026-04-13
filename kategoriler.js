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
