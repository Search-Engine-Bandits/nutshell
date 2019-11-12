import renderMessage from "./messageRenderDOM.js"
import messageApi from "./messageData.js"


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
                    console.log(editMessageId)
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

                        console.log(messageObject)


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
                const friendId = event.target.className.split("--")[1]
                console.log(friendId)
                renderMessage.renderFriendAddConfirmation(messageId, friendId)


                // need API post to friends and rerender

            }
        })
    },
}