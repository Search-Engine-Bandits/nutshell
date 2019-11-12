import renderMessage from "./messageRenderDOM.js"
import messageApi from "./messageData.js"
import friendApi from "./friendsData.js"


export default {

    listenForNewMessage: () => {
        document.querySelector("#newMessageDiv").addEventListener("click", () => {
            if (event.target.id === "newMessageButton") {
                renderMessage.renderNewMessageForm()
            }
            else if (event.target.id === "submitNewMessageButton") {

                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const message = document.querySelector("#messageText").value
                const timestamp = new Date().getTime()

                const messageObject = {
                    userId: userId,
                    message: message,
                    timestamp: timestamp
                }

                if (userId && message) {

                    messageApi.createSingleMessage(messageObject)
                        .then(messageApi.getAllMessages)
                        .then(response => renderMessage.renderMessageList(response))
                        .then(document.querySelector("#messageText").value = "")
                }
                else {
                    window.alert("Please complete all fields!!!!")
                }
            }
        })
    },

    listenForMessageEdit: () => {
        document.querySelector("#messageList").addEventListener("click", () => {

            if (event.target.id.includes("editMessage--")) {
                const editedMessageId = event.target.id.split("--")[1]
                messageApi.getSingleMessage(editedMessageId)
                    .then(response => renderMessage.renderEditForm(response))
            }
        })
    },

    listenForMessageEditSubmit: () => {
        document.querySelector("#messageList").addEventListener("click", () => {

            if (event.target.id.includes("updateMessageButton--")) {
                const editMessageId = event.target.id.split("--")[1]
                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const message = document.querySelector(`#messageTextEdit--${editMessageId}`).value
                const timestamp = document.querySelector(`#messageTimestamp--${editMessageId}`).value
                const messageId = parseInt(editMessageId)

                const messageObject = {
                    id : messageId,
                    userId: userId,
                    message: message,
                    timestamp: timestamp
                }

                messageApi.editMessage(messageObject)
                    .then(messageApi.getAllMessages)
                    .then(response => renderMessage.renderMessageList(response))
            }
        })
    },

    listenForMessageFriend: () => {
        document.querySelector("#messageList").addEventListener("click", () => {
            if (event.target.id.includes("messageUsername")) {
                
                const messageId = event.target.id.split("--")[1]
                messageApi.getSingleMessage(messageId)
                .then(messageObject => {
                    console.log(messageObject)
                    renderMessage.renderFriendAddConfirmation(messageObject)})

            }
        })
    },

    listenForConfirmOrDenyFriend: () => {
        document.querySelector("#messageList").addEventListener("click", () => {
            if (event.target.id.includes("confirmFriendButton")) {
//  need to add adam's function that adds a friend

                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const friendName = document.querySelector("#friendName").value


                const friendObject = {
                    userId: userId,
                    friendName: friendName
}
                friendApi.createFriendObject(friendObject)
                .then(api.getAllFriends)
                .then(response => friendRenderDOM.renderFriendList(response))
                    
            } else if (event.target.id.includes("declineFriendButton")) {

                console.log("say goodbye")
                messageApi.getAllMessages()
                .then(response => renderMessage.renderMessageList(response))
            }
        })
    }
}