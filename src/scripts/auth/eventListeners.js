import html from "./mainFactoryHTML.js"

export default {

    listenForWelcome: () => {
        document.querySelector("#welcomeDiv").addEventListener("click", () => {
console.log("working")
            if (event.target.id.includes("welcomeRegisterButton")) {

                document.querySelector("#container").innerHTML = html.populateRegistration()
            }
        })
    }
}