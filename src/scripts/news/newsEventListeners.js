// The responsibility of this module is to listen for events that happen in the news article section of the DOM.

import renderNews from "./newsRenderDOM"

const newsListeners = {

    listenToNewArticleButton: () => {
        document.querySelector("#articleContainer").addEventListener("click", () => {
            if (event.target.id === "newArticleButton") {
                renderNews.renderNewArticleForm()
            }
        })
    }

}

export default newsListeners