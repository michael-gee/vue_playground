import Vue from 'vue'
import VueRouter from 'vue-router'
  import { routes } from './routes';
import VueResource from 'vue-resource'
import App from './App.vue'
import { store } from './store/store';


// We set up our Router in the main.js file. We first import it and then use Vue.use() to implement it.
Vue.use(VueRouter);
// After registering the vue-router plugin, we can use our routes we specified in our routes.js file by using the VueRouter() which we pass our routes array inside of the object passed as the param
const router = new VueRouter({
  routes,
  // mode: 'hash' is the default which Vue uses to create # routing in our application. But if our server is set up correclty to redirect all incoming requests to our index.html file, we can use the 'history' mode to make it to where our routing is used as normal address.com/monster-slayer
  mode: 'history',
  // To make the anchor tag get scrolled to once the anchor is added to the URL, we can configure the scrollBehavior to make the page jump to the anchor we want it to.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
  }
});



// To start with guarded routes, we can set up a beforeEach method on our router that executes a desired action before each route action. This is a GLOBAL for each, so you do not want to put a lot of logic in this method because it will run on EVERY route change
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); //You must include next() or your application methods won't execute properly. You can also pass false as a parameter to stay on the current page and not move on, and you can pass your route object to redirect the page if you pass the route object as a param
});



// To add an outside dependency to our Vue project, we must add it using Vue.us() (extending the core Vue.js functionality) in our main.js application file so it will be accessable throughout our application.
  //After importing the dependency above, we can include it in the .use() method and now we have vue-resource available in our application
Vue.use(VueResource);
// As you can see in the HTTP component, we use the same URL request for multiple requests, to make our code more dry we can configure our URL in our main.js file so we don't have to copy/paste our URL request location into multiple locations
  // Adding this URL to the ROOT of our options makes it to where all http requests made in the application will point to this url, and we then would just have to include it in our components and append any additional information if needed
Vue.http.options.root = 'https://vue-playground-540ac.firebaseio.com/';
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
  // Since the key:value is the same, in es6 we can exclude the router: router and just put router. But we must include this in the main vue instance to set up our routing
  router,
  // To give your application access to your Vuex store you just include it in the main.js Vue instance after importing it at the top
  store,
  render: h => h(App)
})
