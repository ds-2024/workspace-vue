import { createRouter, createWebHistory } from 'vue-router'
import MemberLoginView from '../views/MemberLoginView.vue'
import AfterLoginFormView from '../views/AfterLoginFormView.vue'

const routes = [
  
  {
    path: '/member/login',
    name: 'MemberLoginView',
    component: MemberLoginView
  },
  {
    path: '/member/logininfo',
    name: 'AfterLoginFormView',
    component: AfterLoginFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
