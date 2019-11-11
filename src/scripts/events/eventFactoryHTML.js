export default {
    newEventButton: () => {
        return `
        <button id="newEventButton">New Event</button>
        `
    },
    newEventForm: () => {
        return /*html*/`
        <h1>New Event</h1>
        <input id="hiddenEventId" value="">
        <label for="eventName">Name of Event</label>
        <input type="text" name="eventName" id="eventName--" required>
        <label for="eventDate">Date of Event</label>
        <input type="date" name="eventDate" id="date--" required>
        <label for="eventLocation">Event Location</label>
        <input type="text" name="eventLocation" id="eventLocation--" required>
        `
    }
}