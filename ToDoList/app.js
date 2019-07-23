 let taskTitleTextBox = document.getElementById("taskTitleTextBox")
let enterTask = document.getElementById("enterTask")
let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")

enterTask.addEventListener("click", () => {
    let taskTitle = taskTitleTextBox.value
    let taskElement = document.createElement("span")
    taskElement.innerHTML = taskTitle
    //Create container div for tasks
    let containerDiv = document.createElement("div")
    //Create complete checkbox for tasks
    let completeBox = document.createElement("input")
    completeBox.setAttribute("type","checkbox")
    //Create delete button for tasks
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    //Sending all elements from console to main pg
    containerDiv.append(completeBox)
    containerDiv.append(taskElement)
    containerDiv.append(deleteButton)
    pendingTasks.append(containerDiv)
    //Delete button functionality
    deleteButton.addEventListener("click", () => {
        if (pendingTasks.contains(containerDiv)){
            pendingTasks.removeChild(containerDiv)
        } else if (completedTasks.contains(containerDiv)) {
            completedTasks.removeChild(containerDiv)
        }
    })
    //Complete checkbox functionality
    completeBox.addEventListener("change", () => {
        if (completeBox.checked) {
            completedTasks.append(containerDiv)
        } else {
            pendingTasks.append(containerDiv)
        }
    })
})

