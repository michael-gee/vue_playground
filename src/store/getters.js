export const value = state => {
  return state.value;
}

// All exported const are put on the global namespace so this const will conflict with the doubleCounter getter that is in the counter.js file even when its in another module
export const doubleCounter = state => {
  return 'This is a duplicated of the doubleCounter getter in counter.js';
}

export const anotherGetter = state => {
  return state.value + ' is the current value!';
}
