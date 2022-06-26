import { useInjectReducer, useInjectSaga } from "utils/redux/redux-injectors";
import { productsSaga } from "./saga";
import { name, reducer, actions } from "./slice";

export const useProductsSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: productsSaga });

  return { actions };
};
