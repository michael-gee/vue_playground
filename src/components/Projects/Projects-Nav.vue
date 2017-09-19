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

  </div>
</template>

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
