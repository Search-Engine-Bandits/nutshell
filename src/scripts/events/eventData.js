export default {

    createSingleEvent: (eventObject) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    }
}