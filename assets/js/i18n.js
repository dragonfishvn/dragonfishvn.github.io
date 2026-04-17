/* DragonFish — i18n
   Auto-detects Vietnamese via navigator.language; falls back to English.
   Manual override stored in localStorage key "df-lang".
   Usage in HTML:
     data-i18n="key"      → sets textContent
     data-i18n-html="key" → sets innerHTML (for content with <strong>, <a>, <br>, etc.)
*/
(function () {
  var T = {
    en: {
      /* ── Nav ── */
      'nav.features': 'Features',
      'nav.engine':   'Engine',
      'nav.support':  'Support',
      'nav.privacy':  'Privacy',
      'nav.download': 'Download',
      'nav.home':     'Home',
      /* ── Hero ── */
      'hero.desc': 'The strongest Xiangqi engine on your iPhone — built for offline play, deep analysis, and instant board recognition. No internet required.',
      'hero.download_on': 'Download on the',
      'hero.app_store':   'App Store',
      /* ── Features ── */
      'feat.eyebrow':       "What's inside",
      'feat.title':         'Three modes, one engine',
      'feat.train.sub':     'Train',
      'feat.train.desc':    'Play against a world-class AI engine at any skill level. Undo, redo, flip the board, and edit positions freely — all offline.',
      'feat.capture.sub':   'Capture · Beta',
      'feat.capture.desc':  'Point your camera at any physical board. DragonFish recognises all pieces with on-device AI (YOLOv8) — no cloud, no subscription.',
      'feat.analysis.sub':  'Deep Analysis',
      'feat.analysis.desc': 'Two-sided engine analysis with best-move arrows, centipawn scores, and per-side elapsed clocks. Understand every position deeply.',
      /* ── Engine section ── */
      'engine.badge':  'DragonFish Engine',
      'engine.title':  'World-class engine.<br />Runs entirely on your phone.',
      'engine.p1':     'DragonFish runs a <strong>state-of-the-art NNUE engine</strong> natively on your iPhone — no server, no account required. Your games and positions never leave your device.',
      'engine.p2':     "The NNUE neural network runs at full speed on iPhone's CPU and Neural Engine, reaching depths that rival dedicated desktop software.",
      'engine.stat1':  'Nodes per second',
      'engine.stat2':  'Search depth',
      'engine.stat3':  'Offline',
      /* ── Footer ── */
      'footer.desc':       'The strongest Xiangqi engine on iPhone. Built with passion for Cờ Tướng.',
      'footer.desc.short': 'The strongest Xiangqi engine on iPhone.',
      'footer.app':        'App',
      'footer.legal':      'Legal',
      'footer.pages':      'Pages',
      'footer.features':   'Features',
      'footer.engine':     'Engine',
      'footer.download':   'Download',
      'footer.privacy':    'Privacy Policy',
      'footer.support':    'Support',
      'footer.contact':    'Contact',
      'footer.copy':       '© 2025 MinMen Studio. All rights reserved.',
      /* ── Page titles ── */
      'title.index':   'DragonFish — Xiangqi Engine for iOS',
      'title.support': 'Support — DragonFish',
      'title.privacy': 'Privacy Policy — DragonFish',
      /* ── Support page ── */
      'support.hero.title': 'Support',
      'support.hero.sub':   'Frequently asked questions and contact information',
      'faq.section.title':  'Frequently Asked Questions',
      'faq.1.q': 'Does DragonFish require an internet connection?',
      'faq.1.a': 'No. DragonFish runs entirely offline. The AI engine, board recognition, and all game data are stored locally on your device. You only need a connection to download the app.',
      'faq.2.q': 'How do I change the engine thinking time?',
      'faq.2.a': 'In the game screen, tap the brain icon in the toolbar to reveal the thinking-time bar. Use the − and + buttons to adjust from 1 to 10 seconds per move. The setting is saved automatically.',
      'faq.3.q': 'How does the Board Capture (photo recognition) work?',
      'faq.3.a': 'Tap "Chụp Bàn Cờ" from the home screen and take or upload a photo of a physical Xiangqi board. The app uses an on-device YOLOv8 model to detect pieces, then maps them to board coordinates. For best results, shoot from directly above with even lighting and minimal glare.',
      'faq.4.q': 'What does the "Beta" badge on Capture mean?',
      'faq.4.a': "Board recognition is actively being improved. It works well on standard piece sets under good lighting, but may struggle with unusual piece designs, poor lighting, or extreme angles. We'd love your feedback if you encounter issues.",
      'faq.5.q': 'Can I undo moves during a game?',
      'faq.5.a': "Yes. Tap the ← arrow in the toolbar to undo. In human-vs-computer mode, undo steps back two plies (your move and the engine's reply). Tap → to redo.",
      'faq.6.q': 'How do I set up a custom position?',
      'faq.6.a': 'In either Train or Deep Analysis mode, tap the pencil (✏) icon in the toolbar to enter Position Edit mode. Drag pieces from the palette onto the board, or drag pieces already on the board to move or remove them. Tap Done when finished — the engine will analyse or play from your custom position.',
      'faq.7.q': 'What is the engine strength?',
      'faq.7.a': 'DragonFish uses a state-of-the-art NNUE engine built specifically for Xiangqi (Chinese Chess). On a real iPhone it achieves around 78,000 nodes per second and reaches depth 17+ in 3 seconds. It is significantly stronger than any human player.',
      'faq.8.q': 'How do Hearts work?',
      'faq.8.a': 'Hearts are the in-app currency used to start games. You begin with 10 hearts. Each game start costs 1 heart. You can earn more hearts by claiming your daily reward or by purchasing a heart package from the shop. The Engine Unlock and Unlimited Hearts packages also permanently remove the heart requirement.',
      'faq.9.q': 'How do I switch the app language?',
      'faq.9.a': 'On the main menu, tap the flag/language button in the top bar to cycle between available languages (English and Vietnamese).',
      'faq.10.q': 'Where is my game history stored?',
      'faq.10.a': 'Game history is stored locally on your device using iOS UserDefaults. It is never uploaded to any server. Uninstalling the app will permanently delete your history.',
      'contact.title': 'Still need help?',
      'contact.p':     "If your question isn't answered above, or you'd like to report a bug or share feedback, email us directly. We read every message.",
      /* ── Privacy page ── */
      'privacy.hero.title': 'Privacy Policy',
      'privacy.hero.sub':   'Last updated: April 7, 2025',
      'privacy.intro': 'MinMen Studio ("we", "us", or "our") operates the DragonFish mobile application (the "App"). This Privacy Policy explains what information is collected when you use the App, how it is used, and your choices regarding that information.',
      'privacy.h1':   '1. Information We Collect',
      'privacy.1.p1': 'DragonFish is designed to work entirely offline and collects no personally identifiable information. We do not collect, store, or transmit your name, email address, location, or any other personal data to our servers.',
      'privacy.1.p2': 'All game data (moves, positions, history, hearts balance) is stored <strong>locally on your device only</strong> via iOS UserDefaults. It is never transmitted to any server.',
      'privacy.h2':   '2. In-App Purchases',
      'privacy.2.p':  'DragonFish offers optional in-app purchases (heart packages) processed entirely by Apple\'s App Store. We do not receive or store any payment or financial information. Apple\'s <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> governs all purchase transactions.',
      'privacy.h3':   '3. Third-Party Services',
      'privacy.3.p':  'DragonFish does not integrate any third-party analytics, advertising, or tracking SDKs. No data is shared with third parties.',
      'privacy.h4':   "4. Children's Privacy",
      'privacy.4.p':  'The App is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal information, please contact us at the address below and we will take steps to delete such information.',
      'privacy.h5':   '5. Data Retention',
      'privacy.5.p':  'We do not retain any personal data on our servers. All data stored by the App lives locally on your device and is deleted when you uninstall the App.',
      'privacy.h6':   '6. Security',
      'privacy.6.p':  "Because all data is stored locally on your device and never transmitted, your information is protected by your device's own security mechanisms (Face ID, passcode, etc.).",
      'privacy.h7':   '7. Changes to This Policy',
      'privacy.7.p':  'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the App after any changes constitutes acceptance of the updated policy.',
      'privacy.h8':   '8. Contact Us',
      'privacy.8.p1': 'If you have any questions or concerns about this Privacy Policy, please contact us at:',
      'privacy.8.p2': '<strong>MinMen Studio</strong><br />Email: <a href="mailto:dragonfish.minmenstudio@gmail.com">dragonfish.minmenstudio@gmail.com</a>',
    },

    vi: {
      /* ── Nav ── */
      'nav.features': 'Tính năng',
      'nav.engine':   'Engine',
      'nav.support':  'Hỗ trợ',
      'nav.privacy':  'Bảo mật',
      'nav.download': 'Tải về',
      'nav.home':     'Trang chủ',
      /* ── Hero ── */
      'hero.desc': 'Engine Cờ Tướng mạnh nhất trên iPhone — chơi offline, phân tích sâu và nhận diện bàn cờ tức thì. Không cần internet.',
      'hero.download_on': 'Tải về trên',
      'hero.app_store':   'App Store',
      /* ── Features ── */
      'feat.eyebrow':       'Khám phá',
      'feat.title':         'Ba chế độ, một engine',
      'feat.train.sub':     'Luyện tập',
      'feat.train.desc':    'Đấu với AI đẳng cấp thế giới ở mọi trình độ. Hoàn tác, làm lại, lật bàn và chỉnh thế cờ tự do — hoàn toàn offline.',
      'feat.capture.sub':   'Chụp bàn · Beta',
      'feat.capture.desc':  'Hướng camera vào bàn cờ thật. DragonFish nhận diện tất cả quân cờ bằng AI trên máy (YOLOv8) — không cần đám mây, không cần đăng ký.',
      'feat.analysis.sub':  'Phân tích sâu',
      'feat.analysis.desc': 'Phân tích engine hai chiều với mũi tên nước đi tốt nhất, điểm số và đồng hồ từng bên. Hiểu sâu mọi thế cờ.',
      /* ── Engine section ── */
      'engine.badge':  'DragonFish Engine',
      'engine.title':  'Engine đẳng cấp thế giới.<br />Chạy hoàn toàn trên điện thoại.',
      'engine.p1':     'DragonFish chạy <strong>engine NNUE hiện đại nhất</strong> trực tiếp trên iPhone — không cần máy chủ, không cần tài khoản. Ván cờ và thế trận của bạn không bao giờ rời khỏi thiết bị.',
      'engine.p2':     'Mạng nơ-ron NNUE chạy toàn tốc trên CPU và Neural Engine của iPhone, đạt độ sâu ngang phần mềm desktop chuyên dụng.',
      'engine.stat1':  'Nút mỗi giây',
      'engine.stat2':  'Độ sâu tìm kiếm',
      'engine.stat3':  'Ngoại tuyến',
      /* ── Footer ── */
      'footer.desc':       'Engine Cờ Tướng mạnh nhất trên iPhone. Xây dựng với đam mê Cờ Tướng.',
      'footer.desc.short': 'Engine Cờ Tướng mạnh nhất trên iPhone.',
      'footer.app':        'Ứng dụng',
      'footer.legal':      'Pháp lý',
      'footer.pages':      'Trang',
      'footer.features':   'Tính năng',
      'footer.engine':     'Engine',
      'footer.download':   'Tải về',
      'footer.privacy':    'Chính sách bảo mật',
      'footer.support':    'Hỗ trợ',
      'footer.contact':    'Liên hệ',
      'footer.copy':       '© 2025 MinMen Studio. Bảo lưu mọi quyền.',
      /* ── Page titles ── */
      'title.index':   'DragonFish — Engine Cờ Tướng cho iOS',
      'title.support': 'Hỗ trợ — DragonFish',
      'title.privacy': 'Chính sách bảo mật — DragonFish',
      /* ── Support page ── */
      'support.hero.title': 'Hỗ trợ',
      'support.hero.sub':   'Câu hỏi thường gặp và thông tin liên hệ',
      'faq.section.title':  'Câu hỏi thường gặp',
      'faq.1.q': 'DragonFish có cần kết nối internet không?',
      'faq.1.a': 'Không. DragonFish hoạt động hoàn toàn offline. Engine AI, nhận diện bàn cờ và toàn bộ dữ liệu trò chơi đều được lưu cục bộ trên thiết bị. Bạn chỉ cần internet khi tải ứng dụng lần đầu.',
      'faq.2.q': 'Làm sao để thay đổi thời gian suy nghĩ của engine?',
      'faq.2.a': 'Trong màn hình chơi, nhấn biểu tượng não trên thanh công cụ để mở thanh điều chỉnh. Dùng nút − và + để chỉnh từ 1 đến 10 giây mỗi nước. Cài đặt được lưu tự động.',
      'faq.3.q': 'Tính năng chụp bàn cờ (nhận diện ảnh) hoạt động thế nào?',
      'faq.3.a': 'Nhấn "Chụp Bàn Cờ" ở màn hình chính rồi chụp hoặc tải ảnh bàn cờ Tướng thật lên. Ứng dụng dùng mô hình YOLOv8 chạy trực tiếp trên máy để nhận diện quân cờ và xác định tọa độ. Để đạt kết quả tốt nhất, chụp thẳng từ trên xuống, ánh sáng đều, hạn chế phản chiếu.',
      'faq.4.q': 'Nhãn "Beta" trên tính năng chụp bàn có nghĩa gì?',
      'faq.4.a': 'Tính năng nhận diện bàn cờ vẫn đang được cải thiện. Hoạt động tốt với bộ quân cờ tiêu chuẩn trong điều kiện ánh sáng đủ, nhưng có thể gặp khó khăn với quân cờ lạ, ánh sáng yếu hoặc góc chụp nghiêng. Rất mong nhận được phản hồi nếu bạn gặp vấn đề.',
      'faq.5.q': 'Tôi có thể hoàn tác nước đi không?',
      'faq.5.a': 'Được. Nhấn mũi tên ← trên thanh công cụ để hoàn tác. Ở chế độ người-đấu-máy, một lần hoàn tác lùi lại hai lượt (nước bạn đi và nước engine trả lời). Nhấn → để làm lại.',
      'faq.6.q': 'Làm sao để thiết lập thế cờ tùy chỉnh?',
      'faq.6.a': 'Trong chế độ Luyện tập hoặc Phân tích sâu, nhấn biểu tượng bút chì (✏) để vào chế độ chỉnh thế cờ. Kéo quân từ bảng lên bàn, hoặc kéo quân trên bàn để di chuyển hay xóa. Nhấn Xong khi hoàn thành — engine sẽ phân tích hoặc chơi từ thế cờ bạn đặt.',
      'faq.7.q': 'Engine mạnh đến mức nào?',
      'faq.7.a': 'DragonFish dùng engine NNUE tiên tiến được xây dựng riêng cho Cờ Tướng. Trên iPhone thật đạt khoảng 78.000 nút/giây và độ sâu 17+ trong 3 giây — mạnh hơn bất kỳ kỳ thủ người nào.',
      'faq.8.q': 'Tim hoạt động như thế nào?',
      'faq.8.a': 'Tim là đơn vị dùng để bắt đầu ván cờ. Mỗi tài khoản có 10 tim lúc đầu, mỗi ván tốn 1 tim. Bạn có thể kiếm thêm qua phần thưởng hằng ngày hoặc mua gói tim trong ứng dụng. Gói Mở khóa engine và Tim không giới hạn cũng bỏ hoàn toàn yêu cầu tim.',
      'faq.9.q': 'Làm sao để đổi ngôn ngữ ứng dụng?',
      'faq.9.a': 'Ở màn hình chính, nhấn nút cờ/ngôn ngữ trên thanh trên cùng để chuyển qua lại giữa tiếng Anh và tiếng Việt.',
      'faq.10.q': 'Lịch sử ván cờ được lưu ở đâu?',
      'faq.10.a': 'Lịch sử ván cờ được lưu cục bộ trên thiết bị qua iOS UserDefaults, không bao giờ gửi lên máy chủ. Gỡ cài đặt ứng dụng sẽ xóa toàn bộ lịch sử.',
      'contact.title': 'Vẫn cần trợ giúp?',
      'contact.p':     'Nếu câu hỏi của bạn chưa có trong danh sách trên, hoặc bạn muốn báo lỗi hay góp ý, hãy gửi email trực tiếp cho chúng tôi. Chúng tôi đọc mọi tin nhắn.',
      /* ── Privacy page ── */
      'privacy.hero.title': 'Chính sách quyền riêng tư',
      'privacy.hero.sub':   'Cập nhật lần cuối: 7 tháng 4, 2025',
      'privacy.intro': 'MinMen Studio ("chúng tôi") vận hành ứng dụng di động DragonFish ("Ứng dụng"). Chính sách quyền riêng tư này giải thích thông tin nào được thu thập khi bạn sử dụng ứng dụng, cách chúng tôi sử dụng và các lựa chọn của bạn liên quan đến thông tin đó.',
      'privacy.h1':   '1. Thông tin chúng tôi thu thập',
      'privacy.1.p1': 'DragonFish được thiết kế để hoạt động hoàn toàn offline và không thu thập thông tin nhận dạng cá nhân. Chúng tôi không thu thập, lưu trữ hay truyền tên, địa chỉ email, vị trí hoặc bất kỳ dữ liệu cá nhân nào lên máy chủ.',
      'privacy.1.p2': 'Toàn bộ dữ liệu trò chơi (nước đi, thế cờ, lịch sử, số tim) được lưu trữ <strong>cục bộ trên thiết bị của bạn</strong> qua iOS UserDefaults, không bao giờ truyền đến bất kỳ máy chủ nào.',
      'privacy.h2':   '2. Mua hàng trong ứng dụng',
      'privacy.2.p':  'DragonFish cung cấp các gói mua trong ứng dụng (gói tim) được xử lý hoàn toàn bởi App Store của Apple. Chúng tôi không nhận hay lưu trữ bất kỳ thông tin thanh toán nào. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Chính sách quyền riêng tư của Apple</a> điều chỉnh toàn bộ giao dịch.',
      'privacy.h3':   '3. Dịch vụ bên thứ ba',
      'privacy.3.p':  'DragonFish không tích hợp bất kỳ SDK phân tích, quảng cáo hay theo dõi của bên thứ ba. Không có dữ liệu nào được chia sẻ ra ngoài.',
      'privacy.h4':   '4. Quyền riêng tư của trẻ em',
      'privacy.4.p':  'Ứng dụng không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân của trẻ em dưới 13 tuổi. Nếu bạn là phụ huynh và cho rằng con bạn đã cung cấp thông tin cá nhân, vui lòng liên hệ để chúng tôi xóa thông tin đó.',
      'privacy.h5':   '5. Lưu trữ dữ liệu',
      'privacy.5.p':  'Chúng tôi không lưu giữ bất kỳ dữ liệu cá nhân nào trên máy chủ. Toàn bộ dữ liệu của ứng dụng nằm trên thiết bị của bạn và sẽ bị xóa khi bạn gỡ cài đặt.',
      'privacy.h6':   '6. Bảo mật',
      'privacy.6.p':  'Vì tất cả dữ liệu được lưu cục bộ và không bao giờ truyền đi, thông tin của bạn được bảo vệ bởi cơ chế bảo mật của thiết bị (Face ID, mã PIN, v.v.).',
      'privacy.h7':   '7. Thay đổi chính sách',
      'privacy.7.p':  'Chúng tôi có thể cập nhật chính sách này theo thời gian. Các thay đổi sẽ được đăng tại đây kèm ngày cập nhật. Việc tiếp tục sử dụng ứng dụng sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.',
      'privacy.h8':   '8. Liên hệ chúng tôi',
      'privacy.8.p1': 'Nếu bạn có câu hỏi hay thắc mắc về chính sách này, vui lòng liên hệ:',
      'privacy.8.p2': '<strong>MinMen Studio</strong><br />Email: <a href="mailto:dragonfish.minmenstudio@gmail.com">dragonfish.minmenstudio@gmail.com</a>',
    }
  };

  function detectLang() {
    var stored = localStorage.getItem('df-lang');
    if (stored === 'vi' || stored === 'en') return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.startsWith('vi') ? 'vi' : 'en';
  }

  var currentLang = detectLang();

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('df-lang', lang);
    document.documentElement.lang = lang;

    var t = T[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* Page title */
    var page = document.body.getAttribute('data-page') || 'index';
    var titleKey = 'title.' + page;
    if (t[titleKey]) document.title = t[titleKey];

    /* Toggle button label — shows the OTHER language as the switch target */
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'vi' ? 'EN' : 'VI';
      btn.setAttribute('aria-label', lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyLang(currentLang === 'vi' ? 'en' : 'vi');
      });
    }
  });
})();
