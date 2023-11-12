import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeFromCart: (state, action) => {
      const indexToRemove = action.payload;
      state.items.splice(indexToRemove, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
