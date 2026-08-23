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
      'hero.desc': 'The strongest Xiangqi engine on iPhone and Android — built for training, deep analysis, and instant board recognition.',
      'hero.download_on': 'Download on the',
      'hero.app_store':   'App Store',
      'hero.play_store':  'Google Play',
      /* ── Features ── */
      'feat.eyebrow':       "What's inside",
      'feat.title':         'Three modes, one engine',
      'feat.train.sub':     'Train',
      'feat.train.desc':    'Play against a world-class AI engine at any skill level. Undo, redo, flip the board, and edit positions freely.',
      'feat.capture.sub':   'Capture · Beta',
      'feat.capture.desc':  'Point your camera at any physical board. DragonFish recognizes the board directly on your device for fast position setup.',
      'feat.analysis.sub':  'Deep Analysis',
      'feat.analysis.desc': 'Two-sided engine analysis with best-move arrows, centipawn scores, and per-side elapsed clocks. Understand every position deeply.',
      /* ── Engine section ── */
      'engine.badge':  'DragonFish Engine',
      'engine.title':  'World-class engine.<br />Local and cloud options.',
      'engine.p1':     'DragonFish runs a <strong>state-of-the-art NNUE engine</strong> natively on your device for offline training and analysis. Cloud Engine features require an internet connection.',
      'engine.p2':     'The local NNUE neural network runs at full speed on supported devices, reaching depths that rival dedicated desktop software.',
      'engine.stat1':  'Nodes per second',
      'engine.stat2':  'Search depth',
      'engine.stat3':  'Local engine',
      /* ── Footer ── */
      'footer.desc':       'The strongest Xiangqi engine on iPhone and Android. Built with passion for Cờ Tướng.',
      'footer.desc.short': 'The strongest Xiangqi engine on iPhone and Android.',
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
      'title.index':   'DragonFish — Xiangqi Engine for iOS and Android',
      'title.support': 'Support — DragonFish',
      'title.privacy': 'Privacy Policy — DragonFish',
      'title.chess-support': 'Support — DragonFish-Chess',
      'title.chess-privacy': 'Privacy Policy — DragonFish-Chess',
      /* ── Support page ── */
      'support.hero.title': 'Support',
      'support.hero.sub':   'Frequently asked questions and contact information',
      'faq.section.title':  'Frequently Asked Questions',
      'faq.1.q': 'Does DragonFish require an internet connection?',
      'faq.1.a': 'Core training and local analysis can work offline after installation. Online play, Cloud Engine, account sync, purchases, and other cloud-backed features require an internet connection.',
      'faq.2.q': 'How do I change the engine thinking time?',
      'faq.2.a': 'In the game screen, tap the brain icon in the toolbar to reveal the thinking-time bar. Use the − and + buttons to adjust from 1 to 10 seconds per move. The setting is saved automatically.',
      'faq.3.q': 'How does the Board Capture (photo recognition) work?',
      'faq.3.a': 'Tap "Chụp Bàn Cờ" from the home screen and take or upload a photo of a physical Xiangqi board. The app recognizes the pieces on your device and maps them to board coordinates. For best results, shoot from directly above with even lighting and minimal glare.',
      'faq.4.q': 'What does the "Beta" badge on Capture mean?',
      'faq.4.a': "Board recognition is actively being improved. It works well on standard piece sets under good lighting, but may struggle with unusual piece designs, poor lighting, or extreme angles. We'd love your feedback if you encounter issues.",
      'faq.5.q': 'Can I undo moves during a game?',
      'faq.5.a': "Yes. Tap the ← arrow in the toolbar to undo. In human-vs-computer mode, undo steps back two plies (your move and the engine's reply). Tap → to redo.",
      'faq.6.q': 'How do I set up a custom position?',
      'faq.6.a': 'In either Train or Deep Analysis mode, tap the pencil (✏) icon in the toolbar to enter Position Edit mode. Drag pieces from the palette onto the board, or drag pieces already on the board to move or remove them. Tap Done when finished — the engine will analyse or play from your custom position.',
      'faq.7.q': 'What is the engine strength?',
      'faq.7.a': 'DragonFish uses a state-of-the-art NNUE engine built specifically for Xiangqi (Chinese Chess). On supported devices it reaches high search depths quickly and is significantly stronger than any human player.',
      'faq.8.q': 'How do Hearts work?',
      'faq.8.a': 'Hearts are the in-app currency used to start games. You begin with 10 hearts. Each game start costs 1 heart. You can earn more hearts by claiming your daily reward or by purchasing a heart package from the shop. The Engine Unlock and Unlimited Hearts packages also permanently remove the heart requirement.',
      'faq.9.q': 'How do I switch the app language?',
      'faq.9.a': 'On the main menu, tap the flag/language button in the top bar to cycle between available languages (English and Vietnamese).',
      'faq.10.q': 'Where is my game history stored?',
      'faq.10.a': 'Game history is stored locally on your device. Uninstalling the app will permanently delete your local history.',
      'contact.title': 'Still need help?',
      'contact.p':     "If your question isn't answered above, or you'd like to report a bug or share feedback, email us directly. We read every message.",
      /* ── Privacy page ── */
      'privacy.hero.title': 'Privacy Policy',
      'privacy.hero.sub':   'Last updated: June 8, 2026',
      'privacy.intro': 'MinMen Studio ("we", "us", or "our") operates the DragonFish mobile application (the "App") on iOS and Android. This Privacy Policy explains what information is collected when you use the App, how it is used, and your choices regarding that information.',
      'privacy.h1':   '1. Information We Collect',
      'privacy.1.p1': 'DragonFish keeps core training and analysis data on your device whenever possible. This includes local game positions, move history, settings, and app preferences.',
      'privacy.1.p2': 'If you sign in, we may receive basic account information from the sign-in provider, such as your user ID, display name, email address, and profile photo. We use this to sync purchases, hearts, online play, and account-based features.',
      'privacy.1.li1': '<strong>Online play data</strong> — match records, move history, ratings, statistics, and basic profile information needed to run online games.',
      'privacy.1.li2': '<strong>App diagnostics</strong> — crash reports, performance information, and limited usage events that help us find bugs, improve reliability, and prevent abuse.',
      'privacy.1.li3': '<strong>Purchases and entitlement data</strong> — product ownership, hearts balance, and VIP/unlimited status. Payment processing is handled by Apple or Google; we do not receive your card or payment details.',
      'privacy.h2':   '2. Board Recognition and Overlay Analysis',
      'privacy.2.p':  'Some DragonFish features can recognize a Xiangqi board from a photo or from a screen area selected by you. Images are used only to identify the board position for analysis. We do not store those images or use them outside the App. On Android, the Overlay feature requires explicit screen-capture permission and shows a foreground notification while it is running.',
      'privacy.h3':   '3. In-App Purchases',
      'privacy.3.p':  'DragonFish offers optional in-app purchases, including hearts and VIP/unlimited access. On iOS, purchases are processed by Apple\'s App Store. On Android, purchases are processed by Google Play Billing. We do not receive or store your payment card or financial information. See <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple\'s Privacy Policy</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google\'s Privacy Policy</a> for details on how each platform handles purchase data.',
      'privacy.h4':   '4. Acceptable Use',
      'privacy.4.p':  'DragonFish is provided for learning, training, analysis, and personal study of Xiangqi. You are responsible for using the App in accordance with applicable laws, tournament rules, online platform rules, and fair-play expectations. MinMen Studio is not responsible for misuse of the App, including use in contexts where external assistance is prohibited.',
      'privacy.h5':   '5. Data Retention',
      'privacy.5.p':  'Local device data is deleted when you uninstall the App. Account data, online play records, purchase entitlement records, and support messages are retained for as long as needed to provide the App, restore purchases, maintain fair play, meet legal obligations, and resolve support requests. You may request deletion of data associated with your account or device at any time — see Section 7.',
      'privacy.h6':   '6. Security',
      'privacy.6.p':  "All data transmitted between the App and our cloud providers is encrypted in transit (HTTPS / TLS). Local data on your device is protected by your device's own security mechanisms. We limit access to operational data to what is needed to operate, secure, and improve the App.",
      'privacy.h7':   '7. Your Rights & Data Deletion',
      'privacy.7.p':  'You may request access to, correction of, or deletion of data we hold that is associated with you. To make a request, email us at the address below with a description of your request. We will respond within 30 days. We may need information such as your account email or app identifier to locate the relevant records.',
      'privacy.h8':   '8. Changes to This Policy',
      'privacy.8.p':  'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the App after any changes constitutes acceptance of the updated policy.',
      'privacy.h9':   '9. Contact Us',
      'privacy.9.p1': 'If you have any questions or concerns about this Privacy Policy, or to make a data request, please contact us at:',
      'privacy.9.p2': '<strong>MinMen Studio</strong><br />Email: <a href="mailto:dragonfish.minmenstudio@gmail.com">dragonfish.minmenstudio@gmail.com</a>',
      /* ── DragonFish-Chess: Support page ── */
      'chess_footer.desc.short': 'The strongest chess engine on mobile, powered by Stockfish.',
      'chess_support.hero.title': 'Support',
      'chess_support.hero.sub':   'DragonFish-Chess — frequently asked questions and contact information',
      'chess_faq.section.title':  'Frequently Asked Questions',
      'chess_faq.1.q': 'Does DragonFish-Chess require an internet connection?',
      'chess_faq.1.a': 'No. Training and analysis run entirely on-device using the built-in Stockfish engine. An internet connection is only used for showing ads and processing in-app purchases.',
      'chess_faq.2.q': "How do I change the engine's thinking time, hash size, or thread count?",
      'chess_faq.2.a': 'Open Settings from the in-game menu. You can adjust thinking time (1–20 seconds per move), hash memory, and the number of CPU threads the engine uses.',
      'chess_faq.3.q': "What's the difference between Train and Deep Analysis?",
      'chess_faq.3.a': 'Train plays a full game against the engine at your chosen strength. Deep Analysis evaluates every position from both sides at once, showing best-move arrows and centipawn scores so you can study a game or explore variations freely.',
      'chess_faq.4.q': 'How do I set up a custom position?',
      'chess_faq.4.a': 'In either Train or Deep Analysis, tap the pencil icon to enter Edit Position mode. Drag pieces from the palette onto the board, or drag pieces already on the board to move or remove them. Tap Done when finished — the engine plays or analyzes from your custom position.',
      'chess_faq.5.q': 'Can I undo moves during a game?',
      'chess_faq.5.a': "Yes. Tap the ← arrow in the toolbar to undo — it steps back one full move (your move and the engine's reply). Tap → to redo.",
      'chess_faq.6.q': 'How do Hearts work?',
      'chess_faq.6.a': 'Hearts are the in-app currency used to start a game against the engine. You can earn more hearts or purchase a heart pack from the shop. The Engine Unlock and Unlimited Hearts packages permanently remove the heart requirement and unlock the engine\'s full strength.',
      'chess_faq.7.q': 'Is Board Capture available?',
      'chess_faq.7.a': 'Board Capture (setting up a position from a photo of a physical chess board) is marked "Soon" on the home screen — it\'s planned for a future update and isn\'t available yet.',
      'chess_faq.8.q': 'How do I switch the app language?',
      'chess_faq.8.a': 'Open Settings from the main menu to switch between available languages (English and Vietnamese).',
      'chess_faq.9.q': 'What engine does the app use, and is it open source?',
      'chess_faq.9.a': 'DragonFish-Chess is built on Stockfish, licensed under the GNU GPLv3. In the app, go to Settings → About for links to the license and the public source code of the engine changes we made to run it on iOS.',
      /* ── DragonFish-Chess: Privacy page ── */
      'chess_privacy.hero.title': 'Privacy Policy',
      'chess_privacy.hero.sub':   'DragonFish-Chess — Last updated: August 23, 2026',
      'chess_privacy.intro': 'MinMen Studio ("we", "us", or "our") operates the DragonFish-Chess mobile application (the "App") on iOS. This Privacy Policy explains what information is collected when you use the App, how it is used, and your choices regarding that information.',
      'chess_privacy.h1':   '1. Information We Collect',
      'chess_privacy.1.p1': 'DragonFish-Chess is a single-player app that runs its chess engine entirely on your device. There is no account or sign-in, and no online multiplayer. Game state, move history, and settings are stored locally on your device.',
      'chess_privacy.1.li1': "<strong>Advertising data</strong> — with your consent, our advertising partners (Google AdMob, Unity Ads, and related networks) may collect device identifiers and usage data to show and measure ads. You control this via Apple's App Tracking Transparency prompt.",
      'chess_privacy.1.li2': '<strong>Analytics and diagnostics</strong> — we use Firebase Analytics to collect limited, non-identifying usage events and crash reports that help us find bugs and improve the App.',
      'chess_privacy.1.li3': "<strong>Purchases</strong> — in-app purchases (hearts, engine unlock) are processed entirely by Apple's App Store via StoreKit. We do not receive or store your payment card or financial information.",
      'chess_privacy.h2':   '2. Advertising & App Tracking Transparency',
      'chess_privacy.2.p':  "DragonFish-Chess shows ads to support free play. On first launch, iOS will ask for permission to allow tracking for personalized ads, as required by Apple's App Tracking Transparency framework. You can allow or deny this at any time from iOS Settings → Privacy & Security → Tracking.",
      'chess_privacy.h3':   '3. In-App Purchases',
      'chess_privacy.3.p':  'DragonFish-Chess offers optional in-app purchases, including hearts and an engine unlock. All purchases are processed by Apple\'s App Store. We do not receive or store your payment card or financial information. See <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple\'s Privacy Policy</a> for details on how Apple handles purchase data.',
      'chess_privacy.h4':   '4. Chess Engine',
      'chess_privacy.4.p':  'DragonFish-Chess uses Stockfish, an open-source chess engine licensed under the GNU General Public License v3 (GPLv3). The engine runs fully on-device — no position or move data is ever sent to a server for analysis. In the App, go to Settings → About for the license text and a link to the public source code of our iOS-specific engine changes.',
      'chess_privacy.h5':   '5. Data Retention',
      'chess_privacy.5.p':  'Local device data (games, settings) is deleted when you uninstall the App. We do not operate any server-side account or game database for this App.',
      'chess_privacy.h6':   "6. Children's Privacy",
      'chess_privacy.6.p':  'DragonFish-Chess is not directed at children under 13, and we do not knowingly collect personal information from children under 13.',
      'chess_privacy.h7':   '7. Your Rights & Contact',
      'chess_privacy.7.p':  'Since the App does not use accounts, most data stays on your device and is entirely within your control (delete it by uninstalling the App). For questions about advertising or analytics data, or any other privacy question, contact us below.',
      'chess_privacy.h8':   '8. Changes to This Policy',
      'chess_privacy.8.p':  'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the App after any changes constitutes acceptance of the updated policy.',
      'chess_privacy.h9':   '9. Contact Us',
      'chess_privacy.9.p1': 'If you have any questions or concerns about this Privacy Policy, please contact us at:',
      'chess_privacy.9.p2': '<strong>MinMen Studio</strong><br />Email: <a href="mailto:dragonfish.minmenstudio@gmail.com">dragonfish.minmenstudio@gmail.com</a>',
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
      'hero.desc': 'Engine Cờ Tướng mạnh nhất trên iPhone và Android — luyện tập, phân tích sâu và nhận diện bàn cờ tức thì.',
      'hero.download_on': 'Tải về trên',
      'hero.app_store':   'App Store',
      'hero.play_store':  'Google Play',
      /* ── Features ── */
      'feat.eyebrow':       'Khám phá',
      'feat.title':         'Ba chế độ, một engine',
      'feat.train.sub':     'Luyện tập',
      'feat.train.desc':    'Đấu với AI đẳng cấp thế giới ở mọi trình độ. Hoàn tác, làm lại, lật bàn và chỉnh thế cờ tự do.',
      'feat.capture.sub':   'Chụp bàn · Beta',
      'feat.capture.desc':  'Hướng camera vào bàn cờ thật. DragonFish nhận diện bàn cờ trực tiếp trên thiết bị để thiết lập thế cờ nhanh.',
      'feat.analysis.sub':  'Phân tích sâu',
      'feat.analysis.desc': 'Phân tích engine hai chiều với mũi tên nước đi tốt nhất, điểm số và đồng hồ từng bên. Hiểu sâu mọi thế cờ.',
      /* ── Engine section ── */
      'engine.badge':  'DragonFish Engine',
      'engine.title':  'Engine đẳng cấp thế giới.<br />Có cả local và cloud.',
      'engine.p1':     'DragonFish chạy <strong>engine NNUE hiện đại nhất</strong> trực tiếp trên thiết bị cho luyện tập và phân tích offline. Các tính năng Cloud Engine cần kết nối internet.',
      'engine.p2':     'Mạng nơ-ron NNUE local chạy toàn tốc trên thiết bị được hỗ trợ, đạt độ sâu ngang phần mềm desktop chuyên dụng.',
      'engine.stat1':  'Nút mỗi giây',
      'engine.stat2':  'Độ sâu tìm kiếm',
      'engine.stat3':  'Engine local',
      /* ── Footer ── */
      'footer.desc':       'Engine Cờ Tướng mạnh nhất trên iPhone và Android. Xây dựng với đam mê Cờ Tướng.',
      'footer.desc.short': 'Engine Cờ Tướng mạnh nhất trên iPhone và Android.',
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
      'title.index':   'DragonFish — Engine Cờ Tướng cho iOS và Android',
      'title.support': 'Hỗ trợ — DragonFish',
      'title.privacy': 'Chính sách bảo mật — DragonFish',
      'title.chess-support': 'Hỗ trợ — DragonFish-Chess',
      'title.chess-privacy': 'Chính sách bảo mật — DragonFish-Chess',
      /* ── Support page ── */
      'support.hero.title': 'Hỗ trợ',
      'support.hero.sub':   'Câu hỏi thường gặp và thông tin liên hệ',
      'faq.section.title':  'Câu hỏi thường gặp',
      'faq.1.q': 'DragonFish có cần kết nối internet không?',
      'faq.1.a': 'Luyện tập và phân tích bằng engine local có thể dùng offline sau khi cài đặt. Chơi online, Cloud Engine, đồng bộ tài khoản, mua hàng và các tính năng dùng dịch vụ đám mây cần kết nối internet.',
      'faq.2.q': 'Làm sao để thay đổi thời gian suy nghĩ của engine?',
      'faq.2.a': 'Trong màn hình chơi, nhấn biểu tượng não trên thanh công cụ để mở thanh điều chỉnh. Dùng nút − và + để chỉnh từ 1 đến 10 giây mỗi nước. Cài đặt được lưu tự động.',
      'faq.3.q': 'Tính năng chụp bàn cờ (nhận diện ảnh) hoạt động thế nào?',
      'faq.3.a': 'Nhấn "Chụp Bàn Cờ" ở màn hình chính rồi chụp hoặc tải ảnh bàn cờ Tướng thật lên. Ứng dụng nhận diện quân cờ trực tiếp trên thiết bị và xác định tọa độ bàn cờ. Để đạt kết quả tốt nhất, chụp thẳng từ trên xuống, ánh sáng đều, hạn chế phản chiếu.',
      'faq.4.q': 'Nhãn "Beta" trên tính năng chụp bàn có nghĩa gì?',
      'faq.4.a': 'Tính năng nhận diện bàn cờ vẫn đang được cải thiện. Hoạt động tốt với bộ quân cờ tiêu chuẩn trong điều kiện ánh sáng đủ, nhưng có thể gặp khó khăn với quân cờ lạ, ánh sáng yếu hoặc góc chụp nghiêng. Rất mong nhận được phản hồi nếu bạn gặp vấn đề.',
      'faq.5.q': 'Tôi có thể hoàn tác nước đi không?',
      'faq.5.a': 'Được. Nhấn mũi tên ← trên thanh công cụ để hoàn tác. Ở chế độ người-đấu-máy, một lần hoàn tác lùi lại hai lượt (nước bạn đi và nước engine trả lời). Nhấn → để làm lại.',
      'faq.6.q': 'Làm sao để thiết lập thế cờ tùy chỉnh?',
      'faq.6.a': 'Trong chế độ Luyện tập hoặc Phân tích sâu, nhấn biểu tượng bút chì (✏) để vào chế độ chỉnh thế cờ. Kéo quân từ bảng lên bàn, hoặc kéo quân trên bàn để di chuyển hay xóa. Nhấn Xong khi hoàn thành — engine sẽ phân tích hoặc chơi từ thế cờ bạn đặt.',
      'faq.7.q': 'Engine mạnh đến mức nào?',
      'faq.7.a': 'DragonFish dùng engine NNUE tiên tiến được xây dựng riêng cho Cờ Tướng. Trên thiết bị được hỗ trợ, engine đạt độ sâu cao rất nhanh và mạnh hơn bất kỳ kỳ thủ người nào.',
      'faq.8.q': 'Tim hoạt động như thế nào?',
      'faq.8.a': 'Tim là đơn vị dùng để bắt đầu ván cờ. Mỗi tài khoản có 10 tim lúc đầu, mỗi ván tốn 1 tim. Bạn có thể kiếm thêm qua phần thưởng hằng ngày hoặc mua gói tim trong ứng dụng. Gói Mở khóa engine và Tim không giới hạn cũng bỏ hoàn toàn yêu cầu tim.',
      'faq.9.q': 'Làm sao để đổi ngôn ngữ ứng dụng?',
      'faq.9.a': 'Ở màn hình chính, nhấn nút cờ/ngôn ngữ trên thanh trên cùng để chuyển qua lại giữa tiếng Anh và tiếng Việt.',
      'faq.10.q': 'Lịch sử ván cờ được lưu ở đâu?',
      'faq.10.a': 'Lịch sử ván cờ được lưu cục bộ trên thiết bị. Gỡ cài đặt ứng dụng sẽ xóa toàn bộ lịch sử cục bộ.',
      'contact.title': 'Vẫn cần trợ giúp?',
      'contact.p':     'Nếu câu hỏi của bạn chưa có trong danh sách trên, hoặc bạn muốn báo lỗi hay góp ý, hãy gửi email trực tiếp cho chúng tôi. Chúng tôi đọc mọi tin nhắn.',
      /* ── Privacy page ── */
      'privacy.hero.title': 'Chính sách quyền riêng tư',
      'privacy.hero.sub':   'Cập nhật lần cuối: 8 tháng 6, 2026',
      'privacy.intro': 'MinMen Studio ("chúng tôi") vận hành ứng dụng di động DragonFish ("Ứng dụng") trên iOS và Android. Chính sách quyền riêng tư này giải thích thông tin nào được thu thập khi bạn sử dụng ứng dụng, cách chúng tôi sử dụng và các lựa chọn của bạn liên quan đến thông tin đó.',
      'privacy.h1':   '1. Thông tin chúng tôi thu thập',
      'privacy.1.p1': 'DragonFish lưu dữ liệu luyện tập và phân tích trên thiết bị của bạn bất cứ khi nào có thể. Dữ liệu này bao gồm thế cờ cục bộ, lịch sử nước đi, cài đặt và tùy chọn ứng dụng.',
      'privacy.1.p2': 'Nếu bạn đăng nhập, chúng tôi có thể nhận thông tin tài khoản cơ bản từ nhà cung cấp đăng nhập, chẳng hạn như ID người dùng, tên hiển thị, email và ảnh đại diện. Chúng tôi dùng thông tin này để đồng bộ giao dịch mua, tim, chơi online và các tính năng theo tài khoản.',
      'privacy.1.li1': '<strong>Dữ liệu chơi online</strong> — bản ghi trận đấu, lịch sử nước đi, điểm xếp hạng, thống kê và thông tin hồ sơ cơ bản cần thiết để vận hành ván online.',
      'privacy.1.li2': '<strong>Dữ liệu chẩn đoán ứng dụng</strong> — báo cáo crash, thông tin hiệu năng và một số sự kiện sử dụng giới hạn giúp chúng tôi sửa lỗi, cải thiện độ ổn định và ngăn lạm dụng.',
      'privacy.1.li3': '<strong>Dữ liệu mua hàng và quyền sử dụng</strong> — quyền sở hữu sản phẩm, số tim và trạng thái VIP/không giới hạn. Thanh toán do Apple hoặc Google xử lý; chúng tôi không nhận thông tin thẻ hay chi tiết thanh toán.',
      'privacy.h2':   '2. Nhận diện bàn cờ và Overlay Analysis',
      'privacy.2.p':  'Một số tính năng của DragonFish có thể nhận diện bàn cờ Tướng từ ảnh hoặc từ vùng màn hình do bạn chọn. Hình ảnh chỉ được dùng để nhận diện thế cờ phục vụ phân tích. Chúng tôi không lưu trữ hoặc sử dụng những hình ảnh đó bên ngoài ứng dụng. Trên Android, tính năng Overlay cần quyền chụp màn hình rõ ràng và hiển thị thông báo foreground khi đang chạy.',
      'privacy.h3':   '3. Mua hàng trong ứng dụng',
      'privacy.3.p':  'DragonFish cung cấp các gói mua trong ứng dụng, bao gồm tim và quyền VIP/không giới hạn. Trên iOS, giao dịch được xử lý bởi App Store của Apple. Trên Android, giao dịch được xử lý bởi Google Play Billing. Chúng tôi không nhận hay lưu trữ thông tin thẻ hoặc tài chính của bạn. Xem <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Chính sách quyền riêng tư của Apple</a> và <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Chính sách quyền riêng tư của Google</a> để biết chi tiết cách mỗi nền tảng xử lý dữ liệu mua hàng.',
      'privacy.h4':   '4. Sử dụng đúng mục đích',
      'privacy.4.p':  'DragonFish được cung cấp cho mục đích học tập, luyện tập, phân tích và nghiên cứu cá nhân về Cờ Tướng. Bạn chịu trách nhiệm sử dụng ứng dụng phù hợp với pháp luật, luật giải đấu, quy định của nền tảng online và tinh thần chơi công bằng. MinMen Studio không chịu trách nhiệm cho việc sử dụng sai mục đích, bao gồm sử dụng trong các ngữ cảnh cấm hỗ trợ bên ngoài.',
      'privacy.h5':   '5. Lưu trữ dữ liệu',
      'privacy.5.p':  'Dữ liệu cục bộ trên thiết bị sẽ bị xoá khi bạn gỡ cài đặt ứng dụng. Dữ liệu tài khoản, bản ghi chơi online, quyền mua hàng và tin nhắn hỗ trợ được lưu trong thời gian cần thiết để cung cấp ứng dụng, khôi phục giao dịch mua, duy trì chơi công bằng, đáp ứng nghĩa vụ pháp lý và xử lý hỗ trợ. Bạn có thể yêu cầu xoá dữ liệu liên quan đến tài khoản hoặc thiết bị bất cứ lúc nào — xem Mục 7.',
      'privacy.h6':   '6. Bảo mật',
      'privacy.6.p':  'Tất cả dữ liệu truyền giữa ứng dụng và các dịch vụ đám mây của chúng tôi đều được mã hoá khi truyền (HTTPS / TLS). Dữ liệu cục bộ trên thiết bị được bảo vệ bằng cơ chế bảo mật của chính thiết bị. Chúng tôi giới hạn quyền truy cập dữ liệu vận hành ở mức cần thiết để vận hành, bảo mật và cải thiện ứng dụng.',
      'privacy.h7':   '7. Quyền của bạn & xoá dữ liệu',
      'privacy.7.p':  'Bạn có thể yêu cầu truy cập, sửa đổi hoặc xoá dữ liệu chúng tôi lưu liên quan đến bạn. Để gửi yêu cầu, email địa chỉ bên dưới kèm mô tả yêu cầu. Chúng tôi sẽ phản hồi trong vòng 30 ngày. Chúng tôi có thể cần thông tin như email tài khoản hoặc mã định danh ứng dụng để tìm các bản ghi liên quan.',
      'privacy.h8':   '8. Thay đổi chính sách',
      'privacy.8.p':  'Chúng tôi có thể cập nhật chính sách này theo thời gian. Các thay đổi sẽ được đăng tại đây kèm ngày cập nhật. Việc tiếp tục sử dụng ứng dụng sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.',
      'privacy.h9':   '9. Liên hệ chúng tôi',
      'privacy.9.p1': 'Nếu bạn có câu hỏi hay thắc mắc về chính sách này, hoặc muốn yêu cầu về dữ liệu, vui lòng liên hệ:',
      'privacy.9.p2': '<strong>MinMen Studio</strong><br />Email: <a href="mailto:dragonfish.minmenstudio@gmail.com">dragonfish.minmenstudio@gmail.com</a>',
      /* ── DragonFish-Chess: Trang Hỗ trợ ── */
      'chess_footer.desc.short': 'Engine cờ vua mạnh nhất trên di động, xây dựng trên nền Stockfish.',
      'chess_support.hero.title': 'Hỗ trợ',
      'chess_support.hero.sub':   'DragonFish-Chess — Câu hỏi thường gặp và thông tin liên hệ',
      'chess_faq.section.title':  'Câu hỏi thường gặp',
      'chess_faq.1.q': 'DragonFish-Chess có cần kết nối internet không?',
      'chess_faq.1.a': 'Không. Luyện tập và phân tích chạy hoàn toàn trên thiết bị bằng engine Stockfish tích hợp sẵn. Kết nối internet chỉ dùng để hiển thị quảng cáo và xử lý mua hàng trong ứng dụng.',
      'chess_faq.2.q': 'Làm sao để thay đổi thời gian suy nghĩ, bộ nhớ hash hoặc số luồng của engine?',
      'chess_faq.2.a': 'Mở Cài đặt từ menu trong ván cờ. Bạn có thể chỉnh thời gian suy nghĩ (1–20 giây mỗi nước), bộ nhớ hash và số luồng CPU engine sử dụng.',
      'chess_faq.3.q': 'Luyện Tập và Phân Tích Sâu khác nhau thế nào?',
      'chess_faq.3.a': 'Luyện Tập chơi một ván đầy đủ với engine ở mức bạn chọn. Phân Tích Sâu đánh giá mọi thế cờ cho cả hai bên cùng lúc, hiển thị mũi tên nước đi tốt nhất và điểm số, giúp bạn nghiên cứu ván cờ hoặc thử biến hóa tự do.',
      'chess_faq.4.q': 'Làm sao để thiết lập thế cờ tùy chỉnh?',
      'chess_faq.4.a': 'Trong chế độ Luyện Tập hoặc Phân Tích Sâu, nhấn biểu tượng bút chì để vào chế độ chỉnh thế cờ. Kéo quân từ bảng lên bàn, hoặc kéo quân trên bàn để di chuyển hay xóa. Nhấn Xong khi hoàn thành — engine sẽ chơi hoặc phân tích từ thế cờ bạn đặt.',
      'chess_faq.5.q': 'Tôi có thể hoàn tác nước đi không?',
      'chess_faq.5.a': 'Được. Nhấn mũi tên ← trên thanh công cụ để hoàn tác — lùi lại một nước đầy đủ (nước bạn đi và nước engine trả lời). Nhấn → để làm lại.',
      'chess_faq.6.q': 'Tim hoạt động như thế nào?',
      'chess_faq.6.a': 'Tim là đơn vị dùng để bắt đầu một ván đấu với engine. Bạn có thể kiếm thêm tim hoặc mua gói tim trong shop. Gói Mở khóa engine và Tim không giới hạn bỏ hoàn toàn yêu cầu tim và mở khóa sức mạnh tối đa của engine.',
      'chess_faq.7.q': 'Tính năng Chụp Bàn Cờ đã dùng được chưa?',
      'chess_faq.7.a': 'Chụp Bàn Cờ (thiết lập thế cờ từ ảnh bàn cờ thật) đang được đánh dấu "Sắp ra mắt" trên màn hình chính — dự kiến có trong bản cập nhật tương lai, hiện chưa khả dụng.',
      'chess_faq.8.q': 'Làm sao để đổi ngôn ngữ ứng dụng?',
      'chess_faq.8.a': 'Mở Cài đặt từ màn hình chính để chuyển đổi giữa các ngôn ngữ có sẵn (tiếng Anh và tiếng Việt).',
      'chess_faq.9.q': 'Ứng dụng dùng engine gì, và có mã nguồn mở không?',
      'chess_faq.9.a': 'DragonFish-Chess được xây dựng trên Stockfish, cấp phép theo GNU GPLv3. Trong ứng dụng, vào Cài đặt → Giới thiệu để xem liên kết đến giấy phép và mã nguồn công khai của các thay đổi engine chúng tôi thực hiện để chạy trên iOS.',
      /* ── DragonFish-Chess: Trang Chính sách bảo mật ── */
      'chess_privacy.hero.title': 'Chính sách quyền riêng tư',
      'chess_privacy.hero.sub':   'DragonFish-Chess — Cập nhật lần cuối: 23 tháng 8, 2026',
      'chess_privacy.intro': 'MinMen Studio ("chúng tôi") vận hành ứng dụng di động DragonFish-Chess ("Ứng dụng") trên iOS. Chính sách quyền riêng tư này giải thích thông tin nào được thu thập khi bạn sử dụng ứng dụng, cách chúng tôi sử dụng và các lựa chọn của bạn liên quan đến thông tin đó.',
      'chess_privacy.h1':   '1. Thông tin chúng tôi thu thập',
      'chess_privacy.1.p1': 'DragonFish-Chess là ứng dụng chơi một mình, engine cờ vua chạy hoàn toàn trên thiết bị của bạn. Không có tài khoản hay đăng nhập, và không có chơi online nhiều người. Trạng thái ván cờ, lịch sử nước đi và cài đặt được lưu cục bộ trên thiết bị.',
      'chess_privacy.1.li1': '<strong>Dữ liệu quảng cáo</strong> — với sự đồng ý của bạn, các đối tác quảng cáo (Google AdMob, Unity Ads và các mạng liên quan) có thể thu thập mã định danh thiết bị và dữ liệu sử dụng để hiển thị và đo lường quảng cáo. Bạn kiểm soát việc này qua yêu cầu App Tracking Transparency của Apple.',
      'chess_privacy.1.li2': '<strong>Phân tích và chẩn đoán</strong> — chúng tôi dùng Firebase Analytics để thu thập một số sự kiện sử dụng giới hạn, không định danh, và báo cáo crash giúp chúng tôi sửa lỗi và cải thiện ứng dụng.',
      'chess_privacy.1.li3': '<strong>Mua hàng</strong> — giao dịch mua trong ứng dụng (tim, mở khóa engine) được xử lý hoàn toàn bởi App Store của Apple qua StoreKit. Chúng tôi không nhận hay lưu trữ thông tin thẻ hoặc tài chính của bạn.',
      'chess_privacy.h2':   '2. Quảng cáo & App Tracking Transparency',
      'chess_privacy.2.p':  'DragonFish-Chess hiển thị quảng cáo để hỗ trợ chơi miễn phí. Ở lần mở đầu tiên, iOS sẽ hỏi quyền cho phép theo dõi để hiển thị quảng cáo cá nhân hóa, theo yêu cầu của khung App Tracking Transparency của Apple. Bạn có thể cho phép hoặc từ chối bất cứ lúc nào tại Cài đặt iOS → Quyền riêng tư & Bảo mật → Theo dõi.',
      'chess_privacy.h3':   '3. Mua hàng trong ứng dụng',
      'chess_privacy.3.p':  'DragonFish-Chess cung cấp các gói mua trong ứng dụng, bao gồm tim và mở khóa engine. Mọi giao dịch được xử lý bởi App Store của Apple. Chúng tôi không nhận hay lưu trữ thông tin thẻ hoặc tài chính của bạn. Xem <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Chính sách quyền riêng tư của Apple</a> để biết chi tiết cách Apple xử lý dữ liệu mua hàng.',
      'chess_privacy.h4':   '4. Engine cờ vua',
      'chess_privacy.4.p':  'DragonFish-Chess dùng Stockfish, một engine cờ vua mã nguồn mở cấp phép theo GNU General Public License v3 (GPLv3). Engine chạy hoàn toàn trên thiết bị — không có dữ liệu thế cờ hay nước đi nào được gửi lên máy chủ để phân tích. Trong ứng dụng, vào Cài đặt → Giới thiệu để xem giấy phép và liên kết đến mã nguồn công khai của các thay đổi engine dành riêng cho iOS.',
      'chess_privacy.h5':   '5. Lưu trữ dữ liệu',
      'chess_privacy.5.p':  'Dữ liệu cục bộ trên thiết bị (ván cờ, cài đặt) sẽ bị xoá khi bạn gỡ cài đặt ứng dụng. Chúng tôi không vận hành tài khoản hay cơ sở dữ liệu ván cờ phía máy chủ cho ứng dụng này.',
      'chess_privacy.h6':   '6. Quyền riêng tư của trẻ em',
      'chess_privacy.6.p':  'DragonFish-Chess không hướng đến trẻ em dưới 13 tuổi, và chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi.',
      'chess_privacy.h7':   '7. Quyền của bạn & Liên hệ',
      'chess_privacy.7.p':  'Vì ứng dụng không dùng tài khoản, phần lớn dữ liệu nằm trên thiết bị và hoàn toàn trong tầm kiểm soát của bạn (xoá bằng cách gỡ cài đặt ứng dụng). Với câu hỏi về dữ liệu quảng cáo, phân tích, hoặc bất kỳ câu hỏi quyền riêng tư nào khác, hãy liên hệ chúng tôi bên dưới.',
      'chess_privacy.h8':   '8. Thay đổi chính sách',
      'chess_privacy.8.p':  'Chúng tôi có thể cập nhật chính sách này theo thời gian. Các thay đổi sẽ được đăng tại đây kèm ngày cập nhật. Việc tiếp tục sử dụng ứng dụng sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.',
      'chess_privacy.h9':   '9. Liên hệ chúng tôi',
      'chess_privacy.9.p1': 'Nếu bạn có câu hỏi hay thắc mắc về chính sách này, vui lòng liên hệ:',
      'chess_privacy.9.p2': '<strong>MinMen Studio</strong><br />Email: <a href="mailto:dragonfish.minmenstudio@gmail.com">dragonfish.minmenstudio@gmail.com</a>',
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
