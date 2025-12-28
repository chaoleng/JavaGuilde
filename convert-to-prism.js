const fs = require('fs');
const path = require('path');

// List of HTML files to update
const files = [
    'jvm-process.html',
    'network.html',
    'io-stream.html',
    'oop.html',
    'java-basics.html',
    'concurrency.html',
    'garbage-collection.html',
    'jit-compiler.html',
    'jvm-memory.html',
    'classloader.html'
];

// Function to remove HTML spans and extract plain text
function extractPlainText(html) {
    // Remove all span tags but keep their content
    let text = html.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
    // Decode HTML entities
    text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return text.trim();
}

// Function to convert code blocks in a file
function convertCodeBlocks(filePath) {
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add Prism.js CDN links if not already present
    if (!content.includes('prism')) {
        const headEndIndex = content.indexOf('</head>');
        const prismLinks = `
    <!-- Prism.js for syntax highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js"></script>
`;
        content = content.slice(0, headEndIndex) + prismLinks + content.slice(headEndIndex);
    }

    // Convert code blocks
    const codeBlockRegex = /<div class="code-block"[^>]*>([\s\S]*?)<\/div>/g;
    content = content.replace(codeBlockRegex, (match, codeContent) => {
        const plainCode = extractPlainText(codeContent);
        return `<pre><code class="language-java">${plainCode}</code></pre>`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Completed ${filePath}`);
}

// Process all files
files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        convertCodeBlocks(filePath);
    } else {
        console.log(`! File not found: ${filePath}`);
    }
});

console.log('\n✓ All files processed successfully!');
