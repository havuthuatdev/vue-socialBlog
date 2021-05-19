import { HomeArticles } from '../../../apis'

export const getArticle = ({ commit }, params) => {
    return HomeArticles.all(params).then((response) => {
        commit("SET_ARTICLELIST", response.data.articles);
        console.log(response.data.articles);
    })
}

export const getArticleFeed = ({ commit }) => {
    return HomeArticles.getFeed().then((response) => {
        commit("SET_ARTICLELIST", response.data.articles);
    })
}

export const getTags = ({ commit }) => {
    return HomeArticles.getTags().then((response) => {
        commit("SET_TAGS", response.data.tags)
    })
}