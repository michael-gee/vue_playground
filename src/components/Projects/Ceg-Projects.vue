<template lang="html">
  <div class="component-container">
    <h1>Projects</h1>
    <section>

      <!-- When we use child components, the child components will no get rendered in the App.vue router-view so we must create another one in the parent component. -->
      <router-view></router-view>

    </section>
  </div>
</template>
