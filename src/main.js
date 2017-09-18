import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// To add an outside dependency to our Vue project, we must add it using Vue.us() (extending the core Vue.js functionality) in our main.js application file so it will be accessable throughout our application.
  //After importing the dependency above, we can include it in the .use() method and now we have vue-resource available in our application
Vue.use(VueResource);
// As you can see in the HTTP component, we use the same URL request for multiple requests, to make our code more dry we can configure our URL in our main.js file so we don't have to copy/paste our URL request location into multiple locations
  // Adding this URL to the ROOT of our options makes it to where all http requests made in the application will point to this url, and we then would just have to include it in our components and append any additional information if needed
Vue.http.options.root = 'https://vue-playground-540ac.firebaseio.com/data.json';
// To intercept requests when being made in our applcation we use the Vue.http.interceptors array.
  //When we push this method to the array, whenever we make a request in our application, our function runs.
  // To ensure the rest of the request gets executed, we must call the next() method that is passed as one of the params.
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  //To intercept responses we can also use a function inside our next() method to change/manipulate our response
  next(response => {
    // Where we can manipulate our response
      //if you go into the Ceg-Http component you can see when we console.log our response, it now has a name property on the object that we specified
    response.setFromInterceptors = "Hello world!"
  });
});

// Event Buses must be registered before the main applicaton Vue instance
export const eventBus = new Vue();

//If you were to want to create a GLOBAL mixin/filter, it would be added to EVERY SINGLE component in your application (you rarely want to use this).
  //To create the global mixin you do Vue.mixin and pass the method an object which would the the vue instance passed to every component in the application
//Vue.mixin({});
// Vue.filter();

//To register a directive globally, we can register it here using the Vue.directive() method. In the first argument we specify the name of the directive(v-highlight) and the second argument is the object configuration of the directive.
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'yellow';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
