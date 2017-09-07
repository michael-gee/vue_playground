import Vue from 'vue'
import App from './App.vue'

import Home from './components/Ceg-Home.vue'

Vue.component('ceg-home', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
