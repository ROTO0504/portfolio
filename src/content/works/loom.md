---
title: "Loom"
description: "Claude Code のセッションをノードグラフで可視化するデスクトップアプリ"
eyecatch: "/images/loom/graph-horizontal.png"
type: "web"
category: "個人開発"
year: 2026
soft: ["Flutter", "Dart", "Riverpod", "MCP", "macOS", "Windows"]
---

## 概要

Claude Code のセッションを**ノードグラフ**で可視化する macOS / Windows 向けデスクトップアプリ。
メインセッション → サブエージェント → ツール / MCP 呼び出しの流れを、実行中はリアルタイムに、
終了後は過去ログのリプレイとして表示する。

「エージェントが今なにをしているのか」「どのサブエージェントがどれだけコストを使ったのか」が
ログを追わずに一目で分かることを目指した個人開発プロジェクト。

![ノードグラフ（横レイアウト）](/images/loom/graph-horizontal.png)

## 主な機能

### ライブ + 履歴

`~/.claude/projects` 配下の jsonl を tail し、実行中のセッションをそのまま画面に流す。
過去のセッションはタイムライン上でリプレイ再生できる。

![ライブ表示](/images/loom/live.png)

### 親子が確定的に繋がるグラフ

サブエージェントはメタ情報の `toolUseId` で親ノードと確定的に接続し、
ツール呼び出しは `tool_use ↔ tool_result` の対応から実行中 / 完了 / エラーを解決している。
推測に頼らないので、並列に走ったエージェントでも取り違えが起きない。

### 縦 / 横の 2 レイアウト

縦はインデント型のアウトライン表示で、長い逐次ツール列を追うのに向く。
横は左 → 右のツリーで、サブエージェントのファンアウトを俯瞰しやすい。

![ノードグラフ（縦レイアウト）](/images/loom/graph-vertical.png)

### ノードインスペクタ

ノードを選ぶと内訳を表示。連続したツール呼び出しは自動でグループ化され、
必要なときだけ個別に展開できる。

![インスペクタ](/images/loom/inspector.png)

### MCP / モデル別カラー

Claude はオレンジ、Codex（MCP）は青、その他の MCP はティールで色分け。
`mcp__<server>__<tool>` 形式のツール名からサーバーを判別している。

![MCP 呼び出しの色分け](/images/loom/mcp-codex.png)

### コスト表示

`message.usage` のトークン数と料金表からセッション単位のコストを算出。
料金が未登録のモデルは黙って 0 円にせず「料金未設定」として明示する。

## 技術スタック

- **Flutter / Dart** — macOS・Windows 向けデスクトップアプリ
- **Riverpod** — 状態管理
- **CustomPainter** — ノードグラフの描画とレイアウト計算を自前実装
- **MCP サーバー** — Claude Code から Loom のグラフを参照できる同梱サーバー
- **ヘッドレス検証ツール** — 実データでのグラフ構築とライブ tail を CLI で検証

## 開発で取り組んだこと

- jsonl の追記を監視して差分だけを取り込む ingest 層と、グラフ構築（join / fold）を分離
- Windows での描画不具合を切り分け、原因が DWM の Multi-Plane Overlay 合成にあることを特定。
  GPU / ソフトウェアラスタライザを切り替えられる仕組みを診断用に用意した
- 配布物を 1 ファイルに保ったまま、安定パスの dispatcher と versioned runtime を分ける
  Windows 配布構成を設計
