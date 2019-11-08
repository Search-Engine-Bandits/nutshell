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
    }
}