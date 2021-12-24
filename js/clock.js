const clock = document.querySelector("#clock");
const clock2 = document.querySelector("#clock2");
const greeting3 = document.querySelector("#greeting2");
const happy = [
  "오늘도 수고했어!",
  "뭐하면서 쉴꺼야~?",
  "오늘도 고생했어~",
  "맛있는거 먹자!",
];
const happy2 = [
  "좋은 아침이야~",
  "오늘은 뭘 해볼까?",
  "늘 새로운 하루야",
  "잠은 잘잤어?",
];
const date = new Date();
const days = date.getDate();
const hours = date.getHours();
function getClock() {
  const date = new Date();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const mili = String(parseInt(date.getMilliseconds() / 100)).padEnd(1, "0");

  clock.innerText = `${hours} : ${minutes} : ${second}`;
  clock2.innerText = `How fast the world is -> ${mili}`;
}

getClock();
setInterval(getClock, 100);

if (hours >= 20) {
  greeting3.innerText = happy[Math.floor(Math.random() * happy.length)];
} else {
  greeting3.innerText = happy2[Math.floor(Math.random() * happy2.length)];
}
