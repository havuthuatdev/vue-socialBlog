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
import ApiService, { Article } from '../../../apis'

export const fetchArticle = ({ commit }, slug) => {
    commit("START_LOAD_ARTICLE");
    return Article.get(slug).then(({data}) => {
        commit("END_LOAD_ARTICLE", data.article)
    })
}

export const createArticle = ({ commit }, article) => {
    Article.create(article).then((response) => {
        commit("SET_ARTICLE", response.data)
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

