export default {
    newTaskButton: () => {
        return `
        <button id="newTaskButton">New Task</button>
        `
    },

    newTaskForm: () => {
        return `
        <label>Task Name</label>
        <input type="text" id="taskName" placeholder="Enter Task Name" required>
        <label>Expected Completion Date</label>
        <input type="date" id="taskDate" required>
        <button id="submitNewTaskButton">Submit</button>
        `
    },



}