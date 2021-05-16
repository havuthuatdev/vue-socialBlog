import ApiService, { Article } from '../../../apis'

export const fetchArticle = ({ commit }, slug) => {
    // commit("START_LOAD_ARTICLE");
    return Article.getArticle(slug).then(({ data }) => {
        commit("SET_ARTICLE", data.article)
        console.log(data.article);
    })
}

export const createArticle = ({ commit }, article) => {
    debugger;
    Article.createArcicle(article).then((response) => {
        debugger;
        commit("SET_ARTICLE", response.data)
        console.log(response.data);
    })
}

export const deleteArticle = ({commit}, slug) =>{
    debugger;
    Article.deleteArcicle(slug).then((response) =>{
        debugger;
        commit("SET_ARTICLE", response.data)
        console.log(response.data);
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

