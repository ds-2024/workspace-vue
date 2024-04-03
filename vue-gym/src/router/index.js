import { createRouter, createWebHistory } from 'vue-router'
import MemberLoginView from '../views/member/MemberLoginView.vue'
import MainView from '../views/member/MainView.vue'
import ModifyMemberFormView from '../views/member/ModifyMemberFormView.vue'
import MemberJoinFormView from '../views/member/MemberJoinFormView.vue'


const routes = [

  {
    path: '/member/main',
    name: '/member/main',
    component: MainView
  },
  {
    path: '/member/login',
    name: '/member/login',
    component: MemberLoginView
  },
  {
    path: '/member/modify',
    name: '/member/modify',
    component: ModifyMemberFormView
  },
  {
    path: '/member/join',
    name: '/member/join',
    component: MemberJoinFormView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
