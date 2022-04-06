let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let container = document.querySelector('.container');
let tasks = [];

function buildDom(inputValue) {
    // add task
    let task = document.createElement('div');
    let text = document.createElement('p');
    let remove = document.createElement('button');
    let edit = document.createElement('button');
    remove.textContent = 'Remove';
    edit.textContent = 'Edit';
    text.textContent = inputValue;
    container.appendChild(task);
    task.appendChild(text);
    task.appendChild(remove);
    task.appendChild(edit);


    remove.addEventListener('click', removeFun);

    function removeFun() {
        task.remove();
        tasks = JSON.parse(localStorage.getItem('key'));
        tasks.splice(tasks.indexOf(inputValue), 1);
        localStorage.setItem('key', JSON.stringify(tasks));
    }
}

// -----------------Add Function------------------
btn.addEventListener('click', addTask);

function addTask(e) {
    e.preventDefault();
    if (input.value !== '') {
        buildDom(input.value);
        tasks.push(input.value);
        localStorage.setItem('key', JSON.stringify(tasks));
    }
}

// -----------------On Loading Function------------------
document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
    tasks = JSON.parse(localStorage.getItem('key'));
    if (tasks === null) {
        return;
    }
    tasks.forEach(e => {
        buildDom(e);
    })
}

