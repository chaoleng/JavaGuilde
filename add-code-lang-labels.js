/**
 * Add Language Labels to Code Blocks in All HTML Files
 * 全HTMLファイルのコードブロックに言語ラベルを追加
 */

const fs = require('fs');
const path = require('path');

// HTML files to update
const htmlFiles = [
    'classloader.html',
    'concurrency.html',
    'garbage-collection.html',
    'jit-compiler.html',
    'jvm-memory.html',
    'jvm-process.html'
];

// Add CSS for code-block language label
const codeBlockLabelCSS = `        .code-block {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            font-size: 0.95em;
            line-height: 1.4;
            white-space: pre;
            overflow-x: auto;
            tab-size: 4;
            position: relative;
        }
        .code-block::before {
            content: attr(data-lang);
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 0.75em;
            color: #6272a4;
            font-weight: bold;
            text-transform: uppercase;
        }`;

const oldCodeBlockCSS = /\.code-block\s*\{[^}]*background:[^}]*\}/;

// Process each HTML file
htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Update CSS if needed
    const cssMatch = content.match(oldCodeBlockCSS);
    if (cssMatch && !content.includes('code-block::before')) {
        content = content.replace(oldCodeBlockCSS, codeBlockLabelCSS);
        updated = true;
        console.log(`✅ Updated CSS in ${filename}`);
    }

    // Add data-lang="java" to code blocks that don't have it
    const codeBlockPattern = /<div class="code-block"(?! data-lang)/g;
    const matches = content.match(codeBlockPattern);

    if (matches) {
        content = content.replace(codeBlockPattern, '<div class="code-block" data-lang="java"');
        updated = true;
        console.log(`✅ Added data-lang to ${matches.length} code blocks in ${filename}`);
    }

    // Write back if updated
    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`💾 Saved ${filename}`);
    } else {
        console.log(`⚪ No changes needed for ${filename}`);
    }
});

console.log('\n🎉 Code block language labels added!');
