export default {
    populateInitialView: () => {
        return `
        <header id="navBar"></header>
        <div id="domContainer">
            <div id="leftFrame">
                <aside id="friendList"></aside>
                <aside id="messageList"></aside>
            </div>
            <div id="rightFrame">
                <article id="taskContainer">
                    <div id="taskList">
                    </div>
                    <div id="newTaskButton">
                    </div>
                </article>
                <article id="articleList"></article>
                <article id="eventList"></article>
            </div>
        </div>
            `
    },



}