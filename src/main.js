import Vue from 'vue'
import App from './App.vue'

// Event Buses must be registered before the main applicaton Vue instance
export const eventBus = new Vue();

//If you were to want to create a GLOBAL mixin, it would be added to EVERY SINGLE component in your application (you rarely want to use this).
//To create the global mixin you do Vue.mixin and pass the method an object which would the the vue instance passed to every component in the application
//Vue.mixin({});

// Vue.filter();

//To register a directive globally, we can register it here using the Vue.directive() method. In the first argument we specify the name of the directive(v-highlight) and the second argument is the object configuration of the directive.
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'yellow';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
