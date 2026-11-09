/* ==========================================================================
   XUBO Interactive Engine
   Bilingual System (TR / EN), OLED Showcase Controller & Utilities
   ========================================================================== */

const I18N = {
  tr: {
    // Navigation
    nav_screens: 'Arayüz',
    nav_architecture: 'Mimarisi',
    nav_devices: 'Tüm Platformlar',
    nav_privacy: 'Gizlilik',
    nav_beta_cta: 'Beta İndir',
    nav_home: 'XUBO Tanıtım',

    // Hero
    hero_badge: '✦ Tüm Cihazlar & Tüm Platformlar',
    hero_badge_sub: 'Android TV & Mobil Beta Yayında',
    hero_h1_lead: 'Tüm Ekranlarınızda',
    hero_h1_grad: 'Kusursuz Medya Sahnesi.',
    hero_lead: 'Yüksek performans, sıfır karmaşa. XUBO; televizyondan bilgisayara, tabletten telefona tüm cihazlarınızda Xtream ve M3U oynatma listelerinizi ultra akıcı, modern ve sinematik bir OLED arayüzüyle buluşturan yeni nesil medya oynatıcısıdır.',
    hero_btn_dl: 'Android Beta Sürümünü İndir (APK)',
    hero_btn_explore: 'Arayüzü İncele',

    // Specs Ticker
    spec_hw: 'Donanım Hızlandırma',
    spec_4k: '4K / UHD 60 FPS',
    spec_epg: 'Akıllı EPG Rehberi',
    spec_multi: 'Çoklu Profil',
    spec_pin: 'PIN Ebeveyn Kilidi',

    // Showcase Tabs
    tab_live: 'Canlı TV & EPG',
    tab_vod: 'Sinema & VOD',
    tab_series: 'Dizi & Sezon',
    tab_login: 'Çoklu Profil',
    tab_settings: 'Sistem & Kilit',

    // Showcase Meta
    live_title: 'Canlı TV ve Elektronik Program Rehberi (EPG)',
    live_desc: 'Anlık ve sıradaki yayın bilgisi, kategori bazlı filtreleme ve kumandadan doğrudan sayı ile kanal seçimi.',
    vod_title: '4K VOD Sinema & Film Kütüphanesi',
    vod_desc: 'IMDb puanları, oyuncu kadrosu, film özetleri ve kaldığınız saniyeyi her profilde otomatik hatırlayan oynatıcı hafızası.',
    series_title: 'Dizi & Sezon Takip Arayüzü',
    series_desc: 'Sezon rafları, bölüm listeleri, sonraki bölüme otomatik geçiş ve izleme yüzdesi takibi.',
    login_title: 'Çoklu Kaynak & Hesap Yönetimi',
    login_desc: 'Xtream Codes API, M3U / M3U8 ve MAC Portal destekli; evdeki herkes için bağımsız profil ayrımı.',
    settings_title: 'Sistem Tercihleri ve PIN Ebeveyn Kilidi',
    settings_desc: 'HLS/TS akış formatı, ses ve altyazı motoru, uyku zamanlayıcısı ve 4 haneli PIN ile kategori gizleme.',

    // Bento Grid (Features)
    bento_eyebrow: 'TEKNİK MİMARİ',
    bento_h2: 'Gelişmiş Performans, Kusursuz Kontrol.',
    bento_desc: 'Gereksiz karmaşadan arındırılmış, televizyon kumandasından mobil dokunmatiğe kadar her cihaza özel ergonomi.',
    
    bento_1_title: 'Anlık Kanal Değişimi ve Akıllı EPG',
    bento_1_desc: 'Arka planda optimize edilen akış tamponlaması sayesinde kanal değiştirirken ekran donmaz. Kategorize edilmiş liste, anlık yayın akışı, program detayları ve sayı tuşlarıyla doğrudan kanal atlama desteği sunar.',
    
    bento_2_title: 'Görsel Sinema & VOD',
    bento_2_desc: 'Film ve diziler için poster afiş duvarı, IMDb puanları, özet bilgileri ve kaldığınız saniyeyi her profilde bağımsız hatırlayan akıllı oynatıcı hafızası.',
    
    bento_3_title: 'Çoklu Hesap ve Bağımsız Profiller',
    bento_3_desc: 'Xtream ve M3U hesaplarınızı tek çatıda toplayın. Evdeki her aile üyesi için ayrı profil oluşturup favorileri ve geçmişi birbirinden ayırın.',
    
    bento_4_title: 'PIN Korumalı Ebeveyn Kilidi',
    bento_4_desc: 'Yetişkin kategorileri ya da özel listeleri 4 haneli güvenli PIN şifresiyle kilitleyin; aileniz için her zaman güvenli ve denetimli bir izleme ortamı sağlayın.',
    
    bento_5_title: 'Geniş Format ve Ses/Altyazı Desteği',
    bento_5_desc: 'HLS, TS, MP4 ve MKV kapsayıcıları ile tam uyum. Yayın anında çoklu ses dilleri ve harici altyazılar arasında tek dokunuşla geçiş yapabilme imkanı.',

    // Platforms (8 Platforms)
    eco_eyebrow: 'PLATFORM EKOSİSTEMİ',
    eco_h2: 'Tüm Ekranlarınızda Tek Standart.',
    eco_desc: 'Televizyon, bilgisayar, tablet ve telefon: Farklı işletim sistemlerinde aynı tutarlı hız ve sinematik koyu arayüz.',
    
    eco_android_title: 'Android',
    eco_android_desc: 'Telefon, Tablet, Android TV ve Google TV cihazları için optimize edildi.',
    eco_android_badge: 'Aktif Beta',
    eco_android_cta: 'Beta Sürümünü İndir →',

    eco_lg_title: 'LG Smart TV',
    eco_lg_desc: 'webOS platformu için Magic Remote kumanda optimizasyonları tamamlanıyor.',
    eco_lg_badge: 'Hazırlanıyor',
    eco_lg_status: 'Yakında LG Content Store\'da',

    eco_samsung_title: 'Samsung Smart TV',
    eco_samsung_desc: 'Tizen OS için tek kumanda ergonomisi ve donanım hızlandırma entegrasyonu.',
    eco_samsung_badge: 'Hazırlanıyor',
    eco_samsung_status: 'Yakında Samsung Smart TV Mağazası\'nda',

    eco_xbox_title: 'Xbox Series X / S',
    eco_xbox_desc: 'Xbox oyun kumandası ile tam uyumlu 4K HDR oynatma deneyimi.',
    eco_xbox_badge: 'Hazırlanıyor',
    eco_xbox_status: 'Yakında Microsoft Store\'da',

    eco_windows_title: 'Windows',
    eco_windows_desc: 'Windows 10 ve 11 masaüstü ve dizüstü bilgisayarlar için bağımsız oynatıcı uygulaması.',
    eco_windows_badge: 'Hazırlanıyor',
    eco_windows_status: 'Yakında Windows İçin Yayında',

    eco_macos_title: 'macOS',
    eco_macos_desc: 'Apple Silicon (M1/M2/M3/M4) ve Intel Mac cihazları için yüksek performanslı masaüstü arayüzü.',
    eco_macos_badge: 'Hazırlanıyor',
    eco_macos_status: 'Yakında Mac App Store\'da',

    eco_ios_title: 'iOS (iPhone & iPad)',
    eco_ios_desc: 'iPhone ve iPad ekranları için optimize edilmiş, akıcı mobil ve tablet deneyimi.',
    eco_ios_badge: 'Hazırlanıyor',
    eco_ios_status: 'Yakında App Store\'da',

    eco_appletv_title: 'Apple TV (tvOS)',
    eco_appletv_desc: 'tvOS ve Apple TV 4K için Siri Remote kumanda uyumu ve 4K HDR yayın deneyimi.',
    eco_appletv_badge: 'Hazırlanıyor',
    eco_appletv_status: 'Yakında tvOS App Store\'da',

    // Download Hub
    hub_badge: 'Açık Beta Dağıtımı',
    hub_h3: 'XUBO Android Beta\'yı İndirin',
    hub_lead: 'Android TV, Google TV, tablet veya akıllı telefonunuza doğrudan kurabileceğiniz en güncel v1.2.6 resmi APK paketidir.',
    hub_btn: 'APK\'yı İndir (v1.2.6)',
    hub_spec_ver: 'Sürüm: 1.2.6',
    hub_spec_size: 'Boyut: ~15.4 MB',
    hub_spec_req: 'Android 6.0 ve üzeri',
    hub_pkg: 'Paket:',
    hub_hash: 'SHA-256:',
    hub_github_releases: 'GitHub Releases (Tüm Sürümler) →',

    hub_guide_title: 'Televizyona Kurulum (Downloader ile)',
    hub_step_1_title: 'Downloader Uygulamasını Açın',
    hub_step_1_desc: 'Android TV veya Google TV cihazınızda Google Play Store\'dan ücretsiz Downloader uygulamasını açın.',
    hub_step_2_title: 'Adresi Yazın',
    hub_step_2_desc: 'Downloader arama çubuğuna şu kısa adresi girip kumandadan Go butonuna basın:',
    hub_step_3_title: 'İndirin ve Yükleyin',
    hub_step_3_desc: 'Açılan sayfada APK\'yı İndir seçeneğine tıklayın. İndirme bittiğinde Yükle (Install) butonuna basarak kurulumu tamamlayın.',
    hub_step_4_title: 'Hesabınızı Ekleyin',
    hub_step_4_desc: 'Uygulamayı açıp IPTV sağlayıcınızın Xtream Codes veya M3U bağlantı bilgileriyle anında izlemeye başlayın.',

    legal_text: 'Önemli Yasal Bilgilendirme: XUBO yalnızca bağımsız bir medya oynatıcı arayüzüdür. Uygulama içerisinde hazır yayın, kanal, film veya dizi bulunmaz ve satılmaz. Hizmetten yararlanmak için kendi yasal IPTV aboneliğinizi kullanmanız gerekir.',
    
    footer_copy: '© 2026 Umur Çelebi. XUBO IPTV Player — Tüm hakları saklıdır.',
    footer_quick_dl: 'Hızlı İndirme',
    footer_privacy: 'Gizlilik Politikası',
    footer_terms: 'Kullanım Koşulları',
    footer_github: 'GitHub Sürümleri',

    privacy_page_title: 'Gizlilik Politikası — XUBO IPTV Player',
    terms_page_title: 'Kullanım Koşulları & Yasal Uyarı — XUBO IPTV Player',
    privacy_badge: 'Gizlilik & Güvenlik',
    privacy_h1: 'XUBO Gizlilik Politikası',
    privacy_date: 'Yürürlük Tarihi: 31 Ekim 2026',
    terms_badge: 'Yasal Koşullar & Lisans',
    terms_h1: 'XUBO Kullanım Koşulları & Yasal Uyarı',
    terms_date: 'Yürürlük Tarihi: 6 Kasım 2026',
    nav_back_home: '← XUBO Tanıtım Sayfasına Dön'
  },

  en: {
    // Navigation
    nav_screens: 'Interface',
    nav_architecture: 'Architecture',
    nav_devices: 'All Platforms',
    nav_privacy: 'Privacy',
    nav_beta_cta: 'Download Beta',
    nav_home: 'XUBO Home',

    // Hero
    hero_badge: '✦ All Devices & All Platforms',
    hero_badge_sub: 'Android TV & Mobile Beta Live',
    hero_h1_lead: 'Across All Your Screens,',
    hero_h1_grad: 'The Ultimate Media Stage.',
    hero_lead: 'High performance, zero clutter. XUBO brings your Xtream and M3U playlists to life across televisions, computers, tablets, and phones with an ultra-fluid, modern, and cinematic OLED interface.',
    hero_btn_dl: 'Download Android Beta (APK)',
    hero_btn_explore: 'Explore Interface',

    // Specs Ticker
    spec_hw: 'Hardware Acceleration',
    spec_4k: '4K / UHD 60 FPS',
    spec_epg: 'Smart EPG Guide',
    spec_multi: 'Isolated Profiles',
    spec_pin: 'PIN Parental Lock',

    // Showcase Tabs
    tab_live: 'Live TV & EPG',
    tab_vod: 'Cinema & VOD',
    tab_series: 'Series & Seasons',
    tab_login: 'Multi-Profile',
    tab_settings: 'System & Lock',

    // Showcase Meta
    live_title: 'Live TV & Electronic Programme Guide (EPG)',
    live_desc: 'Real-time and upcoming schedule, category filtering, and direct channel jumping via numeric keys on your remote.',
    vod_title: '4K VOD Cinema & Movies Library',
    vod_desc: 'IMDb ratings, cast credits, synopses, and an intelligent playback engine that saves your exact resume position per profile.',
    series_title: 'Series & Seasons Tracker',
    series_desc: 'Season shelves, episode lists, auto-next playback countdown, and progress completion tracking.',
    login_title: 'Multi-Source & Account Management',
    login_desc: 'Compatible with Xtream Codes API, M3U / M3U8, and MAC Portals with independent profiles for each family member.',
    settings_title: 'System Preferences & PIN Parental Control',
    settings_desc: 'HLS/TS streaming engine, audio & subtitle switcher, sleep timer, and 4-digit PIN protection for sensitive categories.',

    // Bento Grid (Features)
    bento_eyebrow: 'TECHNICAL ARCHITECTURE',
    bento_h2: 'Advanced Performance, Flawless Control.',
    bento_desc: 'Stripped of unnecessary complexity, engineered directly for TV remotes, mouse input, and touchscreens alike.',
    
    bento_1_title: 'Instant Channel Zapping & Smart EPG',
    bento_1_desc: 'Optimized background stream buffering eliminates frozen screens when changing channels. Categorized lists, instant programme schedules, and numeric remote shortcut support.',
    
    bento_2_title: 'Visual Cinema & VOD',
    bento_2_desc: 'Poster artwork wall, IMDb score integration, full plot summaries, and intelligent memory that remembers where you stopped watching on every screen.',
    
    bento_3_title: 'Multi-Account & Isolated Profiles',
    bento_3_desc: 'Consolidate multiple Xtream and M3U sources under one roof. Create distinct profiles for every family member with independent watch history and favorites.',
    
    bento_4_title: 'PIN-Protected Parental Control',
    bento_4_desc: 'Secure adult categories or custom playlists behind a 4-digit PIN, ensuring a protected and supervised viewing environment for your home.',
    
    bento_5_title: 'Broad Format, Audio & Subtitle Support',
    bento_5_desc: 'Full compatibility with HLS, TS, MP4, and MKV streams. Effortlessly toggle between multiple audio language tracks and internal or external subtitles on the fly.',

    // Platforms (8 Platforms)
    eco_eyebrow: 'PLATFORM ECOSYSTEM',
    eco_h2: 'One Standard Across All Your Screens.',
    eco_desc: 'Television, PC, tablet, or phone: Uniform fluid speed and a cinematic dark aesthetic across every operating system.',
    
    eco_android_title: 'Android',
    eco_android_desc: 'Fine-tuned for Phone, Tablet, Android TV, and Google TV devices.',
    eco_android_badge: 'Active Beta',
    eco_android_cta: 'Download Beta →',

    eco_lg_title: 'LG Smart TV',
    eco_lg_desc: 'Magic Remote ergonomics and hardware rendering in final preparation for webOS.',
    eco_lg_badge: 'In Progress',
    eco_lg_status: 'Coming Soon to LG Content Store',

    eco_samsung_title: 'Samsung Smart TV',
    eco_samsung_desc: 'One-remote navigation and hardware acceleration integration for Tizen OS.',
    eco_samsung_badge: 'In Progress',
    eco_samsung_status: 'Coming Soon to Samsung TV Apps',

    eco_xbox_title: 'Xbox Series X / S',
    eco_xbox_desc: 'Full 4K HDR playback tailored for Xbox controllers and gaming consoles.',
    eco_xbox_badge: 'In Progress',
    eco_xbox_status: 'Coming Soon to Microsoft Store',

    eco_windows_title: 'Windows',
    eco_windows_desc: 'Standalone media player engineered for Windows 10 and 11 desktop and laptop PCs.',
    eco_windows_badge: 'In Progress',
    eco_windows_status: 'Coming Soon for Windows',

    eco_macos_title: 'macOS',
    eco_macos_desc: 'High-performance native desktop client for Apple Silicon (M1–M4) and Intel Macs.',
    eco_macos_badge: 'In Progress',
    eco_macos_status: 'Coming Soon to Mac App Store',

    eco_ios_title: 'iOS (iPhone & iPad)',
    eco_ios_desc: 'Tailored for iPhone and iPad with fluid mobile and tablet navigation.',
    eco_ios_badge: 'In Progress',
    eco_ios_status: 'Coming Soon to App Store',

    eco_appletv_title: 'Apple TV (tvOS)',
    eco_appletv_desc: 'Engineered for Apple TV 4K with Siri Remote ergonomics and 4K HDR playback.',
    eco_appletv_badge: 'In Progress',
    eco_appletv_status: 'Coming Soon to tvOS App Store',

    // Download Hub
    hub_badge: 'Open Beta Release',
    hub_h3: 'Download XUBO Android Beta',
    hub_lead: 'The latest official v1.2.6 standalone APK package, ready for direct installation on Android TV, Google TV, tablets, or smartphones.',
    hub_btn: 'Download APK (v1.2.6)',
    hub_spec_ver: 'Version: 1.2.6',
    hub_spec_size: 'Size: ~15.4 MB',
    hub_spec_req: 'Android 6.0 and above',
    hub_pkg: 'Package:',
    hub_hash: 'SHA-256:',
    hub_github_releases: 'GitHub Releases (All Versions) →',

    hub_guide_title: 'How to Install on TV (Using Downloader)',
    hub_step_1_title: 'Open Downloader App',
    hub_step_1_desc: 'On your Android TV or Google TV, launch the free Downloader app from Google Play Store.',
    hub_step_2_title: 'Enter the URL',
    hub_step_2_desc: 'Type this short address into Downloader\'s search bar and click Go:',
    hub_step_3_title: 'Download & Install',
    hub_step_3_desc: 'Click the Download APK button on the page. Once finished, select Install to complete setup.',
    hub_step_4_title: 'Connect Your Account',
    hub_step_4_desc: 'Launch XUBO and sign in with your provider\'s Xtream Codes or M3U credentials to start watching immediately.',

    legal_text: 'Important Legal Notice: XUBO is solely an independent media player interface. No preloaded streams, channels, movies, or series are provided or sold within the application. You must connect your own legal IPTV subscription or playlists to use the player.',
    
    footer_copy: '© 2026 Umur Çelebi. XUBO IPTV Player — All rights reserved.',
    footer_quick_dl: 'Quick Download',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Use',
    footer_github: 'GitHub Releases',

    privacy_page_title: 'Privacy Policy — XUBO IPTV Player',
    terms_page_title: 'Terms of Use & Legal Disclaimer — XUBO IPTV Player',
    privacy_badge: 'Privacy & Security',
    privacy_h1: 'XUBO Privacy Policy',
    privacy_date: 'Effective Date: October 31, 2026',
    terms_badge: 'Legal Terms & License',
    terms_h1: 'XUBO Terms of Use & Disclaimer',
    terms_date: 'Effective Date: November 6, 2026',
    nav_back_home: '← Back to XUBO Home'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Controller
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  let currentLang = null;

  if (paramLang === 'en' || paramLang === 'tr') {
    currentLang = paramLang;
  } else {
    try {
      currentLang = localStorage.getItem('xubo_site_lang');
    } catch (e) {}
    if (!currentLang) {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      currentLang = browserLang.startsWith('tr') ? 'tr' : 'en';
    }
  }

  function updateAllLinks(lang) {
    document.querySelectorAll('a[href]').forEach(a => {
      try {
        const rawHref = a.getAttribute('href');
        if (!rawHref || rawHref.startsWith('http://') || rawHref.startsWith('https://') || rawHref.startsWith('//') || rawHref.startsWith('mailto:') || rawHref.startsWith('javascript:') || rawHref.startsWith('#')) return;
        const [baseAndQuery, hash] = rawHref.split('#');
        const [path, query] = baseAndQuery.split('?');
        const params = new URLSearchParams(query || '');
        params.set('lang', lang);
        let newHref = path + '?' + params.toString();
        if (hash) newHref += '#' + hash;
        a.setAttribute('href', newHref);
      } catch (e) {}
    });
  }

  function setLanguage(lang) {
    if (!I18N[lang]) lang = 'tr';
    currentLang = lang;
    try {
      localStorage.setItem('xubo_site_lang', lang);
    } catch (e) {}
    document.documentElement.lang = lang;

    // Update text content of data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      }
    });

    // Update switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isSelected = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });

    // Toggle language-specific blocks if any exist (e.g. for long policy text)
    document.querySelectorAll('[data-lang-block]').forEach(el => {
      const targetLang = el.getAttribute('data-lang-block');
      el.style.display = (targetLang === lang) ? '' : 'none';
    });

    // Update document title if page has a title key
    const pageTitleKey = document.documentElement.getAttribute('data-title-key');
    if (pageTitleKey && I18N[lang] && I18N[lang][pageTitleKey]) {
      document.title = I18N[lang][pageTitleKey];
    }

    // Update relative and outbound links to preserve language
    updateAllLinks(lang);

    // Update browser history URL
    try {
      const currentUrl = new URL(window.location.href);
      if (currentUrl.searchParams.get('lang') !== lang) {
        currentUrl.searchParams.set('lang', lang);
        window.history.replaceState({}, '', currentUrl.pathname + '?' + currentUrl.searchParams.toString());
      }
    } catch (e) {}

    // Refresh active screen description if showcase exists
    const activeDockBtn = document.querySelector('.dock-btn.is-active');
    if (activeDockBtn) {
      const target = activeDockBtn.getAttribute('data-target');
      if (target) updateDockInfo(target);
    }
  }

  // Global click capturing to guarantee links maintain language
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const rawHref = link.getAttribute('href');
    if (!rawHref || rawHref.startsWith('http://') || rawHref.startsWith('https://') || rawHref.startsWith('//') || rawHref.startsWith('mailto:') || rawHref.startsWith('javascript:') || rawHref.startsWith('#')) return;
    try {
      const [baseAndQuery, hash] = rawHref.split('#');
      const [path, query] = baseAndQuery.split('?');
      const params = new URLSearchParams(query || '');
      if (currentLang && params.get('lang') !== currentLang) {
        params.set('lang', currentLang);
        let newHref = path + '?' + params.toString();
        if (hash) newHref += '#' + hash;
        link.setAttribute('href', newHref);
      }
    } catch (err) {}
  }, true);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected) setLanguage(selected);
    });
  });

  // 2. OLED Showcase Controller
  const dockButtons = document.querySelectorAll('.dock-btn');
  const tvScreens = document.querySelectorAll('.tv-display img');
  const captionTitle = document.querySelector('[data-dock-title]');
  const captionDesc = document.querySelector('[data-dock-desc]');
  const ambientGlow = document.querySelector('.ambient-glow');

  function updateDockInfo(key) {
    const lang = currentLang || 'tr';
    const dict = I18N[lang] || I18N.tr;
    if (captionTitle && dict[`${key}_title`]) {
      captionTitle.textContent = dict[`${key}_title`];
    }
    if (captionDesc && dict[`${key}_desc`]) {
      captionDesc.textContent = dict[`${key}_desc`];
    }
  }

  function activateScreen(key) {
    dockButtons.forEach(btn => {
      const match = btn.getAttribute('data-target') === key;
      btn.classList.toggle('is-active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    tvScreens.forEach(img => {
      const match = img.getAttribute('data-screen') === key;
      img.classList.toggle('is-visible', match);
    });

    updateDockInfo(key);

    // Dynamic warm amber ambient glow variations
    if (ambientGlow) {
      const glowMap = {
        'live': 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.12) 40%, transparent 70%)',
        'vod': 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.24) 0%, rgba(245, 158, 11, 0.14) 40%, transparent 70%)',
        'series': 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.22) 0%, rgba(180, 83, 9, 0.12) 40%, transparent 70%)',
        'login': 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.18) 0%, rgba(251, 191, 36, 0.1) 40%, transparent 70%)',
        'settings': 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.2) 0%, rgba(217, 119, 6, 0.12) 40%, transparent 70%)'
      };
      ambientGlow.style.background = glowMap[key] || glowMap.live;
    }
  }

  dockButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) activateScreen(target);
    });
  });

  // Initialize Language
  setLanguage(currentLang);
});
