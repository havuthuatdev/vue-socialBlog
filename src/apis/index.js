import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getToken } from './localStorage'
import { api } from './apiURL'

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = api
    },
    query (resource, params) {
      return Vue.axios
        .get(resource, { params })
        .catch((error) => {
          throw new Error(`[RWV] ApiService ${error}`)
        })
    },
    setHeader() {
        const token = getToken()
        if (token) {
            Vue.axios.defaults.headers.common['Authorization'] = `Token ${token}`
        } else {
            delete Vue.axios.defaults.headers.common['Authorization']
        }
    },
    get (resource, slug = '') {
      return Vue.axios
        .get(`${resource}/${slug}`)
        .catch((error) => {
          throw new Error(`[RWV] ApiService ${error}`)
        })
    },
  
    post (resource, params) {
      return Vue.axios.post(`${resource}`, params)
    },
    // update (resource, slug, params) {
    //   return Vue.axios.put(`${resource}/${slug}`, params)
    // },
  
    put (resource, params) {
      return Vue.axios
        .put(`${resource}`, params)
    },
  
    delete (resource) {
      return Vue.axios
        .delete(resource)
        .catch((error) => {
          throw new Error(`[RWV] ApiService ${error}`)
        })
    }
    
}
export default ApiService;

export const Auth = {
    login (user) {
      console.log(ApiService);
      return ApiService.post('users/login', user)
    },
    register (user) {
      return ApiService.post('users', user)
    },
    get () {
      return ApiService.get('user')
    },
    put (user) {
      return ApiService.put('user', user)
    },
    updateProfile (user) {
      return ApiService.put('user', { user} )
    }
  }
export const Article = {
    get(slug){
      return ApiService.get("articles",slug)
    }
}

