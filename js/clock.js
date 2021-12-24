const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${days}d ${hours}h ${minutes}m ${second}s`;
}

getClock();
setInterval(getClock, 1000);
