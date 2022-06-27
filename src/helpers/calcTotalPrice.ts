import { ICartItem } from "types/models/cart";

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.quantity + sum, 0);
};
