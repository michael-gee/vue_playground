<template lang="html">
  <div class="component-container">

    <section>
      <h1>Filters</h1>
      <p>A filter is a syntax feature you can use in your template to transform some data output in the template. It doesn't change the data output itself, it only changes what the user sees.</p>
      <p>Vue JS does not ship with its own built in filters, all filters used in Vue will be custom created.</p>

      <!-- To include our filter to our data we use the pipe | after the data specification followed by the custom filter we want to add to that data. -->
      <!-- To chain filters we can just simply  add another pipe followed by the next filter. The additional filter uses the filtered data from the first filter and alters that data from left to right. So thats why the end result is the text in lower case. -->
      <p>{{ text | toUpperCase | toLowerCase }}</p>

      <hr>

      <!-- ********** BEST PRACTICE ********** -->

      <!-- In most cases with more complicated use cases, computed properties are considered best practice instead of using filters. This is because rerendering filters over and over can impact the performance of your application and the filter will rerender ever time the DOM does. -->

      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Hello World!',
        fruits: ['Apple', 'Banana', 'Mango', "Melon"],
        filterText: ''
      }
    },
    // To create our custom filter, we include the filters object in our Vue instance. Doing this inside of a component will make this a local filter. If we want a global filter, we can include it in the main.js file like we did for the directive.
    filters: {
      // A filter is simply just a function, and it always will include the value parameter which is the data being passed in that you want to transform
      toUpperCase(value) {
        return value.toUpperCase();
      },

      toLowerCase(value) {
        return value.toLowerCase();
      }
    },
    // Computed properties are a better alternative because the properties are only rerendered if your specific property is changed in template instead of rerendering every time the DOM rerenders
    computed: {
      // filteredFruits returns a new array of filtered elements that match the text typed inside of the input
      filteredFruits() {
        // filter() is a new es6 method that executes a function on each array element
        return this.fruits.filter((element) => {
          return element.match(this.filterText);
        });
      }
    }
  }
</script>
