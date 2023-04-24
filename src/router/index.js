import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CounterVue from '@/components/CounterVue';
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
    component: CounterVue
  },
  {
    path: '/employees',
    name: 'emplyees',
    component: EmployeeVue
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
