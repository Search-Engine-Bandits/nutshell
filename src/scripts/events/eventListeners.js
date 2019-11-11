import html from "./eventRenderDOM.js"

export default {

    listenForNewEvent: () => {
        document.getElementById("eventList").addEventListener("click", event => {
            if (event.target.id.includes("newEventButton")) {
                html.eventFormToDom()
            }
        })
    }
}