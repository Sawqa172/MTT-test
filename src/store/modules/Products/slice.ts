import { createSlice } from "utils/redux/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./state";

// Creating slice with reducers
const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchDataTrigger(state) {
      state.loading = true;
      state.done = false;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.done = true;
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchDataFulfilled(state) {
      state.loading = false;
      state.done = false;
    },
  },
});

export const { name, actions, reducer } = slice;
