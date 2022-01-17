// title.addEventListener("click",handleTitleClick);
// -> title.onclick = handleTitleClick; 으로 대체 가능
// 다만 addEventListener를 추천하는 이유는, 나중에 removeEventListener 함수를 통해 event Listener를 제거 가능하기 때문. 뭔 말이지

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {

    //className은 var마냥 그냥 덮어써버리기 때문에, classList를 쓰는게 좋다.
    
    /* 이 밑의 코드는 toggle 태그와 같다
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.className.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }

    */

    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);