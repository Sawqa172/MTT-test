import { useInjectReducer, useInjectSaga } from "utils/redux/redux-injectors";
import { cartSaga } from "./saga";
import { name, reducer, actions } from "./slice";

export const useCartSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: cartSaga });

  return { actions };
};
