// HTML要素を取得
const text = document.getElementById('text');
const button = document.getElementById('btn');

// ボタンがクリックされたら実行される処理
button.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});