<template>
  <div class="container">

    <ceg-header></ceg-header>

    <div class="content-container">
      <!-- In our HTML we use router-view to place where we want our component routes to register -->
      <!-- To add animations when we switch our routes, we can simply wrap a transition tag around our router-view and now every time our routes change, the animations we specify will be triggered -->
      <transition
        appear
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">

          <router-view></router-view>
          
      </transition>
    </div>

    <ceg-footer></ceg-footer>

  </div>
</template>

<script>
  import Header from './components/Shared/Ceg-Header.vue';
  import Footer from './components/Shared/Ceg-Footer.vue';

  export default {
    components: {
      'ceg-header': Header,
      'ceg-footer': Footer
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: arial;
  }
  .content-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #41B883;
  }

  .component-container {
    margin: 0;
    padding: 25px 0;
  }

  section {
    padding: 25px;
    font-size: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    font-size: 20px;
  }

  button {
    background-color: #41B883;
    color: white;
    border: none;
    font-size: 20px;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
  }
    button:hover {
      background-color: black;
    }
</style>
