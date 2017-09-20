// To use our components in our Router array, we must first import our components
import Homepage from './components/Homepage/Ceg-Homepage.vue';

// To create Lazy Loading in your application instead of just importing the Component like we do with the Homepage (the first component that gets rendered) we store our Components in consts and use the require.ensure() method to load these components only when they are loaded on the page.
const Animations = resolve => {
  require.ensure(['./components/Animations/Ceg-Animations.vue'], () => {
    resolve(require('./components/Animations/Ceg-Animations.vue'));
  });
}

const Communication = resolve => {
  require.ensure(['./components/Communication/Ceg-Communication.vue'], () => {
    resolve(require('./components/Communication/Ceg-Communication.vue'));
  });
}

const Directives = resolve => {
  require.ensure(['./components/Directives/Ceg-Directives.vue'], () => {
    resolve(require('./components/Directives/Ceg-Directives.vue'));
  });
}

const Forms = resolve => {
  require.ensure(['./components/Forms/Ceg-Forms.vue'], () => {
    resolve(require('./components/Forms/Ceg-Forms.vue'));
  });
}

const Filters = resolve => {
  require.ensure(['./components/Filters&Mixins/Ceg-Filters.vue'], () => {
    resolve(require('./components/Filters&Mixins/Ceg-Filters.vue'));
  });
}

const Mixins = resolve => {
  require.ensure(['./components/Filters&Mixins/Ceg-Mixins.vue'], () => {
    resolve(require('./components/Filters&Mixins/Ceg-Mixins.vue'));
  });
}

const Http = resolve => {
  require.ensure(['./components/Http/Ceg-Http.vue'], () => {
    resolve(require('./components/Http/Ceg-Http.vue'));
  });
}

//To group routes so they are loaded in the same bundle, all you have to do is add a third parameter to the ensure() method being the name of the bundle you want to create and then giving all components the same name you want in the bundle
  // You can see that all the routing components have the same 'routing' name provided so they all will be loaded once any of these components are routed to.
const Routing = resolve => {
  require.ensure(['./components/Routing/Ceg-Routing.vue'], () => {
    resolve(require('./components/Routing/Ceg-Routing.vue'));
  }, 'routing');
}
  const DynamicRoute = resolve => {
    require.ensure(['./components/Routing/Dynamic-Route.vue'], () => {
      resolve(require('./components/Routing/Dynamic-Route.vue'));
    }, 'routing');
  }
  const GuardedRoute = resolve => {
    require.ensure(['./components/Routing/Guarded-Route.vue'], () => {
      resolve(require('./components/Routing/Guarded-Route.vue'));
    }, 'routing');
  }

const Projects = resolve => {
  require.ensure(['./components/Projects/Ceg-Projects.vue'], () => {
    resolve(require('./components/Projects/Ceg-Projects.vue'));
  }, 'projects');
}
  const ProjectsHeader = resolve => {
    require.ensure(['./components/Projects/Projects-Header.vue'], () => {
      resolve(require('./components/Projects/Projects-Header.vue'));
    }, 'projects');
  }
  const ProjectsNav = resolve => {
    require.ensure(['./components/Projects/Projects-Nav.vue'], () => {
      resolve(require('./components/Projects/Projects-Nav.vue'));
    }, 'projects');
  }

  const MonsterSlayer = resolve => {
    require.ensure(['./components/Projects/Monster-Slayer/Monster-Slayer.vue'], () => {
      resolve(require('./components/Projects/Monster-Slayer/Monster-Slayer.vue'));
    }, 'projects');
  }
  const QuoteApp = resolve => {
    require.ensure(['./components/Projects/Quote-App/Quote-App.vue'], () => {
      resolve(require('./components/Projects/Quote-App/Quote-App.vue'));
    }, 'projects');
  }

const VueX = resolve => {
  require.ensure(['./components/VueX/Ceg-VueX.vue'], () => {
    resolve(require('./components/VueX/Ceg-VueX.vue'));
  });
}

// For better organization we can create/customize our routes in our own file that we store in a const that we will later import in our main.js file
  // The routes const is set to an array that will contain objects with data about our separate routes
export const routes = [
  {
    //The first property we set up is the path, this declares what url path is being created.
    path: '',
    name: 'homepage',
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
    name: "routing",
    component: Routing,
    props: true
  },
    {
      path: '/routing/:message',
      component: Routing,
      props: true
    },
    {
      path: '/guarded-routes',
      component: GuardedRoute,
      // To add a local guarded route, you add the beforeEnter method to the route object and add its configuration using the (to, from, next) params
      beforeEnter: (to, from, next) => {
        console.log('Guarded route beforeEnter');
        next();
      }
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
      // Now that we have multiple router-views, if we want different components to appear at different locations depending on the component, we can do that here.
        // You see instead of just setting the component: we change it components: {} and set the default value to the component we want registered but now we include the different router-view that also includes a Project-Header at the top/bottom depending on which one we specify
      {
        path: 'monster-slayer',
        components: {
          default: MonsterSlayer,
          'header-bottom': ProjectsHeader
        }
      },
      {
        path: 'quote-app',
        components: {
          default: QuoteApp,
          'header-top': ProjectsHeader
        }
      },
      {
        path: ':id',
        components: {
          default: DynamicRoute,
          'header-bottom': ProjectsHeader
        },
        // Using the name property makes it much easier to point links to this subroute in your application by just using the :to="{}" attribute and populating the object it takes accordingly.
        name: 'projectIdRoute',
        props: true
      }
    ]
  },
  {
    path: '/vuex',
    component: VueX
  },
  // If we want to redirect our user once they type/route themselves to a certain location but we want them to go somewhere else, we simply just specify the route in the redirect: property.
    // So now when a user goes to address.com/redirect the page will be redirected to address.com/routing
  {
    path: '/redirect',
    redirect: { name: 'routing' }
  },
  // To catch routes that do not exist, our last route takes the path:'/*' This will now go through all of our routes, and if none of them were specified, it will default to this route which we redirect the user back to the homepage
  {
    path: '/*',
    redirect: { name: 'homepage'}
  }
];
