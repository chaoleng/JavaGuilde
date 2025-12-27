# ☕ JVM Visualization Series

**[中文](README.md) | [日本語](README.ja.md) | [English](README.en.md)**

> Deep understanding of JVM internal mechanisms through interactive animations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen)](https://chaoleng.github.io/JavaGuilde/)

## 📖 Project Overview

This is a Java Virtual Machine (JVM) visualization tutorial series built with **Animate.css** and native JavaScript. Through beautiful animations and interactive demonstrations, it helps developers gain a deep understanding of JVM core concepts and operational mechanisms.

## ✨ Features

- 🎨 **Beautiful Animations** - Smooth animation effects with Animate.css
- 🎯 **Interactive Demos** - Click buttons to view dynamic demonstrations of different processes
- 📱 **Responsive Design** - Perfect support for both PC and mobile devices
- 🎓 **Progressive Learning** - Systematic JVM learning from basics to advanced
- 💡 **Practical Examples** - Java code samples with syntax highlighting
- 🚀 **Zero Dependencies** - Pure static pages, deployable directly to GitHub Pages
- 🌐 **Multi-language Support** - Available in Chinese, Japanese, and English

## 📚 Table of Contents

### 1. [JVM Startup Process](jvm-process.html) ⭐⭐
Complete flow from source code to program execution
- Compilation process
- Class loading subsystem
- Runtime data areas
- Execution engine
- Bytecode execution
- Garbage collection

### 2. [JVM Memory Structure](jvm-memory.html) ⭐⭐⭐
Deep dive into JVM memory architecture
- Heap Memory
- VM Stack
- Method Area
- PC Register
- Native Method Stack

### 3. [Class Loading Mechanism](classloader.html) ⭐⭐⭐
Understanding the complete class loading process
- Parent delegation model
- Class loader hierarchy
- Loading, Verification, Preparation, Resolution, Initialization
- Custom class loaders

### 4. [Garbage Collection Algorithms](garbage-collection.html) ⭐⭐⭐⭐
Visualizing GC algorithm principles
- Mark-Sweep algorithm
- Copying algorithm
- Mark-Compact algorithm
- Generational collection algorithm
- Major garbage collectors (Serial, Parallel, CMS, G1, ZGC)

### 5. [JIT Compilation Optimization](jit-compiler.html) ⭐⭐⭐⭐
Exploring JIT compiler optimization techniques
- Hot spot code detection
- Method inlining
- Escape analysis
- Loop optimization
- C1/C2 compilers

### 6. [Multithreading and Concurrency](concurrency.html) ⭐⭐⭐⭐⭐
Deep understanding of Java concurrent programming
- Thread lifecycle and state transitions
- Java Memory Model (JMM)
- synchronized and volatile
- Lock optimization
- Concurrent utility classes
- happens-before principle

## 🚀 Quick Start

### Online Access

Visit the demo site: [https://chaoleng.github.io/JavaGuilde/](https://chaoleng.github.io/JavaGuilde/)

### Local Setup

1. **Clone the project**
```bash
git clone https://github.com/chaoleng/JavaGuilde.git
cd JavaGuilde
```

2. **Direct open**
```bash
# Open index.html in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (requires http-server to be installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser

## 📦 Project Structure

```
jvm-visualization-series/
├── index.html                  # Homepage
├── jvm-process.html           # JVM Startup Process
├── jvm-memory.html            # JVM Memory Structure
├── classloader.html           # Class Loading Mechanism
├── garbage-collection.html    # Garbage Collection Algorithms
├── jit-compiler.html          # JIT Compilation Optimization
├── concurrency.html           # Multithreading and Concurrency
├── i18n.js                    # Multi-language support
├── README.md                  # Project documentation (Chinese)
├── README.ja.md               # Project documentation (Japanese)
├── README.en.md               # Project documentation (English)
└── LICENSE                    # Open source license
```

## 🛠️ Tech Stack

- **HTML5** - Page structure
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Interaction logic
- **[Animate.css](https://animate.style/)** - Animation effects library

## 🌐 Multi-language Support

This project supports the following languages:
- 🇨🇳 Chinese (Simplified)
- 🇯🇵 Japanese
- 🇬🇧 English

You can switch languages using the language selector button in the top-right corner of each page. On your first visit, the appropriate language will be automatically selected based on your browser's language settings.

## 🤝 Contributing

Contributions are welcome! If you have any improvement suggestions or find bugs:

1. Fork this project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Animate.css](https://animate.style/) - Excellent CSS animation library
- All developers who have contributed to JVM technology

## 📮 Contact

If you have any questions or suggestions, feel free to contact us:

- Submit an [Issue](https://github.com/chaoleng/JavaGuilde/issues)

## ⭐ Star History

If this project helps you, please give it a Star ⭐️

---

Made with ❤️ by JVM Enthusiasts
