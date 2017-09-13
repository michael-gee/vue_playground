// To create a mixin we create a regular JavaScript file and store our Vue instance code (that we want to use inside multiple components) inside of our const object.
export const fruitMixin = {
  data() {
    return {
      text: 'Hello World!',
      fruits: ['Apple', 'Banana', 'Mango', "Melon"],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  },
  // When we use lifecycle hooks in both our Mixin instance object and the component instance object, BOTH OF THE LIFECYCLE HOOKS ARE EXECUTED. The Mixin hook is run before the component hook as you can see in the console when the component is created.
  created(){
    console.log('Created from Mixin lifecycle hook');
  }
};
