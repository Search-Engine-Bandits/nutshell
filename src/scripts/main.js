/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/




import html from "./mainFactoryHTML.js"
import renderTask from "./tasks/taskRenderDOM.js"
import taskListener from "./tasks/taskEventListeners.js"
import api from "./tasks/taskData.js"
import renderEvent from "./events/eventRenderDOM.js"
import eventListener from "./events/eventListeners.js"


// adding initial HTML framework to the DOM

sessionStorage.setItem("activeUser", 1)

document.querySelector("#container").innerHTML = html.populateInitialView()

api.getAllTasks()
.then(response => renderTask.renderTaskList(response))


renderTask.renderNewTaskButton()

taskListener.listenForNewTask()

taskListener.listenForTaskComplete()

taskListener.listenForTaskDelete()

taskListener.listenForTaskEdit()

taskListener.listenForTaskEditSubmit()

renderEvent.renderNewEventButton()

eventListener.listenForNewEvent()