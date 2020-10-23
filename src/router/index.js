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
  {
    path: '/exercise2',
    name: 'Exercise2',
    component: function () {
      return import(/* webpackChunkName: "exercise2" */ '../views/Exercise2/index.vue')
    }
  },
  {
    path: '/exercise2-answer',
    name: 'Exercise2Answer',
    component: function () {
      return import(/* webpackChunkName: "exercise2/answer" */ '../views/Exercise2Answer/index.vue')
    }
  },
  {
    path: '/exercise3',
    name: 'Exercise3',
    component: function () {
      return import(/* webpackChunkName: "exercise3" */ '../views/Exercise3/index.vue')
    }
  },
  {
    path: '/exercise3-answer',
    name: 'Exercise3Answer',
    component: function () {
      return import(/* webpackChunkName: "exercise3/answer" */ '../views/Exercise3Answer/index.vue')
    }
  },
  {
    path: '/exercise4',
    name: 'Exercise4',
    component: function () {
      return import(/* webpackChunkName: "exercise4" */ '../views/Exercise4/index.vue')
    }
  },
  {
    path: '/exercise4-answer',
    name: 'Exercise4Answer',
    component: function () {
      return import(/* webpackChunkName: "exercise4/answer" */ '../views/Exercise4Answer/index.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
