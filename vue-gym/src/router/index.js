import { createRouter, createWebHistory } from 'vue-router'
import MemberLoginView from '../views/member/MemberLoginView.vue'
import AfterLoginView from '../views/member/AfterLoginView.vue'
import ModifyMemberFormView from '../views/member/ModifyMemberFormView.vue'
import MemberJoinFormView from '../views/member/MemberJoinFormView.vue'

const routes = [
  
  {
    path: '/member/login',
    name: 'MemberLoginView',
    component: MemberLoginView
  },
  {
    path: '/member/logininfo',
    name: '/member/logininfo',
    component: AfterLoginView
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
