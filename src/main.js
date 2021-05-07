// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from "vue";
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store'
import ApiService from './apis'
// import {CHECK_AUTH} from './store/modules/users'
// Ensure we checked auth before each page load.
// store.dispatch(CHECK_AUTH);
// import axios from 'axios's
Vue.use(BootstrapVue)
Vue.config.productionTip = false

ApiService.init()

router.beforeEach((to, from, next) => {
  console.log(store.state.users);
  const { user } = store.state.users
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!user.username) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
Promise.race([
  store.dispatch('checkAuth'),
  new Promise((rs, rj) => setTimeout(rs, 500))
]).then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    // created(){
    //   this.$store.dispatch("checkAuth");

    // },
    template: '<App/>'
  })
})