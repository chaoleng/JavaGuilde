# 📁 项目结构说明

```
jvm-visualization-series/
│
├── 📄 index.html                    # 主页 - 系列入口
│   └── 6个主题模块的导航卡片
│
├── 📄 jvm-process.html              # JVM运行过程（⭐⭐）
│   ├── 源代码编写
│   ├── javac编译
│   ├── 类加载子系统
│   ├── 运行时数据区
│   ├── 执行引擎
│   ├── 字节码执行
│   ├── 程序输出
│   └── GC垃圾回收
│
├── 📄 jvm-memory.html               # JVM内存模型（⭐⭐⭐）
│   ├── 堆内存 (Heap)
│   ├── 虚拟机栈 (VM Stack)
│   ├── 方法区 (Method Area)
│   ├── 程序计数器 (PC Register)
│   └── 本地方法栈 (Native Stack)
│
├── 📄 classloader.html              # 类加载机制（⭐⭐⭐）
│   ├── 双亲委派模型
│   ├── 类加载器层次
│   ├── 加载过程（5个阶段）
│   └── 自定义类加载器
│
├── 📄 garbage-collection.html       # 垃圾回收算法（⭐⭐⭐⭐）
│   ├── 标记-清除算法
│   ├── 复制算法
│   ├── 标记-整理算法
│   ├── 分代收集算法
│   └── 垃圾收集器对比
│
├── 📄 jit-compiler.html             # JIT编译优化（⭐⭐⭐⭐）
│   ├── JIT编译流程
│   ├── 热点代码检测
│   ├── 方法内联
│   ├── 逃逸分析
│   ├── 循环优化
│   └── C1/C2编译器
│
├── 📄 concurrency.html              # 多线程与并发（⭐⭐⭐⭐⭐）
│   ├── 线程生命周期
│   ├── 线程状态转换
│   ├── Java内存模型(JMM)
│   ├── synchronized/volatile
│   ├── 锁优化
│   └── 并发工具类
│
├── 📝 README.md                     # 项目主文档
│   ├── 项目简介
│   ├── 功能特性
│   ├── 内容目录
│   ├── 快速开始
│   └── 贡献指南
│
├── 📝 DEPLOY.md                     # 详细部署指南
│   ├── GitHub Pages 部署步骤
│   ├── 自定义域名配置
│   ├── 常见问题解答
│   └── 优化建议
│
├── 📝 快速开始.txt                  # 快速上手指南（中文）
│   ├── 本地预览方法
│   ├── 部署到GitHub
│   └── 常见问题
│
├── 🚀 deploy.sh                     # Linux/Mac 部署脚本
│   └── 一键部署到 GitHub Pages
│
├── 🚀 deploy.bat                    # Windows 部署脚本
│   └── 一键部署到 GitHub Pages
│
├── 📋 LICENSE                       # MIT 开源协议
│
└── 🚫 .gitignore                    # Git 忽略文件配置
    ├── 操作系统文件
    ├── IDE 配置
    └── 临时文件

```

## 📊 文件统计

| 类型 | 数量 | 说明 |
|------|------|------|
| HTML页面 | 7个 | 1个主页 + 6个主题页 |
| 文档 | 4个 | README + DEPLOY + 快速开始 + 结构说明 |
| 脚本 | 2个 | Windows批处理 + Bash脚本 |
| 配置 | 2个 | LICENSE + .gitignore |
| **总计** | **15个** | 完整的项目文件 |

## 🎯 核心技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式与动画
- **JavaScript (ES6+)** - 交互逻辑
- **Animate.css** - 动画效果库（CDN）

## 💾 项目大小

- 总大小: ~200 KB
- HTML文件: ~180 KB
- 文档: ~20 KB
- 配置: <1 KB

## 🌐 部署方式

1. **GitHub Pages** (推荐)
   - 免费托管
   - 自动HTTPS
   - 全球CDN加速

2. **本地浏览**
   - 直接打开 index.html
   - 无需服务器

3. **其他静态托管**
   - Netlify
   - Vercel
   - Cloudflare Pages

## 🔗 页面导航关系

```
index.html (主页)
    ↓
    ├─→ jvm-process.html
    ├─→ jvm-memory.html
    ├─→ classloader.html
    ├─→ garbage-collection.html
    ├─→ jit-compiler.html
    └─→ concurrency.html
         ↑
         └─ 每个页面都有"返回主页"按钮
```

## 📦 依赖关系

- **外部依赖**: Animate.css (CDN)
- **内部依赖**: 无
- **运行环境**: 任何现代浏览器

## 🎨 主题配色

| 页面 | 主色调 | 渐变 |
|------|--------|------|
| index | 紫色 | #667eea → #764ba2 |
| jvm-process | 紫色 | #667eea → #764ba2 |
| jvm-memory | 蓝色 | #1e3c72 → #2a5298 |
| classloader | 绿色 | #134e5e → #71b280 |
| garbage-collection | 粉红 | #d53369 → #daae51 |
| jit-compiler | 玫红 | #f093fb → #f5576c |
| concurrency | 紫色 | #667eea → #764ba2 |

## 🚀 性能优化

- ✅ 纯静态文件，加载快速
- ✅ CDN加载Animate.css
- ✅ 最小化外部依赖
- ✅ 响应式设计，移动端友好
- ✅ 懒加载动画效果

---

**维护者**: 项目创建于 2025年
**协议**: MIT License
