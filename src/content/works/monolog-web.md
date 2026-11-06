---
title: "Monolog 公式サイト"
description: "アプリ Monolog の紹介サイトと、スマホと同じ記録を扱える Web 版アプリ"
eyecatch: "/images/monolog-web/eyecatch.png"
type: "web"
category: "Web開発"
year: 2026
soft: ["React", "TypeScript", "Vite", "Panda CSS", "GSAP", "Supabase", "Vercel"]
---

## 概要

アプリ「[Monolog](/works/monolog)」の[公式サイト](https://www.monolog.life/)。アプリの紹介ページと、ブラウザから記録できる Web 版アプリ（`/app`）を 1 つの React アプリにまとめている。

Web 版はアプリと同じアカウント・同じデータを使う。スマホで記録した内容をブラウザで見たり、ブラウザで計測した記録をアプリに反映させたりできる。

## ページ構成

- **トップ** — スクロールに合わせてアプリの画面が動く紹介ページ
- **機能紹介**（`/features`）— 機能ごとに画面と操作を紹介
- **ダウンロード**（`/download`）— TestFlight の QR コードと導入手順
- **Web 版アプリ**（`/app`）— 計測・記録一覧・レポート・ステッカー
- **参加ページ**（`/join/:code`）— アプリで共有したタグの招待リンクの受け口

## 紹介ページ

![トップページの計測の紹介](/images/monolog-web/lp-timer.png)

ページ内のスマホ画面は画像ではなく、HTML / CSS で組んだアプリの画面。スクロールに合わせて下部の小さなタイマーが全画面に広がるなど、アプリの操作を GSAP の ScrollTrigger で再現している。

![トップページの AI レポートの紹介](/images/monolog-web/lp-report.png)

## Web 版アプリ

- スマホと同じ Supabase のテーブルを読み書きし、Google ログインで同じ記録を扱う
- 計測中の状態を Supabase Realtime で同期し、スマホで始めた計測をブラウザで止めて保存することもできる。止めた計測が別の端末から復活しないよう、更新時刻と停止の記録で競合を解決している
- 計測中にもらえるステッカーを、スマホと同じ乱数から同じ順番で出す。Dart の `Random` を BigInt で TypeScript に移植し、ユーザーごとの salt と合わせてアプリと結果を一致させた
- AI レポートの生成はアプリ（端末内）で行い、Web では生成済みのレポートを閲覧する

## ダウンロードと参加リンク

![ダウンロードページ](/images/monolog-web/download.png)

ダウンロードページでは、TestFlight の QR コードと 3 ステップの導入手順を案内する。

共有タグの参加リンク（`/join/<コード>`）は、ログインしていなくてもタグ名と参加方法を表示する。`apple-app-site-association` を配信し、iPhone ではリンクからアプリが直接開くようにした。

## 技術スタック

- **React / TypeScript / Vite** — 紹介ページと Web 版アプリ
- **react-router** — ページと Web 版アプリのルーティング
- **Panda CSS / Ark UI** — スタイルと UI 部品
- **GSAP / Lottie** — スクロールの演出と起動アニメーション
- **Supabase** — Google ログイン、アプリと共有のデータ、Realtime による計測の同期
- **Vercel** — ホスティング
