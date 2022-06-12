import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isShown: false,
  notificationShow: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    isCartShow(state) {
      state.isShown = !state.isShown;
    },
    isNotificationShow(state, action) {
      state.notificationShow = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
      console.log(action.payload.status);
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
