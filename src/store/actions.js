export const updateValue = ({ commit }, payload) => {
  commit('updateValue', payload);
}

// In this example we only have one method so this method is just to show when we import the * of this file it shows we can use ALL our our expoorted const in the store.js file
export const example2 = () => {
  console.log('Hello World!');
}
