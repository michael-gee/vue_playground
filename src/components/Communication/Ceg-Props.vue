<template lang="html">
  <div class="practice-container">
    <h2>Props Component</h2>

    <p>Name: {{ userName }}</p>
    <p>Age: {{ userAge }}</p>
    <button @click="changeNameFunc('Mike Gee')">Change Name</button>
  </div>
</template>

<script>
export default {
  // When we use the props keyword in our Vue component object, this enables us to receive data (properties) from the parent element.
  // Since this practice component is a child of Ceg-Home, we can get and use the properties from it by using the props object.
  // We can validate the type that gets passed from the parent by setting the property value to the expected JavaScript type.
  props: {
    userName: {
      // If we place the types in an array, this tells Vue that there is more than one accepted type to the specific prop so the name prop can accept a string or an object
      type:[String, Object],
      // If the prop type being passed is an object or an array, the property should be a function that should return the object/array structure
      default: 'Michael'
    },
    userAge: {
      type: Number,
      // required makes the age attribute required whenever you include the ceg-practice element in the DOM, if required is not included the attribute can be left off the element when used
      required:true
    },
    // To avoid using a custom event, we can simply pass a function passed down from the parent as a prop to manipulate properties that are also on the parent component and then call them in the child component
    changeNameFunc: Function,
    color: String
  }
}
</script>

<style scoped>

</style>
