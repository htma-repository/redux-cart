import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isShown: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    isCartShow(state) {
      state.isCartShow = !state.isCartShow;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
