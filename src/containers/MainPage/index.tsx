import React from "react";

//style
import { MainPageWrapper } from "./style";
import Cart from "./Cart";
import ProductList from "./ProductList";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Cart />
      <ProductList />
    </MainPageWrapper>
  );
};

export default MainPage;
