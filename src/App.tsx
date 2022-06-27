import React, { useEffect } from "react";

//global styles
import { GlobalStyle } from "styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { useCartSlice } from "store/modules/Cart/hook";
import { getCartFromLS } from "./helpers/getCartItemsFromLS";

function App() {
  const dispatch = useDispatch();
  const { actions } = useCartSlice();

  //get cart data from LS

  const cartLocalStorageData = getCartFromLS();

  useEffect(() => {
    if (cartLocalStorageData.items.length !== 0) {
      dispatch(actions.updateCartTrigger(cartLocalStorageData));
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}
export default App;
