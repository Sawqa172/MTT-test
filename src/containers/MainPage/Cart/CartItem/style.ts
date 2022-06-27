import styled from "styled-components";
import { btnReset, inputReset, liReset } from "styles/ResetByClasses";
import { variables } from "styles/Variables";

const CartItemWrapper = styled.li`
  width: 100%;
  display: flex;
  padding: 10px 0;
  ${liReset};
  &:not(:last-of-type) {
    margin-bottom: 10px;
    border-bottom: 1px dashed ${variables.grey};
  }
`;

const CartTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${variables.grey};
  margin-right: 20px;
  width: 150px;
`;

const CartQuantity = styled.input`
  width: 30px;
  display: flex;
  text-align: center;
  margin-left: auto;
  ${inputReset};
  border: 1px solid ${variables.grey};
  transition: 0.3s linear;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    box-shadow: 0 0 7px 1px ${variables.lightBlue};
  }
`;

const CartPrice = styled.p`
  font-size: 20px;
  color: ${variables.orange};
  margin-left: auto;
  font-weight: 700;
`;

const CartDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${btnReset};
  margin-left: auto;
  svg {
    color: ${variables.grey};
    transition: 0.3s linear;
  }
  &:hover {
    svg {
      color: ${variables.orange};
    }
  }
`;

export { CartItemWrapper, CartTitle, CartQuantity, CartPrice, CartDelete };
