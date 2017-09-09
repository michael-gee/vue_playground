<template lang="html">
  <div class="child2">
    <h3 class="child-title">Child 2</h3>
    <button @click="changeUserAge">Change User Age</button>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  methods: {
    changeUserAge() {
      var detail = 123456789;
      //this.$emit('updateUserAge', detail);

      // So now that we created an Event Bus we can use that Vue instance and we send our custom event there instead of the parent compnent's
      eventBus.$emit('updateUserAge', detail);
    }
  }
}
</script>

<style lang="css">
.child2 {
  height: 200px;
  width: 50%;
  float: left;
}
</style>
