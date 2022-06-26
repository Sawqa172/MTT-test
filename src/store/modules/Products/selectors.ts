import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types/RootState";
import { initialState } from "./state";

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.products || initialState;

export const selectData = createSelector(
  [selectDomain],
  (productsState) => productsState.data,
);

export const selectLoading = createSelector(
  [selectDomain],
  (productsState) => productsState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  (productsState) => productsState.done,
);

export const selectError = createSelector(
  [selectDomain],
  (productsState) => productsState.error,
);
