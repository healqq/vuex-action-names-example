import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT } from './Actions';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    counter: {
      namespaced: true,
      state: {
        count: 0,
      },
      mutations: {
        increment(state) {
          state.count += 1;
        },
      },
      actions: {
        [INCREMENT]({ commit }) {
          commit('increment');
        },
      },
    },
  },
});

export default store;
