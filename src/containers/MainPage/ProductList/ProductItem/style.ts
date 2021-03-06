import styled from "styled-components";

import { btnReset, liReset } from "styles/ResetByClasses";

const ProductItemWrapper = styled.li`
  ${liReset};
  display: flex;
  width: 100%;
  margin: 15px 0;
  padding: 15px;
  background-color: ${(p) => p.theme.colors.white};
  &:not(:last-of-type) {
    border-bottom: 1px solid ${(p) => p.theme.colors.grey};
  }
`;

const ProductItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductItemTitle = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 15px;
`;

const ProductItemPrice = styled.span`
  margin-bottom: 15px;
  font-size: 24px;
  color: ${(p) => p.theme.colors.pink};
`;

const ProductItemButton = styled.button`
  ${btnReset};
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(p) => p.theme.colors.pink};
  }
`;

export {
  ProductItemWrapper,
  ProductItemContent,
  ProductItemTitle,
  ProductItemPrice,
  ProductItemButton,
};
