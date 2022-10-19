const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');

addButton.addEventListener('click', (e) => {
    //prevent form from submitting
    e.preventDefault();


    //MAKING SURE A TASK IS FILLED
    const todo = todoInput.value;
    if (!todo) {
        alert("PLEASE FILL THE TASK")
        return;
    } 


    // CREATING TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');


    // CREATING TODO ITEM
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = todoInput.value


    // CREATING DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'Delete';


    // APPENDING BOTH TODO ITEM AND DELETE BUTTON TO TODO DIV
    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(deleteButton);


    // APPEND TODO DIV TO TODO LIST
    todoList.appendChild(todoDiv);


    //CLEAR OUT INPUT VALUE AFTER ADDING TODO VALUE
    todoInput.value='';
    

    //DELETE FUNCTIONALITY
    deleteButton.addEventListener('click', (e) => {
        const item = e.target;
        if(item.classList.contains('delete')) {
            todoDiv.classList.add('fall');
            todoDiv.remove()
            
        }
    })
})

