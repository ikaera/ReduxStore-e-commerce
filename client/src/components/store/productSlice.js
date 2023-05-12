import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // methods with names of our choice
    updateProducts: (state, action) => {
      state.products = [...action.products];
    },

    addToCart: (state, action) => {
      (state.cartOpen = true), (state.cart = [...state.cart, action.product]);
    },

    addMultipleToCart: (state, action) => {
      state.cart = [...state.cart, ...action.products];
    },

    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map(product => {
        if (action._id === product._id) {
          product.purchaseQuantity = action.purchaseQuantity;
        }
        return product;
      });
    },

    removeFromCart: (state, action) => {
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      state.cartOpen = newState.length > 0;
      state.cart = newState;
    },

    clearCart: (state, action) => {
      state.cartOpen = false;
      state.cart = [];
    },

    toggleCart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },

    updateCategories: (state, action) => {
      state.categories = [...action.categories];
    },

    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.currentCategory;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  toggleCart,
  updateCategories,
  updateCurrentCategory,
} = counterSlice.actions;

export default counterSlice.reducer;
