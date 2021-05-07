import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/user'
import articles from './modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {},
    // mutations: {},
    // actions: {},
    // state,
    // getters,
    // mutations,
    // actions,
    modules:{
        users,
        articles
    }
})