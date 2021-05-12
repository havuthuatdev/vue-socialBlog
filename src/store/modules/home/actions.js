// export const getGlobalFeed = ({ commit }, payload = { page: 1 }) =>{
//     let route = "/articles";
//     if (payload) {
//         const {
//             tag = null,
//             author = null,
//             favorited = null,
//             page = 1
//         } = payload;
//         route += tag ? `tag=${tag}&` : "";
//         route += author ? `author=${author}&` : "";
//         route += favorited ? `favorited=${favorited}&` : "";
//         route += page ? `?offset=${(page - 1) * 10}&limit=10` : "";
//     }
//     const response = await api.get(route);
//     commit("setArticles", response.data);
// }
// export const getUserFeed = ({ commit }, payload = { page: 1 }) =>{
//     let route = "/articles/feed";
//     if (payload) {
//         const { page = 1 } = payload;
//         route += page ? `?offset=${(page - 1) * 10}&&limit=10` : "";
//     }
//     const response = await api.get(route);
//     commit("setArticles", response.data);
// }
// import Article from '../../../apis/Article'
import ApiService, { HomeArticles } from '../../../apis'

export const getArticle = ({ commit }, params) => {
    return HomeArticles.all(params = "?limit=7").then((response) => {
        commit("SET_ARTICLELIST", response.data.articles);
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
// export const getArticle = ({ commit }, slug) => {
//     // const user = await api.get("/user");
//     Article.get(slug).then((response) => {
//         commit("SET_Article", response.data.articles);
//         console.log(response.data.articles);
//         debugger;
//     })

// }
// export const searchArticle = ({ commit }, slug) => {
//     commit("START_LOAD_ARTICLE");
//     return Article.get("?limit=20")
//         .then(({ data }) => {
//             commit("END_LOAD_ARTICLE", data.article)
//             console.log(data.article);
//         })
// }
// export const setAuthorArticle = ({ commit, state }, author) =>{
//     debugger;
//     const article = Object.assign({}, state.article.data, { author })
//     commit("SET_ARTICLE", article)
//     debugger
//   }

// export const getArticle = ({ commit }) => {
//     return HomeArticles.get().then((response) => {
//         commit("SET_ARTICLE", response.data.articles);
//     })
// }