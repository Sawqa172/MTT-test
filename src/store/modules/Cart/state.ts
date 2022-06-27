import { CartState } from "./types";

export const initialState: CartState = {
  data: [],
  loading: false,
  done: false,
  error: null,
  totalPrice: 0,
};
