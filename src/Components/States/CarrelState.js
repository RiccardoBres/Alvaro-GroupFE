import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartState',
    initialState: {
        cartItems: [],
        totalItems: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    id,
                    name,
                    price,
                    quantity: 1,
                });
            }
            state.totalItems += 1;
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
            }
        },
        resetCart: (state) => {
            state.cartItems = [];
            state.totalItems = 0;
        },
    },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cartState.cartItems;
export const selectTotalItems = (state) => state.cartState.totalItems;

export default cartSlice.reducer;
