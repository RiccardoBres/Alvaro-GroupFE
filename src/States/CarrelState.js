import { createSlice, createAction } from '@reduxjs/toolkit';

export const setCartOpen = createAction('cart/setCartOpen');

const calculateShippingCost = (price) => {
  return price * 0.2;
};

const cartSlice = createSlice({
  name: 'cartState',
  initialState: {
    cartItems: [],
    cartPurchase: [],
    totalItems: 0,
    totalPrice: 0,
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const shippingCost = calculateShippingCost(price);
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          image,
          id,
          name,
          price,
          quantity: 1,
          shippingCost,
        });
      }
      state.totalPrice += price;
      state.totalItems += 1;
      state.isCartOpen = true;
    },
    addToPurchase: (state, action) => {
      const { id, name, price, image } = action.payload;
      const shippingCost = calculateShippingCost(price);
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        state.cartPurchase = [{
          image,
          id,
          name,
          price,
          quantity: cartItem.quantity,
          shippingCost,
        }];
        state.totalItems = cartItem.quantity;
        state.isCartOpen = false;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= existingItem.price || 0;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },
    resetCart: (state) => {
      state.cartItems = [];
      state.cartPurchase = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.isCartOpen = false;
    },
    setCartClose: (state) => {
      state.isCartOpen = false;
    },
    setCartCOpen: (state) => {
      state.isCartOpen = true;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  resetCart,
  setCartClose,
  setCartCOpen,
  addToPurchase,
} = cartSlice.actions;

export const totalPrice = (state) => state.cartState.totalPrice;
export const selectCartItems = (state) => state.cartState.cartItems;
export const selectPurchaseItems = (state) => state.cartState.cartPurchase;
export const selectTotalItems = (state) => state.cartState.totalItems;
export const isCartOpen = (state) => state.cartState.isCartOpen;

export default cartSlice.reducer;
