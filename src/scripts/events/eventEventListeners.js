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
    }
}