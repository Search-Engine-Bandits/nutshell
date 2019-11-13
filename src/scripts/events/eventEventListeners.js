import html from "./eventRenderDOM.js"
import factoryFunction from "./eventFactoryHTML.js"
import api from "./eventData.js"

export default {
    // function to listen and depending on what is clicked, creates form to dom or updates entries to show new event just entered
    listenForNewEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            if (event.target.id.includes("newEventButton")) {
                html.eventFormToDom()
            } else if (event.target.id.includes("eventSubmitButton--")) {
                console.log("how many clicks?")
                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const name = document.getElementById("eventName--").value
                const date = document.getElementById("eventDate--").value
                const location = document.getElementById("eventLocation--").value
                const eventObject = factoryFunction.eventFactoryFunction(userId, name, date, location)
                api.createSingleEvent(eventObject)
                    .then(api.allEvents)
                    .then(html.renderNewEventButton)
            }
        })
    },
    listenForDeleteEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEvent--")) {
                console.log("delete button clicked")
                const eventToDelete = event.target.id.split("--")[1]
                console.log("event to delete", eventToDelete)
                api.deleteEvent(eventToDelete)
                    .then(api.allEvents)
            }
        })
    },
    listenForEditEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            if (event.target.id.startsWith("editEvent--")) {
                console.log("edit button clicked")
                const eventIdToEdit = event.target.id.split("--")[1]
                console.log("event id to edit", eventIdToEdit)
                html.editEventFormToDom()
                api.updateForm(eventIdToEdit)
            }
        })
    },
    listenForSaveEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            const hiddenEventId = document.querySelector("#hiddenEventId")
            if (event.target.id.startsWith("eventSaveEditButton--")) {
                if (hiddenEventId.value !== "") {
                    api.saveEvent(hiddenEventId.value)
                        .then(api.allEvents)
                        .then(html.renderNewEventButton)
                }
            }
        })
    }
}