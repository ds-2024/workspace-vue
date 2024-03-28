import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ListView from '../views/ListView.vue'

const routes = [
  {
    path: '/main',
    name: 'MainView',
    component: MainView
  },

  {
    path: '/list',
    name: 'ListView',
    component: ListView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
