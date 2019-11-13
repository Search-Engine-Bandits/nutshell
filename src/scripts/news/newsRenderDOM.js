// The responsibility of this module is to render components that pertain to the news article section to the DOM.

// imports
import newsHtml from "./newsFactoryHTML"


const renderNews = {
    renderNewArticleButton: () => {
        const newButtonEl = document.querySelector("#newArticleButtonContainer")
        const newButton = newsHtml.createNewArticleButton()
        newButtonEl.innerHTML = newButton
    },

    renderNewArticleForm: () => {
        const newFormEl = document.querySelector("#newArticleButtonContainer")
        const newForm = newsHtml.createNewArticleForm()
        newFormEl.innerHTML = newForm
    },

    renderAllArticles: (articleArray) => {
        let allArticlesHTML = ""
        const articleListEl = document.querySelector("#articleListContainer")
        articleArray.forEach(article => {
            const articleHtml = newsHtml.createArticleComponent(article)
            allArticlesHTML += articleHtml
        })
        articleListEl.innerHTML = allArticlesHTML
    }

}

export default renderNews