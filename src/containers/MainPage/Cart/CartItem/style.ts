import styled from "styled-components";
import { btnReset, inputReset, liReset } from "styles/ResetByClasses";
import { variables } from "styles/Variables";

const CartItemWrapper = styled.li`
  width: 100%;
  display: flex;
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px dashed ${variables.grey};
  ${liReset};
`;

const CartTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${variables.grey};
  margin-right: 20px;
`;

const CartQuantity = styled.input`
  width: 20px;
  display: flex;
  border: 1px solid ${variables.grey};
  text-align: center;
  margin-right: 30px;
  ${inputReset};
  &:focus {
    box-shadow: 0 0 17px 5px #000000;
  }
`;

const CartPrice = styled.span`
  font-size: 16px;
  color: ${variables.orange};
  margin-right: 30px;
`;

const CartDelete = styled.button`
  ${btnReset};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { CartItemWrapper, CartTitle, CartQuantity, CartPrice, CartDelete };
