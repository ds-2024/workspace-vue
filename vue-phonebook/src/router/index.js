import { createRouter, createWebHistory } from 'vue-router'
import PhoneListView from '../views/PhoneListView.vue'
import PhoneWriteFormView from '../views/PhoneWriteFormView.vue'
import PhoneModifyFormView from '../views/PhoneModifyFormView.vue'


const routes = [
  {
    path: '/',
    name: 'PhoneListView',
    component: PhoneListView
  },
  {
    path: '/write',
    name: 'PhoneWriteFormView',
    component: PhoneWriteFormView
  },
  {
    path: '/modify/:no',
    name: 'PhoneModifyFormView',
    component: PhoneModifyFormView
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
