/**
 * Format Code Blocks in All HTML Files
 * 全HTMLファイルのコードブロックを整形
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

/**
 * Add proper indentation to code inside code blocks
 */
function formatCodeBlock(content) {
    const lines = [];
    let inCodeBlock = false;
    let codeBlockContent = [];
    let codeBlockIndent = '';
    let codeBlockOpenTag = '';

    const contentLines = content.split('\n');

    for (let i = 0; i < contentLines.length; i++) {
        const line = contentLines[i];

        // Check if entering a code block
        if (line.includes('<div class="code-block"') || line.includes('<div class="code-example"')) {
            inCodeBlock = true;
            codeBlockContent = [];
            // Get the indentation of the opening tag
            codeBlockIndent = line.match(/^(\s*)/)[1];
            codeBlockOpenTag = line;
            lines.push(line);
            continue;
        }

        // Check if exiting a code block
        if (inCodeBlock && line.trim() === '</div>' && codeBlockContent.length > 0) {
            // Process and add formatted code
            const formattedCode = formatCodeLines(codeBlockContent, codeBlockIndent);
            lines.push(...formattedCode);
            lines.push(line);
            inCodeBlock = false;
            codeBlockContent = [];
            continue;
        }

        // Collect code block content
        if (inCodeBlock) {
            codeBlockContent.push(line);
        } else {
            lines.push(line);
        }
    }

    return lines.join('\n');
}

/**
 * Format individual code lines with proper indentation
 */
function formatCodeLines(lines, baseIndent) {
    const formatted = [];
    const codeIndent = baseIndent + '    '; // Add 4 spaces for code content

    for (const line of lines) {
        const trimmedLine = line.trim();

        // Skip empty lines at the beginning and end
        if (!trimmedLine && formatted.length === 0) continue;

        // If line is empty, keep it but don't add extra indentation
        if (!trimmedLine) {
            formatted.push('');
            continue;
        }

        // Add proper indentation to code lines
        formatted.push(codeIndent + trimmedLine);
    }

    // Remove trailing empty lines
    while (formatted.length > 0 && !formatted[formatted.length - 1].trim()) {
        formatted.pop();
    }

    return formatted;
}

// Process each HTML file
htmlFiles.forEach(filename => {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} not found`);
        return;
    }

    console.log(`📝 Processing ${filename}...`);

    let content = fs.readFileSync(filePath, 'utf8');
    const formatted = formatCodeBlock(content);

    if (formatted !== content) {
        fs.writeFileSync(filePath, formatted, 'utf8');
        console.log(`✅ Formatted ${filename}`);
    } else {
        console.log(`⚪ No changes needed for ${filename}`);
    }
});

console.log('\n🎉 Code block formatting complete!');
