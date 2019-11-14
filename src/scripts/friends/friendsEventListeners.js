import friendRenderDOM from "./friendsRenderDOM.js"
import api from "./friendsData.js"

export default {
    listenForAddFriend: () => {
        document.querySelector("#addFriendDiv").addEventListener("click", () => {
            if (event.target.id === "addFriendButton") {
                friendRenderDOM.renderAddFriendForm()
            }
            else if (event.target.id === "submitNewFriendButton") {

                const username = document.querySelector("#friendName").value
                let currentUserId = parseInt(sessionStorage.getItem("activeUser"))

                api.getAllUsers(username)
                    .then(response => {

                        const userId = parseInt(response[0].id)

                        const friendObject = {
                            currentUserId: currentUserId,
                            userId: userId
                        }
                        
                        return friendObject

                    })
                    .then(response => {

                       return api.createFriendObject(response)

                    })
                    .then((response) => {
                        currentUserId = parseInt(sessionStorage.getItem("activeUser"))
                        return api.getAllFriends(currentUserId)
                    })
                    .then(response => {
                        friendRenderDOM.renderFriendList(response)
                    })

                friendRenderDOM.renderAddFriendButton()



            }
        })
    },

    listenForFriendDelete: () => {
        document.querySelector("#friendList").addEventListener("click", () => {

            if (event.target.id.includes("deleteFriend--")) {

                const deletedFriendId = event.target.id.split("--")[1]

                let currentUserId = parseInt(sessionStorage.getItem("activeUser"))

                api.deleteFriend(parseInt(deletedFriendId))
                    .then((response) => {
                        currentUserId = parseInt(sessionStorage.getItem("activeUser"))
                        return api.getAllFriends(currentUserId)
                    })
                    .then(response => { friendRenderDOM.renderFriendList(response) }
                    )
            }
        })
    },
}