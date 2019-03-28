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
      component: () => import('@/layouts/Login')
    },
    {
      path: '/',
      component: () => import('@/layouts/Profile'),
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/Dashboard')
        },
        {
          path: '/goals',
          name: 'goals',
          component: () => import('@/views/Goals')
        },
        {
          path: '/my-goals',
          name: 'my-goals',
          component: () => import('@/views/MyGoals')
        },
      ]
    },
  ]
})
