<template>
  <div class="events-container">
    <h2>Events Component</h2>
    <button id="event-button" @click="eventChangeName">Event Change Name</button>
  </div>
</template>

<script>
export default {
  methods: {
    eventChangeName() {
      var detail = {
        name: 'Name Changed from event!',
        age: 2349823492
      };
      // You can manipulate properties/events from child to parent components by invoking custom events. In Vue you do this by using the $emit() function with the name of the event passed as one parameter, and any data to go along with it as the next
      this.$emit('changeFromEvent', detail);
    }
  }
}
</script>

<style lang="css">
  #event-button {
    margin-top: 25px;
  }
</style>
