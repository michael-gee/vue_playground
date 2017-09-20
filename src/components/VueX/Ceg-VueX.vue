<template lang="html">
  <div class="component-container">
    <section>
      <h1>Vuex</h1>

      <p><span v-highlight>State Management</span> using Vue.js alone can get complicated and confusing. In past sections of courses, we went over example of state management using custom event emitters and listeners from child-parent-child communcation along with Event Buses. But this in no the most optimal way of state management, and this is where <span v-highlight>VueX</span> comes in.</p>

      <hr>

      <p>VueX uses a <span v-highlight>Central State</span>, which means data properties and other things that will be used in multiple locations of your application can be stored/changed/used by your entire application through this central state (store).</p>

      <hr>

      <!--
      <app-result :counter="counter"></app-result>
      <app-counter @updated="counter += $event"></app-counter>
      -->

      <p>These elements use all the methods we have learned when it comes to state management. The old methods are commented out but explained while the best practices (Vuex) are the ones in use.</p>

      <app-result></app-result>
      <app-counter></app-counter>

      <hr>

      <h3>2 Way Data Binding</h3>
      <!-- v-model does not work with computed properties which holds the value of our value property in our centralized state because it is contained in a GETTER which is only used to display data. -->
      <input type="text" v-model="value">
      <p>{{ value }}</p>


    </section>
  </div>
</template>

<script>
  import Counter from './Counter.vue';
  import Result from './Result.vue';

  export default {
    /*
    data() {
      return {
        counter: 0
      }
    },
    */
    computed: {
      // To make it to where we can use 2 way data binding with our computed property (which we rarely will use) we turn the comuted property into an object with a get() and set() method, which the get method recieves the data from the store and the set() method dispatches the updateValue action in our store. You can now see that our 2 way data binding works in our application
      value:{
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch('updateValue', event.target.value);
        }
      }
    },

    components: {
      appCounter: Counter,
      appResult: Result
    }
  }
</script>
