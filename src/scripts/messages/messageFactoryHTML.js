export default {

    newMessageForm: () => {
        return `
        <input type="text" id="messageText" placeholder="Enter Chat Message" required>
        <button id="submitNewMessageButton">Submit</button>
        `
    },

    messageItemOwner: (messageObject) => {
        return `
       <div class="singleMessage" id="singleMessage--${messageObject.id}">
            <b><div id = "messageUsername--${messageObject.id}">${messageObject.user.username}</div></b>
            <div id= "messageText--${messageObject.id}">${messageObject.message}</div>
            <button id="editMessage--${messageObject.id}">Edit</button>
       </div>
       `
    },

    messageItemNonOwner: (messageObject) => {
        return `
       <div class="singleMessage" id="singleMessage--${messageObject.id}">
            <b><u><div id = "messageUsername--${messageObject.id}">${messageObject.user.username}</div></u></b>
            <div id= "messageText--${messageObject.id}">${messageObject.message}</div>
            
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

    
    confirmFriend: (messageObject) => {
        return `
        <p class="confirmFriend--${messageObject.userId}" id="confirmFriend--${messageObject.id}">Would you like to add <b id="friendNameSearch">${messageObject.user.username}</b> as a friend?"</p>
        <button id="confirmFriendButton--${messageObject.id}">Add Friend</button>
        <button id="declineFriendButton--${messageObject.id}">Changed My Mind</button>
        `
    }

}