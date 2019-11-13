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
            // define loggedInUser
            const loggedInUser = parseInt(sessionStorage.getItem("activeUser"))
            let articleHtml = ""
            // if my article, create article component
            if (article.userId === loggedInUser) {
                articleHtml = newsHtml.createArticleComponent(article)
            }
            // if friends article, create friends article component
            allArticlesHTML += articleHtml
        })
        articleListEl.innerHTML = allArticlesHTML
    },

    renderEditForm: (articleObject) => {
        const articleDiv = document.querySelector(`#article--${articleObject.id}`)
        const populatedForm = newsHtml.editArticleForm(articleObject)
        articleDiv.innerHTML = populatedForm
    }

}

export default renderNews