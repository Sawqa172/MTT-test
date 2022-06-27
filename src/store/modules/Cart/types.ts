import { ICartItem } from "types/models/cart";

export interface CartState {
  data: ICartItem[];
  loading: boolean;
  done: boolean;
  error?: unknown | null;
  totalPrice: number;
}

export interface actionUpdateCart {
  items: ICartItem[];
  totalPrice: number;
}

export interface IUpdateItemFromCart {
  id: number;
  quantity: number;
}
