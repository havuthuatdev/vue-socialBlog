import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home.vue"
import HomeGlobal from "@/views/HomeGlobal.vue"
import HomeFeed from "@/views/HomeFeed.vue"
import Profile from "@/views/profile.vue"
import ProfileArticles from "@/views/ProfileArticles.vue"
import ProfileFavorited from "@/views/ProfileFavorited.vue"
// import Register from '../views/Register'
// import Login from '../views/Login'
// import Home from '../views/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: HomeGlobal,
        },
        {
          path: '/feed',
          component: HomeFeed,
          meta: { requiresAuth: true },
        },
        // { path: 'tag/:tag', component: HomeTag, props: true }
      ]
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
    // {
    //   path: '/profile/:username',
    //   name: 'profile',
    //   component: () => import("@/views/Profile.vue")
    // },
    {
      path: '/profile/:username',
      component: Profile,
      props: true,
      children: [
        { path: '', component: ProfileArticles, name: 'ProfileArticles' },
        { path: 'favorites', component: ProfileFavorited, name: 'ProfileFavorited' }
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import("@/views/Setting.vue"),
      meta: { requiresAuth: true }
    },
  ]
})
