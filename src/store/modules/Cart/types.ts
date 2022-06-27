import { ICartItem } from "types/models/cart";

export interface CartState {
  data: ICartItem[];
  loading: boolean;
  done: boolean;
  error?: unknown | null;
  totalPrice: number;
}
