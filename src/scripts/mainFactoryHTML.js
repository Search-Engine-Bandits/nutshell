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
                    <div id="newTaskDiv">
                    </div>
                </article>
                <article id="articleList"></article>
                <article id="eventList">
                    <div id="newEventDiv">
                    </div>
                </article>
            </div>
        </div>
            `
    },



}