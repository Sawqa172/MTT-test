import React from "react";

//style
import {
  CartItemWrapper,
  CartTitle,
  CartButton,
  CartButtonText,
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
  //totalPriceEachItem
  let totalPriceEachItem = quantity * price;

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

  const checkInputValue = (id, value) => {
    if (value == 0 || !value) {
      dispatch(actions.updateItemFromCart({ id, quantity: 1 }));
    }
  };
  const addQuantity = (id) => {
    dispatch(actions.addQuantityInCart(id));
  };
  const minusQuantity = (id) => {
    dispatch(actions.minusQuantityInCart(id));
  };

  return (
    <CartItemWrapper>
      <CartTitle>{title}</CartTitle>
      <CartButton onClick={() => minusQuantity(id)} disabled={quantity === 1}>
        <CartButtonText>-</CartButtonText>
      </CartButton>
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
      <CartButton onClick={() => addQuantity(id)}>
        <CartButtonText>+</CartButtonText>
      </CartButton>
      <CartPrice> $ {totalPriceEachItem.toFixed(2)}</CartPrice>
      <CartDelete onClick={() => deleteItem(id)}>
        <CrossIcon />
      </CartDelete>
    </CartItemWrapper>
  );
};

export default CartItem;
