<template>
  <div class="container">

    <ceg-header></ceg-header>

    <div class="content-container">

      <!-- <ceg-communication></ceg-communication> -->
      <!-- <ceg-forms></ceg-forms> -->
      <!-- <ceg-directives></ceg-directives> -->
      <!-- <ceg-filters></ceg-filters> -->
      <!-- <ceg-mixins></ceg-mixins> -->
      <ceg-animations></ceg-animations>

    </div>

    <ceg-footer></ceg-footer>

  </div>
</template>

<script>
  import Header from './components/Shared/Ceg-Header.vue';
  import Footer from './components/Shared/Ceg-Footer.vue';

  import Communication from './components/Communication/Ceg-Communication.vue';
  import Forms from './components/Forms/Ceg-Forms.vue';
  import Directives from './components/Directives/Ceg-Directives.vue';

  import Filters from './components/Filters&Mixins/Ceg-Filters.vue';
  import Mixins from './components/Filters&Mixins/Ceg-Mixins.vue';

  import Animations from './components/Animations/Ceg-Animations.vue';

  export default {
    components: {
      'ceg-header': Header,
      'ceg-footer': Footer,

      'ceg-communication': Communication,
      'ceg-forms': Forms,
      'ceg-directives': Directives,

      'ceg-filters': Filters,
      'ceg-mixins': Mixins,

      'ceg-animations': Animations
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
  }

  .component-container {
    margin: 0;
    padding: 25px 0;
    border: 1px solid #41B883;
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
