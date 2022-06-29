import styled from "styled-components";
import { btnReset, inputReset, liReset } from "styles/ResetByClasses";

const CartItemWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  ${liReset};
  &:not(:last-of-type) {
    margin-bottom: 10px;
    border-bottom: 1px dashed ${(p) => p.theme.colors.grey};
  }
`;

const CartTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.grey};
  margin-right: 50px;
  width: 150px;
  max-height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const CartQuantity = styled.input`
  width: 30px;
  display: flex;
  text-align: center;
  ${inputReset};
  border: 1px solid ${(p) => p.theme.colors.grey};
  transition: 0.3s linear;
  margin: 0 10px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    box-shadow: 0 0 7px 1px ${(p) => p.theme.colors.lightBlue};
  }
`;

const CartButton = styled.button`
  ${btnReset};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid ${(p) => p.theme.colors.grey};
  transition: 0.3s linear;
  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

const CartButtonText = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.orange};
`;

const CartPrice = styled.p`
  font-size: 20px;
  color: ${(p) => p.theme.colors.orange};
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
    color: ${(p) => p.theme.colors.grey};
    transition: 0.3s linear;
  }
  &:hover {
    svg {
      color: ${(p) => p.theme.colors.orange};
    }
  }
`;

export {
  CartItemWrapper,
  CartTitle,
  CartButton,
  CartButtonText,
  CartQuantity,
  CartPrice,
  CartDelete,
};
