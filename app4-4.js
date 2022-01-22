const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) { // event가 범용으로 쓰이는 argument 이름
    event.preventDefault(); // 기본동작(여기선 새로고침) 방지 함수
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
}

loginForm.addEventListener("submit",onLoginSubmit);