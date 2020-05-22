const todolists =  ["This is a test", "This will work"]; 

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
    let num = 0
    item.innerHTML = `<div class="list">
                        <button class="done" onclick="complete()">DONE</button>
                        <div class="task">
                        ${list}
                        </div>
                        
                        <button class="cross" onclick="deleteList()">X</button>
                        </div>`;
    return item;

}


function deleteList(){
    let item = document.querySelector(".cross");

    console.log(item);
}

