import html from "./eventFactoryHTML.js"
export default {

    // object method for rendering the task button to the DOM
    renderNewEventButton: () => {
        let eventButton = html.newEventButton()
        document.querySelector("#newEventDiv").innerHTML = eventButton
    },
    eventFormToDom: () => {
        let eventForm = html.newEventForm()
        document.querySelector("#newEventDiv").innerHTML = eventForm
    },
    eventToDom: (eventArray) => {
        let eventHTMLString = ""
        eventArray.forEach(event => {
            eventHTMLString += html.eventItem(event)
        })
        document.querySelector("#allEvents").innerHTML = eventHTMLString
    }
}