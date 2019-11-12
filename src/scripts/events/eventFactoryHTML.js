export default {
    newEventButton: () => {
        return `
        <button id="newEventButton">New Event</button>
        `
    },
    newEventForm: () => {
        return /*html*/`
        <h1>New Event</h1>
        <input type="hidden" id="hiddenEventId" value="">
        <label for="eventName">Name of Event</label>
        <input type="text" name="eventName" id="eventName--" required>
        <label for="eventDate">Date of Event</label>
        <input type="date" name="eventDate" id="eventDate--" required>
        <label for="eventLocation">Event Location</label>
        <input type="text" name="eventLocation" id="eventLocation--" required>
        <button id="eventSubmitButton--">Enter Event</button>
        `
    },
    eventFactoryFunction: (userId, name, date, location) => {
        return {
            userId: userId,
            name: name,
            date: date,
            location: location
        }
    },
    eventItem: (eventObject) => {
        return `
       <div class="singleEvent" id="singleEvent--${eventObject.id}">
            <div class="eventName">${eventObject.name}</div>
            <div class="eventDate">Date of event: ${eventObject.date}</div>
            <div class="eventLocation">Location of event: ${eventObject.location}</div>
            <button id="deleteEvent--${eventObject.id}">Delete</button>
            <button id="editEvent--${eventObject.id}">Edit</button>
       </div>
       `
    },
}