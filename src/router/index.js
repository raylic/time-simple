import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/long-term',
    name: 'Long-term',
    component: () => import(/* webpackChunkName: "long-term" */ '../views/long-term.vue'),
    children:[
      
    ]
  },
  {
    path: '/Long-term-detail/:title',
    name: 'long-term-detail',
    component: () => import(/* webpackChunkName: "cross" */ '../views/long-term-detail.vue')
  },
  {
    path: '/cross',
    name: 'Cross',
    component: () => import(/* webpackChunkName: "cross" */ '../views/cross.vue')
  },
  {
    path: '/today-detail',
    name: 'Today-detail',
    component: () => import(/* webpackChunkName: "today-detail" */ '../views/today-detail')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "today-detail" */ '../views/setting')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
