import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    error_msg:'',
    users_data: []
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.value;
    },
    // decrement(state) {
    //   state.counter -= 1;
    // }
    decrement(state, payload) {
      state.counter -= payload.value;
    },
    usersData(state, payload) {
      return state.users_data = payload;
    },
    errorMessage(state, payload) {
      return state.error_msg = payload;
    }
  },
  actions: {
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getUsersData(state) {
      return state.users_data;
    },
    getErrorMessage(state) {
      return state.error_msg;
    }
  },
  modules: {
  }
})
