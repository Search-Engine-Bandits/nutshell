export default {

    addFriendButton: () => {
        return `
        <button id="addFriendButton">Add Friend</button>
        `
    },

    addFriendForm: () => {
        return `
        <label>Friend Name</label>
        <input type="text" id="friendName" placeholder="Enter Friend Name" required>
        <button id="submitNewFriendButton">Submit</button>
        `
    },

    friendItem: (friendObject) => {
        return `
       <div class="singleFriend" id="singleFriend--${friendObject.id}">
            <div class="friendName">${friendObject.friendName}</div>
            <button id="deleteFriend--${friendObject.id}">Delete Friend</button>
       </div>
       `
    },
}