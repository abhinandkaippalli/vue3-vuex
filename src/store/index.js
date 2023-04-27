import { createStore } from 'vuex'
import counterModule from './modules/counter.module'
import employeeModule from './modules/employee.module';
import userssModule from './modules/userss.module';

export default createStore({
  state: {
    counterState : counterModule.state,
    employeeState : employeeModule.state,
    usersState : userssModule.state
  },
  getters: {
    getCounterState: function(state) {
      return state.counterState.counter;
    },
    getEmployeeState: function(state) {
      return state.employeeState.employeesList;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule ,
    userssModule
  }
})
