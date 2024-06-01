import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/HeaderBar',
      name: 'HeaderBar',
      component: () => import('../components/HeaderBar.vue')
    },
    {
      path: '/MainView',
      name: 'MainView',
      component: () => import('../views/MainView.vue')
    }
  ]
})

export default router
