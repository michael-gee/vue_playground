<template lang="html">
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Counter * 2 is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      // To include both our mapGetters AND our own custom computed properties we must use the es6 spread operator to have a object inside of an object
      // ***** Data through mapGetters (3) *****
      ...mapGetters([
        'counter',
        'doubleCounter',
        'stringCounter'
      ]),
      anotherComputedProp() {
        return 'Another Prop';
      }
      /*
        Data Through props (1) -
          This was the first method of receiving data we learned which was just receiving properties from a parent element through props/htmt attributes

        Data through computed properties (2) -
          This method was creating our own computed properties within our components and then specifying what they returned from the $store object. This worked but would lead to creating a lot of computed properties which would get very messy repeating code over and over again in multiple components

        Data through mapGetters (3) -
          This method is using our centralized state to RECIEVE our centralized properties. We use mapGetters with the es6 spread operators (which enables use to use the mapGetters object as well as our own custom computed properties in the computed:{} object) to list which getters we declared in our centralized store we want to display in our component.

        ***** Data Through props (1) *****
          props: ['counter']

        ***** Data through computed properties (2) *****
          counter() {
           When we access a getter method, we do not have to include the parenthesis, this is something that Vue will do for you
            return this.$store.getters.doubleCounter;
          },
          clicks() {
            return this.$store.getters.stringCounter;
          }
      */
    }
  }
</script>
