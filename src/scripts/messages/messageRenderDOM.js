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
        const messageListContainer = document.querySelector("#messageList")
        let messageList = ""
        messages.forEach(message => {
            const messageHtml = html.messageItem(message)
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