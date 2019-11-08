/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/




import html from "./mainFactoryHTML.js"

// adding initial HTML framework to the DOM

document.querySelector("#container").innerHTML = html.populateInitialView()


