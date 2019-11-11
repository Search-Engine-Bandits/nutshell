export default {
    populateInitialView: () => {
        return `
        <header id="navBar"></header>
        <div id="domContainer">
            <div id="leftFrame">
                <aside id="friendList"></aside>
                <aside id="messageContainer">
                    <article id="messageList"></article>
                    <article id="newMessageDiv"></article>
                </aside>
            </div>
            <div id="rightFrame">
                <article id="taskContainer">
                    <div id="taskList">
                    </div>
                    <div id="newTaskDiv">
                    </div>
                </article>
                <article id="articleList"></article>
                <article id="eventList"></article>
            </div>
        </div>
            `
    },



}