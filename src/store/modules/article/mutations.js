export const START_LOAD_ARTICLE = (state) => {
    state.article = {
        isLoading: true,
        data: {}
    }
}
export const END_LOAD_ARTICLE = (state, article) => {
    state.article = {
        isLoading: false,
        data: article
    }
}

export const SET_ARTICLE = (state, articles) => {
    state.article = articles;
    console.log(state.article);
}