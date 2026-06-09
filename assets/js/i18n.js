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
