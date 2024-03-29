import { createRouter, createWebHistory } from 'vue-router'
import AfterLoginFormView from '../views/AfterLoginFormView.vue'

const routes = [
  {
    path: '/members/login',
    name: 'AfterLoginFormView',
    component: AfterLoginFormView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
