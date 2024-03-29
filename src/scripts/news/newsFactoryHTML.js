// The responsibility of this module is to create HTML components that pertain to the news article section of the DOM.

const newsHTML = {
    createNewArticleButton: () => {
        return /*html*/`
        <button id="newArticleButton">New Article</button>
        `
    },

    createNewArticleForm: () => {
        return /*html*/`
        <label for="newsTitle">News Title: </label>
            <p>
                <input type="text" name="newsTitle" id="newsTitle" placeholder="title" required>
            </p>
            <label for="newsSynopsis">Synopsis: </label>
            <p>
                <textarea rows="5" cols="20" name="newsSynopsis" id="newsSynopsis" placeholder="enter article summary" required></textarea>
            </p>
            <label for="newsURL">Link: </label>
            <p>
                <input type="text" name="newsURL" id="newsURL" placeholder="http://" required>
            </p>
            <button id="saveArticleButton">Save</button>
        `
    },

    createArticleComponent: (articleObject) => {
        return /*html*/`
        <article id="article--${articleObject.id}" class="selfArticle">
            <h3>${articleObject.articleName}</h3>
            <p>${articleObject.synopsis}</p>
            <p>
                <a href="${articleObject.articleUrl}" target="_blank">${articleObject.articleUrl}</a>
            </p>
            <button id="newsEdit--${articleObject.id}">Edit</button>
            <button id="newsDelete--${articleObject.id}">Delete</button>
        </article>
        `
    },

    createFriendArticleComponent: (articleObject) => {
        return /*html*/`
        <article id="article--${articleObject.id}" class="friendArticle">
            <h3>${articleObject.articleName}</h3>
            <p>${articleObject.synopsis}</p>
            <p>
                <a href="${articleObject.articleUrl}" target="_blank">${articleObject.articleUrl}</a>
            </p>
        </article>
        `
    },

    editArticleForm: (articleObject) => {
        return /*html*/`
        <label for="newsTitle">News Title: </label>
            <p>
                <input type="text" name="newsTitle" id="newsTitle" placeholder="title" value="${articleObject.articleName}" required>
            </p>
            <label for="newsSynopsis">Synopsis: </label>
            <p>
                <textarea rows="5" cols="20" name="newsSynopsis" id="newsSynopsis" placeholder="enter article summary" required>${articleObject.synopsis}</textarea>
            </p>
            <label for="newsURL">Link: </label>
            <p>
                <input type="text" name="newsURL" id="newsURL" placeholder="http://" value="${articleObject.articleUrl}" required>
            </p>
            <button id="updateArticle--${articleObject.id}">Update</button>
        `
    }

}

export default newsHTML