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

    taskItem: (taskObject) => {
        return `
       <div class="singleTask" id="singleTask--${taskObject.id}">
            <input type="checkbox" id="taskCheckbox--${taskObject.id}">
            <div class="taskName">${taskObject.task}</div>
            <div class="taskDate">Expected completion date: ${taskObject.compDate}</div>
            <button id="editTask--${taskObject.id}">Edit</button>
            <button id="deleteTask--${taskObject.id}">Delete</button>
       </div>
       `
    },

    editTaskForm: (taskObject) => {
        return `
        <label>Task Name</label>
        <input type="text" id="taskName--${taskObject.id}" placeholder="Enter Task Name" value="${taskObject.task}" required>
        <label>Expected Completion Date</label>
        <input type="date" id="taskDate--${taskObject.id}" value="${taskObject.compDate}"required>
        <button id="updateNewTaskButton--${taskObject.id}">Update</button>
        `
    }

}