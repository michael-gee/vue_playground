<template lang="html">
  <div class="component-container">
    <section>
      <h1>Animations</h1>

      <h3>Single Elements</h3>
      <p>When elements get appended or detached from the DOM (through v-if for example) can be animated when shown/removed from the screen. We can do this with the use of the <span v-highlight>transition</span> element.</p>

      <!-- <img src="../../assets/vue-animation.PNG" alt="Vue Animation"> -->

      <button @click="elementShown = !elementShown">Toggle Animated Element</button>

      <!-- As you can see to start the transition process, we wrap our SINGLE element in a transition tag.  -->
      <!-- We begin by giving the transition a name attribute, and once we name it, we can then alter it in our CSS code. -->
      <transition name="fade">
        <div v-if="elementShown" class="animated-el">
          <p>This is the <span v-highlight>fade</span> transition Element!!!!</p>
        </div>
      </transition>

      <!-- As you can see in the CSS below, we can create a transition with the ANIMATION property which uses keyframes to dictate how content enters and leaves the screen. When we combine both transition and animation you can see we make it to where the content both slides and fades in/out of the view -->
      <!-- Setting the type attribute on the transition tag can be important because it can dictate which selector (transition or animation) controls the length of the manipulation -->
      <transition name="slide" type="animation">
        <div v-if="elementShown" class="animated-el">
          <p>This is the <span v-highlight>slide</span> animation/transition Element!!!!</p>
        </div>
      </transition>

      <hr>

      <!-- If the v-if boolean (elementIsShown) returns true and we want our element to fade in right as the page is loaded, all we have to do is add the appear attribute to the transition tag -->
      <transition name="fade" appear>
        <div v-if="elementShown" class="animated-el">
          <p>This is the <span v-highlight>fade on page load</span> Element!!!!</p>
        </div>
      </transition>

      <hr>

      <!-- We can also dynamically bind which animation/transition gets applied to the transition tag by changing the name attribute to the :name binding and then putting the dynamic property as the value. -->
      <!-- This will change this div to either just fade out or both fade out AND slide down depending on which option is selected -->
      <select v-model="animation">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <transition :name="animation" appear>
        <div v-if="elementShown" class="animated-el">
          <p>This element will fade AND slide down or just fade out depending on which option is selected.</p>
        </div>
      </transition>

      <hr>

      <!-- If we want to overwrite our CSS classes to use a third party library like animate.css instead of our own custom CSS, we can do this by overwriting the Vue transition CSS class attributes. We have access to all 4 classes through attributes enter-class, enter-active-class, leave-class, leave-active-class -->
      <transition
        appear
        enter-active-class="animated rollIn"
        leave-active-class="animated rollOut"
      >
        <div v-if="elementShown" class="animated-el">
          <p>This is the <span v-highlight>animate.css</span> Element that animates on page load with the appear attribute!!!!</p>
        </div>
      </transition>

      <hr>

      <!-- Another common use case for animations is when one element is animated out, another element gets animated in. We can do this by having 2 divs in the transition tag with v-if and v-else or 2 v-if's with reversed conditions and applied animations. -->
      <transition :name="animation" mode="out-in">
        <!-- To make Vue add the animations to both of the divs animating in/out we must add the KEY attribute which is a Vue attribute (not native HTML) -->
        <div v-if="elementShown" key="first">
          First Div in transtion tag!
        </div>
        <!-- After applying the key attribute the animations work but are really snappy, jumping on the page because the animations are happening at the same time and once the first div fades/slides out THEN the second one jumps up to its place which doesn't look good. -->
        <!-- To fix this we add the MODE Vue attribute to the transition tag and set the value to either 'out-in' or 'in-out'. 'out-in' means let the old element animate out first and THEN animate the new one ('in-out' does the opposite)  -->
        <div v-else key="second">
          Second Div in transition tag!
        </div>
      </transition>

      <hr>

      <h3>JavaScript Animations</h3>

      <!-- This transition element that Vue ships with comes with JavaScript Hooks that we can listen to, to configure our own JavaScript code/animations. -->
      <!-- Refer to assets/vue-js-animation.png to see transition JS hooks -->
      <button @click="elementLoaded = !elementLoaded">Load / Remove Element</button>
      <!-- To listen for the JavaScript animation hooks we include the custom event attributes to our transition element by using @ followed by the event we want to listen for. -->
      <!-- Every time you click the button you can see in the console each hook function getting executed. This is where we can create our animations and other custom JavaScript code. -->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false">
        <!-- You can also include these JavaScript hooks with your CSS animations (ones above) to run JavaScript code when your elements animate. -->
        <!-- When we add :css="false" this tells Vue that our animation is 100% controlled by JavaScript and it can skip the step of looking to see whether the animation uses CSS classes (performance boost). -->
        <div v-if="elementLoaded" style="width: 300px; height:100px; background-color: lightgreen; margin: 0 auto; margin-top: 25px;">
          This element is animated with JavaScipt!
        </div>
      </transition>

      <hr>

      <h3>Dynamic Components</h3>

      <button
      style="margin-bottom: 25px;"
      @click="selectedComponent == 'ceg-dynamic1' ? selectedComponent = 'ceg-dynamic2' : selectedComponent = 'ceg-dynamic1'">Toggle Component</button>

      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>

      <hr>

      <h3>Animating Lists</h3>

      <button @click="addItem">Add Item</button>

      <!-- transition-group is exactly the same as using transition execpt transition-group renders to the DOM inside of a span tag by default. To overwrite this setting you can using the attribute tag="TAG" to make the tag appear instead of the span -->
      <ul style="margin-top: 25px;">
        <transition-group name="slide">
          <!-- When animating list items, we MUST give each item a KEY with an property that is unique to that item. We do this by binding the :key to the number passed with the array. -->
          <li v-for="(number, index) in numbers"
           @click="removeItem(index)"
           style="cursor: pointer; margin: 25px 0; border-bottom: 1px solid black;"
           :key="number">{{ number }}</li>
        </transition-group>
      </ul>

    </section>
  </div>
</template>

<script>
  import Dynamic1 from './Dynamic-Component1.vue';
  import Dynamic2 from './Dynamic-Component2.vue';

  export default {
    data() {
      return {
        elementShown: false,
        elementLoaded: true,
        animation: 'fade',

        elementWidth: 100,

        selectedComponent: 'ceg-dynamic1',

        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      // On the enter animation hook, we can get the element being manipulated as one argument like in the beforeEnter hook, but we also get a done parameter that is an exectuable function which tells Vue when the animation finishes.
      //This done function only needs to be executed when the animation is ran through JavaScript, not CSS.
      //The hooks to execute your animation code is in the enter/leave hooks after the initial state has been set
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if(round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      enterCancelled(el) {
        console.log('enterCancelled');
      },

      beforeLeave(el) {
        console.log('beforeLeave');
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if(round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      leaveCancelled(el) {
        console.log('leaveCancelled ');
      },


      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.push(pos);
      },
      removeItem(item) {
        this.numbers.splice(item, 1);
      }
    },
    components: {
      'ceg-dynamic1': Dynamic1,
      'ceg-dynamic2': Dynamic2
    }
  }
</script>

<style scoped>
  h3 {
    padding: 25px 0;
  }
  .animated-el {
    padding-top: 15px;
  }

  /* Like shown in the assets image on animation, there are 4 CSS classes that can be configured to create the animation. The four are nameOfAnimation-enter, nameOfAnimation-enter-activer, nameOfAnimation-leave, and nameOfAnimation-leave-active */

  /* nameOfAnimation-enter is the CSS class which is only attached for one frame (this class will immediately be removed after one frame) at the beginning, so this is where we set our initial state  */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    /* This will fade in the desired element over the span of 1 second */
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    /* The default opacity of an element is 1, which is why we do not need to set it in nameOfAnimation-enter-active but when fading out we must remember to switch the opacity back to 0 to hide the element after transition. */
    opacity: 0;
  }

  /* Slide */
  .slide-enter {
    /* transform: translateY(20px); -- already set up in the keyframe */
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    /* position: absolute; */
  }

  /* nameOfAnimation-move is is available when animating a group with transition-group. It can enable you to prevent jumpyness on the screen when items are removed and replace it with smooth tranitions */
  .slide-move {
    transition: transform 1s;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
