const state = {
  counter: 0,
  clicks: 0
};

// As you can tell the counter works perfectly in both app-result and app-another-result. But as you can see when we use counter in both components we are duplicating code and if the code was a little more complex it would be really hard to keep track of the counter getting changed all over the place.
  // To fix this we use GETTERS, which is a centralized way of manipulating the property so we don't have duplicated methods all over our components, instead it is inside our store which we can access from all our components.
const getters = {
  counter: state => {
    return state.counter;
  },
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.clicks + ' Clicks';
  }
};

// We use getters to GET a property value from the central state, but to change the state (Like a centralized custom event) we use MUTATIONS which work almost identically as getters except we don't return the value, we mutate it, and this will update the property so our getters will be notified and changed
  // When creating mutations, all methods created must be SYNCHRONOUS, if we try to run async code it will mess up our centralized state because it is constantly looking to update changes from multiple components
const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
    state.clicks++;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
    state.clicks++;
  }
};

// There will be a lot of times we will want to run asynchronous code (like reaching out to a server, ect) to change our state via mutation, to do this we can use ACTIONS
  // It is a good practice to always use actions even when the code might not be async
const actions = {
  // Since we are in a different object, we can use the same name as mutations
  increment: (context, payload) => {
    context.commit('increment', payload);
  },
  //Here we use es6 destructuring, which is passing the { commit } which will only use a property/method of an object instead of passing the entire object itself (context used above). So now instead of having to use context.commit we can just use commit()
  decrement: ({ commit }, payload) => {
    commit('decrement', payload);
  },
  // in asyncIncrement and asyncDecrement we creating async functionality by including a simple setTimeout() method to create our action and once the timeout is done, then our mutation will be executed
    // If we want to pass parameters along with our actions/mutations we can do this with the payload keyword and pass it as a param with the commit() method after the mutation name to pass along the data
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    } , payload.duration);
  },
  // In our async actions we pass payload as an object, so we used the object's named properties to configure our action and the data that is passed to our mutation
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    } , payload.duration);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
