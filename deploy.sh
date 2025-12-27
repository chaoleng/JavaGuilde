#!/bin/bash

# JVM Visualization Series - 快速部署脚本
# 使用方法: bash deploy.sh

set -e

echo "🚀 JVM Visualization Series - GitHub Pages 部署脚本"
echo "=================================================="
echo ""

# 检查是否已初始化 Git
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    echo "✅ Git 仓库初始化完成"
else
    echo "✅ Git 仓库已存在"
fi

# 检查是否有远程仓库
if ! git remote | grep -q "origin"; then
    echo ""
    echo "❓ 请输入你的 GitHub 用户名:"
    read username
    echo ""
    echo "📝 添加远程仓库: https://github.com/$username/jvm-visualization-series.git"
    git remote add origin "https://github.com/$username/jvm-visualization-series.git"
    echo "✅ 远程仓库添加成功"
else
    echo "✅ 远程仓库已配置"
fi

echo ""
echo "📝 准备提交文件..."

# 添加所有文件
git add .

# 检查是否有改动
if git diff --cached --quiet; then
    echo "⚠️  没有需要提交的改动"
else
    echo "💬 请输入提交信息 (直接回车使用默认信息):"
    read commit_msg

    if [ -z "$commit_msg" ]; then
        commit_msg="Update JVM Visualization Series - $(date '+%Y-%m-%d %H:%M:%S')"
    fi

    git commit -m "$commit_msg"
    echo "✅ 提交完成: $commit_msg"
fi

echo ""
echo "🔄 推送到 GitHub..."

# 检查是否有 main 分支
if ! git rev-parse --verify main >/dev/null 2>&1; then
    git branch -M main
fi

# 推送
if git push -u origin main; then
    echo "✅ 推送成功!"
else
    echo "⚠️  推送失败，可能需要先在 GitHub 创建仓库"
    echo ""
    echo "📋 请按以下步骤操作："
    echo "   1. 访问 https://github.com/new"
    echo "   2. 仓库名称: jvm-visualization-series"
    echo "   3. 选择 Public"
    echo "   4. 不要勾选 'Initialize this repository with a README'"
    echo "   5. 创建后重新运行此脚本"
    exit 1
fi

echo ""
echo "🎉 部署完成!"
echo ""
echo "📌 下一步操作："
echo "   1. 访问你的仓库: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')"
echo "   2. 进入 Settings > Pages"
echo "   3. Source 选择: Branch: main, Folder: / (root)"
echo "   4. 点击 Save"
echo "   5. 等待 1-2 分钟后访问你的网站"
echo ""
echo "🌐 你的网站将发布在:"
username=$(git remote get-url origin | sed 's/.*github.com[:/]\([^/]*\)\/.*/\1/')
echo "   https://$username.github.io/jvm-visualization-series/"
echo ""
echo "=================================================="
