//const loginForm = document.querySelector("#login-form");
//const loginInupt = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

// 형식: #id func
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

/*
function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
}
*/

function onLoginSubmit(event) { // event가 범용으로 쓰이는 argument 이름
    event.preventDefault(); // 기본동작(여기선 새로고침) 방지 함수
    //console.log(event);
    console.log(loginInput.value);
}


loginForm.addEventListener("submit",onLoginSubmit);

// * * *
// 이하는 구식
//const loginButton = document.querySelector("#login-form button");

/*
function handleLoginButton() {
    const username = loginInput.value;
    console.log(username);
}
    /*
    if(username.length==0) {
        alert("이름을 입력해주세요.")
    } else if(username.length>15) {
        alert("이름은 15자 이내로 입력이 가능합니다.");
    } else
        console.log("hello", loginInput.value);
    */
//}

//loginButton.addEventListener("click", handleLoginButton)

//console.log(name);