import renderMessage from "./messageRenderDOM.js"
import messageApi from "./messageData.js"
import friendApi from "../friends/friendsData.js"
import friendRenderDOM from "../friends/friendsRenderDOM.js"
import dashboard from "../dashboard.js"


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
                    renderMessage.renderFriendAddConfirmation(messageObject)})
            }
        })
    },

    listenForConfirmOrDenyFriend: () => {
        document.querySelector("#messageList").addEventListener("click", () => {
            if (event.target.id.includes("confirmFriendButton")) {

                // Check to ensure that same friend is not added twice
                let loggedInUserId = parseInt(sessionStorage.getItem("activeUser"))
                const potentialFriend = document.querySelector("#friendNameSearch").innerText
                let potentialFriendId


                // pulls the potentialFriedId from an API call and populates the variable declared above
                friendApi.getAllUsers(potentialFriend)
                .then(response => {
                    potentialFriendId = parseInt(response[0].id)
                    return loggedInUserId
                })

                // uses filter to compare user.username of loggedInUser's friends array and compares it to the text criteria from user selected potentialFriend
                .then(response => friendApi.getAllFriends(response))
                .then(r => {
                    const comparePotentialFriendToUsername = r.filter(r => (r.user.username===potentialFriend ))
        // If potentialFriendId is the same as loggedInUserId then it will inform user that they are unable to friend themself
                    if (potentialFriendId===loggedInUserId) {
                        window.alert("You cannot friend yourself")
                    
        // If potentialFriend is the same as user.username then it will inform user that they are unable to friend someone they're already friends with

                    } else if  (comparePotentialFriendToUsername.length > 0) {
                        window.alert(`You are already friends with ${potentialFriend}`)
                    // else it will take the values for loggedInUserId and potentialFriendId and create and object that will be put into the friends array
                    } else {
                        const friendObject = {
                            currentUserId: loggedInUserId,
                            userId: potentialFriendId
                        }
                        return friendApi.createFriendObject(friendObject)
                    }
                })
                .then(dashboard.listenAndRenderDashboard)

            } else if (event.target.id.includes("declineFriendButton")) {
                messageApi.getAllMessages()
                .then(response => renderMessage.renderMessageList(response))
            }
        })
    }
}