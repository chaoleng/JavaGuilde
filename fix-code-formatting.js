/**
 * Fix Code Block Formatting - Remove Extra Indentation
 * コードブロックの余分なインデントを削除
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

function fixCodeBlocks(content) {
    // Pattern to match code blocks with extra indentation
    const codeBlockPattern = /<div class="code-block"[^>]*>\n\s+(<span|[^<])/g;
    const codeExamplePattern = /<div class="code-example"[^>]*>\n\s+(<span|[^<])/g;

    // Remove leading whitespace after opening div tag
    content = content.replace(codeBlockPattern, (match) => {
        return match.replace(/>\n\s+/, '>');
    });

    content = content.replace(codeExamplePattern, (match) => {
        return match.replace(/>\n\s+/, '>');
    });

    // Remove trailing whitespace before closing div tag
    const closingPattern = /\n\s+<\/div>(?=\s*\n\s*<\/div>|\s*\n\s*<div|\s*\n\s*<h)/g;
    content = content.replace(closingPattern, '</div>');

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

    content = fixCodeBlocks(content);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed formatting in ${filename}`);
    } else {
        console.log(`⚪ No changes needed for ${filename}`);
    }
});

console.log('\n🎉 Code block formatting complete!');
