import html from "./messageFactoryHTML.js"

export default {

    // object method for rendering the new message form to the DOM

    renderNewMessageForm: () => {
        let messageForm = html.newMessageForm()
        document.querySelector("#newMessageDiv").innerHTML = messageForm
    },

    renderMessageList: (messages) => {
        let messageList = ""
        messages.forEach(message => {
            const messageHtml = html.messageItem(message)
            messageList += messageHtml
        })
        document.querySelector("#messageList").innerHTML = messageList
    },

    renderEditForm: (messageObject) => {
        let editItemForm = html.editMessageForm(messageObject)
        document.querySelector(`#messageText--${messageObject.id}`).innerHTML = editItemForm
    },

    renderFriendAddConfirmation: (messageId, friendId) => {
        let confirmFriendMessage = html.confirmFriend(friendId)
        document.querySelector(`#confirmFriend--${messageId}`).innerHTML = confirmFriendMessage
    }
}