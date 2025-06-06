
# 📚 プロセスログ｜ゲーミフィケーション版 ログインフォーム

---

## 📑 目次

- [プロセス④｜ゲーミフィケーション版リファイン](#プロセス④ゲーミフィケーション版リファイン)
- [プロセス③｜スマホ対応・ネオン調整](#プロセス③スマホ対応ネオン調整)
- [プロセス②｜レイアウト・ボックス統一](#プロセス②レイアウトボックス統一)
- [プロセス①｜ベース版 開発スタート](#プロセス①ベース版-開発スタート)
https://sqlixss.vercel.app/

---
## プロセス⑤｜RSS対応
**🗓️ 日付：2024/06/03**

### 🛠️ 実装概要
- `.box` クラスでボワボワ共通スタイル作成
- カラーパレットをチューニングして目に優しい色へ
- スマホ用のネオン感をさらに落ち着かせた
- ネオンボーダーの色味を柔らかく調整（5FD9A0 → 90E0C0 系）
- モバイル時のボックスシャドウも減らしてチカチカ防止

### ⚠️ エラーと対策
- **問題**：スマホでネオンが強すぎて目が疲れる
- **対策**：カラーパレット調整＋スマホ用にボックスシャドウ弱めに変更

### 📚 学んだこと
- 色が強すぎるとUXが悪化するので、ゲーム感と視認性のバランスが大事
- ルート変数（CSSカスタムプロパティ）で一括コントロールすると微調整しやすい

---
## プロセス④｜最終調整、リファクタリング
**🗓️ 日付：2024/06/03**

### 🛠️ 実装概要
- `.box` クラスでボワボワ共通スタイル作成
- カラーパレットをチューニングして目に優しい色へ
- スマホ用のネオン感をさらに落ち着かせた
- ネオンボーダーの色味を柔らかく調整（5FD9A0 → 90E0C0 系）
- モバイル時のボックスシャドウも減らしてチカチカ防止

### ⚠️ エラーと対策
- **問題**：スマホでネオンが強すぎて目が疲れる
- **対策**：カラーパレット調整＋スマホ用にボックスシャドウ弱めに変更

### 📚 学んだこと
- 色が強すぎるとUXが悪化するので、ゲーム感と視認性のバランスが大事
- ルート変数（CSSカスタムプロパティ）で一括コントロールすると微調整しやすい

---

## プロセス③｜スマホ対応・ネオン調整
**🗓️ 日付：2024/06/02**

### 🛠️ 実装概要
- フォームの `position: sticky` を解除してスクロール問題を解消
- スマホ版のボワボワネオンを控えめに（box-shadowの強度調整）
- テキストやボタンのサイズをスマホサイズにフィットさせた
- スクロール開始位置を上にずらして、フォームとコンテンツの間隔を最適化

### ⚠️ エラーと対策
- **問題**：スマホでスクロール時にフォーム下に空白ができる
- **対策**：フォームの固定を解除＋スクロールエリアの設定を調整

### 📚 学んだこと
- PCとスマホではレイアウト挙動が異なるので、モバイルファーストの意識が必要
- ネオンデザインはデバイスによって見え方が違うので微調整が必要

---

## プロセス②｜レイアウト・ボックス統一
**🗓️ 日付：2024/05/31〜2024/06/01**

### 🛠️ 実装概要
- `.box` クラスでボワボワ共通スタイル作成
- `.instructions` と `.card` を `.box` ベースでスタイル統一
- スマホ版ではネオンの強さを落とし、マージン・パディングも調整
- 幅を `max-width` で固定し、中央寄せのレイアウトに

### ⚠️ エラーと対策
- **問題**：スマホで中央にカードが寄らない
- **対策**：`margin-left: auto; margin-right: auto;` を追加して中央寄せ
### ⚠️ エラーと対策
- **問題**：`button`に `type="submit"` がついていてスタイルがうまくいかない
- **対策**：`-webkit-appearance: none; appearance: none;` でリセット＋CSS上書き


### 📚 学んだこと
- クラスを分けつつ、共通するスタイルは親クラスで管理するとCSSがシンプルに
- メディアクエリでデバイスごとのスタイル差分を吸収するのがコツ
- `type="submit"` はフォームにお手紙を送る役割をする
---

## プロセス①｜入力フォームの実装、攻撃体験用のJavaScript実装
**🗓️ 日付：2024/05/31**

### 🛠️ 実装概要
- SQLインジェクションとXSS攻撃体験用のログインフォーム作成
- 簡単な入力検証をJavaScriptで実装
- フォームにリセット・ログインボタンを設置

### ⚠️ エラーと対策
- **問題**：`button`に `type="submit"` がついていてスタイルがうまくいかない
- **対策**：`-webkit-appearance: none; appearance: none;` でリセット＋CSS上書き

### 📚 学んだこと
- `table`, `th`, `td`などの基本HTMLタグは、情報の整理・表示に強力
