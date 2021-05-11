import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getToken } from './localStorage'
import { api } from './apiURL'


// định nghĩa các phương thức: get, post, put, delete.
// setHeader, query, init 
const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = api
  },
  query(resource, params) {
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
  get(resource, slug = '') {
    return Vue.axios
      .get(`${resource}/${slug}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },
  // update (resource, slug, params) {
  //   return Vue.axios.put(`${resource}/${slug}`, params)
  // },

  put(resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  delete(resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }

}
export default ApiService;

export const Auth = {
  login(user) {
    return ApiService.post('users/login', user)
  },
  register(user) {
    return ApiService.post('users', user)
  },
  get() {
    return ApiService.get('user')
  },
  put(user) {
    return ApiService.put('user', user)
  },
  updateProfile(user) {
    return ApiService.put('user', { user })
  }
}
export const Profile = {
  get (username) {
    return ApiService.get(`profiles/${username}`)
  },
  follow (username) {
    return ApiService.post(`profiles/${username}/follow`)
  },
  unFollow (username) {
    return ApiService.delete(`profiles/${username}/follow`)
  }
}
export const HomeArticles = {
  all(slug) {
    return ApiService.get("articles", slug)
  },
  getFeed(slug) {
    return ApiService.get("articles/feed", slug)
  },
  getTags(slug) {
    return ApiService.get("tags", slug)
  }

}

export const Article = {
  getArticle(slug) {
    return ApiService.get(`articles/${slug}`)
  },
  createArcicle(article) {
    return ApiService.post("articles", { article })
  },
  updateArcicle(slug, article) {
    return ApiService.put(`articles/${slug}`, { article })
  },
  deleteArcicle(slug) {
    return ApiService.delete(`articles/${slug}`)
  },
  addComment(slug, comment) {
    return ApiService.post(`articles/${slug}/comments`, { comment: { body: comment } })
  },
  getComment(slug) {
    return ApiService.get(`articles/${slug}/comments`)
  },
  deleteComment(slug, id) {
    return ApiService.delete(`articles/${slug}/comments/${id}`)
  },
  favoriteArticle(slug) {
    return ApiService.post(`articles/${slug}/favorite`)
  },
  unfavoriteArticle(slug) {
    return ApiService.delete(`articles/${slug}/favorite`)
  }
}


