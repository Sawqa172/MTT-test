import { calcTotalPrice } from "./calcTotalPrice";
import { ICartItem } from "types/models/cart";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as ICartItem[],
    totalPrice,
  };
};
