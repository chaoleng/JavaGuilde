// 初始化语言切换器
const languageSwitcher = new LanguageSwitcher();

function simulateTCP() {
    const output = document.getElementById('output');
    const translations = {
        'zh': '[TCP 通信模拟]\n\n客户端 → 服务器: 建立连接 (SYN)\n服务器 → 客户端: 确认连接 (SYN-ACK)\n客户端 → 服务器: 连接确认 (ACK)\n\n✅ 三次握手完成！连接已建立。\n\n客户端 → 服务器: "Hello, Server!"\n服务器 → 客户端: "Hello, Client!"\n\n客户端 → 服务器: 断开连接 (FIN)\n服务器 → 客户端: 确认断开 (ACK)\n服务器 → 客户端: 断开连接 (FIN)\n客户端 → 服务器: 确认断开 (ACK)\n\n✅ 四次挥手完成！连接已关闭。',
        'ja': '[TCP 通信シミュレーション]\n\nクライアント → サーバー: 接続確立 (SYN)\nサーバー → クライアント: 接続確認 (SYN-ACK)\nクライアント → サーバー: 確認応答 (ACK)\n\n✅ 3ウェイハンドシェイク完了！接続確立。\n\nクライアント → サーバー: "Hello, Server!"\nサーバー → クライアント: "Hello, Client!"\n\nクライアント → サーバー: 切断要求 (FIN)\nサーバー → クライアント: 確認応答 (ACK)\nサーバー → クライアント: 切断要求 (FIN)\nクライアント → サーバー: 確認応答 (ACK)\n\n✅ 4ウェイハンドシェイク完了！接続終了。',
        'en': '[TCP Communication Simulation]\n\nClient → Server: Establish connection (SYN)\nServer → Client: Acknowledge connection (SYN-ACK)\nClient → Server: Connection acknowledgment (ACK)\n\n✅ Three-way handshake complete! Connection established.\n\nClient → Server: "Hello, Server!"\nServer → Client: "Hello, Client!"\n\nClient → Server: Disconnect (FIN)\nServer → Client: Acknowledge disconnect (ACK)\nServer → Client: Disconnect (FIN)\nClient → Server: Acknowledge disconnect (ACK)\n\n✅ Four-way handshake complete! Connection closed.'
    };

    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    output.textContent = translations[currentLang];
    output.className = 'demo-output animate__animated animate__fadeIn';
}

function simulateUDP() {
    const output = document.getElementById('output');
    const translations = {
        'zh': '[UDP 通信模拟]\n\n客户端准备数据包...\n数据包内容: "Hello, UDP Server!"\n目标地址: 192.168.1.100:9876\n\n📤 发送数据包...\n\n⚡ 数据包已发送（无需确认）\n\n服务器接收数据包...\n📥 收到数据: "Hello, UDP Server!"\n\n✅ UDP 通信完成！\n\n特点:\n• 无连接\n• 快速传输\n• 不保证送达\n• 适合实时应用',
        'ja': '[UDP 通信シミュレーション]\n\nクライアントがパケットを準備...\nパケット内容: "Hello, UDP Server!"\n宛先: 192.168.1.100:9876\n\n📤 パケット送信中...\n\n⚡ パケット送信完了（確認不要）\n\nサーバーがパケットを受信...\n📥 受信データ: "Hello, UDP Server!"\n\n✅ UDP 通信完了！\n\n特徴:\n• コネクションレス\n• 高速転送\n• 配信保証なし\n• リアルタイムアプリ向け',
        'en': '[UDP Communication Simulation]\n\nClient preparing packet...\nPacket content: "Hello, UDP Server!"\nDestination: 192.168.1.100:9876\n\n📤 Sending packet...\n\n⚡ Packet sent (no acknowledgment needed)\n\nServer receiving packet...\n📥 Received data: "Hello, UDP Server!"\n\n✅ UDP communication complete!\n\nCharacteristics:\n• Connectionless\n• Fast transmission\n• No delivery guarantee\n• Suitable for real-time apps'
    };

    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    output.textContent = translations[currentLang];
    output.className = 'demo-output animate__animated animate__fadeIn';
}

function simulateHTTP() {
    const output = document.getElementById('output');
    const translations = {
        'zh': '[HTTP 请求模拟]\n\n客户端 → 服务器:\nGET /api/users HTTP/1.1\nHost: api.example.com\nAccept: application/json\nUser-Agent: JavaClient/1.0\n\n⏳ 等待响应...\n\n服务器 → 客户端:\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 156\n\n{\n  "users": [\n    {"id": 1, "name": "Alice"},\n    {"id": 2, "name": "Bob"},\n    {"id": 3, "name": "Charlie"}\n  ]\n}\n\n✅ HTTP 请求成功！\n响应时间: 42ms',
        'ja': '[HTTP リクエストシミュレーション]\n\nクライアント → サーバー:\nGET /api/users HTTP/1.1\nHost: api.example.com\nAccept: application/json\nUser-Agent: JavaClient/1.0\n\n⏳ レスポンス待機中...\n\nサーバー → クライアント:\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 156\n\n{\n  "users": [\n    {"id": 1, "name": "Alice"},\n    {"id": 2, "name": "Bob"},\n    {"id": 3, "name": "Charlie"}\n  ]\n}\n\n✅ HTTP リクエスト成功！\nレスポンス時間: 42ms',
        'en': '[HTTP Request Simulation]\n\nClient → Server:\nGET /api/users HTTP/1.1\nHost: api.example.com\nAccept: application/json\nUser-Agent: JavaClient/1.0\n\n⏳ Waiting for response...\n\nServer → Client:\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 156\n\n{\n  "users": [\n    {"id": 1, "name": "Alice"},\n    {"id": 2, "name": "Bob"},\n    {"id": 3, "name": "Charlie"}\n  ]\n}\n\n✅ HTTP request successful!\nResponse time: 42ms'
    };

    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    output.textContent = translations[currentLang];
    output.className = 'demo-output animate__animated animate__fadeIn';
}

function clearDemo() {
    const output = document.getElementById('output');
    output.textContent = "";
}
