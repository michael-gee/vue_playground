<template lang="html">
  <!-- In components all your HTML must be wrapped inside of a single div (the container) for it to be registered correcly in Vue -->
  <div class="container">
    <h1>Home Component</h1>
    <p :style="myStyle">My name is {{ name }} and I am {{ age }} years old.</p>
    <button @click="changeColor">Change Paragraph Color</button>

    <!-- PROPS -->
    <!-- To pass properties from this element (the parent element) to the ceg-practice element (the child element) we use HTML attributes like shown -->
    <!-- When using props we use the v-bind Vue directive (shortened to just :propName) to successfully pass the properties -->
    <ceg-props :name="name" :age="age" :changeNameFunc="changeName"></ceg-props>

    <!-- Since we now have put our logic inside a vue component, we can reuse this component all over our application. -->
    <!-- <ceg-props></ceg-props> -->

    <!-- EVENTS -->
    <!-- To listen for events coming from children components we use the v-on:eventName directive. We can use the data used passed from the event with the $event variable -->
    <!-- You can only listen to events on the CHILD ELEMENT WHERE THE EVENT IS COMING FROM. For instance we can only use this event listener on the ceg-events element, if we tried to use it on a regular div it would not work -->
    <!-- To use the data passed from the $emit() function we MUST USE THE $event variable that vue gives us to gain access to the data we pass with the event. In this case you can see we pass an object which we can use different properties to change multiple data properties on the parent component. -->
    <ceg-events @changeFromEvent="changeName($event)" ></ceg-events>

  </div>

</template>

<script>
// Importing a Vue component from a separate file
import Props from './Ceg-Props.vue';
import Events from './Ceg-Events.vue';

export default {

  data() {
    return {
      name: 'Michael Gee',
      age: 21,
      color: 'black',
      isBlack: true
    }
  },
  computed: {
    myStyle() {
      return {
        color: this.color
      }
    }
  },
  methods: {
    changeColor() {
      if(this.isBlack) {
        this.color = 'red'
      } else {
        this.color = 'black'
      }
      this.isBlack = !this.isBlack;
    },
    changeName(param) {
      if(typeof param === 'object') {
        this.name = param.name;
        this.age = param.age;
        return;
      }
      this.name = param;
    }
  },
  // We can then include the outside component in the components: {} object and once we do this we can then use the  <ceg-practice> element in our template
  components: {
    'ceg-props': Props,
    'ceg-events': Events
  }

}
</script>

<!-- To scope CSS styles to individual components we use the scoped attribute inside the style tag. Vue will do the magic for us, creating dynamic style tags to scope our css styles -->
<!-- Even when scoping css using classes/ids are faster than using the element selectors themselves performance wise. -->
<style>
  .container {
    padding: 25px;
    text-align: center;
    font-size: 62.5%;
  }

  h1 {
    font-size: 3.2em;
  }

  p {
    font-size: 2em;
  }

</style>
