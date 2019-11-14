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
    },
    updateForm: (eventId) => {
        const hiddenEventIdInput = document.getElementById("hiddenEventId")
        const eventInput = document.getElementById("eventName--")
        const dateInput = document.getElementById("eventDate--")
        const locationInput = document.getElementById("eventLocation--")

        fetch(`http://localhost:8088/events/${eventId}`)
            .then(response => response.json())
            .then(event => {
                hiddenEventIdInput.value = event.id
                eventInput.value = event.name
                dateInput.value = event.date
                locationInput.value = event.location
            })
    },
    saveEvent: (eventId) => {
        const updatedEventObject = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            name: document.getElementById("eventName--").value,
            date: document.getElementById("eventDate--").value,
            location: document.getElementById("eventLocation--").value
        }

        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEventObject)
        })
            .then(response => response.json())
    },

    friendsAndEvents: () => {
        return fetch("http://localhost:8088/users?_embed=friends&_embed=events&_sort=date&_order=asc")
            .then(entries => entries.json())
            .then(parsedEntries => {
                allEvents.friendEventToDom(parsedEntries)
            })
        },
        
        
    }
