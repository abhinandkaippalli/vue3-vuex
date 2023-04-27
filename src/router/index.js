import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import VuexCounterVue from '../components/vuex/VuexCounterVue'
import VuexEmployeeVue from '@/components/vuex/VuexEmployeeVue';
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
    component: VuexEmployeeVue
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
