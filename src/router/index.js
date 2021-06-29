import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Lei from '@/views/lei/Lei.vue'
import Shop from '@/views/shop/Shop.vue'
import Me from '@/views/me/Me.vue'

const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/lei',
    component: Lei
  }, {
    path: '/shop',
    component: Shop
  }, {
    path: '/me',
    component: Me
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
