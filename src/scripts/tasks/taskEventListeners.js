import renderTask from "./taskRenderDOM.js"
import api from "./taskData.js"


export default {

    listenForNewTask: () => {
        document.querySelector("#newTaskDiv").addEventListener("click", () => {
            if (event.target.id === "newTaskButton") {
                renderTask.renderNewTaskForm()
            }
            else if (event.target.id === "submitNewTaskButton") {

                const userId = parseInt(sessionStorage.getItem("activeUser"))
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

                        response.completed = true
                        return response
                    })
                    .then(response =>
                        api.completeTask(response)
                    )
                    .then(() => api.getAllTasks())
                    .then(response => { renderTask.renderTaskList(response) }
                    )
            }
        })
    },

    listenForTaskDelete: () => {
        document.querySelector("#taskContainer").addEventListener("click", () => {

            if (event.target.id.includes("deleteTask--")) {

                const deletedTaskId = event.target.id.split("--")[1]


                api.deleteTask(parseInt(deletedTaskId))
                    .then(() => api.getAllTasks())
                    .then(response => { renderTask.renderTaskList(response) }
                    )
            }
        })
    },

    listenForTaskEdit: () => {
        document.querySelector("#taskContainer").addEventListener("click", () => {

            if (event.target.id.includes("editTask--")) {
                const editedTaskId = event.target.id.split("--")[1]
                api.getSingleTask(editedTaskId)
                    .then(response => renderTask.renderEditForm(response))
            }
        })
    },

    listenForTaskEditSubmit: () => {
        document.querySelector("#taskContainer").addEventListener("click", () => {

            if (event.target.id.includes("updateNewTaskButton--")) {
                const editedTaskId = event.target.id.split("--")[1]

                        const userId = parseInt(sessionStorage.getItem("activeUser"))
                        const task = document.querySelector(`#taskName--${editedTaskId}`).value
                        const compDate = document.querySelector(`#taskDate--${editedTaskId}`).value
                        

                        const taskObject = {
                            id : editedTaskId,
                            userId: userId,
                            task: task,
                            compDate: compDate,
                            completed: false
                        }

                        if (userId && task && compDate) {

                            api.completeTask(taskObject)
                                .then(api.getAllTasks)
                                .then(response => renderTask.renderTaskList(response))
                        }
                        else {
                            window.alert("Please complete all fields!!!!")
                        }
                    
            }
        })
    }
}