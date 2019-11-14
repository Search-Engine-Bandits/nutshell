import html from "../mainFactoryHTML.js"
import friendAPI from "../friends/friendsData.js"


export default {

    listenForWelcome: () => {
        document.querySelector("#welcomeDiv").addEventListener("click", () => {

            if (event.target.id.includes("welcomeRegisterButton")) {

                document.querySelector("#container").innerHTML = html.populateRegistration()
            }
        })
    },

    listenForRegister: () => {

        document.querySelector("#container").addEventListener("click", () => {

        const usernameInput = document.querySelector("#usernameInput").value.toLowerCase()
        const username = usernameInput.split("@")[0]
        const passwordRegister = document.querySelector("#passwordRegister").value
        const passwordConfirm = document.querySelector("#passwordConfirm").value
        
        
            if (event.target.id.includes("registerButton")) {

                friendAPI.getAllUsersByEmail(usernameInput)
                    .then(response => {
                        
                        console.log(response)

                        if (!usernameInput || !passwordRegister || !passwordConfirm) {
                            window.alert("Please complete all fields!")
                        }
                        else if (response.length === 1) {
                            window.alert("User already registered")

                        } else if (passwordRegister !== passwordConfirm){
                            window.alert("Passwords do not match.")
                        } else {

                            const userObject = {
                                username: username,
                                email: usernameInput
                            }
                            console.log(userObject)
                            return userObject


                        }
                        
                    })

                    .then()

                // document.querySelector("#container").innerHTML = html.populateInitialView()
                }
    })}
}