import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import VuexCounterVue from '../components/vuex/VuexCounterVue'
import VuexEmployeeVue from '@/components/vuex/VuexEmployeeVue';
import VuexUserList from '@/components/vuex/VuexUserList'


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
    name: 'Vuexuserlist',
    component: VuexUserList
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
