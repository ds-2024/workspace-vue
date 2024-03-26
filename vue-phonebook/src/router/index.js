import { createRouter, createWebHistory } from 'vue-router'
import PhoneListView from '../views/PhoneListView.vue'

const routes = [
  {
    path: '/',
    name: 'PhoneListView',
    component: PhoneListView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
