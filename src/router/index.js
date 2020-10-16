import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: function () {
      return import(/* webpackChunkName: "index page" */ '../views/index.vue')
    }
  },
  {
    path: '/exercise1',
    name: 'Exercise1',
    component: function () {
      return import(/* webpackChunkName: "exercise1" */ '../views/Exercise1/index.vue')
    }
  },
  {
    path: '/exercise1-answer',
    name: 'Exercise1Answer',
    component: function () {
      return import(/* webpackChunkName: "exercise1/answer" */ '../views/Exercise1Answer/index.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
