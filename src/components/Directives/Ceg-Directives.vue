<template lang="html">
  <div class="component-container">
    <h1>Directives</h1>

    <section>
      <h3>Built-In Directives</h3>
      <p>We have already learned about and used a lot of built in Vue directives. They begin with a <span v-highlight>v-</span> and then the built in directive followed by any value or modifiers on directive.</p>
      <a href="https://012.vuejs.org/guide/directives.html">Documentation to built in Vue directives</a>
    </section>

    <section>
      <h3>Custom Directives</h3>
      <p v-highlight:background.delayed="'yellow'">Making this paragraph change colors through our own global custom directive!</p>
      <!-- You can see if we were to want to pass complex values to directives, we can just simply include all the values in an object which can be passed and used in the directive. -->
      <p v-local-highlight:background.delay.blink="{mainColor: 'red', secondaryColor: 'orange', delay: 500}">Making this paragraph change colors through a LOCAL custom directive!</p>

      <p v-emit-event:click="helloWorld">Emit Event!</p>
    </section>
  </div>
</template>

<script>
  export default {
    // To register directives locally, we do it inside of the component in the directives property object.
    directives: {
      //Inside the directives object, our properties are just the name of the specified local directive and the value is the object configuration which is the same as we did in the global directive.
      'local-highlight': {
        //There are 5 directive hooks we can use inside our configuration object

        // bind (el, binding, vnode) -> Once Directive is Attached
        //As you can see there are multiple arguments you can manipulate inside the directive method hook which are el, binding, and vnode.
          // el is the HTML element reference which you can change using HTML attributes
          // binding is the information passed in with the directive v-highlight:'yellow' for example, yellow would be the binding value
        bind(el, binding) {
          var delay = 0;
          // To add modifiers to our directive (v-directive:argument.modifier) is the optional additions to the directive that can give it additonal functionality.
          //We can check if any modifiers have been passed with the directive by using the binding.modifiers object
          // This if statement is checking for the 'delayed' modifier on our directive, if it is included the code inside runs.
          if(binding.modifiers['delayed']) {
            delay = 3000;
          }
          // We can add multiple modifiers by just doing another if statement checking to see if that specific modifier was included into the directive. If the .blink modifier is added it changes between the user specified color and blue back and forth
          if(binding.modifiers['blink']) {
            // Since we can now use an object to pass information to our directive, we can use that object in our code like shown.
            let mainColor = binding.value.mainColor;
            let secondaryColor = binding.value.secondaryColor;
            let currentColor = mainColor;

            setTimeout(() => {
              setInterval(() => {
                currentColor === secondaryColor ? currentColor = mainColor : currentColor = secondaryColor;
                if(binding.arg == 'background'){
                  el.style.backgroundColor = currentColor;
                } else if(binding.arg == 'color') {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            // Arguments are passed to directives by using the colon followed by the specified argument (v-highlight:background / v-highlight:color) which can let us create multiple configurations for a single directive. (we can now either do background color or just text color)
            setTimeout(() => {
              if(binding.arg == 'background'){
                el.style.backgroundColor = binding.value.mainColor;
              } else if(binding.arg == 'color') {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
          
          // inserted (el, binding, vnode) -> Once the Directive is inserted into the DOM

          // update (el, binding, vnode, oldVnode) -> Once the component updates (without children)

          // componentUpdated (el, binding, vnode, oldVnode) -> Once component is updated (with children)

          //unbind (el, binding, vnode) -> Once the directive is removed

        }
      },

      'emit-event': {
        bind(el, binding) {
          //binding.value();

          //To listen for click events on your custom directive you can use the onclick listener provided by the HTML element
          //el.onclick = () => {
          //  binding.value();
          //};

          let type = binding.arg;
          let fn = binding.value;
          el.addEventListener(type, fn);
        }
      }

    },
    methods: {
      helloWorld() {
        console.log('Hello World!');
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin: 15px 0;
  }

  a {
    font-size: 20px;
  }
</style>
