function addTask(){

let taskInput = document.getElementById("taskInput");
let taskTime = document.getElementById("taskTime");
let taskList = document.getElementById("taskList");

let taskText = taskInput.value;

if(taskText === ""){

alert("Please enter a task");

return;

}

let li = document.createElement("li");

li.innerHTML =

taskText + " ("+taskTime.value+")" +

'<div class="task-buttons">'+
'<button onclick="completeTask(this)">✔</button>'+
'<button onclick="editTask(this)">✏</button>'+
'<button onclick="deleteTask(this)">❌</button>'+
'</div>';

taskList.appendChild(li);

taskInput.value="";
taskTime.value="";

}

function completeTask(button){

let li = button.parentElement.parentElement;

li.classList.toggle("completed");

}

function deleteTask(button){

let li = button.parentElement.parentElement;

li.remove();

}

function editTask(button){

let li = button.parentElement.parentElement;

let text = li.firstChild.textContent;

let newTask = prompt("Edit task",text);

if(newTask){

li.firstChild.textContent = newTask;

}

}
