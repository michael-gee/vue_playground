<template lang="html">
  <div class="component-container">

    <section>
      <!-- So now that we have our router-view set up in the parent component, we can now set up our child routes exactly as we would normally. -->
      <router-link to="/projects/monster-slayer" class="page">
        <div>
          Monster Slayer
        </div>
      </router-link>

      <router-link to="/projects/quote-app" class="page">
        <div>
          Quote App
        </div>
      </router-link>
    </section>

    <hr>

    <!-- We can dynamically generate a new route by setting up the :id route in routes.js then we can configure which id we can generate by typing it into the input. The number of the input is passed as a string but we could then parseInt() it once we gain control of it through props in our Dynamic-Route element. -->
    <div>
      <label>Enter Project Id Number:</label>
      <input type="text" v-model.lazy.trim="projectId">

      <br><br>

      <!-- By default router-link changes the tag to an anchor tag, to change this we use the tag="" attribute to instead use a button, when clicked it will reroute the page to the specified destination. -->
      <router-link
        tag="button"
        :to="{name: 'projectIdRoute', params:{ id: projectId }}"
      >Navigate To Custom Project Id - Router Link</router-link>
      <!-- We must use the Vue binding :to this time because in the to: attribute we are passing more than just a string, a dynamic object property to go with it -->
        <!-- After you set up the name property on the child route object, we can now more easily bind to that subroute using an object in the :to attribute. You first specify the name of the route you are want to direct your application to, and then in the params: {} object you pass the project id as the id that is needed to load the route -->

      <button @click="navigateToProjectId">Navigate To Custom Project Id - Button</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectId: ''
      }
    },
    methods: {
      navigateToProjectId() {
        if( isNaN(parseInt(this.projectId)) ) {
          alert('Please input a number value.');
          this.projectId = '';
          return;
        }
        // Since we set up the name in the child route, we can also use it to change the route dynamically in our JavaScript code
        this.$router.push({
          name: 'projectIdRoute',
          params: { id: this.projectId },
          // To add query parameters to your Route you can also add the query object to the route config object So now when we change this route the additional information passed as the query params will be sent with it
          query: { location: 'en', favNum: 7 }
        });
      }
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .page {
    background-color: #41B883;
    color: white;
    padding: 25px 0;
    margin: 15px 15px;
    width: 30%;
    float: left;
  }
</style>
