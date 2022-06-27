import { createSlice } from "utils/redux/toolkit";

import { initialState } from "./state";
import { PayloadAction } from "@reduxjs/toolkit";

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
      state.data = [...state.data, action.payload];
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
    },
    updateCartSuccess(state, action) {
      state.data = action.payload;
    },
    updateCartFailed(state, action) {
      state.error = action.payload;
    },
    updateCartFulfilled(state) {
      state.loading = false;
      state.done = false;
    },
  },
});

export const { name, actions, reducer } = slice;
