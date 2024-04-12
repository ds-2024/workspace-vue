import { createRouter, createWebHistory } from 'vue-router'
import LoginFormView from '@/views/LoginFormView.vue'

const routes = [
  {
    path: '/login',
    name: '/login',
    component: LoginFormView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
