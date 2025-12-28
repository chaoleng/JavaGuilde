/**
 * Align Code Block Content to Right
 * コードブロックの内容を右寄せに変更
 */

const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'classloader.html',
    'concurrency.html',
    'garbage-collection.html',
    'jit-compiler.html',
    'jvm-memory.html',
    'jvm-process.html'
];

function addRightAlign(content) {
    // Add text-align: right to .code-block
    content = content.replace(
        /(\.code-block\s*\{[^}]*)(white-space:\s*pre;)/g,
        '$1$2\n            text-align: right;'
    );

    // Add text-align: right to .code-example
    content = content.replace(
        /(\.code-example\s*\{[^}]*)(white-space:\s*pre;)/g,
        '$1$2\n            text-align: right;'
    );

    return content;
}

htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} not found`);
        return;
    }

    console.log(`📝 Processing ${filename}...`);

    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    content = addRightAlign(content);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Added right alignment to ${filename}`);
    } else {
        console.log(`⚪ No changes needed for ${filename}`);
    }
});

console.log('\n🎉 Code block alignment updated to right!');
