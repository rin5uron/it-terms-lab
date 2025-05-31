# フォーム固定＋スクロールの基本セット【完全解説】

---

## 🎯 目的
- フォーム（ログイン・検索など）は常に画面上部に固定
- フォームの下にコンテンツがスクロールできるようにする
- フォームとコンテンツが重ならない
- スマホ対応（レスポンシブ）

---

## 🛠️ HTML構成
```html
<body>
  <!-- フォーム：固定したい部分 -->
  <form id="loginForm">
    <!-- 入力欄・ボタン -->
  </form>

  <!-- スクロールできるエリア -->
  <div class="page-wrapper">
    <section>
      <!-- 長いコンテンツ -->
    </section>
  </div>
</body>
```

---

## 🎨 CSSスタイル

### 1. ページ全体の設定
```css
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* body自体はスクロールさせない */
}
```
→ **ポイント**
- `body` ではなく、`.page-wrapper` だけをスクロールさせる！

---

### 2. 固定フォームの設定
```css
form {
  position: fixed; /* 固定する */
  top: 20px; /* 上から20px */
  left: 50%; /* 中央寄せ */
  transform: translateX(-50%); /* 正確に中央に合わせる */
  background-color: #FFF9F2; /* 背景色 */
  padding: 2em;
  border-radius: 15px; /* 角丸 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 影 */
  max-width: 400px;
  width: 90%;
  z-index: 1000; /* コンテンツより前面に */
}
```
→ **ポイント**
- `position: fixed` で常に画面上部
- `transform: translateX(-50%)` で**中央寄せ**
- `z-index`を大きくして**コンテンツの上に表示**

---

### 3. スクロールエリアの設定
```css
.page-wrapper {
  position: absolute; /* 全画面に広げる */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto; /* 縦スクロール */
  padding-top: 250px; /* フォームの高さ分だけ上にスペース確保 */
  background-color: #FFF9F2; /* 背景色を揃える */
}
```
→ **ポイント**
- `overflow-y: auto` で縦スクロール可能に
- `padding-top: 250px` は、固定されたフォームと被らないように上に余白をつける

---

## ✅ これでできること
- フォームは常に画面の上部に固定
- フォームの下のコンテンツだけがスクロールできる
- モバイル端末でもきれいに動く
- フォームとスクロールするエリアがかぶらない

---

## 📦 コード全体イメージ
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>固定フォーム＋スクロール</title>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    form {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #FFF9F2;
      padding: 2em;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 90%;
      z-index: 1000;
    }
    .page-wrapper {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      overflow-y: auto;
      padding-top: 250px;
      background-color: #FFF9F2;
    }
  </style>
</head>
<body>
  <form id="loginForm">
    <label for="username">ユーザー名：</label>
    <input type="text" id="username" name="username" required>
    <label for="password">パスワード：</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">ログイン</button>
  </form>

  <div class="page-wrapper">
    <section>
      <h2>スクロールコンテンツ</h2>
      <p>ここにたくさんのコンテンツが入る</p>
      <p>もっともっとスクロールできるよ！</p>
    </section>
  </div>
</body>
</html>
```

---

これで **フォーム固定＋下スクロール** 完璧！！🎯✨


<br>
<br>

# よくあるエラー集（フォーム固定＋スクロール編）

## 1. フォームがスクロールに吸い込まれてしまう

**原因**  
- `form` に `position: fixed` を使っている  
- `body` に `overflow: hidden` だけでは解決できない  
- スクロール対象と固定対象が分離できていない  

**解決方法**
```css
form {
  position: sticky;
  top: 20px;
}

.page-wrapper {
  overflow-y: auto;
  height: 100vh;
}

body {
  overflow: hidden;
}
```

---

## 2. 背景がスクロールしない／全体が動かない

**原因**  
- `html` や `body` に `height: 100%` がない  
- `overflow: hidden` が適切に設定されていない  

**解決方法**
```css
html, body {
  height: 100%;
  overflow: hidden;
}

.page-wrapper {
  height: 100%;
  overflow-y: auto;
}
```

---

## 3. ボタンのホバーが効かない

**原因**  
- `!important` の付け忘れ
- セレクタのミス（`button` にしか指定してないなど）
- 優先順位で負けている  

**解決方法**
```css
button:hover {
  background-color: #C8E6CA !important;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15) !important;
  color: #fff !important;
}
```

---

## 4. 初期画面でフォームが真ん中に来ない

**原因**  
- `margin: auto` がない
- 横中央寄せの設定不足  

**解決方法**
```css
form {
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
}
```

---

## 5. スクロールしてもフォームが動かない（固定されない）

**原因**  
- `sticky` が適用されていない
- `sticky` は親要素に `overflow: hidden` があると無効になる  

**解決方法**
```css
form {
  position: sticky;
  top: 20px;
}

.page-wrapper {
  overflow-y: auto;
}
```

---

## 6. フォームが後ろに吸い込まれる

**原因**  
- `z-index` の設定が低い
- スクロールコンテンツとフォームの順番が良くない

**解決方法**
```css
form {
  position: fixed;
  z-index: 1000; /* 高めに設定 */
}

.wrapper {
  z-index: 1; /* 背景は低め */
}
```

---

# まとめ表

| エラー内容                     | 原因                   | 解決策                          |
|:--------------------------------|:------------------------|:---------------------------------|
| フォームが吸い込まれる          | `fixed`使用              | `sticky`にする                   |
| 背景スクロールできない          | bodyに`overflow`なし       | `body`に`hidden`、`wrapper`に`auto` |
| ボタンホバー効かない            | 優先順位問題              | `!important`を`hover`に付ける     |
| フォーム中央寄らない            | `transform`不足            | `left: 50%`＋`translateX`         |
| スクロールしてもフォーム動かない | `sticky`＋`overflow`問題    | `wrapper`に`overflow-y: auto`     |
| フォームが後ろに吸い込まれる    | `z-index`不足              | `form`の`z-index: 1000`にする     |

---

# 保存版：フォーム固定＋スクロールの基本セット

```html
<body>
  <form id="loginForm"> ... </form>

  <div class="page-wrapper">
    <section> ... </section>
  </div>
</body>
```

```css
html, body {
  height: 100%;
  overflow: hidden;
}

form {
  position: sticky;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.page-wrapper {
  height: 100%;
  overflow-y: auto;
}
```

✅ フォームはスクロールに固定  
✅ コンテンツはスクロールできる  
✅ ボタンのホバーもOK  
✅ モバイルも崩れない！

---
