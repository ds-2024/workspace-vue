import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue' /* @:src */
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/user/loginform',
    name: 'loginform', /* 이름같으면 페이지 안뜬다 */
    component: LoginFormView
  },
  {
    path: '/user/modifyform',
    name: 'modifyform', /* 이름같으면 페이지 안뜬다 */
    component: ModifyFormView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
