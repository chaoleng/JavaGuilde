/**
 * このスクリプトは全HTMLファイルに多言語対応を追加します
 * Node.jsで実行: node add-i18n-to-pages.js
 */

const fs = require('fs');
const path = require('path');

// 対象のHTMLファイル
const htmlFiles = [
    'jvm-process.html',
    'jvm-memory.html',
    'garbage-collection.html',
    'jit-compiler.html',
    'concurrency.html',
    'classloader.html'
];

// 言語切り替えUIのHTML
const languageSwitcherHTML = `    <!-- 言語切り替え -->
    <div class="language-switcher">
        <select id="language-selector" onchange="window.langSwitcher.changeLanguage(this.value)">
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="en">English</option>
        </select>
    </div>

`;

// 言語切り替えスタイル
const languageSwitcherCSS = `
        /* 言語切り替えボタンのスタイル */
        .language-switcher {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        #language-selector {
            padding: 10px 15px;
            border-radius: 25px;
            border: 2px solid white;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 1em;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.3s;
            font-weight: bold;
        }

        #language-selector:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.05);
        }

        #language-selector option {
            background: #764ba2;
            color: white;
        }
`;

// 各HTMLファイルを処理
htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} が見つかりません`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. i18n.jsスクリプトを追加
    if (!content.includes('i18n.js')) {
        content = content.replace(
            /<link rel="stylesheet"[^>]*>/,
            match => match + '\n    <script src="i18n.js"></script>'
        );
    }

    // 2. CSSに言語切り替えスタイルを追加
    if (!content.includes('language-switcher')) {
        content = content.replace(
            '</style>',
            languageSwitcherCSS + '    </style>'
        );
    }

    // 3. body開始直後に言語切り替えUIを追加
    if (!content.includes('id="language-selector"')) {
        content = content.replace(
            '<body>',
            '<body>\n' + languageSwitcherHTML
        );
    }

    // ファイルに書き戻す
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filename} を更新しました`);
});

console.log('\n🎉 全てのファイルの更新が完了しました！');
