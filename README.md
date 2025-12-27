# ☕ Java虚拟机可视化系列

**[中文](README.md) | [日本語](README.ja.md) | [English](README.en.md)**

> 通过交互式动画深入理解JVM运行机制

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen)](https://chaoleng.github.io/JavaGuilde/)

## 📖 项目简介

这是一个使用 **Animate.css** 和原生 JavaScript 构建的 Java 虚拟机（JVM）可视化教程系列。通过精美的动画和交互式演示，帮助开发者深入理解 JVM 的核心概念和运行机制。

## ✨ 特性

- 🎨 **精美动画** - 使用 Animate.css 实现流畅的动画效果
- 🎯 **交互式演示** - 可点击按钮查看不同流程的动态演示
- 📱 **响应式设计** - 完美支持 PC 和移动端浏览
- 🎓 **循序渐进** - 从基础到高级，系统学习 JVM
- 💡 **实用示例** - 配有语法高亮的 Java 代码示例
- 🚀 **零依赖部署** - 纯静态页面，可直接部署到 GitHub Pages
- 🌐 **多语言支持** - 支持中文、日语、英语三种语言

## 📚 内容目录

### 1. [JVM运行过程](jvm-process.html) ⭐⭐
从源代码到程序执行的完整流程
- 编译过程
- 类加载子系统
- 运行时数据区
- 执行引擎
- 字节码执行
- 垃圾回收

### 2. [JVM内存模型详解](jvm-memory.html) ⭐⭐⭐
深入探索 JVM 内存结构
- 堆内存（Heap）
- 虚拟机栈（VM Stack）
- 方法区（Method Area）
- 程序计数器（PC Register）
- 本地方法栈（Native Stack）

### 3. [类加载机制](classloader.html) ⭐⭐⭐
理解类加载的全过程
- 双亲委派模型
- 类加载器层次结构
- 加载、验证、准备、解析、初始化
- 自定义类加载器

### 4. [垃圾回收算法](garbage-collection.html) ⭐⭐⭐⭐
可视化展示 GC 算法原理
- 标记-清除算法
- 复制算法
- 标记-整理算法
- 分代收集算法
- 主流垃圾收集器（Serial、Parallel、CMS、G1、ZGC）

### 5. [JIT编译优化](jit-compiler.html) ⭐⭐⭐⭐
探索即时编译器的优化技术
- 热点代码检测
- 方法内联
- 逃逸分析
- 循环优化
- C1/C2 编译器

### 6. [多线程与并发](concurrency.html) ⭐⭐⭐⭐⭐
深入理解 Java 并发编程
- 线程生命周期与状态转换
- Java 内存模型（JMM）
- synchronized 与 volatile
- 锁优化
- 并发工具类
- happens-before 原则

## 🚀 快速开始

### 在线访问

访问演示地址：[https://chaoleng.github.io/JavaGuilde/](https://chaoleng.github.io/JavaGuilde/)

### 本地运行

1. **克隆项目**
```bash
git clone https://github.com/chaoleng/JavaGuilde.git
cd JavaGuilde
```

2. **直接打开**
```bash
# 使用浏览器打开 index.html
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

或者使用本地服务器：
```bash
# Python 3
python -m http.server 8000

# Node.js (需要先安装 http-server)
npx http-server
```

然后在浏览器访问 `http://localhost:8000`

## 📦 项目结构

```
jvm-visualization-series/
├── index.html                  # 主页
├── jvm-process.html           # JVM运行过程
├── jvm-memory.html            # JVM内存模型
├── classloader.html           # 类加载机制
├── garbage-collection.html    # 垃圾回收算法
├── jit-compiler.html          # JIT编译优化
├── concurrency.html           # 多线程与并发
├── i18n.js                    # 多语言支持
├── README.md                  # 项目文档（中文）
├── README.ja.md               # 项目文档（日语）
├── README.en.md               # 项目文档（英语）
└── LICENSE                    # 开源协议
```

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式与布局
- **JavaScript (ES6+)** - 交互逻辑
- **[Animate.css](https://animate.style/)** - 动画效果库

## 🌐 多语言支持

本项目支持以下语言：
- 🇨🇳 中文（简体）
- 🇯🇵 日语
- 🇬🇧 英语

可以通过每个页面右上角的语言选择按钮切换语言。首次访问时，会根据浏览器的语言设置自动选择适当的语言。

## 📸 预览截图

![主页截图](https://via.placeholder.com/800x400?text=JVM+Visualization+Series)

## 🤝 贡献指南

欢迎贡献！如果你有任何改进建议或发现了问题：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📝 待办事项

- [x] 添加多语言支持（中文、日语、英语）
- [ ] 添加更多交互式示例
- [ ] 增加字节码指令详解页面
- [ ] 添加性能调优实战案例
- [ ] 支持暗色主题切换
- [ ] 增加搜索功能

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Animate.css](https://animate.style/) - 优秀的 CSS 动画库
- [Three.js](https://threejs.org/) - 用于金龙动画的灵感来源
- 所有为 JVM 技术做出贡献的开发者

## 📮 联系方式

如果你有任何问题或建议，欢迎通过以下方式联系：

- 提交 [Issue](https://github.com/chaoleng/JavaGuilde/issues)

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐️

---

Made with ❤️ by JVM Enthusiasts
