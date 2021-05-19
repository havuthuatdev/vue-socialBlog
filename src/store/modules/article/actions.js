import { Article } from '../../../apis'

export const fetchArticle = ({ commit }, slug) => {
    // commit("START_LOAD_ARTICLE");
    debugger
    return Article.getArticle(slug).then(({ data }) => {
        debugger;
        commit("SET_ARTICLE", data.article)
        debugger
        console.log(data.article);
    })
}
  
export const createArticle = ({ commit }, article) => {
    Article.createArcicle(article).then((response) => {
        commit("SET_ARTICLE", response.data.article)
        console.log(response.data);
    })
}

export const deleteArticle = ({ commit }, slug) => {
    Article.deleteArcicle(slug).then((response) => {
        commit("SET_ARTICLE", response.data.article)
        console.log(response.data);
    })
}

export const updateArticle = ({ commit }, slug, article) => {
    Article.updateArcicle(slug).then((response) => {
        commit("SET_ARTICLE", response.data)
    })
}

export const favoritesArticle = ({ commit }, slug) => {
    debugger;
    Article.favoriteArticle(slug).then((response) => {
        debugger;
        // this.$store.dispatch("updateArticle", data.article) 
        commit("UPDATE_LIST_ARTICLE", response.data.article);
        commit("SET_ARTICLE", response.data.article)
        // commit("SET_ARTICLELIST", response.data.article);
        debugger;
    })
}
export const unfavoritesArticle = ({ commit }, slug) => {
    debugger;
    Article.unfavoriteArticle(slug).then((response) => {
        commit("UPDATE_LIST_ARTICLE", response.data.article)
    })
}

