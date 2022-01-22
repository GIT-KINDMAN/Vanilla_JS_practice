// 유저에게 인사하기: form non hidden -> hidden 후 h1 hidden -> non hidden으로 인사 노출
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden" // 왜 대문자? -> 관습. String만 담은 const를 선언할 때는 대문자로 쓴다고 한다. 그리고 별로 중요한 값을 담은 변수가 아니라서라고도 하는듯? 자바랑은 좀 의미가 다른 것 같다.

function onLoginSubmit(event) { // event가 범용으로 쓰이는 argument 이름
    event.preventDefault(); // 기본동작(여기선 새로고침) 방지 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; // 밑줄이랑 같음. String과 변수를 합해줌. 규칙1: ${이름}, 규칙2: 백틱(``)
    //greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);