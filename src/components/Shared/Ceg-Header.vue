<template lang="html">
  <header>
    <h1>Vue Playground</h1>
    <router-link to="/" id="home-icon">
      <span class="glyphicon glyphicon-home"></span>
    </router-link>
  </header>
</template>

<style scoped>
  header {
    margin: 0;
    background-color: #41B883;
    color: white;
    padding-top: 25px;
    text-align: center;
    overflow: hidden;
    width: 100%;
  }

  #home-icon {
    font-size: 26px;
    color: white;
  }
  span {
    margin: 15px 0;
  }
</style>
