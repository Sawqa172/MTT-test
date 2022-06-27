import React from "react";

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

  let totalPriceEachItem = quantity * price;

  const checkInputValue = (id, value) => {
    if (value == 0 || !value) {
      dispatch(actions.updateItemFromCart({ id, quantity: 1 }));
    }
  };

  return (
    <CartItemWrapper>
      <CartTitle>{title}</CartTitle>
      <CartQuantity
        value={quantity}
        type="text"
        onChange={(e) => updateItem(id, e.target.value)}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onBlur={(e) => {
          checkInputValue(id, e.target.value);
        }}
      />
      <CartPrice> $ {totalPriceEachItem.toFixed(2)}</CartPrice>
      <CartDelete onClick={() => deleteItem(id)}>
        <CrossIcon />
      </CartDelete>
    </CartItemWrapper>
  );
};

export default CartItem;
