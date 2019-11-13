import allEvents from "./eventRenderDOM.js"
export default {

    createSingleEvent: (eventObject) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    },

    allEvents: () => {
        return fetch("http://localhost:8088/events?_sort=date&_order=asc")
            .then(entries => entries.json())
            .then(parsedEntries => {
                allEvents.eventToDom(parsedEntries)
            })
    },
    deleteEvent: (eventId) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}