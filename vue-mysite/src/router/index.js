import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue' /* @:src */
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'

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
  },
  {
    path: '/attach/form',
    name: 'AttachFormView',
    component: AttachFormView
  },
  {
    path: '/attach/result',
    name: 'AttachResultView',
    component: AttachResultView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
