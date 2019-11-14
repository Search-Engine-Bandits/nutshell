export default {

    createFriendObject: (friendObject) => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObject)
        })
    },

    getAllFriends: (currentUserId) => {
        return fetch(`http://localhost:8088/friends?currentUserId=${currentUserId}&_expand=user`)
            .then(friends => friends.json())
    },
    
    deleteFriend: (deletedFriendId) => {
        return fetch(`http://localhost:8088/friends/${deletedFriendId}`, {
            method: "DELETE",
        })
        .then(friend => friend.json())
    },

    getAllUsers: (username) => {
        return fetch(`http://localhost:8088/users?username=${username}`)
        .then(users => users.json())
    },

    getAllUsersByEmail: (email) => {
        return fetch(`http://localhost:8088/users?email=${email}`)
        .then(users => users.json())
    },

    createUserObject: (userObject) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
    }

}