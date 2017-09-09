<template lang="html">
  <div class="child1">
    <h3 class="child-title">Child 1</h3>
    <p>User Age: {{ userAge }}</p>
  </div>
</template>

<!-- ********* BEST PRACTICE -->
<!-- Although you can do it that way and do back and forth between the child and parent components, that can get very complicated very quickly. An easier solution (best practice) is to use what are called 'event buses' in Vue which are exactly like using Services in Angular -->

<!-- State management seems like a hassle but later in the course is VueX which is said to make this state management much easier but is not until later in the course -->

<script>
// We start by creating our Event Bus in our main.js file and then we can now import it in our component files
import { eventBus } from '../../main.js';

export default {
  // So we set up a custom event in a child component and expect that event to affect this component so we need to listen for when that event triggers. And the best way to set up event listeners is inside the created() Vue lifecycle hook
  created() {
    // Using the $on() method creates an event listener for us. It takes 2 parameters, the 1st being the name of the custom event being emitted and the 2nd being a callback function to execute which the event gets triggered
    eventBus.$on('updateUserAge', (data) => {
      this.userAge = data;
    });
  },

  //To pass update properties/data in other child components you cannot directly do it from child -> child, you must send an event from one child to update the parent component to pass the updated data back down to the different child component (Or use Event Buses).
  // You can see we do this by getting the age data property from the parent element and in ceg-child2 we will create a method that will change the value in the parent component which will then update the value of the prop send down to this child component.
  props: {
    userAge: Number
  }

}
</script>

<style lang="css">
  .child1 {
    height: 200px;
    width: 50%;
    float: left;
  }
  /* THIS CSS SELECTOR IS NOT SCOPED SO WILL ALSO ALTER THE 2ND CHILD'S TITLE TOO */
  .child-title {
    margin: 25px 0;
  }
</style>
