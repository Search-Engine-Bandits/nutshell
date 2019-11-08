export default {

    createSingleTask: (taskObject) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
    }
}