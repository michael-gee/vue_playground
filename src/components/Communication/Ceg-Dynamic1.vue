<template lang="html">
  <div class="container">
    <h3>Dynamic Component 1</h3>
    <button @click="counter++">Increase Counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  //In our dynamic components we have access to 2 lifecycle callbacks, which are activated and deactivated which run when the component gets rendered and deactivated from the component element tags
  activated() {
    console.log('Activated!');
  },
  deactivated() {
    console.log('Deativated!');
  }
}
</script>

<style lang="css">
</style>
