import Vue from 'vue'
import App from './App.vue'

// Event Buses must be registered before the main applicaton Vue instance
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
