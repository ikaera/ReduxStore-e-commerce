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
    updateProducts: (state, { payload }) => {
      state.products = [...payload.products];
    },

    addToCart: (state, { payload }) => {
      console.log(state);
      state.cartOpen = true;
      state.cart = [...state.cart, payload.product];

      /* 
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      */
    },

    addMultipleToCart: (state, { payload }) => {
      state.cart = [...state.cart, ...payload.products];
    },

    updateCartQuantity: (state, { payload }) => {
      state.cartOpen = true;
      state.cart = state.cart.map(product => {
        if (payload._id === product._id) {
          product.purchaseQuantity = payload.purchaseQuantity;
        }
        return product;
      });
    },

    removeFromCart: (state, { payload }) => {
      let newState = state.cart.filter(product => {
        return product._id !== payload._id;
      });

      state.cartOpen = newState.length > 0;
      state.cart = newState;

      /*

      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      */
    },

    clearCart: (state, { payload }) => {
      state.cartOpen = false;
      state.cart = [];
    },

    toggleCart: (state, payload) => {
      state.cartOpen = !state.cartOpen;
    },

    updateCategories: (state, { payload }) => {
      console.log(payload);
      state.categories = [...payload.categories];
    },

    updateCurrentCategory: (state, { payload }) => {
      state.currentCategory = payload.currentCategory;
    },
  },
});

// Payload creators are generated for each case reducer function
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
} = productSlice.actions;

export default productSlice.reducer;
