import renderTask from "./taskRenderDOM.js"
import api from "./taskData.js"


export default {

    listenForNewTask: () => {
        document.querySelector("#newTaskDiv").addEventListener("click", () => {
            if (event.target.id === "newTaskButton") {
                renderTask.renderNewTaskForm()
            }
            else if (event.target.id === "submitNewTaskButton") {
                
                const userId = sessionStorage.getItem("activeUser")
                const task = document.querySelector("#taskName").value
                const compDate = document.querySelector("#taskDate").value
                const completed = false
                
                const taskObject = {
                    userId: userId,
                    task: task,
                    compDate: compDate,
                    completed: completed
                }
                
                if (userId && task && compDate) {
                    
                    api.createSingleTask(taskObject)
                    .then(api.getAllTasks)
                    .then(response => renderTask.renderTaskList(response))
                }
                else {
                    window.alert("Please complete all fields!!!!")
                }

                renderTask.renderNewTaskButton()
            }
        })
    },

    listenForTaskComplete: () => {
        document.querySelector("#taskContainer").addEventListener("click", () => {
            
            if (event.target.id.includes("taskCheckbox--")) {
                const completedTaskId = event.target.id.split("--")[1]
                api.getSingleTask(completedTaskId)
                .then(response => {
                    console.log(response)
                    response.completed = true
                    return response
                })
                .then(response => {
                    console.log(response.id)
                    api.completeTask(response)
                })
                .then(api.getAllTasks)
                .then(renderTask.renderTaskList)
            }
        })
    }
}