const todoList = document.querySelector('#todoList');

const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', (e)=>action(e));

function addToDo() {

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    //check for empty values
    todoItem.textContent = userInput.value;

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

    //clear user input
    userInput.value = '';
}

function action(e){
    const item = e.target;
    if(item.classList[0] === 'deleteButton'){
        item.parentElement.classList.add('swipe');
        item.parentElement.addEventListener('transitionend', ()=>item.parentElement.remove());
    }

    if(item.classList[0] === 'checkButton'){
        item.parentElement.classList.toggle('checked');
    }
}