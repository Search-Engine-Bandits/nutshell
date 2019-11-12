export default {
    populateInitialView: () => {
        return /*html*/`
        <header id="navBar"></header>
        <div id="domContainer">
            <div id="leftFrame">
                <aside id="friendList"></aside>
                <aside id="messageList"></aside>
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