//http://localhost:3000/todos

function populateTasks() {
    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(json => displayTasks())
}

function displayTasks(todos) {
    todos.map(task => {
        return `<li>${activityName}</li>`
    })
    taskList.innerHTML = taskItems.join('')
}

populateTasks()