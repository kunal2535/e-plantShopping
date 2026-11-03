import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) existingItem.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => state.filter((item) => item.id !== action.payload),
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((plant) => plant.id === id);
      if (!item) return;
      if (quantity <= 0) return state.filter((plant) => plant.id !== id);
      item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
