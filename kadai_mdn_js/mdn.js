const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月を1増やす
const day = today.getDate();

const formattedDate = `${year}年${month}月${day}日`; // バッククオートを使用する

console.log(formattedDate);
