// initial page load of containers for each section to avoid conflicts and assist with styling

import authListeners from "./auth/authEventListeners.js"

export default {
    populateInitialView: () => {
        return /*html*/`
        <header id="navBar">
            <image id="navBarImage" src="../../images/1024px-Walnut.svg.png"></img>
            <h1>Nutshell<h1>
            <button id="logoutButton" type="submit">Logout</button>
       </header>
        <div id="domContainer">
            <div id="leftFrame">
                <aside id="friendContainer">
                    <h3>Friends</h3>
                    <div id="friendList">
                    </div>
                    <div id="addFriendDiv">
                    </div>
                </aside>
                <aside id="messageContainer">
                    <h3>Messages</h3>
                    <article id="messageList"></article>
                    <article id="newMessageDiv"></article>
                </aside>
            </div>
            <div id="rightFrame">
                <article id="taskContainer">
                    <h3>Tasks</h3>
                    <div id="taskList"></div>
                    <div id="newTaskDiv"></div>
                </article>
                <article id="articleContainer">
                    <h3>News Articles</h3>
                    <div id="articleListContainer"></div>
                    <div id="newArticleButtonContainer"></div>
                </article>
                <article id="eventList">
                    <h3>Events</h3>
                    <div id="newEventDiv"></div>
                    <div id="allEvents">
                        <div id="myEvents"></div>
                        <div id="friendEvents"></div>
                    </div>
                </article>
            </div>
        </div>
            `
    },

    
    populateWelcome: () => {
        authListeners.listenForWelcome()
        return `
        <div id="welcomeDiv">
            <h1>Welcome to Nutshell! Please click below to register.</h1>
            <button id="welcomeRegisterButton" type="submit">Register</button>
        <div>
        `
    },

    populateRegistration: () => {
        authListeners.listenForRegister()
        return `
        <div id="loginPage">

            <p>Please register below.</p>

            <label for="uname"><b>Username (email address)</b></label>
            <input id="usernameInput" type="email" placeholder="Enter Username" name="uname" required>

            <label for="pwd"><b>Password</b></label>
            <input id="passwordRegister" type="password" placeholder="Enter Password" name="pwd" required>

            <label for="confirmpwd"><b>Confirm Password</b></label>
            <input id="passwordConfirm" type="password" placeholder="Confirm Password" name="confirmpwd" required>

            <button id="registerButton" type="submit">Register</button>

        </div>
`
    }



}