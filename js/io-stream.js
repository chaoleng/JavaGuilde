// 初始化语言切换器
const languageSwitcher = new LanguageSwitcher();

let fileContent = "";

function simulateWrite() {
    const output = document.getElementById('output');
    const translations = {
        'zh': '正在写入文件...\n文件内容:\n"Hello, Java IO!\nThis is a test file.\n学习Java IO流操作。"\n\n✅ 写入成功！文件大小: 67 字节',
        'ja': 'ファイルを書き込み中...\nファイル内容:\n"Hello, Java IO!\nThis is a test file.\nJava IOストリーム操作を学習。"\n\n✅ 書き込み成功！ファイルサイズ: 67 バイト',
        'en': 'Writing to file...\nFile content:\n"Hello, Java IO!\nThis is a test file.\nLearning Java IO stream operations."\n\n✅ Write successful! File size: 67 bytes'
    };

    fileContent = "Hello, Java IO!\nThis is a test file.\n";

    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    output.textContent = translations[currentLang];
    output.className = 'demo-output animate__animated animate__fadeIn';
}

function simulateRead() {
    const output = document.getElementById('output');

    if (!fileContent) {
        const translations = {
            'zh': '❌ 错误：文件不存在！\n请先写入文件。',
            'ja': '❌ エラー：ファイルが存在しません！\n先にファイルを書き込んでください。',
            'en': '❌ Error: File does not exist!\nPlease write to file first.'
        };
        const currentLang = localStorage.getItem('preferred-language') || 'zh';
        output.textContent = translations[currentLang];
        return;
    }

    const translations = {
        'zh': '正在读取文件...\n\n读取方式: FileInputStream\n缓冲区大小: 1024 字节\n\n读取内容:\n',
        'ja': 'ファイルを読み込み中...\n\n読み込み方式: FileInputStream\nバッファサイズ: 1024 バイト\n\n読み込み内容:\n',
        'en': 'Reading file...\n\nRead method: FileInputStream\nBuffer size: 1024 bytes\n\nContent read:\n'
    };

    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    let result = translations[currentLang];

    for (let i = 0; i < fileContent.length; i++) {
        setTimeout(() => {
            result += fileContent[i];
            output.textContent = result;
        }, i * 50);
    }

    setTimeout(() => {
        const successMsg = {
            'zh': '\n\n✅ 读取完成！',
            'ja': '\n\n✅ 読み込み完了！',
            'en': '\n\n✅ Read complete!'
        };
        output.textContent = result + successMsg[currentLang];
    }, fileContent.length * 50);
}

function simulateBuffered() {
    const output = document.getElementById('output');

    if (!fileContent) {
        const translations = {
            'zh': '❌ 错误：文件不存在！\n请先写入文件。',
            'ja': '❌ エラー：ファイルが存在しません！\n先にファイルを書き込んでください。',
            'en': '❌ Error: File does not exist!\nPlease write to file first.'
        };
        const currentLang = localStorage.getItem('preferred-language') || 'zh';
        output.textContent = translations[currentLang];
        return;
    }

    const translations = {
        'zh': '正在使用缓冲流读取...\n\n读取方式: BufferedReader\n缓冲区大小: 8192 字节\n读取速度: 🚀 快速！\n\n内容:\n',
        'ja': 'バッファストリームで読み込み中...\n\n読み込み方式: BufferedReader\nバッファサイズ: 8192 バイト\n読み込み速度: 🚀 高速！\n\n内容:\n',
        'en': 'Reading with buffered stream...\n\nRead method: BufferedReader\nBuffer size: 8192 bytes\nRead speed: 🚀 Fast!\n\nContent:\n'
    };

    const currentLang = localStorage.getItem('preferred-language') || 'zh';

    setTimeout(() => {
        const successMsg = {
            'zh': '\n\n✅ 缓冲读取完成！\n性能提升: 10-50倍',
            'ja': '\n\n✅ バッファ読み込み完了！\nパフォーマンス向上: 10-50倍',
            'en': '\n\n✅ Buffered read complete!\nPerformance boost: 10-50x'
        };
        output.textContent = translations[currentLang] + fileContent + successMsg[currentLang];
        output.className = 'demo-output animate__animated animate__fadeIn';
    }, 100);
}

function clearDemo() {
    const output = document.getElementById('output');
    fileContent = "";
    output.textContent = "";
}
