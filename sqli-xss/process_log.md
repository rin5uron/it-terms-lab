# エラーの原因とその解決

## 概要
- 問題1: テーブル内のコード背景色が表示されない
- 問題2: スクロール範囲が全体になってしまう

## 問題1: テーブル内のコード背景色が表示されない

### 原因
```css
/* 問題のあったコード */
.attack-table code {
  background: transparent; /* 背景色が無効化されていた */
  padding: 0.2em 0.4em;
}
```

### 解決策
```css
/* 修正後 */
.attack-table code {
  background-color: var(--code-bg); /* 背景色を復活 */
  padding: 0.2em 0.4em;
}
```

## 問題2: スクロール範囲が全体になってしまう

### 原因
- `body`に縦スクロールが発生
- フォームの`position: sticky`が全体スクロールと競合
- スクロール範囲の制御ができていない

### 解決策

#### Before（問題あり）
```css
html, body {
  overflow-x: hidden; /* 縦スクロールも発生 */
}
form {
  position: sticky; /* 全体スクロールと競合 */
}
.wrapper {
  height: 100vh;
  overflow-y: auto;
  padding-top: 350px;
}
```

#### After（修正後）
```css
html, body {
  overflow: hidden; /* bodyのスクロールを完全無効化 */
}
form {
  position: fixed; /* 完全固定 */
}
.wrapper {
  position: fixed;
  top: 200px; /* フォーム下から開始 */
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto; /* この範囲内でのみスクロール */
  padding: 20px;
}
```

#### レスポンシブ対応
```css
@media (max-width: 600px) {
  .wrapper {
    top: 160px; /* モバイルでフォーム高さ調整 */
  }
}
```

## 学んだポイント
- `position: fixed`でレイアウトを完全制御
- スクロール範囲の明確な分離が重要
- CSS変数（`var(--code-bg)`）の上書き問題
- レスポンシブでの位置調整の必要性

## 結果
✅ テーブル内コードに背景色が適用  
✅ スクロールがフォーム下の範囲のみに限定  
✅ フォームが常に上部固定  
✅ レスポンシブ対応も完了