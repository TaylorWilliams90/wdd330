const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const todoList = document.querySelector('#results');

//Event listeners

todoButton.addEventListener('click', add);
todoList.addEventListener('click', deleteCheck)

function add(event) {
     

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('list');
    // li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add("task");
    todoDiv.appendChild(newtodo);
    // mark button
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Done';
    completeButton.classList = "done";
    todoDiv.appendChild(completeButton);
    // mark button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList = "cross";
    todoDiv.appendChild(deleteButton);
    //results
    todoList.appendChild(todoDiv);
    //clear
    todoInput.value = '';
}

function deleteCheck(e){
 const item = e.target;
// delete

if (item.classList[0] === "cross"){
    const par = item.parentElement;
    par.remove();
}

if (item.classList[0] === "done"){
    const par = item.parentElement;
    par.classList.add("complete");
}

}