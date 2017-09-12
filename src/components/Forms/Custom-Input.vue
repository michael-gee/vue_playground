<template lang="html">
  <div>
    <div id="on"
      @click="switched(true)"
      :class="{active: value}">On
    </div>

      <div id="off"
        @click="switched(false)"
        :class="{active: !value}">Off
      </div>
  </div>
</template>

<script>
  export default {
    // When we are getting data from our v-model attribute we gain access to it inside the child element by using the 'value' (:value) prop. We can then access and change the v-model value by using the @input event shown in the method
    props: ['value'],
    methods: {
      switched(isOn) {
        //When we emit an event to the v-model on this element, we must use the 'input' event for v-model to recognize we are changing the value.
        this.$emit('input', isOn);
      }
    }
  }
</script>

<style scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }
    #on:hover, #on.active {
      background-color: lightgreen;
    }
    #off:hover, #off.active {
      background-color: lightcoral;
    }
</style>
