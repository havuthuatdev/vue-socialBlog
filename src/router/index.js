import Vue from 'vue'
import Router from 'vue-router'
// import Register from '../views/Register'
// import Login from '../views/Login'
// import Home from '../views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import("@/views/Home.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/Register.vue")     
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login.vue")
    },
    {
      path: '/editor',
      name: 'editor_new',
      component: () => import("@/views/ArticleCreate.vue")
    },
    {
      path: '/editor/:article-slug',
      name: 'editor_edit',
      component: () => import("@/views/ArticleEdit.vue")
    },
    {
      path: '/article/:article-slug',
      name: 'article',
      component: () => import("@/views/Article.vue")
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: () => import("@/views/Profile.vue")
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import("@/views/Setting.vue"),
      meta: { requiresAuth: true }
    }
  ]
})
