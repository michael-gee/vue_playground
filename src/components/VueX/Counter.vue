<template lang="html">
  <div>
    <!-- To pass multiple arguments, we must store it in an object with named properties which we can then use in our action/mutation in our store -->
    <button @click="asyncIncrement({by:100, duration: 500})">Increment</button>
    <button @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
  // mapMutations works almost identically to mapGetters (Another-Result), so instead of creating multiple methods just to execute our mutation we set up in our store, we can just grab the mutations by using mapMutations and listing them out by name in the array you pass to the method and then you can use the exact names in the HTML since they are the same.
  //import { mapMutations } from 'vuex';

  import { mapActions } from 'vuex';

  export default {

    methods: {
      // ***** Change state with mapActions(asycn) (5) *****
      ...mapActions([
        'asyncIncrement',
        'decrement',
        'asyncDecrement'
      ]),
      // ***** Change State through mapMutations(sycn) (4) *****
      /*
      // Since it is considered good practice to use actions even when our code is synchronous, we use it instead of our mutation
      ...mapMutations([
        'increment',
        'decrement'
      ])
      */

      /*
      Custom Events Method (1) -
        This method is the normal default method of passing an event to a parent component, but this is not efficient in larger application so that is why we use centralized state with vuex

      Change State Object Directly Method (2) -
        This method is changing the state object directly which works, but if used in multiple components can get very messy repeating code over and over again and will be really hard to find if something goes wrong with one of them

      Change Through commit() Inside of Method (3) -
        This method is calling the mutation from inside our store when our method is called, but just like example (2), this would lead us to having to rewrite custom methods in multiple components over and over and will have the same mess of a problem.

      Change State through mapMutations (4) -
        This method is using our centralized state to MUTATE our centralized properties. We use mapMutations with the es6 spread operators (which enables use to use the mapMutations object as well as our own custom methods in the methods:{} object) to list which mutations we declared in our centralized store we want to use in our component.

      Change State through Actions (5) -
        As stated in our store.js file, when creating mutations, all methods created must be SYNCHRONOUS, if we try to run async code it will mess up our centralized state because it is constantly looking to update changes from multiple components. To enable us to run async code we must perform an ACTION which is executed and once the a response is returned from the async functionality, then it will pass on and carry out the mutation to synchronously update our state

      increment() {
      ***** Custom Events Method (1) *****
        this.$emit('updated', 1);

      ***** Change State Object Directly Method(2) *****
      this.$store.state.counter++;

      ***** Change Through commit() Inside of Method (3) *****
      this.$store.commit('increment');
      },

      decrement() {
      ***** Custom Events Method (1) *****
        this.$emit('updated', -1);

      ***** Change State Directly Method(2) *****
        this.$store.state.counter--;

      ***** Change Through commit() Inside of Method (3) *****
        this.$store.commit('decrement');
      }
      */
    }
  }
</script>
