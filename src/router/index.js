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
    path: '/video',
    name: 'video',
    component: () => import('@/views/video/video')
  },
  {
    path: '/macao',
    name: 'macao',
    component: () => import('@/views/css/macao')
  }
]

const router = new VueRouter({
  routes
})

export default router
