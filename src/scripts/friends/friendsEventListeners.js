import friendRenderDOM from "./friendsRenderDOM.js"
import friendAPI from "./friendsData.js"
import dashboard from "../dashboard.js"

export default {
    listenForAddFriend: () => {
        document.querySelector("#addFriendDiv").addEventListener("click", () => {
            if (event.target.id === "addFriendButton") {
                friendRenderDOM.renderAddFriendForm()
            }
            else if (event.target.id === "submitNewFriendButton") {

                const username = document.querySelector("#friendName").value
                let currentUserId = parseInt(sessionStorage.getItem("activeUser"))
                let potentialFriendId

                friendAPI.getAllUsers(username)
                .then(response => {

                    if (response.length === 0) {
                        window.alert("Please enter correct username")
                    } else {

                    potentialFriendId = parseInt(response[0].id)
                    
                    friendAPI.getAllFriends(currentUserId)

                    .then(r => {
                        const comparePotentialFriendToUsername = r.filter(r => (r.user.username===username))
                        
                        if (potentialFriendId===currentUserId) {
                            window.alert("You cannot friend yourself")
    
                        } else if  (comparePotentialFriendToUsername.length > 0) {
                            window.alert(`You are already friends with ${username}`)
    
                        } else {
                            const friendObject = {
                                currentUserId: currentUserId,
                                userId: potentialFriendId
                            }
                            friendAPI.createFriendObject(friendObject)
                            .then(() => {
                                return currentUserId
                            })
                            .then(dashboard.listenAndRenderDashboard)
                        }
                    })
                }
                
            })
            }
        })
    },

    listenForFriendDelete: () => {
        document.querySelector("#friendList").addEventListener("click", () => {

            if (event.target.id.includes("deleteFriend--")) {

                const deletedFriendId = event.target.id.split("--")[1]

                let currentUserId = parseInt(sessionStorage.getItem("activeUser"))

                friendAPI.deleteFriend(parseInt(deletedFriendId))
                    .then((response) => {
                        currentUserId = parseInt(sessionStorage.getItem("activeUser"))
                        return friendAPI.getAllFriends(currentUserId)
                    })
                    .then(dashboard.listenAndRenderDashboard)
            }
        })
    },
}