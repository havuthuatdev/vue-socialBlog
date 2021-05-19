
export const SET_ARTICLELIST = (state, payload) => {
    debugger;
    state.article = payload
}

export const SET_TAGS = (state, tags) => {
    state.tags = tags;
}

export const UPDATE_LIST_ARTICLE = (state, article) => {
    debugger;
    state.article = state.article.map((articleIndex) => {
        debugger;
        // console.log(articleIndex);
        if (articleIndex.slug !== article.slug) {
            console.log(articleIndex);
            return articleIndex
        } else {
            const { favorited, favoritesCount } = article
            debugger
            return Object.assign({}, articleIndex, { favorited, favoritesCount })
        }


    })
}