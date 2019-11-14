/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/


// main
import html from "./mainFactoryHTML.js"
import welcome from "./auth/authEventListeners.js"
import dashboard from "./dashboard.js"


// Check to see if a user is currently logged in on current tab
if (sessionStorage.getItem("activeUser")) {
    dashboard.listenAndRenderDashboard()
}
else {
    document.querySelector("#container").innerHTML = html.populateWelcome()
    welcome.listenForWelcome()
    welcome.listenForRegister()
}
