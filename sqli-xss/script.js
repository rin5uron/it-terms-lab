// ページ読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
  
  // ID・パスワードコピー用（codeタグ全体）
  document.querySelectorAll('code').forEach(codeTag => {
    codeTag.addEventListener('click', () => {
      const text = codeTag.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        alert(`「${text}」をコピーしました！`);
      }).catch(err => {
        console.error('コピーに失敗しました:', err);
        // フォールバック: テキストを選択状態にする
        const range = document.createRange();
        range.selectNodeContents(codeTag);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        alert("手動でCtrl+C（Mac: Cmd+C）でコピーしてください");
      });
    });
  });

  // リセットボタン取得
  const resetButton = document.getElementById('resetBtn');

  resetButton.addEventListener('click', function() {
    // フォームリセット
    document.getElementById('loginForm').reset();
    // メッセージクリア
    document.getElementById('message').textContent = '';
  });

  // ログインフォーム設定
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // フォームの送信を止める

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 入力確認（開発用）
    console.log('ユーザー名:', username);
    console.log('パスワード:', password);


    // XSS検出
    const inputText = username.toLowerCase() + password.toLowerCase(); // 小文字に変換
    const dangerousXSS = ["<", ">", "script", "onload", "onerror"];

    for (let tag of dangerousXSS) {
    if (inputText.includes(tag)) {
    message.textContent = "⚠️ クロスサイトスクリプティングが検出されました（XSS攻撃の可能性）";
    message.style.color = "#FF4444"; 
      return;
      }
    }    
    // SQLインジェクション対策
    const dangerousChars = ["'", '"', ";", "--", "=", " OR "];
    let isSQLAttack = false;
    
    for (let char of dangerousChars) {
      if (username.includes(char) || password.includes(char)) {
        isSQLAttack = true;
        if (username.includes("' OR '1'='1") || password.includes("' OR '1'='1")) {
          message.innerHTML = `
            ⚠️ 『' OR '1'='1』は攻撃コードです！<br>
            安全な入力をお願いします。`;
        } else {
          message.innerHTML = `
            🚫 このサイトをハッキングしようとしましたか？<br>
            セキュリティは甘くないですよ…👀`;
        }
        message.style.color = "#FF4444"; 
        return;
      }
    }

    


    // ログイン判定
    if (username === 'hack_me' && password === 'loginok') {
      message.textContent = 'ログイン成功♡';
      message.style.color = '#00ff99';
    } else {
      message.textContent = 'IDまたはパスワードが違います';
      message.style.color = "#FF4444"; 
    }
  });

}); 
// DOMContentLoaded終了