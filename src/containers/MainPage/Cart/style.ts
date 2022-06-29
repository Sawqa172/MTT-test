import styled from "styled-components";
import { btnReset, ulReset } from "styles/ResetByClasses";

const CartWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  background-color: ${(p) => p.theme.colors.white};
  margin-bottom: 50px;
`;

const CartContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CartTop = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-height: 320px;
  overflow-y: auto;
  ${ulReset};
`;

const CartBottom = styled.div`
  width: 100%;
  padding: 30px;
  border-top: 1px solid ${(p) => p.theme.colors.black};
  display: flex;
  align-items: center;
`;

const CartTotalPrice = styled.p`
  font-size: 20px;
  color: ${(p) => p.theme.colors.grey};
`;

const CartDeleteAll = styled.button`
  ${btnReset};
  font-size: 17px;
  color: ${(p) => p.theme.colors.grey};
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    color: ${(p) => p.theme.colors.orange};
  }
`;

const CartCheckout = styled.button`
  ${btnReset};
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.lightBlue};
  svg {
    color: ${(p) => p.theme.colors.white};
  }
  &:hover {
    svg {
      transform: translateX(4px);
    }
  }
`;

const CartCheckoutText = styled.span`
  font-size: 16px;
  color: ${(p) => p.theme.colors.white};
  margin-right: 10px;
`;

const EmptyCart = styled.span`
  text-align: center;
  font-size: 20px;
`;

export {
  CartWrapper,
  CartContent,
  CartTop,
  CartBottom,
  CartTotalPrice,
  CartDeleteAll,
  CartCheckout,
  CartCheckoutText,
  EmptyCart,
};
