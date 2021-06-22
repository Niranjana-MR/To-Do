const todoList = document.querySelector('#todoList');

const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', addToDo);

function addToDo(){
    
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.textContent = 'This works';

    todoContainer.appendChild(todoItem);

    const checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas', 'fa-check');
    checkButton.appendChild(checkIcon);
    
    todoContainer.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash');
    deleteButton.appendChild(deleteIcon);
    
    todoContainer.appendChild(deleteButton);

    todoList.appendChild(todoContainer);
}