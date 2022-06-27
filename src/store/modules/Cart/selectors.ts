import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types/RootState";
import { initialState } from "./state";

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.cart || initialState;

export const selectData = createSelector(
  [selectDomain],
  (cartState) => cartState.data,
);

export const selectTotalPrice = createSelector(
  [selectDomain],
  (cartState) => cartState.totalPrice,
);

export const selectLoading = createSelector(
  [selectDomain],
  (cartState) => cartState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  (cartState) => cartState.done,
);

export const selectError = createSelector(
  [selectDomain],
  (cartState) => cartState.error,
);
