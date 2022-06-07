import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalPriceAmount: 0,
  isCartShow: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
    },
    removeItems(state, action) {
      state.totalPriceAmount += state.totalPriceAmount * action.payload;
    },
    isCartShow(state, action) {
      state.isCartShow = !state.isCartShow;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
