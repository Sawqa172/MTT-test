import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCartSlice } from "store/modules/Cart/hook";

//style
import {
  ProductItemWrapper,
  ProductItemContent,
  ProductItemTitle,
  ProductItemPrice,
  ProductItemButton,
} from "./style";

//types

import { ICartItem } from "types/models/cart";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { actions } = useCartSlice();

  const addItem = () => {
    let newItem: ICartItem = {
      title: props.products.title,
      id: props.products.id,
      price: props.products.price,
      quantity: 1,
    };
    dispatch(actions.setCartItemTrigger(newItem));
  };

  return (
    <>
      <ProductItemWrapper>
        <ProductItemContent>
          <ProductItemTitle>{props.products.title}</ProductItemTitle>
          <ProductItemPrice>
            $ {props.products.price.toFixed(2)}
          </ProductItemPrice>
          <ProductItemButton onClick={() => addItem()}>Add</ProductItemButton>
        </ProductItemContent>
      </ProductItemWrapper>
    </>
  );
};

export default ProductItem;
