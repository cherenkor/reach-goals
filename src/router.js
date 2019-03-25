import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./layouts/Login.vue')
    },
    {
      path: '/',
      name: 'profile',
      component: () => import('./layouts/Profile.vue'),
      children: [
      ]
    },
  ]
})
