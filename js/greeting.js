const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

function btnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
  paintGreetings(username);
}
function paintGreetings() {
  const username = localStorage.getItem("username");
  greeting.innerText = `hello, ${username}`;
  greeting.classList.remove("hidden");
  greeting2.classList.remove("hidden");
}
const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", btnClick);
} else {
  paintGreetings();
}
