import { CartState } from "store/modules/Cart/types";
import { ProductsState } from "store/modules/Products/types";

export interface RootState {
  products?: ProductsState;
  cart?: CartState;
}
