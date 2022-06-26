import styled from "styled-components";
import { variables } from "styles/Variables";
import { btnReset } from "styles/ResetByClasses";

const ProductItemWrapper = styled.div`
  display: flex;
  width: 33%;
  margin: 15px;
  padding: 15px;
  background-color: ${variables.grey};
`;

const ProductItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductItemTitle = styled.span`
  font-size: 16px;
  color: ${variables.orange};
  margin-bottom: 15px;
`;

const ProductItemPrice = styled.span`
  margin-bottom: 15px;
  color: ${variables.pink};
`;

const ProductItemButton = styled.button`
  ${btnReset};
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${variables.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${variables.pink};
  }
`;

export {
  ProductItemWrapper,
  ProductItemContent,
  ProductItemTitle,
  ProductItemPrice,
  ProductItemButton,
};
