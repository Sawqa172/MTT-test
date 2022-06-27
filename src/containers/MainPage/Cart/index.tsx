import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectData,
  selectLoading,
  selectTotalPrice,
} from "store/modules/Cart/selectors";
import { useCartSlice } from "store/modules/Cart/hook";

//style
import {
  CartWrapper,
  CartContent,
  CartTop,
  CartBottom,
  CartTotalPrice,
  CartDeleteAll,
  CartCheckout,
  CartCheckoutText,
} from "./style";

//components
import CartItem from "./CartItem";

//icons
import ArrowRight from "components/icons/ArrowRight";

const Cart = () => {
  const dispatch = useDispatch();
  const { actions } = useCartSlice();
  const cartItems = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const totalPrice = useSelector(selectTotalPrice);

  const deleteAllCartItems = () => {
    dispatch(actions.clearCartItems());
  };

  return (
    <CartWrapper>
      <CartContent>
        {cartItems.length !== 0 ? (
          <CartTop>
            {!loading ? (
              cartItems?.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </CartTop>
        ) : (
          <p>Cart is Empty</p>
        )}
        <CartBottom>
          <CartTotalPrice>$ {totalPrice}</CartTotalPrice>
          <CartDeleteAll onClick={deleteAllCartItems}>Clear</CartDeleteAll>
          <CartCheckout>
            <CartCheckoutText>Checkout</CartCheckoutText>
            <ArrowRight />
          </CartCheckout>
        </CartBottom>
      </CartContent>
    </CartWrapper>
  );
};

export default Cart;
