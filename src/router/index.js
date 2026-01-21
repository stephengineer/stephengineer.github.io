import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Podcasts from '../views/Podcasts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/podcasts',
    name: 'Podcasts',
    component: Podcasts,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
