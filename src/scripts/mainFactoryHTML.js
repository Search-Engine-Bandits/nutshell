// initial page load of containers for each section to avoid conflicts and assist with styling
export default {
    populateInitialView: () => {
        return /*html*/`
        <header id="navBar"></header>
        <div id="domContainer">
            <div id="leftFrame">
                <aside id="friendContainer">
                    <div id="friendList">
                    </div>
                    <div id="addFriendDiv">
                    </div>
                </aside>
                <aside id="messageContainer">
                    <article id="messageList"></article>
                    <article id="newMessageDiv"></article>
                </aside>
            </div>
            <div id="rightFrame">
                <article id="taskContainer">
                    <div id="taskList"></div>
                    <div id="newTaskDiv"></div>
                </article>
                <article id="articleContainer">
                    <div id="articleListContainer"></div>
                    <div id="newArticleButtonContainer"></div>
                </article>
                <article id="eventList">
                    <div id="newEventDiv"></div>
                    <div id="allEvents"></div>
                </article>
            </div>
        </div>
            `
    },



}