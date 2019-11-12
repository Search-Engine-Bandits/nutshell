// The responsibility of this module is to listen for events that happen in the news article section of the DOM.

import renderNews from "./newsRenderDOM"
import API from "./newsData.js"

const newsListeners = {

    listenToNewArticleButton: () => {
        document.querySelector("#articleContainer").addEventListener("click", () => {
            if (event.target.id === "newArticleButton") {
                renderNews.renderNewArticleForm()
            }
        })
    },

    listenToSaveArticleButton: () => {
        document.querySelector("#articleContainer").addEventListener("click", () => {
            if (event.target.id === "saveArticleButton") {
                const userId = parseInt(sessionStorage.getItem("activeUser"))
                const articleName = document.querySelector("#newsTitle").value
                const synopsis = document.querySelector("#newsSynopsis").value
                const articleUrl = document.querySelector("#newsURL").value
                const timestamp = Date.now()

                if (userId && articleName && synopsis && articleUrl) {

                    // new article object
                    const newArticleObject = {
                        "userId": userId,
                        "articleName": articleName,
                        "synpopsis": synopsis,
                        "articleUrl": articleUrl,
                        "timestamp": timestamp
                    }
                    
                    //POST new article to API
                    API.addNewArticle(newArticleObject)
                    .then(API.getAllArticles)
                    .then(response => console.log(response))
                }
                else {
                    window.alert("Please complete all fields")
                }

            }

        })

    }
}

export default newsListeners