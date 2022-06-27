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
  const [val, setVal] = useState(quantity);

  const dispatch = useDispatch();
  const { actions } = useCartSlice();

  const deleteItem = (id) => {
    dispatch(actions.removeCartItem(id));
  };

  return (
    <CartItemWrapper>
      <CartTitle>{title}</CartTitle>
      <CartQuantity
        defaultValue={val}
        type="number"
        onChange={(e) => setVal(e.target.value.replace(/[^0-9]/g, ""))}
      />
      <CartPrice> $ {price}</CartPrice>
      <CartDelete onClick={() => deleteItem(id)}>
        <CrossIcon />
      </CartDelete>
    </CartItemWrapper>
  );
};

export default CartItem;
