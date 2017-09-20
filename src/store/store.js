//To begin creating a VueX Central State (store) we must install VueX (which is an outside dependency) and then create its own JavaScript file to configure it

//To begin we import Vue along with Vuex and then apply it using the Vue.use() method
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

// Now that we have Vuex available, we can create our central store by using Vuex.store() which you pass an object for configuration
  // The purpose of the store is to hold the state of the application, so we can use the state property object to hold our application properties
export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    updateValue({ commit }, payload) {
      commit('updateValue', payload);
    }
  },
  // To include our counter.js module, we first import it and then can include it to the store by using the modules object to include all the state/statemanagement set up in that module
  modules: {
    counter
  }
});
