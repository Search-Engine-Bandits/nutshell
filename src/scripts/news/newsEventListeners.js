// The responsibility of this module is to listen for events that happen in the news article section of the DOM.

import renderNews from "./newsRenderDOM"

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

            }

        })

    }
}

export default newsListeners