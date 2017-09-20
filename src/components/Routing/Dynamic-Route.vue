<template lang="html">
  <div class="component-container">
    <section>
      <!-- In the dynamic child component, we can gain access to our project ID by using props that is sent down from the parent, or just using the $route object params to get the value -->

      <p>Dynamic Component ID: {{ id }}</p>
      <p>{{ $route.params.id }}</p>

      <!-- We also have access to our query params that we pass with our url using $route.query.*queryName -->
      <p>Query Parameters:</p>
      <p>{{ $route.query.location }}</p>
      <p>{{ $route.query.favNum }}</p>

    </section>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: '21'
      }
    }
  }
</script>

<style lang="css">
</style>
