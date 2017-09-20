<template lang="html">
  <div class="component-container">
    <section>
      <h1>Guarded Component</h1>

      <hr>

      <h3>Before Enter</h3>
    </section>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        guardedProp: false,
        confirmed: false
      }
    },
    // We can also configure our beforeEnter functionality from within our component this time using the beforeRouteEnter method on the Vue instance object. It works the exact same as the 2 previous methods (global and routes.js config)
    beforeRouteEnter(to, from, next) {
      // A common use case for this method is to check if a User is correctly authenticated to access to a page. We do this by checking if the user is authenticated and if they are we passs the next() method, but if they aren't we pass the next(false which prevents this component from being loaded)
      if ( true ){
        next();
      } else {
        return;
      }
      // This method is configured before creation, so if we had a data() object in the Vue instance, WE CAN NOT ACCESS ANY PROPERTIES OR METHODS from within this beforeRouteEnter because the component hasn't been created yet

      //if you MUST access your data from within this method you must do so by passing a callback function to the next method
      next((vm) => {
        vm.guardedProp;
      });
    },


    // Just like beforeRouteEnter we can set up a Vue instance method beforeRouteLeave which does the exact same thing, except it runs when a user is trying to leave this route
    beforeRouteLeave(to, from, next) {
      // This method is run after the component has already been created so you can use properties and methods from within this method
      if( this.confirmed ) {
        next();
      } else {
        if (confirm('Are you sure?')) {
          next();
        }else {
          return;
        }
      }
    }
  }
</script>

<style lang="css">
</style>
