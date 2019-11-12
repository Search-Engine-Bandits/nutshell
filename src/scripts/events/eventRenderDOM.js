import html from "./eventFactoryHTML.js"
export default {

    // object method for rendering the event button to the DOM
    renderNewEventButton: () => {
        let eventButton = html.newEventButton()
        document.querySelector("#newEventDiv").innerHTML = eventButton
    },
    // method to send form to dom
    eventFormToDom: () => {
        let eventForm = html.newEventForm()
        document.querySelector("#newEventDiv").innerHTML = eventForm
    },
    // method to send event object to dom
    eventToDom: (eventArray) => {
        let eventHTMLString = ""
        eventArray.forEach(event => {
            eventHTMLString += html.eventItem(event)
        })
        document.querySelector("#allEvents").innerHTML = eventHTMLString
    }
}