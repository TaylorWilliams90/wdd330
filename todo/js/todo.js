
const todolists = [] 

window.addEventListener("load", () => {
    showlist();
  });


function add() {
    let todo = document.getElementById("todo").value;
    console.log(todo);
        
        todolists.push(todo);
        showlist();

        document.getElementById("todo").value = "";

}

function showlist() {
    const todoElement = document.getElementById("results");
    todoElement.innerHTML = "";
    renderList(todolists, todoElement);
}

function renderList(todolist, parent){
todolist.forEach(list => {
    parent.appendChild(showOneList(list));
});
}

function showOneList(list) {
    const item = document.createElement("li");
    
    item.innerHTML = `<div class="list">
                        <button class="done" onclick="complete()">DONE</button>
                        <div class="task">
                        ${list}
                        </div>
                        <button class="cross">X</button>`;
    return item;

}


function deleteList(){
    let item = document.querySelector(".cross");

    console.log(item);
}


