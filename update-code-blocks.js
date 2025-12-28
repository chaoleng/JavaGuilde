/**
 * Update Code Block Styles in All HTML Files
 * コードブロックのスタイルを全HTMLファイルで更新
 */

const fs = require('fs');
const path = require('path');

// HTML files with code blocks
const htmlFiles = [
    'classloader.html',
    'concurrency.html',
    'garbage-collection.html',
    'jit-compiler.html',
    'jvm-memory.html'
];

// Old code block style pattern
const oldStyle = /\.code-block\s*\{[^}]+\}/;

// New improved code block style
const newStyle = `.code-block {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            font-size: 0.95em;
            line-height: 1.8;
            white-space: pre;
            overflow-x: auto;
            tab-size: 4;
        }`;

// Process each HTML file
htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Replace old code block style with new one
    const match = content.match(oldStyle);
    if (match) {
        content = content.replace(oldStyle, newStyle);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${filename}`);
    } else {
        console.log(`⚠️  Code block style not found in ${filename}`);
    }
});

console.log('\n🎉 Code block styles updated!');
