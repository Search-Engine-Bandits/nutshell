import html from "./taskFactoryHTML.js"

export default {

    // object method for rendering the task button to the DOM
    renderNewTaskButton: () => {
        let taskButton = html.newTaskButton()
        document.querySelector("#newTaskDiv").innerHTML = taskButton
    },

    // object method for rendering the new task form to the DOM

    renderNewTaskForm: () => {
        let taskForm = html.newTaskForm()
        document.querySelector("#newTaskDiv").innerHTML = taskForm
    },

    renderTaskList: (tasks) => {
        let taskList = ""
        const loggedInUser = sessionStorage.getItem("activeUser")
        tasks.filter(task => task.userId === loggedInUser).forEach(task => {
            const taskHtml = html.taskItem(task)
            taskList += taskHtml
        })
        document.querySelector("#taskList").innerHTML = taskList
    },

    renderEditForm: (taskObject) => {
        let editItemForm = html.editTaskForm(taskObject)
        document.querySelector(`#singleTask--${taskObject.id}`).innerHTML = editItemForm
    }
}