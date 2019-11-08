export default {

    createSingleTask: (taskObject) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
    },

    getAllTasks: () => {
        return fetch("http://localhost:8088/tasks?completed=false&_sort=compDate")
            .then(tasks => tasks.json())
    },

    getSingleTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`)
        .then(tasks => tasks.json())
    },

    completeTask: (taskObject) => {
        return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
        .then(task => task.json())
    }
    
}