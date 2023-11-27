import { createSlice, createAction } from '@reduxjs/toolkit';

export const setCartOpen = createAction('cart/setCartOpen');
const cartSlice = createSlice({
    name: 'cartState',
    initialState: {
        cartItems: [],
        totalItems: 0,
        totalPrice: 0,
        isCartOpen: false,
    },
    reducers: {
        
        addToCart: (state, action) => {
            const { id, name, price, image } = action.payload;
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
                });
            }
            state.totalPrice += price;
            state.totalItems += 1;
            state.isCartOpen = true;
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity -= 1;
                if (existingItem.quantity === 0) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== id);
                }
                state.totalItems -= 1;
                state.totalPrice -= existingItem.price || 0;
            }
        },
        resetCart: (state) => {
            state.cartItems = [];
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

export const { addToCart, removeFromCart, resetCart , setCartClose, setCartCOpen} = cartSlice.actions;
export const totalPrice = (state) => state.cartState.totalPrice;
export const selectCartItems = (state) => state.cartState.cartItems;
export const selectTotalItems = (state) => state.cartState.totalItems;
export const isCartOpen = (state) => state.cartState.isCartOpen;

export default cartSlice.reducer;
