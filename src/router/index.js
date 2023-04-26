import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import VuexCounterVue from '../components/vuex/VuexCounterVue'
import EmployeeVue from '@/components/EmployeeVue';
import UserList from '@/components/UserList'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: VuexCounterVue
  },
  {
    path: '/employees',
    name: 'emplyees',
    component: EmployeeVue
  },
  {
    path: '/userList',
    name: 'userlist',
    component: UserList
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
