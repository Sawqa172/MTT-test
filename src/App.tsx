import React, { useEffect } from "react";

//global styles
import { GlobalStyle } from "styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { useCartSlice } from "store/modules/Cart/hook";
import { getCartFromLS } from "./helpers/getCartItemsFromLS";

const MainPage = React.lazy(() => import("containers/MainPage"));

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
      <MainPage />
      <GlobalStyle />
    </div>
  );
}
export default App;
