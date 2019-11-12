import html from "./eventRenderDOM.js"
import factoryFunction from "./eventFactoryHTML.js"
import api from "./eventData.js"

export default {

    listenForNewEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            if (event.target.id.includes("newEventButton")) {
                html.eventFormToDom()
            } else if (event.target.id.includes("eventSubmitButton--")) {
                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const name = document.getElementById("eventName--").value
                const date = document.getElementById("eventDate--").value
                const location = document.getElementById("eventLocation--").value
                const eventObject = factoryFunction.eventFactoryFunction(userId, name, date, location)
                api.createSingleEvent(eventObject)
            }
        })
    },
    listenforDeleteEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEvent--")) {
                console.log("delete button clicked")
                const eventToDelete = event.target.id.split("--")[1]
                console.log("event to delete", eventToDelete)
                api.deleteEvent(eventToDelete)
                .then(api.allEvents)
            }
        })
    }
}