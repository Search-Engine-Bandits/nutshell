import html from "./eventFactoryHTML.js"
const currentUser = parseInt(sessionStorage.getItem("activeUser"))
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
            if (currentUser === event.userId) {
                eventHTMLString += html.eventItem(event)
            }
        })
        document.querySelector("#myEvents").innerHTML = eventHTMLString
    },
    friendEventToDom: (eventArray) => {
        let friendEventHTML = ""
        eventArray.forEach(event => {
            console.log("event in friendEventToDom", event.events)
            if (event.friends.length > 0) {
                console.log("events after if", event.events)
                event.events.forEach(eventTwo => {
                    console.log("eventTwo", eventTwo)
                    friendEventHTML += html.friendEventItem(eventTwo)
                })
            }
        })
        document.getElementById("friendEvents").innerHTML = friendEventHTML
    },
    editEventFormToDom: () => {
        let editEventForm = html.editEventForm()
        document.getElementById("newEventDiv").innerHTML = editEventForm
    }
}