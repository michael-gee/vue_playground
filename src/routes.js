// To use our components in our Router array, we must first import our components
import Homepage from './components/Homepage/Ceg-Homepage.vue';

import Animations from './components/Animations/Ceg-Animations.vue';

import Communication from './components/Communication/Ceg-Communication.vue';
import Forms from './components/Forms/Ceg-Forms.vue';
import Directives from './components/Directives/Ceg-Directives.vue';

import Filters from './components/Filters&Mixins/Ceg-Filters.vue';
import Mixins from './components/Filters&Mixins/Ceg-Mixins.vue';

import Http from './components/Http/Ceg-Http.vue';

import Routing from './components/Routing/Ceg-Routing.vue';

//Projects
import Projects from './components/Projects/Ceg-Projects.vue';
import ProjectsNav from './components/Projects/Projects-Nav.vue';
import MonsterSlayer from './components/Projects/Monster-Slayer/Monster-Slayer.vue';
import QuoteApp from './components/Projects/Quote-App/Quote-App.vue';

// For better organization we can create/customize our routes in our own file that we store in a const that we will later import in our main.js file
  // The routes const is set to an array that will contain objects with data about our separate routes
export const routes = [
  {
    //The first property we set up is the path, this declares what url path is being created.
    path: '',
    //The secound property is component.. this is the component you want to register when the specified route is navigated to
    component: Homepage
  },
  {
    path: '/animations',
    component: Animations
  },
  {
    path: '/communication',
    component: Communication
  },
  {
    path: '/forms',
    component: Forms
  },
  {
    path: '/directives',
    component: Directives
  },
  {
    path: '/filters',
    component: Filters
  },
  {
    path: '/mixins',
    component: Mixins
  },
  {
    path: '/http',
    component: Http
  },
  {
    // To pass/retrieve route parameters we simply use the /:paramName. So now when we navigate to /routing/hello-world, it will pass this message to our component which we can then use in our component data Object
    path: '/routing',
    component: Routing,
    props: true
  },
  {
    path: '/routing/:message',
    component: Routing,
    props: true
  },
  {
    path: '/projects',
    component: Projects,
    // To add children routes (the projects listed in the being the children to the Ceg-Projects component) in the children array which takes objects exactly as the routes object does
      // note when adding children you do not want to use a / because you only specify the slay in the router-link to="" attribute
    children: [
      {
        path: '',
        component: ProjectsNav
      },
      {
        path: 'monster-slayer',
        component: MonsterSlayer
      },
      {
        path: 'quote-app',
        component: QuoteApp
      }
    ]
  }
];
