import html from "./friendsFactoryHTML.js"

export default {
    renderAddFriendButton: () => {
        let friendButton = html.addFriendButton()
        document.querySelector("#addFriendDiv").innerHTML = friendButton
    },

    renderAddFriendForm: () => {
        let newFriendForm = html.addFriendForm()
        document.querySelector("#addFriendDiv").innerHTML = newFriendForm
    }
}