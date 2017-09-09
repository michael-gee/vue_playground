<template lang="html">
  <div>
    <!-- Sometimes we want to include HTML inside our custom elements, this was not possible before but now if we use the slot tags inside our component template it will render the HTML we include inside the component tags in our parent component. -->

    <!-- When we do not use a named slot, it is rendered as the default slot tag -->
    <slot>
      <!-- We can also include our own HTML inside our slot tags. We do to set a default output incase nothing was passed from inside the HTML tags. So if we were to not include anything inside of the ceg-slot tags in the parent component, this Hello World! would render but if we did include something, that something would be rendered instead. -->
      <h2>Hello World!</h2>
    </slot>

    <slot name="slot1"></slot>

    <!-- If we want our HTML elements that we render inside our component tags (in the parent element) to render in separate places, we can use named slots. You do this by using the name attribute on the slot and then include the slot attribute in the HTML tag you want to connect to the slot in the parent component -->

    <slot name="slot2"></slot>


  </div>
</template>

<script>
export default {
}
</script>

<!-- When styling a slot template, only styles that come from the child component will be applied. We scoped the styles in this component and you can see if changes the h2 of the slot component configured in the parent element. -->

<!-- If we try to change the styling of the slot elements from the parent component, the css stylings will NOT be applied. -->
<style scoped>
  h2 {
    color: red;
  }

  .slot-title {
    font-size: 2.5em;
  }
</style>
