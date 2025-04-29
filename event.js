// HTML要素を取得
const text = document.getElementById('text');
const button = document.getElementById('btn');

// ボタンがクリックされたら実行される処理
button.addEventListener('click', () => {
  // 最初にクリック直後のテキスト変更
  text.textContent = 'ボタンをクリックしました';

  // 2秒後にテキストを変更
  setTimeout(() => {
    text.textContent = '2秒後に文章が変更されました！';
  }, 2000);
});