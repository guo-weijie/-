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
    component: () => import('@/components/index'),
    name: 'Video',
    redirect: '/video/qsmy',
    children:[{
      path:'qsmy',
      component: () => import('@/views/video/video'),
      name: 'Qsmy'
    }]
  },
  {
    path: '/css',
    component: () => import('@/components/index'),
    name: 'Css',
    redirect: '/css/macao',
    children:[{
      path:'macao',
      component: () => import('@/views/css/macao'),
      name: 'Macao'
    }]
  },
  {
    path: '/app',
    component: () => import('@/components/index'),
    name: 'App',
    redirect: '/app/download',
    children:[{
      path:'download',
      component: () => import('@/views/app/index'),
      name: 'Download'
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
