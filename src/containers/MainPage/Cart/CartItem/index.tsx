import React, { useState } from "react";

//style
import {
  CartItemWrapper,
  CartTitle,
  CartQuantity,
  CartPrice,
  CartDelete,
} from "./style";

//icons
import CrossIcon from "components/icons/Cross";
import { useDispatch } from "react-redux";
import { useCartSlice } from "store/modules/Cart/hook";

const CartItem = (props) => {
  const { title, price, id, quantity } = props.cartItem;

  const dispatch = useDispatch();
  const { actions } = useCartSlice();

  const deleteItem = (id) => {
    dispatch(actions.removeCartItem(id));
  };

  const updateItem = (id, quantity) => {
    let updatedItem = {
      id,
      quantity,
    };
    dispatch(actions.updateItemFromCart(updatedItem));
  };

  return (
    <CartItemWrapper>
      <CartTitle>{title}</CartTitle>
      <CartQuantity
        value={quantity}
        type="number"
        onChange={(e) => updateItem(id, e.target.value)}
      />
      <CartPrice> $ {quantity * price.toFixed(2)}</CartPrice>
      <CartDelete onClick={() => deleteItem(id)}>
        <CrossIcon />
      </CartDelete>
    </CartItemWrapper>
  );
};

export default CartItem;
