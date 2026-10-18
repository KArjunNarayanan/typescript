let taskInput = document.getElementById("taskInput") as HTMLInputElement;
let addBtn = document.getElementById("addBtn") as HTMLButtonElement;
let taskList = document.getElementById("taskList") as HTMLUListElement;
let loadBtn = document.getElementById("loadBtn") as HTMLButtonElement;

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

let tasks: Task[] = [];
function loadTasks(){
    let storedTasks = localStorage.getItem("tasks");
    if(storedTasks !== null){
        tasks = JSON.parse(storedTasks);
    }else{
        tasks = [];
    }
}

function saveTasks(): void {
    localStorage.setItem("tasks",JSON.stringify(tasks));
}



function displayTasks():void {
    taskList.textContent = "";
    tasks.forEach((task:Task) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        let taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.classList.add("task-text");

        if(task.completed){
            taskText.classList.add("completed");
        }

        checkbox.addEventListener("change", function() {
            task.completed = checkbox.checked;
            saveTasks();
            displayTasks();
        });

        taskText.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            displayTasks();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });
            saveTasks();
            displayTasks();
            });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        });
}

addBtn.addEventListener("click", ()=>{
    let text:string = taskInput.value.trim();

    if(text === ""){
        alert("Please enter a task");
        return;
    }

    let task: Task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    
    taskInput.value = "";
});

loadBtn.addEventListener("click", () => {
    loadTasks();
    displayTasks();
});

displayTasks();

