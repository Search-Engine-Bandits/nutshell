import html from "./mainFactoryHTML.js"

export default {

listenForWelcome: () => {
    document.querySelector("#welcomDiv").addEventListener("click", () => {

        if (event.target.id.includes("registerButton")) {
            
            document.querySelector("#container").innerHTML = html.populateRegistration()
        }
    }

    )}
}