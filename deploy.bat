@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo 🚀 JVM Visualization Series - GitHub Pages 部署脚本
echo ==================================================
echo.

REM 检查是否已初始化 Git
if not exist ".git" (
    echo 📦 初始化 Git 仓库...
    git init
    echo ✅ Git 仓库初始化完成
) else (
    echo ✅ Git 仓库已存在
)

REM 检查是否有远程仓库
git remote | findstr "origin" >nul
if errorlevel 1 (
    echo.
    set /p username="❓ 请输入你的 GitHub 用户名: "
    echo.
    echo 📝 添加远程仓库: https://github.com/!username!/jvm-visualization-series.git
    git remote add origin "https://github.com/!username!/jvm-visualization-series.git"
    echo ✅ 远程仓库添加成功
) else (
    echo ✅ 远程仓库已配置
)

echo.
echo 📝 准备提交文件...

REM 添加所有文件
git add .

REM 提交
echo 💬 请输入提交信息 (直接回车使用默认信息):
set /p commit_msg=""

if "!commit_msg!"=="" (
    for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set mydate=%%a-%%b-%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set mytime=%%a:%%b
    set commit_msg=Update JVM Visualization Series - !mydate! !mytime!
)

git commit -m "!commit_msg!"
if errorlevel 1 (
    echo ⚠️  没有需要提交的改动
) else (
    echo ✅ 提交完成: !commit_msg!
)

echo.
echo 🔄 推送到 GitHub...

REM 确保在 main 分支
git branch -M main

REM 推送
git push -u origin main
if errorlevel 1 (
    echo.
    echo ⚠️  推送失败，可能需要先在 GitHub 创建仓库
    echo.
    echo 📋 请按以下步骤操作：
    echo    1. 访问 https://github.com/new
    echo    2. 仓库名称: jvm-visualization-series
    echo    3. 选择 Public
    echo    4. 不要勾选 'Initialize this repository with a README'
    echo    5. 创建后重新运行此脚本
    pause
    exit /b 1
)

echo.
echo 🎉 部署完成!
echo.
echo 📌 下一步操作：
echo    1. 访问你的 GitHub 仓库
echo    2. 进入 Settings ^> Pages
echo    3. Source 选择: Branch: main, Folder: / (root)
echo    4. 点击 Save
echo    5. 等待 1-2 分钟后访问你的网站
echo.
echo 🌐 你的网站将发布在:
for /f "tokens=2 delims=/" %%a in ('git remote get-url origin') do (
    for /f "tokens=1 delims=/" %%b in ("%%a") do (
        echo    https://%%b.github.io/jvm-visualization-series/
    )
)
echo.
echo ==================================================
echo.
pause
