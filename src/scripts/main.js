/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/


// main
import html from "./mainFactoryHTML.js"

// tasks
import renderTask from "./tasks/taskRenderDOM.js"
import taskListener from "./tasks/taskEventListeners.js"
import api from "./tasks/taskData.js"
import renderEvent from "./events/eventRenderDOM.js"
import eventListener from "./events/eventEventListeners.js"
import eventApi from "./events/eventData.js"
import renderMessage from "./messages/messageRenderDOM.js"
import messageListener from "./messages/messageEventListeners.js"
import messageApi from "./messages/messageData.js"

// friends
import friendRenderDOM from "./friends/friendsRenderDOM.js"
import friendListener from "./friends/friendsEventListeners"
import friendsAPI from "./friends/friendsData"

// news
import renderNews from "./news/newsRenderDOM"
import newsListeners from "./news/newsEventListeners"
import newsApi from "./news/newsData.js"


// assign active user
sessionStorage.setItem("activeUser", 1)

// adding initial HTML framework to the DOM
document.querySelector("#container").innerHTML = html.populateInitialView()

// render and listen to tasks

api.getAllTasks()
.then(response => renderTask.renderTaskList(response))
renderTask.renderNewTaskButton()
taskListener.listenForNewTask()
taskListener.listenForTaskComplete()
taskListener.listenForTaskDelete()
taskListener.listenForTaskEdit()
taskListener.listenForTaskEditSubmit()


// messages
// function call to put new event button on page
renderEvent.renderNewEventButton()
// function call for event listener on new event button
eventListener.listenForNewEvent()
eventListener.listenForDeleteEvent()
eventListener.listenForEditEvent()
eventListener.listenForSaveEvent()


// eventListener.submitNewEvent()
eventApi.allEvents()
// function call to populate dom with existing events
eventApi.allEvents()

// render and listen to news
renderNews.renderNewArticleButton()
newsListeners.listenToNewArticleButton()
// TESTING
newsApi.getAllArticles()
.then(response => renderNews.renderAllArticles(response))

newsListeners.listenToDeleteNewsButton()
newsListeners.listenToEditNewsButton()
newsListeners.listenToUpdateNewsButton()

messageApi.getAllMessages()
.then(response => renderMessage.renderMessageList(response))
.then(renderMessage.renderNewMessageForm)
.then(messageListener.listenForNewMessage)
.then(messageListener.listenForMessageEdit)
.then(messageListener.listenForMessageEditSubmit)
.then(messageListener.listenForMessageFriend)


// friends
.then(messageListener.listenForConfirmOrDenyFriend)

let currentUserId = parseInt(sessionStorage.getItem("activeUser"))
friendsAPI.getAllFriends(currentUserId)
    .then(friendRenderDOM.renderFriendList)
friendRenderDOM.renderAddFriendButton()
friendListener.listenForAddFriend()
friendListener.listenForFriendDelete()




// render and listen to news
renderNews.renderNewArticleButton()
newsListeners.listenToNewArticleButton()
newsListeners.listenToSaveArticleButton()
