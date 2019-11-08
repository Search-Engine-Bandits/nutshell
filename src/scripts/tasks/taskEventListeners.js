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

                console.log(taskObject)
                
                if (userId && task && compDate) {
                    
                    api.createSingleTask(taskObject)
                }
                else {
                    window.alert("Please complete all fields!!!!")
                }

                renderTask.renderNewTaskButton()
            }
        })
    }
}