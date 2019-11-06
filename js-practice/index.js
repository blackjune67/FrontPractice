const title = document.querySelector("#title");

//const BASE_COLOR = "rgb(248, 160, 207)"; //rgb에 띄어쓰기 안해서 색상 안바뀜...뭐여...
//const OTHER_COLOR = "rgb(145, 94, 253)";
const MOUSE_CLASS = "mouseChange";
const CLICKED_CLASS = "clicked";


function handleClick(){
 //const currentClass = title.className;
 //const hasClass = tlte.classList.contains(CLICKED_CLASS);
 title.classList.toggle(CLICKED_CLASS);
 title.classList.toggle(MOUSE_CLASS);
 /*     if(!hasClass){
        //title.className = CLICKED_CLASS;
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
        //title.className = "";
    } */
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

//자바스크립트에서 동일 조건으로 CSS가 있을 때
//CSS의 우선순위는 !import -> inline style -> id -> class, 수도클래스 -> tag element (수도엘리먼트)순서로 적용된다. 