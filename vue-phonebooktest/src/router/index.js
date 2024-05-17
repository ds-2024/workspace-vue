import { createRouter, createWebHistory } from 'vue-router'
import PhonelistTestView from '../views/PhonelistTestView.vue'

const routes = [
  {
      path: '/',
      name: 'PhonelistTestView',
      component: PhonelistTestView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
