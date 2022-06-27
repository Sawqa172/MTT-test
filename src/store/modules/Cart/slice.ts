import { createSlice } from "utils/redux/toolkit";

import { initialState } from "./state";
import { PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "helpers/calcTotalPrice";

//types
import { actionUpdateCart } from "./types";

// Creating slice with reducers
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //setCart
    setCartTrigger(state, action: PayloadAction<string>) {
      state.done = true;
      state.loading = true;
    },
    setCartSuccess(state, action) {
      const findItem = state.data.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.quantity++;
      } else {
        state.data = [...state.data, action.payload];
      }
      state.totalPrice = calcTotalPrice(state.data);
      state.loading = false;
    },
    setCartFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setCartFulfilled(state) {
      state.loading = false;
      state.done = false;
    },

    //update Cart
    updateCartTrigger(state, action) {
      state.done = true;
      state.loading = true;
    },
    updateCartSuccess(state, action: PayloadAction<actionUpdateCart>) {
      state.data = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.loading = false;
    },
    updateCartFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateCartFulfilled(state) {
      state.loading = false;
      state.done = false;
    },

    //delete item & items
    removeCartItem(state, action: PayloadAction<number>) {
      state.data = state.data.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.data);
    },
    clearCartItems(state) {
      state.data = [];
      state.totalPrice = 0;
    },
  },
});

export const { name, actions, reducer } = slice;
