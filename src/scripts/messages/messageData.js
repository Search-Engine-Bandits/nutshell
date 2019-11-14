export default {

    createSingleMessage: (messageObject) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
    },

    getAllMessages: () => {
        return fetch("http://localhost:8088/messages?_sort=timestamp&_expand=user")
            .then(messages => messages.json())
    },

    getSingleMessage: (messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}?_expand=user`)
        .then(messages => messages.json())
    },

    editMessage: (messageObject) => {
        return fetch(`http://localhost:8088/messages/${messageObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
        .then(messages => messages.json())
    }
    
}