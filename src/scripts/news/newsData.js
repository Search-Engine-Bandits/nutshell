const API = {
    getAllArticles: () => {
        return fetch("http://localhost:8088/articles?&_sort=timestamp&_order=desc")
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
    }
}

export default API