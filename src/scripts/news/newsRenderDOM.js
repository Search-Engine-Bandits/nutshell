// The responsibility of this module is to render components that pertain to the news article section to the DOM.

// imports
import newsHtml from "./newsFactoryHTML"

// targeting the articleList container, articleList container, and newButton containers
const articleContainerEl = document.querySelector("#articleContainer")
const articleListEl = document.querySelector("#articleListContainer")


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
        allArticlesHTML = ""
        articleArray.forEach(article => {
            const articleHtml = newsHtml.createArticleComponent(article)
            allArticlesHTML += articleHtml
        });
    }

}

export default renderNews