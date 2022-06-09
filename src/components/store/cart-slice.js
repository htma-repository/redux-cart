import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalPriceAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItems(state, action) {
      const updatedTotalPriceAmount =
        state.totalPriceAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      state.items = updatedItems;
      state.totalPriceAmount = updatedTotalPriceAmount;

      // * Another aproach but only can use if use redux-toolkit, not redux as general or reactContext.

      /* const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        const newItems = {
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          amount: 1,
        };
        state.items.push(newItems);
      } else {
        existingItem.amount++;
        existingItem.totalPrice += newItem.price;
      } */
    },
    removeItems(state, action) {
      const existingRemoveItemsIndex = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      const existingItems = state.items[existingRemoveItemsIndex];
      const removedTotalPriceAmount =
        state.totalPriceAmount - existingItems.price;

      let removedItems;

      if (existingItems.amount === 1) {
        removedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        let removedItem = {
          ...existingItems,
          amount: existingItems.amount - 1,
        };
        removedItems = [...state.items];
        removedItems[existingRemoveItemsIndex] = removedItem;
      }

      state.items = removedItems;
      state.totalPriceAmount = removedTotalPriceAmount;

      // * Another aproach but only can use if use redux-toolkit, not redux as general or reactContext.

      /* const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.amount === 1) {
        state.items.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.totalPrice -= existingItem.price;
      } */
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
