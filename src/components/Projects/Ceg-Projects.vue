<template lang="html">
  <div class="component-container">
    <h1>Projects</h1>
    <section>

      <!-- When we use child components, the child components will no get rendered in the App.vue router-view so we must create another one in the parent component. -->
      <router-view name="header-top"></router-view>
      <router-view></router-view>
      <router-view name="header-bottom"></router-view>
      <!-- This is not necessarily a common use case, but we can specify multiple router-views with different component layouts and make Vue use the desired one by providing it a name="" attribute -->

    </section>
  </div>
</template>
