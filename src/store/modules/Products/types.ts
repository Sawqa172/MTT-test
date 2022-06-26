import { IProductsItem } from "types/models/products";

export interface ProductsState {
  data: IProductsItem[] | null;
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}
