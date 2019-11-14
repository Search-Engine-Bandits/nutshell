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
        document.querySelector("#container").addEventListener("click", () => {
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
                        "synopsis": synopsis,
                        "articleUrl": articleUrl,
                        "timestamp": timestamp
                    }
                    
                    //POST new article to API, then get and render
                    API.addNewArticle(newArticleObject)
                    .then(API.getAllArticles)
                    .then(response => renderNews.renderAllArticles(response))
                    .then(renderNews.renderNewArticleButton)
                }
                else {
                    window.alert("Please complete all fields")
                }

            }

        })

    },

    listenToDeleteNewsButton: () => {
        document.querySelector("#articleContainer").addEventListener("click", () => {
            if (event.target.id.startsWith("newsDelete--")) {
                const deleteNewsId = event.target.id.split("--")[1]
                API.deleteSingleArticle(deleteNewsId)
                .then(API.getAllArticles)
                .then(response => renderNews.renderAllArticles(response))
            }
        })
    },

    listenToEditNewsButton: () => {
        document.querySelector("#articleContainer").addEventListener("click", () => {
            if (event.target.id.startsWith("newsEdit--")) {
                const editNewsId = event.target.id.split("--")[1]
                API.getSingleArticle(editNewsId)
                .then(response => {
                    const selectedArticle = response
                    renderNews.renderEditForm(selectedArticle)
                })
            }
        })
    },

    listenToUpdateNewsButton: () => {
        document.querySelector("#articleContainer").addEventListener("click", () => {
            if (event.target.id.startsWith("updateArticle--")) {
                const updateArticleId = event.target.id.split("--")[1]
                const updatedName = document.querySelector("#newsTitle").value
                const updatedSynopsis = document.querySelector("#newsSynopsis").value
                const updatedUrl = document.querySelector("#newsURL").value

                if (updatedName && updatedSynopsis && updatedUrl) {

                    // get original article
                    API.getSingleArticle(updateArticleId)
                    .then(article => {
                        // update the original article object to reflect updated values
                        article.articleName = updatedName
                        article.synopsis = updatedSynopsis
                        article.articleUrl = updatedUrl
                        
                        // update API with new article
                        API.updateSingleArticle(article)
                        
                        // get and render all articles
                        .then(API.getAllArticles)
                        .then(response => renderNews.renderAllArticles(response))
                    })
                }
                else {
                    window.alert("Please complete all fields")
                }
            }
        })
    }
}

export default newsListeners