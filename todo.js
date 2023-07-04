const toDOform = document.querySelector('.js_todoForm'),
    toDOinput = toDOform.querySelector('input'),
    toDOlist = document.querySelector('.js_todoList');

const TODO_LS = 'TODO';
let tODO =[];

function loadTODO() {
    const load_ToDO = localStorage.getItem(TODO_LS);
    if (load_ToDO !== null) {
        const parsedTODO = JSON.parse(load_ToDO);
        parsedTODO.forEach(function(todo){
            showTODO(todo.name);
        });
    }
}

function saveTODO() { 
    localStorage.setItem(TODO_LS, JSON.stringify(tODO));
}

function deleteTODO(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDOlist.removeChild(li);
    const clearTODO = tODO.filter(function filterFn(tODO) {
        return tODO.id !== parseInt(li.id);
    });
    tODO = clearTODO;
    saveTODO();
}

function showTODO(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = tODO.length + 1;
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteTODO);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDOlist.appendChild(li);
    const TODOobj = {
        name: text,
        id: newId
    };
    tODO.push(TODOobj);
    saveTODO();
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDOinput.value;
    showTODO(currentValue);
}

function init() {
    loadTODO();
    toDOform.addEventListener('submit', submitHandler);
} 
init();