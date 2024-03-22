import { createRouter, createWebHistory } from 'vue-router'
import AddListView from '../views/AddListView.vue'
import DelFormView from '../views/DelFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: AddListView
  },
  {
    path: '/delete/:no',
    name: '/delform',
    component: DelFormView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
