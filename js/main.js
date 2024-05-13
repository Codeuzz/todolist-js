const addTaskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById('task-container');
const selectLvl = document.getElementById("select-lvl");
const deleteBtn = document.getElementById("delete-btn");
const tasks = [
    {
        title: "Apprendre mon cours de JavaScript",
        priority: 1
    },
    {
        title: "Créer mon compte Github",
        priority: 2
    },
    {
        title: "Répondre à mes emails",
        priority: 3
    }
];


const sortTasks = () => tasks.sort((task1, task2) => task1.priority - task2.priority);
sortTasks()


for(let i = 0; i < tasks.length; i++) {
    taskContainer.innerHTML += `
    <li>
        <label class=lvl-${tasks[i].priority}>
            <input type="checkbox"></input> 
            ${tasks[i].title}
        </label>
    </li>
   `
}

const addTask = event =>{ 
    if(addTaskInput.value === "") {
        alert("Indiquez le nom de la tâche")

    } else if (selectLvl.value === "") {
        alert("Sélectionnez le niveau d'importance")
    } else {
        tasks.push({
            title: addTaskInput.value,
            priority: selectLvl.value,
        })
    
        const newTaskItem = document.createElement('li');
        newTaskItem.innerHTML = `
            <label class="lvl-${selectLvl.value}">
                <input class="checkbox-input" type="checkbox"></input> 
                ${addTaskInput.value}
            </label>
        `;

    taskContainer.appendChild(newTaskItem);
    sortTasks()
    event.preventDefault()

    }
    

console.log(addTaskInput.value);
console.log(selectLvl.value);
console.log(tasks);
console.log("hello")

}

const deleteTasks = event => {
    const checkedTasks = taskContainer.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedTasks);
    checkedTasks.forEach(checkedTask => {
        const listItem = checkedTask.closest('li');
    listItem.remove()

    });

}

addBtn.addEventListener("click", addTask);
deleteBtn.addEventListener("click", deleteTasks);