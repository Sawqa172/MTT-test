import styled from "styled-components";
import { btnReset, ulReset } from "styles/ResetByClasses";
import { variables } from "styles/Variables";

const CartWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  background-color: ${variables.white};
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
  ${ulReset};
`;

const CartBottom = styled.div`
  width: 100%;
  padding: 30px;
  border-top: 1px solid ${variables.black};
  display: flex;
  align-items: center;
`;

const CartTotalPrice = styled.p`
  font-size: 20px;
  color: ${variables.grey};
`;

const CartDeleteAll = styled.button`
  ${btnReset};
  font-size: 17px;
  color: ${variables.grey};
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    color: ${variables.orange};
  }
`;

const CartCheckout = styled.button`
  ${btnReset};
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.lightBlue};
  svg {
    color: ${variables.white};
  }
  &:hover {
    svg {
      transform: translateX(4px);
    }
  }
`;

const CartCheckoutText = styled.span`
  font-size: 16px;
  color: ${variables.white};
  margin-right: 10px;
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
};
