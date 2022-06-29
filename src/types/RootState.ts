import { CartState } from "store/modules/Cart/types";
import { ProductsState } from "store/modules/Products/types";
import { ThemeState } from "styles/Theme/slice/types";

export interface RootState {
  theme?: ThemeState;
  products?: ProductsState;
  cart?: CartState;
}
