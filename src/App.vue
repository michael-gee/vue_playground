<template>
  <div class="container">

    <ceg-header></ceg-header>

    <div class="content-container">

      <!-- <ceg-communication></ceg-communication> -->
      <!-- <ceg-forms></ceg-forms> -->

    </div>

    <ceg-footer></ceg-footer>

  </div>
</template>

<script>
  import Header from './components/Shared/Ceg-Header.vue';
  import Footer from './components/Shared/Ceg-Footer.vue';

  import Communication from './components/Communication/Ceg-Communication.vue';
  import Forms from './components/Forms/Ceg-Forms.vue';

  export default {
    components: {
      'ceg-header': Header,
      'ceg-footer': Footer,

      'ceg-communication': Communication,
      'ceg-forms': Forms
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
    padding: 25px;
    margin: 0 auto;
    text-align: center;
    width: 1200px;
  }
  section {
    padding: 25px 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
    h1 {
      font-size: 3.2em;
    }
    h2 {
      font-size: 2.8em;
    }
    h3 {
      font-size: 2.5em;
    }
  p {
    font-size: 2em;
  }

  button {
    background-color: #41B883;
    color: white;
    border: none;
    font-size: 2em;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
  }
    button:hover {
      background-color: black;
    }
</style>
