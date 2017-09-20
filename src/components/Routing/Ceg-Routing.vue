<template lang="html">
  <div class="component-container">
    <section>
      <h1>Routing</h1>
      <br>

      <p>Routing is one of the main features to creating Single Page Applications (SPAs) to dynamically switch views between your components without having to refresh the application.</p>
      <p>Just like we did with resouces, we will use an outside dependency, <span v-highlight>vue-router</span> to create and set up routing in our application.</p>

      <hr>

      <p>By default the VueRouter is set up using hash (#) routing. When we send plain URL requests in the address bar, this tells the browser to send a request to the server. But Vue adds a /#/ in the address to make it to where any additional requests made within the web application like /#/monster-slayer is handled on the front end. </p>
      <p>If we were to want to get rid of this hash routing and just use regular routing, we must configure out server to where all requets get redirected to our index.html page. This works in our development server by default but might require some backend set up when using this in production.</p>

      <hr>

      <p>We set up our routes using <span v-highlight>router-link</span> in our Ceg-Homepage component.</p>
      <p>Refer to the vue-router-link image in the assets folder to review how the instructor created a different element (li instead of being transformed into an anchor tag by default) and choosing which one was currently selected.</p>

      <hr>

      <button @click="navigateToHome">Go To Homepage</button>
      <br>
      <br>

      <p>We navigate routing through code (in our JavaScript) using the $router object provided to us by vue-router.</p>

      <hr>
      <!-- In our routes.js, on our Routing route we added an optional dynamic param using the /:paramName so now whenever some additional information is passed after the routing route, we can capture and use it in this component which is shown in the paragaph below. -->
      <p v-highlight>Route message: {{ message }}</p>

      <hr>

      <button @click="changeMessage">Change Route Message</button>

      <p>(Look at URL once button is clicked as well as highlighted text above)</p>
      <!-- As you can see we can get our route param and display it to the screen using a data property, but notice when we change the route :message with this button that the address link route changes, but the value doesn't change in the highlighted message above. -->

        <!-- This happens because we are using the same component, only using a different path so Vue will not recreate the component just from a path change. -->

        <!-- We solve this by creating creating multiple instances of our route in our routes.js file and setting up props. You can see we have 2 Routing instances, one with no :message param passed and one with it included. If no :message is passed then the default prop 'default-route-message' will display as the message. -->

        <hr>

        <p>Child routes are shown in the Projects folder with the Ceg-Projects component along with the different project components.</p>

        <hr>

        <p>In Vue you can also configure a user's Authentication of leaving or entering a page, or making sure the user wants to leave before they close/leave the application.</p>
        <router-link tag="button" to="/guarded-routes">Guarded Routes</router-link>

        <hr>

        <div style="height: 700px;"></div>

        <!-- Since we give this element the ID of anchor, when we type address.com/routing#data the browser will route to the routing page and scroll directly to the element specified behind the hash -->
        <p id="anchor">Tag to be anchored to from anchor route</p>

    </section>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: 'default-route-message'
      }
    },
    methods: {
      navigateToHome() {
        // In our components we have $router available to us from the VueRouter dependency
          //To change the route from within our JavaScript we use the .push() method and specify which route we want to navigate to.
        this.$router.push('/');
      },
      changeMessage(){
        this.$router.push('/routing/ayy-lmao');
      }
    }
  }
</script>

<style lang="css">
</style>
