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

    getAllFriends: () => {
        return fetch("http://localhost:8088/friends")
            .then(friends => friends.json())
    }

}