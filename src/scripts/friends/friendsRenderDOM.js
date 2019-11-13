import html from "./friendsFactoryHTML.js"

export default {
    renderAddFriendButton: () => {
        let friendButton = html.addFriendButton()
        document.querySelector("#addFriendDiv").innerHTML = friendButton
    },

    renderAddFriendForm: () => {
        let newFriendForm = html.addFriendForm()
        document.querySelector("#addFriendDiv").innerHTML = newFriendForm
    },

    renderFriendList: (friends) => {
        let friendList = ""
        friends.forEach(friend => {
            console.log(friend)
            const friendHtml = html.friendItem(friend)
            friendList += friendHtml
        })
        document.querySelector("#friendList").innerHTML = friendList
    },
}