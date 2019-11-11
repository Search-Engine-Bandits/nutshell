import html from "./eventFactoryHTML.js"
export default {

    // object method for rendering the task button to the DOM
    renderNewEventButton: () => {
        let eventButton = html.newEventButton()
        document.querySelector("#eventList").innerHTML = eventButton
    },
    eventFormToDom: () => {
        let eventForm = html.newEventForm()
        document.querySelector("#eventList").innerHTML = eventForm
    }
}