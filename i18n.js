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
        classloaderSubtitle: "探索Java类的生命周期"
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
        classloaderSubtitle: "Javaクラスのライフサイクルを探索"
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
        classloaderSubtitle: "Explore Java Class Lifecycle"
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
