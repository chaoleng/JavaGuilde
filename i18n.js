/**
 * JVM Visualization Series - Multi-language Support
 * 多言語翻訳データ
 *
 * Supported Languages:
 * - zh: Chinese (Simplified)
 * - ja: Japanese
 * - en: English
 */

const translations = {
    // ========================================
    // 中文 (Chinese - Simplified)
    // ========================================
    zh: {
        // Index page
        indexTitle: "Java虚拟机可视化系列",
        indexSubtitle: "深入理解JVM内部机制的交互式可视化教程",

        jvmProcess: "JVM启动流程",
        jvmProcessDesc: "可视化展示Java虚拟机从启动到运行的完整流程",

        jvmMemory: "JVM内存结构",
        jvmMemoryDesc: "深入了解Java内存模型和各个内存区域的作用",

        gc: "垃圾回收机制",
        gcDesc: "动态演示不同垃圾回收算法的工作原理",

        jit: "JIT即时编译",
        jitDesc: "理解Java代码如何被优化成本地机器码",

        concurrency: "并发编程",
        concurrencyDesc: "可视化Java多线程和并发控制机制",

        classloader: "类加载器",
        classloaderDesc: "探索Java类的加载、链接和初始化过程",

        // 執行引擎
        executionEngine: "执行引擎",
        executionEngineDesc: "JVM的核心执行组件，包括解释器、JIT编译器和垃圾回收器",
        interpreter: "解释器",
        interpreterDesc: "逐行解释字节码",
        jitCompiler: "JIT编译器",
        jitCompilerDesc: "热点代码优化",
        garbageCollector: "垃圾回收器",
        garbageCollectorDesc: "自动内存管理",

        // Java基础知识系列
        javaBasicsTitle: "Java基础知识系列",
        javaBasicsSubtitle: "掌握Java核心概念 · 从入门到精通",

        javaBasics: "Java基本知识",
        javaBasicsDesc: "Java语法基础、数据类型、运算符、控制流程、数组等核心概念的可视化讲解",

        oop: "面向对象编程",
        oopDesc: "类与对象、继承、多态、封装、抽象类、接口等面向对象核心概念的动态演示",

        io: "IO流操作",
        ioDesc: "文件读写、字节流、字符流、缓冲流、序列化等IO操作的可视化展示",

        network: "网络编程",
        networkDesc: "TCP/UDP通信、Socket编程、HTTP协议、WebSocket等网络编程概念的动画演示",

        explore: "探索",

        // Common
        backToHome: "返回主页",
        learnMore: "了解更多",

        // JVM Process page
        jvmProcessTitle: "JVM启动流程可视化",
        jvmProcessSubtitle: "深入理解Java虚拟机的启动过程",

        // JVM Memory page
        jvmMemoryTitle: "JVM内存结构可视化",
        jvmMemorySubtitle: "探索Java虚拟机的内存管理机制",

        // GC page
        gcTitle: "垃圾回收机制可视化",
        gcSubtitle: "理解Java的自动内存管理",

        // JIT page
        jitTitle: "JIT即时编译器可视化",
        jitSubtitle: "探索Java代码的运行时优化",

        // Concurrency page
        concurrencyTitle: "Java并发编程可视化",
        concurrencySubtitle: "理解多线程和同步机制",

        // Classloader page
        classloaderTitle: "类加载器可视化",
        classloaderSubtitle: "探索Java类的生命周期",

        // IO Stream page
        ioTitle: "Java IO流操作",
        ioSubtitle: "文件读写与数据流的可视化讲解",
        ioTypesTitle: "IO流类型概览",
        ioTypesDesc: "Java的IO流分为字节流和字符流，每种流又分为输入流和输出流。",
        byteStreamTitle: "字节流",
        byteStreamDesc: "InputStream / OutputStream<br>处理二进制数据",
        charStreamTitle: "字符流",
        charStreamDesc: "Reader / Writer<br>处理文本数据",
        bufferedStreamTitle: "缓冲流",
        bufferedStreamDesc: "BufferedInputStream / BufferedReader<br>提高IO效率",
        objectStreamTitle: "对象流",
        objectStreamDesc: "ObjectInputStream / ObjectOutputStream<br>序列化对象",
        byteStreamExampleTitle: "字节流示例",
        byteStreamExampleDesc: "使用FileInputStream和FileOutputStream读写文件。",
        sourceFile: "源文件",
        readBytes: "读取字节",
        writeBytes: "写入字节",
        targetFile: "目标文件",
        charStreamExampleTitle: "字符流示例",
        charStreamExampleDesc: "使用FileReader和FileWriter读写文本文件。",
        bufferedStreamExampleTitle: "缓冲流示例",
        bufferedStreamExampleDesc: "使用BufferedReader和BufferedWriter提高IO效率。",
        noBuffer: "无缓冲",
        readOneByte: "每次读1字节",
        slowSpeed: "慢",
        withBuffer: "有缓冲",
        readMultipleBytes: "一次读8192字节",
        fastSpeed: "快",
        serializationTitle: "对象序列化",
        serializationDesc: "将对象转换为字节流进行存储或传输。",
        javaObject: "Java对象",
        serialize: "序列化",
        byteStream: "字节流",
        deserialize: "反序列化",
        interactiveDemoTitle: "交互式演示：文件读写模拟",
        interactiveDemoDesc: "模拟文件的读取和写入操作。",
        writeFileBtn: "写入文件",
        readFileBtn: "读取文件",
        bufferedReadBtn: "缓冲读取",
        clearBtn: "清空",

        // Network page
        networkTitle: "Java网络编程",
        networkSubtitle: "Socket通信与网络协议的可视化讲解",
        protocolOverviewTitle: "网络协议概览",
        protocolOverviewDesc: "Java支持多种网络协议，用于不同场景的网络通信。",
        tcpDesc: "面向连接<br>可靠传输<br>适用于文件传输",
        udpDesc: "无连接<br>快速传输<br>适用于实时通信",
        httpDesc: "Web协议<br>请求-响应模式<br>适用于Web应用",
        websocketDesc: "全双工通信<br>持久连接<br>适用于实时应用",
        tcpVsUdpTitle: "TCP vs UDP 对比",
        featureCol: "特性",
        connectionType: "连接类型",
        connectionOriented: "面向连接",
        connectionless: "无连接",
        reliability: "可靠性",
        reliable: "可靠（保证顺序）",
        unreliable: "不可靠（可能丢包）",
        speed: "速度",
        slower: "较慢",
        faster: "较快",
        useCases: "使用场景",
        tcpUseCases: "文件传输、邮件、HTTP",
        udpUseCases: "视频流、游戏、DNS",
        tcpSocketTitle: "TCP Socket 通信",
        tcpSocketDesc: "使用ServerSocket和Socket实现客户端-服务器通信。",
        client: "客户端",
        sendData: "发送数据",
        receiveData: "接收数据",
        server: "服务器",
        serverCode: "服务器端代码",
        clientCode: "客户端代码",
        udpSocketTitle: "UDP Socket 通信",
        udpSocketDesc: "使用DatagramSocket和DatagramPacket实现无连接通信。",
        sender: "发送端",
        packet: "数据包",
        receiver: "接收端",
        httpClientTitle: "HTTP 客户端",
        httpClientDesc: "使用HttpURLConnection或HttpClient发送HTTP请求。",
        tcpSimBtn: "TCP 通信",
        udpSimBtn: "UDP 通信",
        httpSimBtn: "HTTP 请求"
    },

    // ========================================
    // 日本語 (Japanese)
    // ========================================
    ja: {
        // Index page
        indexTitle: "Java仮想マシン可視化シリーズ",
        indexSubtitle: "JVM内部メカニズムを深く理解するためのインタラクティブな可視化チュートリアル",

        jvmProcess: "JVM起動フロー",
        jvmProcessDesc: "Java仮想マシンの起動から実行までの完全なプロセスを可視化",

        jvmMemory: "JVMメモリ構造",
        jvmMemoryDesc: "Javaメモリモデルと各メモリ領域の役割を深く理解",

        gc: "ガベージコレクション機構",
        gcDesc: "異なるガベージコレクションアルゴリズムの動作原理を動的に実演",

        jit: "JIT即時コンパイル",
        jitDesc: "Javaコードがネイティブマシンコードに最適化される過程を理解",

        concurrency: "並行プログラミング",
        concurrencyDesc: "Javaマルチスレッドと並行制御メカニズムを可視化",

        classloader: "クラスローダー",
        classloaderDesc: "Javaクラスのロード、リンク、初期化プロセスを探索",

        // 実行エンジン
        executionEngine: "実行エンジン",
        executionEngineDesc: "JVMのコア実行コンポーネント、インタプリタ、JITコンパイラ、ガベージコレクタを含む",
        interpreter: "インタプリタ",
        interpreterDesc: "バイトコードを逐行解釈",
        jitCompiler: "JITコンパイラ",
        jitCompilerDesc: "ホットスポット最適化",
        garbageCollector: "ガベージコレクタ",
        garbageCollectorDesc: "自動メモリ管理",

        // Java基礎知識シリーズ
        javaBasicsTitle: "Java基礎知識シリーズ",
        javaBasicsSubtitle: "Javaコア概念をマスター · 入門から上級まで",

        javaBasics: "Java基本知識",
        javaBasicsDesc: "Java構文基礎、データ型、演算子、制御フロー、配列などのコア概念を可視化解説",

        oop: "オブジェクト指向プログラミング",
        oopDesc: "クラスとオブジェクト、継承、ポリモーフィズム、カプセル化、抽象クラス、インターフェースなどのOOPコア概念を動的に実演",

        io: "IOストリーム操作",
        ioDesc: "ファイル読み書き、バイトストリーム、文字ストリーム、バッファリングストリーム、シリアライゼーションなどのIO操作を可視化",

        network: "ネットワークプログラミング",
        networkDesc: "TCP/UDP通信、Socket程、HTTPプロトコル、WebSocketなどのネットワークプログラミング概念をアニメーション実演",

        explore: "探索する",

        // Common
        backToHome: "ホームに戻る",
        learnMore: "詳しく見る",

        // JVM Process page
        jvmProcessTitle: "JVM起動フロー可視化",
        jvmProcessSubtitle: "Java仮想マシンの起動プロセスを深く理解",

        // JVM Memory page
        jvmMemoryTitle: "JVMメモリ構造可視化",
        jvmMemorySubtitle: "Java仮想マシンのメモリ管理メカニズムを探索",

        // GC page
        gcTitle: "ガベージコレクション機構可視化",
        gcSubtitle: "Javaの自動メモリ管理を理解",

        // JIT page
        jitTitle: "JIT即時コンパイラ可視化",
        jitSubtitle: "Javaコードのランタイム最適化を探索",

        // Concurrency page
        concurrencyTitle: "Java並行プログラミング可視化",
        concurrencySubtitle: "マルチスレッドと同期メカニズムを理解",

        // Classloader page
        classloaderTitle: "クラスローダー可視化",
        classloaderSubtitle: "Javaクラスのライフサイクルを探索",

        // IO Stream page
        ioTitle: "Java IOストリーム操作",
        ioSubtitle: "ファイル読み書きとデータストリームの可視化解説",
        ioTypesTitle: "IOストリーム型概要",
        ioTypesDesc: "JavaのIOストリームはバイトストリームと文字ストリームに分かれ、それぞれ入力ストリームと出力ストリームがあります。",
        byteStreamTitle: "バイトストリーム",
        byteStreamDesc: "InputStream / OutputStream<br>バイナリデータを処理",
        charStreamTitle: "文字ストリーム",
        charStreamDesc: "Reader / Writer<br>テキストデータを処理",
        bufferedStreamTitle: "バッファストリーム",
        bufferedStreamDesc: "BufferedInputStream / BufferedReader<br>IO効率を向上",
        objectStreamTitle: "オブジェクトストリーム",
        objectStreamDesc: "ObjectInputStream / ObjectOutputStream<br>オブジェクトをシリアライズ",
        byteStreamExampleTitle: "バイトストリームの例",
        byteStreamExampleDesc: "FileInputStreamとFileOutputStreamでファイルを読み書きします。",
        sourceFile: "ソースファイル",
        readBytes: "バイト読み込み",
        writeBytes: "バイト書き込み",
        targetFile: "ターゲットファイル",
        charStreamExampleTitle: "文字ストリームの例",
        charStreamExampleDesc: "FileReaderとFileWriterでテキストファイルを読み書きします。",
        bufferedStreamExampleTitle: "バッファストリームの例",
        bufferedStreamExampleDesc: "BufferedReaderとBufferedWriterでIO効率を向上させます。",
        noBuffer: "バッファなし",
        readOneByte: "1バイトずつ読み込み",
        slowSpeed: "遅い",
        withBuffer: "バッファあり",
        readMultipleBytes: "8192バイト一度に読み込み",
        fastSpeed: "速い",
        serializationTitle: "オブジェクトシリアライゼーション",
        serializationDesc: "オブジェクトをバイトストリームに変換して保存または転送します。",
        javaObject: "Javaオブジェクト",
        serialize: "シリアライズ",
        byteStream: "バイトストリーム",
        deserialize: "デシリアライズ",
        interactiveDemoTitle: "インタラクティブデモ：ファイル読み書きシミュレーション",
        interactiveDemoDesc: "ファイルの読み取りと書き込み操作をシミュレートします。",
        writeFileBtn: "ファイル書き込み",
        readFileBtn: "ファイル読み込み",
        bufferedReadBtn: "バッファ読み込み",
        clearBtn: "クリア",

        // Network page
        networkTitle: "Javaネットワークプログラミング",
        networkSubtitle: "Socket通信とネットワークプロトコルの可視化解説",
        protocolOverviewTitle: "ネットワークプロトコル概要",
        protocolOverviewDesc: "Javaは様々なネットワークプロトコルをサポートし、異なるシナリオのネットワーク通信に対応します。",
        tcpDesc: "コネクション型<br>信頼性のある転送<br>ファイル転送に適用",
        udpDesc: "コネクションレス<br>高速転送<br>リアルタイム通信に適用",
        httpDesc: "Webプロトコル<br>リクエスト-レスポンスモデル<br>Webアプリに適用",
        websocketDesc: "全二重通信<br>永続的接続<br>リアルタイムアプリに適用",
        tcpVsUdpTitle: "TCP vs UDP 比較",
        featureCol: "特性",
        connectionType: "接続タイプ",
        connectionOriented: "コネクション型",
        connectionless: "コネクションレス",
        reliability: "信頼性",
        reliable: "信頼性あり（順序保証）",
        unreliable: "信頼性なし（パケット損失あり）",
        speed: "速度",
        slower: "やや遅い",
        faster: "速い",
        useCases: "使用シーン",
        tcpUseCases: "ファイル転送、メール、HTTP",
        udpUseCases: "動画配信、ゲーム、DNS",
        tcpSocketTitle: "TCP Socket 通信",
        tcpSocketDesc: "ServerSocketとSocketでクライアント-サーバー通信を実装します。",
        client: "クライアント",
        sendData: "データ送信",
        receiveData: "データ受信",
        server: "サーバー",
        serverCode: "サーバー側コード",
        clientCode: "クライアント側コード",
        udpSocketTitle: "UDP Socket 通信",
        udpSocketDesc: "DatagramSocketとDatagramPacketでコネクションレス通信を実装します。",
        sender: "送信側",
        packet: "パケット",
        receiver: "受信側",
        httpClientTitle: "HTTP クライアント",
        httpClientDesc: "HttpURLConnectionまたはHttpClientでHTTPリクエストを送信します。",
        tcpSimBtn: "TCP 通信",
        udpSimBtn: "UDP 通信",
        httpSimBtn: "HTTP リクエスト"
    },

    // ========================================
    // English
    // ========================================
    en: {
        // Index page
        indexTitle: "JVM Visualization Series",
        indexSubtitle: "Interactive Visual Tutorials for Deep Understanding of JVM Internal Mechanisms",

        jvmProcess: "JVM Startup Process",
        jvmProcessDesc: "Visualize the complete process from JVM startup to execution",

        jvmMemory: "JVM Memory Structure",
        jvmMemoryDesc: "Deep dive into Java Memory Model and memory regions",

        gc: "Garbage Collection",
        gcDesc: "Dynamic demonstration of different garbage collection algorithms",

        jit: "JIT Compilation",
        jitDesc: "Understand how Java code is optimized into native machine code",

        concurrency: "Concurrency",
        concurrencyDesc: "Visualize Java multithreading and concurrency control mechanisms",

        classloader: "Class Loader",
        classloaderDesc: "Explore Java class loading, linking, and initialization process",

        // Execution Engine
        executionEngine: "Execution Engine",
        executionEngineDesc: "Core execution components of JVM, including interpreter, JIT compiler, and garbage collector",
        interpreter: "Interpreter",
        interpreterDesc: "Line-by-line bytecode interpretation",
        jitCompiler: "JIT Compiler",
        jitCompilerDesc: "Hot spot optimization",
        garbageCollector: "Garbage Collector",
        garbageCollectorDesc: "Automatic memory management",

        // Java Basics Series
        javaBasicsTitle: "Java Basics Series",
        javaBasicsSubtitle: "Master Java Core Concepts · From Beginner to Advanced",

        javaBasics: "Java Fundamentals",
        javaBasicsDesc: "Visual explanation of Java syntax basics, data types, operators, control flow, arrays and other core concepts",

        oop: "Object-Oriented Programming",
        oopDesc: "Dynamic demonstration of OOP core concepts including classes, objects, inheritance, polymorphism, encapsulation, abstract classes, and interfaces",

        io: "IO Stream Operations",
        ioDesc: "Visualization of file I/O, byte streams, character streams, buffered streams, serialization and other IO operations",

        network: "Network Programming",
        networkDesc: "Animation demonstration of TCP/UDP communication, Socket programming, HTTP protocol, WebSocket and other network programming concepts",

        explore: "Explore",

        // Common
        backToHome: "Back to Home",
        learnMore: "Learn More",

        // JVM Process page
        jvmProcessTitle: "JVM Startup Process Visualization",
        jvmProcessSubtitle: "Deep Understanding of Java Virtual Machine Startup",

        // JVM Memory page
        jvmMemoryTitle: "JVM Memory Structure Visualization",
        jvmMemorySubtitle: "Explore Java Virtual Machine Memory Management",

        // GC page
        gcTitle: "Garbage Collection Visualization",
        gcSubtitle: "Understanding Java's Automatic Memory Management",

        // JIT page
        jitTitle: "JIT Compiler Visualization",
        jitSubtitle: "Explore Runtime Optimization of Java Code",

        // Concurrency page
        concurrencyTitle: "Java Concurrency Visualization",
        concurrencySubtitle: "Understanding Multithreading and Synchronization",

        // Classloader page
        classloaderTitle: "Class Loader Visualization",
        classloaderSubtitle: "Explore Java Class Lifecycle",

        // IO Stream page
        ioTitle: "Java IO Stream Operations",
        ioSubtitle: "Visual Explanation of File I/O and Data Streams",
        ioTypesTitle: "IO Stream Types Overview",
        ioTypesDesc: "Java IO streams are divided into byte streams and character streams, each with input and output variants.",
        byteStreamTitle: "Byte Streams",
        byteStreamDesc: "InputStream / OutputStream<br>Handle binary data",
        charStreamTitle: "Character Streams",
        charStreamDesc: "Reader / Writer<br>Handle text data",
        bufferedStreamTitle: "Buffered Streams",
        bufferedStreamDesc: "BufferedInputStream / BufferedReader<br>Improve IO efficiency",
        objectStreamTitle: "Object Streams",
        objectStreamDesc: "ObjectInputStream / ObjectOutputStream<br>Serialize objects",
        byteStreamExampleTitle: "Byte Stream Example",
        byteStreamExampleDesc: "Read and write files using FileInputStream and FileOutputStream.",
        sourceFile: "Source File",
        readBytes: "Read Bytes",
        writeBytes: "Write Bytes",
        targetFile: "Target File",
        charStreamExampleTitle: "Character Stream Example",
        charStreamExampleDesc: "Read and write text files using FileReader and FileWriter.",
        bufferedStreamExampleTitle: "Buffered Stream Example",
        bufferedStreamExampleDesc: "Improve IO efficiency using BufferedReader and BufferedWriter.",
        noBuffer: "No Buffer",
        readOneByte: "Read 1 byte at a time",
        slowSpeed: "Slow",
        withBuffer: "With Buffer",
        readMultipleBytes: "Read 8192 bytes at once",
        fastSpeed: "Fast",
        serializationTitle: "Object Serialization",
        serializationDesc: "Convert objects to byte streams for storage or transmission.",
        javaObject: "Java Object",
        serialize: "Serialize",
        byteStream: "Byte Stream",
        deserialize: "Deserialize",
        interactiveDemoTitle: "Interactive Demo: File I/O Simulation",
        interactiveDemoDesc: "Simulate file read and write operations.",
        writeFileBtn: "Write File",
        readFileBtn: "Read File",
        bufferedReadBtn: "Buffered Read",
        clearBtn: "Clear",

        // Network page
        networkTitle: "Java Network Programming",
        networkSubtitle: "Visual Explanation of Socket Communication and Network Protocols",
        protocolOverviewTitle: "Network Protocol Overview",
        protocolOverviewDesc: "Java supports multiple network protocols for different communication scenarios.",
        tcpDesc: "Connection-oriented<br>Reliable transmission<br>For file transfers",
        udpDesc: "Connectionless<br>Fast transmission<br>For real-time communication",
        httpDesc: "Web protocol<br>Request-response model<br>For web applications",
        websocketDesc: "Full-duplex communication<br>Persistent connection<br>For real-time apps",
        tcpVsUdpTitle: "TCP vs UDP Comparison",
        featureCol: "Feature",
        connectionType: "Connection Type",
        connectionOriented: "Connection-oriented",
        connectionless: "Connectionless",
        reliability: "Reliability",
        reliable: "Reliable (ordered)",
        unreliable: "Unreliable (may lose packets)",
        speed: "Speed",
        slower: "Slower",
        faster: "Faster",
        useCases: "Use Cases",
        tcpUseCases: "File transfer, Email, HTTP",
        udpUseCases: "Video streaming, Gaming, DNS",
        tcpSocketTitle: "TCP Socket Communication",
        tcpSocketDesc: "Implement client-server communication using ServerSocket and Socket.",
        client: "Client",
        sendData: "Send Data",
        receiveData: "Receive Data",
        server: "Server",
        serverCode: "Server Code",
        clientCode: "Client Code",
        udpSocketTitle: "UDP Socket Communication",
        udpSocketDesc: "Implement connectionless communication using DatagramSocket and DatagramPacket.",
        sender: "Sender",
        packet: "Packet",
        receiver: "Receiver",
        httpClientTitle: "HTTP Client",
        httpClientDesc: "Send HTTP requests using HttpURLConnection or HttpClient.",
        tcpSimBtn: "TCP Communication",
        udpSimBtn: "UDP Communication",
        httpSimBtn: "HTTP Request"
    }
};

// ========================================
// Language Switcher Class
// 言語切り替えクラス
// ========================================

/**
 * LanguageSwitcher - Handles multi-language switching functionality
 *
 * Features:
 * - Automatic language detection based on browser settings
 * - Persistent language preference using localStorage
 * - Dynamic content translation using data-i18n attributes
 */
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectLanguage();
        this.init();
    }

    /**
     * Get stored language preference from localStorage
     * @returns {string|null} Stored language code or null
     */
    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    /**
     * Detect browser language and map to supported language
     * @returns {string} Language code (zh, ja, or en)
     */
    detectLanguage() {
        const browserLang = navigator.language.toLowerCase();

        if (browserLang.startsWith('zh')) return 'zh';
        if (browserLang.startsWith('ja')) return 'ja';

        return 'en'; // Default to English
    }

    /**
     * Initialize language switcher
     */
    init() {
        this.applyTranslations();
        this.updateLanguageSelector();
    }

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    applyTranslations() {
        const trans = translations[this.currentLang];

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');

            if (trans[key]) {
                element.textContent = trans[key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : this.currentLang;
    }

    /**
     * Update language selector UI to reflect current language
     */
    updateLanguageSelector() {
        const selector = document.getElementById('language-selector');

        if (selector) {
            selector.value = this.currentLang;
        }
    }

    /**
     * Change current language and persist preference
     * @param {string} lang - Language code (zh, ja, or en)
     */
    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        this.applyTranslations();
    }
}

// ========================================
// Initialize on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    window.langSwitcher = new LanguageSwitcher();
});
