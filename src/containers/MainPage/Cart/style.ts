import styled from "styled-components";
import { ulReset } from "styles/ResetByClasses";
import { variables } from "styles/Variables";

const CartWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
`;

const CartContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CartTop = styled.ul`
  width: 100%;
  display: flex;
  padding: 30px;
  ${ulReset};
`;

const CartBottom = styled.div`
  width: 100%;
  padding: 30px;
  border-top: 1px solid ${variables.black};
  background-color: ${variables.grey};
`;

export { CartWrapper, CartContent, CartTop, CartBottom };
