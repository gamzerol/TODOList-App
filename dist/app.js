const addInput = document.querySelector('.input-group-add');
const btnDelete = document.getElementById('btnDelete');
const btnDeleteCompleted = document.getElementById('btnCompleted');
const inputText = document.getElementById('inputText');
const taskGroup = document.querySelector('.task-group');
const task = document.querySelector('.task');
const tasks = document.querySelectorAll('input[type="checkbox"]');
const cardDate = document.querySelector('.card-top__2');
const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
let checkedItems = [];

cardDate.textContent = date;
console.log(date);


function addTask() {
    if(inputText.value === '') {
        inputText.classList.toggle('transitionText');

    } else {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `<input type="checkbox">
                        <p class="text">${inputText.value}</p>`;
        taskGroup.appendChild(newTask);

        inputText.value = '';
    }
    
}
addInput.addEventListener('click', addTask);
document.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        addTask();
    }
})
taskGroup.addEventListener('change', function(e) {
    if (e.target.checked) {
        e.target.nextElementSibling.innerHTML = `<del>${e.target.nextElementSibling.textContent}</del>`;
        console.log(e.target);

        // this.nextElementSibling.innerHTML = `<del>${this.nextElementSibling.textContent}</del>`;   
        checkedItems.push(e.target.parentElement)
    } else {

        e.target.nextElementSibling.innerHTML = e.target.nextElementSibling.textContent;
    }
});

btnDeleteCompleted.addEventListener('click', deleteCompleted);
btnDelete.addEventListener('click', deleteAll);



function deleteCompleted() {
    for(let i=0; i<checkedItems.length; i++) {
        checkedItems[i].style.display = 'none';       
    }
    
}

function deleteAll() {
    taskGroup.classList.add('delete-all');
}

