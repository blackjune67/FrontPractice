const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    //console.log(text);
    //console.log(">>>", toDoList);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    const newId = toDos.length +1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


/* function something(toDo){
    console.log(toDo.text);
} */


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        //parsedToDos.forEach(something);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();