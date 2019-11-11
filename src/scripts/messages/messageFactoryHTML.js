export default {

    newMessageForm: () => {
        return `
        <input type="text" id="messageText" placeholder="Enter Chat Message" required>
        <button id="submitNewMessageButton">Submit</button>
        `
    },

    messageItem: (messageObject) => {
        return `
       <div class="singleMessage" id="singleMessage--${messageObject.id}">
            <div id = "messageUsername">${messageObject.user.username}</div>
            <div id= "messageText--${messageObject.id}">${messageObject.message}</div>
            <button id="editMessage--${messageObject.id}">Edit</button>
       </div>
       `
    },

    editMessageForm: (messageObject) => {
        return `
        <input type="hidden" id="messageTimestamp--${messageObject.id}" value="${messageObject.timestamp}">
        <input type="text" id="messageTextEdit--${messageObject.id}" value="${messageObject.message}">
        <button id="updateMessageButton--${messageObject.id}">Update</button>
        `
    },

    
    confirmFriend: (friendId) => {
        return `
        // <input type="text" id="messageText--${messageObject.id}" placeholder="Enter Message Edits" value="${messageObject.message}" required>
        <button id="confirmFriendButton--${messageObject.id}">Update</button>
        `
    }

}