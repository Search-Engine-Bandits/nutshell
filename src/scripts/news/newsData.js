const API = {
    getAllArticles: () => {
        return fetch("http://localhost:8088/articles?&_sort=timestamp&_order=desc")
        .then(response => response.json())
    },

    getSingleArticle: (articleId) => {
        return fetch(`http://localhost:8088/articles/${articleId}`)
        .then(response => response.json())
    },

    addNewArticle: (articleObject) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObject)
        })
    },

    deleteSingleArticle: (articleId) => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE",
        })
        .then(response => response.json())
    },

    updateSingleArticle: (articleObject) => {
        return fetch(`http://localhost:8088/articles/${articleObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObject)
        })
        .then(article => article.json())
    }
}

export default API