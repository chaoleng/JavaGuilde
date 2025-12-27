# ☕ Java仮想マシン可視化シリーズ

**[中文](README.md) | [日本語](README.ja.md) | [English](README.en.md)**

> インタラクティブなアニメーションでJVMの動作メカニズムを深く理解する

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen)](https://chaoleng.github.io/JavaGuilde/)

## 📖 プロジェクト概要

**Animate.css**とネイティブJavaScriptで構築されたJava仮想マシン（JVM）可視化チュートリアルシリーズです。美しいアニメーションとインタラクティブなデモンストレーションを通じて、開発者がJVMのコアコンセプトと動作メカニズムを深く理解できるようサポートします。

## ✨ 特徴

- 🎨 **美しいアニメーション** - Animate.cssで滑らかなアニメーション効果を実現
- 🎯 **インタラクティブデモ** - ボタンをクリックして様々なプロセスの動的デモを表示
- 📱 **レスポンシブデザイン** - PCとモバイル端末の両方に完全対応
- 🎓 **段階的学習** - 基礎から高度な内容まで、JVMを体系的に学習
- 💡 **実用的な例** - シンタックスハイライト付きのJavaコードサンプル
- 🚀 **依存関係ゼロ** - 純粋な静的ページ、GitHub Pagesに直接デプロイ可能
- 🌐 **多言語対応** - 中国語、日本語、英語に対応

## 📚 コンテンツ目次

### 1. [JVM起動プロセス](jvm-process.html) ⭐⭐
ソースコードからプログラム実行までの完全なフロー
- コンパイルプロセス
- クラスローディングサブシステム
- ランタイムデータ領域
- 実行エンジン
- バイトコード実行
- ガベージコレクション

### 2. [JVMメモリモデル詳解](jvm-memory.html) ⭐⭐⭐
JVMメモリ構造を深く探る
- ヒープメモリ（Heap）
- 仮想マシンスタック（VM Stack）
- メソッド領域（Method Area）
- プログラムカウンタ（PC Register）
- ネイティブメソッドスタック（Native Stack）

### 3. [クラスローディングメカニズム](classloader.html) ⭐⭐⭐
クラスローディングの全プロセスを理解
- 親委譲モデル
- クラスローダーの階層構造
- ロード、検証、準備、解決、初期化
- カスタムクラスローダー

### 4. [ガベージコレクションアルゴリズム](garbage-collection.html) ⭐⭐⭐⭐
GCアルゴリズムの原理を可視化
- マーク-スイープアルゴリズム
- コピーアルゴリズム
- マーク-コンパクトアルゴリズム
- 世代別収集アルゴリズム
- 主要なガベージコレクター（Serial、Parallel、CMS、G1、ZGC）

### 5. [JITコンパイル最適化](jit-compiler.html) ⭐⭐⭐⭐
即時コンパイラの最適化技術を探る
- ホットスポットコード検出
- メソッドインライン化
- エスケープ解析
- ループ最適化
- C1/C2コンパイラ

### 6. [マルチスレッドと並行処理](concurrency.html) ⭐⭐⭐⭐⭐
Java並行プログラミングを深く理解
- スレッドのライフサイクルと状態遷移
- Javaメモリモデル（JMM）
- synchronizedとvolatile
- ロック最適化
- 並行ユーティリティクラス
- happens-before原則

## 🚀 クイックスタート

### オンラインアクセス

デモサイトにアクセス：[https://chaoleng.github.io/JavaGuilde/](https://chaoleng.github.io/JavaGuilde/)

### ローカル実行

1. **プロジェクトをクローン**
```bash
git clone https://github.com/chaoleng/JavaGuilde.git
cd JavaGuilde
```

2. **直接開く**
```bash
# ブラウザでindex.htmlを開く
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

またはローカルサーバーを使用：
```bash
# Python 3
python -m http.server 8000

# Node.js (http-serverを事前にインストール)
npx http-server
```

その後、ブラウザで `http://localhost:8000` にアクセス

## 📦 プロジェクト構造

```
jvm-visualization-series/
├── index.html                  # ホームページ
├── jvm-process.html           # JVM起動プロセス
├── jvm-memory.html            # JVMメモリモデル
├── classloader.html           # クラスローディングメカニズム
├── garbage-collection.html    # ガベージコレクションアルゴリズム
├── jit-compiler.html          # JITコンパイル最適化
├── concurrency.html           # マルチスレッドと並行処理
├── i18n.js                    # 多言語サポート
├── README.md                  # プロジェクトドキュメント（中国語）
├── README.ja.md               # プロジェクトドキュメント（日本語）
├── README.en.md               # プロジェクトドキュメント（英語）
└── LICENSE                    # オープンソースライセンス
```

## 🛠️ 技術スタック

- **HTML5** - ページ構造
- **CSS3** - スタイルとレイアウト
- **JavaScript (ES6+)** - インタラクションロジック
- **[Animate.css](https://animate.style/)** - アニメーション効果ライブラリ

## 🌐 多言語サポート

このプロジェクトは以下の言語に対応しています：
- 🇨🇳 中国語（簡体字）
- 🇯🇵 日本語
- 🇬🇧 英語

各ページの右上にある言語選択ボタンから言語を切り替えることができます。初回訪問時はブラウザの言語設定に基づいて自動的に適切な言語が選択されます。

## 🤝 コントリビューション

コントリビューション歓迎！改善提案やバグを見つけた場合：

1. このプロジェクトをFork
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. Pull Requestを提出

## 📄 ライセンス

このプロジェクトはMITライセンスを採用しています - 詳細は[LICENSE](LICENSE)ファイルを参照してください

## 🙏 謝辞

- [Animate.css](https://animate.style/) - 優れたCSSアニメーションライブラリ
- JVM技術に貢献するすべての開発者

## 📮 連絡先

質問や提案がある場合は、以下の方法でご連絡ください：

- [Issue](https://github.com/chaoleng/JavaGuilde/issues)を提出

## ⭐ Star History

このプロジェクトが役に立った場合は、Starをお願いします ⭐️

---

Made with ❤️ by JVM Enthusiasts
