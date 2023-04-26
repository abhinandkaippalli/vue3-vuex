import { createStore } from 'vuex'
import counterModule from './modules/counter.module'

export default createStore({
  state: {
    counterState : counterModule.state
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule
  }
})
