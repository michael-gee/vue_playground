<template lang="html">
  <!-- In components all your HTML must be wrapped inside of a single div (the container) for it to be registered correcly in Vue -->
  <div class="component-container">
    <section>
      <h1>Communicaton Component</h1>
      <p :style="myStyle">My name is {{ name }} and I am {{ age }} years old.</p>
      <button @click="changeColor">Change Paragraph Color</button>
    </section>

    <hr>

    <!-- PROPS -->
    <!-- To pass properties from this element (the parent element) to the ceg-practice element (the child element) we use HTML attributes like shown -->
    <!-- When using props we use the v-bind Vue directive (shortened to just :propName) to successfully pass the properties -->
    <section>
      <ceg-props :userName="name" :userAge="age" :changeNameFunc="changeName"></ceg-props>
    </section>
    <!-- Since we now have put our logic inside a vue component, we can reuse this component all over our application. -->
    <!-- <ceg-props></ceg-props> -->

    <hr>

    <!-- EVENTS -->
    <!-- To listen for events coming from children components we use the v-on:eventName directive. We can use the data used passed from the event with the $event variable -->
    <!-- You can only listen to events on the CHILD ELEMENT WHERE THE EVENT IS COMING FROM. For instance we can only use this event listener on the ceg-events element, if we tried to use it on a regular div it would not work -->
    <!-- To use the data passed from the $emit() function we MUST USE THE $event variable that vue gives us to gain access to the data we pass with the event. In this case you can see we pass an object which we can use different properties to change multiple data properties on the parent component. -->
    <section>
      <ceg-events @changeFromEvent="changeName($event)" ></ceg-events>
    </section>

    <hr>

    <!-- CHILD COMPONENT COMMUNICATION -->
    <section>
      <div class="child-comm">
        <h2>Child Component Communication</h2>
        <ceg-child1 :userAge="age"></ceg-child1>
        <ceg-child2 @updateUserAge="age = $event"></ceg-child2>
      </div>
    </section>

    <hr>

    <!-- SLOTS  -->
    <section>
      <ceg-slots>
        <h2>Slots Component</h2>
        <!-- Although styling happens from the child (slot) component, dynamically rendering content or anything else happens from the parent component -->
        <div slot="slot1">
          <br><br>
          <h3 class="slot-title">Slot 1</h3>
          <p>{{ name }}</p>
        </div>
        <!-- The slot attribute is provided by Vue, it is not a native HTML attribute -->
        <div slot="slot2">
          <h3 class="slot-title">Slot 2</h3>
          <p>This HTML is generated using the slot HTML tag. Refer to slot component for example.</p>
        </div>
      </ceg-slots>
    </section>

    <hr>

    <section>
      <h2>Dynamic Component</h2>
      <!-- You can dynamically change which element is rendered by changing the value passed to the :is attribute in the component tag. We do that here in this @click event by setting the selectedComponent property to a different element. -->
      <button style="margin-top: 25px;" @click="selectedComponent = !selectedComponent">Change Dynamic Component</button>
      <br><br><br>

      <!-- To create dynamic components we use the component tag with the attribute :is which takes the name of the HTML selector as the value to then render that element. We set the :is to selectedComponent which points to the ceg-child1 which is a created component in our component{} object so it dynamically creates that element -->
      <h3 style="color:red;">Dynamic Component Instance</h3>
      <component :is="currentComponent">
        <!-- If no element is dynamically passed to the :is attribute we can create default content by simply placing it in between the 2 component tags. -->
        <p>This is the default content</p>
      </component>
      <!-- When using this dynamic component, it creates a brand new instance of the specified element, but when the insatance is changed to show a different element, the instance created by the component tags is destroyed. If you do not the dynamically created component to be destroyed, you can wrap it inside of a keep-alive element -->
      <h3 style="color:red;">Dynamic Kept Alive Component Instance</h3>
      <keep-alive>
        <component :is="currentComponent"></component :is="selectedComponent">
      </keep-alive>
      <!-- So now when you press the button to dynamically switch the component instance, and then switch it back, the counter value added in the keep-alive component will retain the value kept before switching -->

    </section>

  </div><!-- CONTAINER DIV END -->

</template>

<script>
// Importing a Vue component from a separate file
import Props from './Ceg-Props.vue';
import Events from './Ceg-Events.vue';
import Slots from './Ceg-Slots.vue';

import Child1 from './Ceg-Child1.vue';
import Child2 from './Ceg-Child2.vue';

import Dynamic1 from './Ceg-Dynamic1.vue';
import Dynamic2 from './Ceg-Dynamic2.vue';

export default {

  data() {
    return {
      name: 'Michael Gee',
      age: 21,
      color: 'black',
      isBlack: true,
      selectedComponent: true
    }
  },
  computed: {
    myStyle() {
      return {
        color: this.color
      }
    },
    currentComponent() {
      return this.selectedComponent ? 'ceg-dynamic1' : 'ceg-dynamic2';
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
    'ceg-events': Events,
    'ceg-slots': Slots,

    'ceg-child1': Child1,
    'ceg-child2': Child2,

    'ceg-dynamic1': Dynamic1,
    'ceg-dynamic2': Dynamic2
  }

}
</script>

<!-- To scope CSS styles to individual components we use the scoped attribute inside the style tag. Vue will do the magic for us, creating dynamic style tags to scope our css styles -->
<!-- Even when scoping css using classes/ids are faster than using the element selectors themselves performance wise. -->
<style>

</style>
