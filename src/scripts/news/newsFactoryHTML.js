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
    }

}

export default newsHTML