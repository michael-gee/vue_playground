<template lang="html">
  <div class="component-container">

    <section>
      <h1>Mixins</h1>
      <p>Mixins are used when you have some reusable code or data that you spread throughout multiple components.</p>

      <!-- If we manipulate data that comes from a mixin, like adding to the fruits list shown below, The data manipulation will ONLY HAPPEN TO THE MIXIN INSTANCE INSIDE OF THIS COMPONENT rather than every mixin instance spread across your application. -->
      <button @click="fruits.push('Berries')">Add New Item</button>
      <!-- So when you manipulate the fruits array in this component, it will not manipulate the fruits mixin array instance that is given to another component. -->
      <br>
      <br>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>

      <p>{{ text }}</p>
    </section>

  </div>
</template>

<script>
  //To include our mixin we must import the const object from the mixin JS file
  import { fruitMixin } from './fruitMixin';

  export default {
    //After we import the const object, we can then specify all of our mixins inside our mixins data array. So once we include our mixin, you will notice that all our code is fully functional exactly how it is in the filters example.
    mixins: [fruitMixin],
    // And as you can see, even when we merge our mixin Vue instance object into this instance, we can still specify and use this component's instance object to create and manipulate data. The data is merged.
    data() {
      return {
        text: 'Hello World!!!!'
      }
    },
    created() {
      console.log('Created from component lifecycle hook');
    }
  }
</script>
