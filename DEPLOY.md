# 🚀 GitHub Pages 部署指南

## 快速部署步骤

### 1️⃣ 初始化 Git 仓库

在项目目录下执行：

```bash
cd jvm-visualization-series
git init
git add .
git commit -m "Initial commit: JVM Visualization Series"
```

### 2️⃣ 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `jvm-visualization-series`
   - **Description**: `通过交互式动画深入理解JVM运行机制`
   - **Public** (公开仓库才能使用免费的 GitHub Pages)
   - 不要勾选 "Initialize this repository with a README"

4. 点击 `Create repository`

### 3️⃣ 推送到 GitHub

```bash
# 添加远程仓库（替换 yourusername 为你的 GitHub 用户名）
git remote add origin https://github.com/yourusername/jvm-visualization-series.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 4️⃣ 启用 GitHub Pages

1. 进入你的仓库页面
2. 点击 `Settings` (设置)
3. 在左侧菜单找到 `Pages`
4. 在 **Source** 部分：
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/ (root)`
5. 点击 `Save`

### 5️⃣ 访问你的网站

等待 1-2 分钟后，GitHub Pages 会自动构建并部署你的网站。

访问地址：`https://yourusername.github.io/jvm-visualization-series/`

## 📝 更新内容

当你修改了内容后，使用以下命令更新：

```bash
# 添加更改
git add .

# 提交更改
git commit -m "更新说明"

# 推送到 GitHub
git push
```

GitHub Pages 会自动重新部署（通常需要 1-2 分钟）。

## 🎨 自定义域名（可选）

如果你有自己的域名：

1. 在项目根目录创建 `CNAME` 文件：
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. 在你的域名提供商处添加 DNS 记录：
   - 类型: `CNAME`
   - 名称: `www` 或 `@`
   - 值: `yourusername.github.io`

3. 在 GitHub Pages 设置中填写自定义域名

## ⚡ 常见问题

### Q: 页面显示 404？
**A**: 确保：
- GitHub Pages 已启用
- 选择了正确的分支和目录
- 等待 1-2 分钟让部署完成
- 文件名为 `index.html`（小写）

### Q: 样式或动画不显示？
**A**: 检查：
- Animate.css CDN 链接是否正确
- 浏览器控制台是否有错误
- 网络连接是否正常

### Q: 如何查看部署状态？
**A**:
- 进入仓库的 `Actions` 标签
- 查看 `pages-build-deployment` 工作流状态

### Q: 可以使用自己的 CSS 文件吗？
**A**: 可以！创建 `styles/` 目录并引入本地 CSS 文件，这样可以离线使用。

## 📊 添加访问统计（可选）

使用 Google Analytics 或 百度统计：

在每个 HTML 文件的 `</head>` 前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 优化建议

1. **压缩代码**: 使用工具压缩 HTML/CSS/JS
2. **添加 favicon**: 创建 `favicon.ico` 文件
3. **SEO优化**: 添加 meta 标签
4. **PWA支持**: 添加 `manifest.json` 和 Service Worker

## 📱 社交分享优化

在 `<head>` 中添加 Open Graph 标签：

```html
<meta property="og:title" content="Java虚拟机可视化系列">
<meta property="og:description" content="通过交互式动画深入理解JVM运行机制">
<meta property="og:image" content="https://yourusername.github.io/jvm-visualization-series/preview.png">
<meta property="og:url" content="https://yourusername.github.io/jvm-visualization-series/">
```

## 🎯 下一步

- ✅ 部署成功后，在 README.md 中更新实际的在线地址
- ✅ 添加项目预览图
- ✅ 分享到社交媒体
- ✅ 收集反馈并持续改进

---

祝你部署顺利！🎉
