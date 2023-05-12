import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// // import { legacy_createStore } from 'redux';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import reducer from '../../utils/reducers';

// const initialState = {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: '',
// };

// const counterSlice = createSlice({
//   name: 'anyName',
//   initialState,
//   reducers: {},
// });

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer },
// });

// export const counterActions = counterSlice.actions;

// export default store;

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

// const store = legacy_createStore(counterReducer);

/*
const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

*/
