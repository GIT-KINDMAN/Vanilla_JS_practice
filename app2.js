/*
const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
*/

//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title[0]);

// 앞으로 document.querySelector만 쓰게 될 것 -> getElementById를 쓰고 싶다? 그래도 querySelector로 대체 가능해서 이거만 쓴댄다 (#id) 패러미터 입력
//.querySelector는 단 하나만의 Element를 return 한다

//.hello:first-child h1 => class hello를 가진 div 내부의 first-child인 h1을 찾아오는 것
// const title = document.querySelector(".hello:first-child h1"); // 클래스 .hello를 찾고 그 안의 h1을 불러와달라는 의미
// console.dir(title);

// title.style.color = "blue";

//querySelctor = 해당하는 것 중 최초 객체만
//querySelctorAll = 해당하는 것 전부 반환

// * * * * * * * * * * * * *

console.dir();

const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    // console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.style.color = "red";
}

function handleMouseLeave() {
    title.style.color = "black";
}

function handleMouseOut() {
    title.style.color = "gray";
}

function handleMouseOver() {
    title.style.color = "green";
}

/*
function handleFullScreenChange() {
    title.style.font = "Italic";
}
*/

// 기본적으로 event 설정은 KEY(condition) -> VALUE(execute) 인듯? if를 걍 event함수로 구현 가능
// 미리 정의된 Property들은 KEY로서 사용 가능. 실행 함수는 직접 짜든지 아님 API가 또 있을지도?

title.addEventListener("click",handleTitleClick); // value에 함수이름 넣을때 () 넣으면 안됨. ()를 넣는다는건 실행버튼을 누르는 것과 같다
// -> title.onclick = handleTitleClick; 으로 대체 가능

title.addEventListener("mouseenter",handleMouseEnter); // value
title.addEventListener("mouseleave",handleMouseLeave);
///title.addEventListener("mouseover",handleMouseOver);
///title.addEventListener("mouseout",handleMouseOut);


// 정리! mouseout = 
// 정리! mouseenter = 자식 영역 감지 X, mouseover = 자식 영역도 감지 O

// mouseover, mouseout는 자식 요소에 접근해도 동작을 하지만,
// mouseenter, mouseleave는 자식 요소에는 동작하지 않는다.

//title.addEventListener("fullscreenchange",handleFullScreenChange);


// * * * * * *

//console.dir(title); 을 입력함으로서 콘솔창에서 element 종류 확인 가능.
// property들이 쭉 나올 것이고 propety에 접두사 on 붙어있으면 그것들은 전부 이벤트 리스너
// 그렇기에 쓸때는 on을 떼고 불러야 써짐. e.g) onabort -> abort

// But! 스타일 관련 수정은 CSS가 담당하는게 옳다. 지금은 예제라서 그런것

function handleWindowResize() {
    //document.body, document.head, document.title 등은 존재. 나머지는 미리 정의 X
    //나머지는 getElementById 혹은 querySelector로 가져와야 함
    document.body.style.backgroundColor = "tomato" ;
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("데이터 나간다");
}

function handleWindowOnline() {
    alert("연결돼있덩");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);