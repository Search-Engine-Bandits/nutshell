import html from "./messageFactoryHTML.js"




function scrollToBottom(messageListContainer) {
    messageListContainer.scrollTop = messageListContainer.scrollHeight;
  }
  


export default {

    // object method for rendering the new message form to the DOM

    renderNewMessageForm: () => {
        let messageForm = html.newMessageForm()
        document.querySelector("#newMessageDiv").innerHTML = messageForm
    },

    renderMessageList: (messages) => {
        const loggedInUser = parseInt(sessionStorage.getItem("activeUser"))
        const messageListContainer = document.querySelector("#messageList")
        let messageList = ""
        messages.forEach(message => {
            let messageHtml =""
            if (message.userId === loggedInUser) {
                messageHtml = html.messageItemOwner(message)
            } else {
                messageHtml = html.messageItemNonOwner(message)
            }
            messageList += messageHtml
        })
        document.querySelector("#messageList").innerHTML = messageList
        scrollToBottom(messageListContainer)
    },

    renderEditForm: (messageObject) => {
        let editItemForm = html.editMessageForm(messageObject)
        document.querySelector(`#messageText--${messageObject.id}`).innerHTML = editItemForm
    },

    renderFriendAddConfirmation: (messageObject) => {
        let confirmFriendMessage = html.confirmFriend(messageObject)
        const friendName = messageObject.user.username
        document.querySelector(`#messageUsername--${messageObject.id}`).innerHTML = confirmFriendMessage
    }
}