import friendRenderDOM from "./friendsRenderDOM.js"
import api from "./friendsData.js"

export default {
    listenForAddFriend: () => {
        document.querySelector("#addFriendDiv").addEventListener("click", () => {
            if (event.target.id === "addFriendButton") {
                friendRenderDOM.renderAddFriendForm()
            }
            else if (event.target.id === "submitNewFriendButton") {

                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const friendName = document.querySelector("#friendName").value
               

                const friendObject = {
                    userId: userId,
                    friendName: friendName
                }

                if (userId && friendName) {

                    api.createFriendObject(friendObject)
                        .then(api.getAllFriends)
                        .then(response => friendRenderDOM.renderFriendList(response))
                }

                else {
                    window.alert("Please complete all fields!!!!")
                }

                friendRenderDOM.renderAddFriendButton()
            }
        })
    },
}