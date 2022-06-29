import React from "react";

//style
import { MainPageWrapper } from "./style";
import Cart from "./Cart";
import ProductList from "./ProductList";
import ThemeToggle from "./ThemeToggle";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <ThemeToggle />
      <Cart />
      <ProductList />
    </MainPageWrapper>
  );
};

export default MainPage;
