// 형식: #id func
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) { // event가 범용으로 쓰이는 argument 이름
    event.preventDefault(); // 기본동작(여기선 새로고침) 방지 함수
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);