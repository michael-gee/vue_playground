//To begin creating a VueX Central State (store) we must install VueX (which is an outside dependency) and then create its own JavaScript file to configure it

//To begin we import Vue along with Vuex and then apply it using the Vue.use() method
import Vue from 'vue';
import Vuex from 'vuex';
// Separate module in our modules folder to hold our state for a specific part of our project (state managment for the Counter/Result part of our application)
import counter from './modules/counter';
// For state that is used more in the general application rather than a specific section, it would be better to just include it in the main store.js file, but if we have a lot of logic and state this file could grow big really fast so thats when we could also separate our concerns into separate files for organizational purposes
  // You can do this same approach WITHIN our modules file. Say if our counter state management module were to be getting too large, we could break it down like we do here.
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

// Now that we have Vuex available, we can create our central store by using Vuex.store() which you pass an object for configuration
  // The purpose of the store is to hold the state of the application in a centralized location that we can access from all components
export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters,
  mutations,
  actions,
  // To include our counter.js module, we first import it and then can include it to the store by using the modules object to include all the state/statemanagement set up in that module
  modules: {
    counter
  }
});
