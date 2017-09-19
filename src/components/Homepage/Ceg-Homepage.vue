<template lang="html">
  <div class="component-container">
    <h1>Homepage</h1>
    <section>
      <!-- When you just use a href="", this will send all requests to the server. To avoid this, Vue ships with the component <router-link></router-link> which you can use to making front end route changes without making the request to the server -->
      <router-link to="/communication" class="page">
        <div>
          Communication
        </div>
      </router-link>
      <!-- When using router-link, instead of using the href attribute you use to="" and provide the route path specified in your routes.js file -->
      <router-link to="/forms" class="page">
        <div>
          Forms
        </div>
      </router-link>
      <router-link to="/directives" class="page">
        <div>
          Directeves
        </div>
      </router-link>


      <router-link to="/filters" class="page">
        <div>
          Filters
        </div>
      </router-link>
      <router-link to="/mixins" class="page">
        <div>
          Mixins
        </div>
      </router-link>
      <router-link to="/animations" class="page">
        <div>
          Animations
        </div>
      </router-link>


      <router-link to="/http" class="page">
        <div>
          HTTP
        </div>
      </router-link>
      <router-link to="/routing" class="page">
        <div>
          Routing
        </div>
      </router-link>
      <router-link to="/projects" class="page">
        <div>
          Projects
        </div>
      </router-link>

      <a :href="codepenLink" target="_blank" id="codePen">
        Vue Intro Codepen
      </a>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        codepenLink: "https://codepen.io/michaelg22/pen/VMavqN?editors=1100"
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
  #codePen {
    margin: 0 auto;
    margin-top: 25px;
  }
</style>
