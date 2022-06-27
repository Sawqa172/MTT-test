import styled from "styled-components";
import { ulReset } from "styles/ResetByClasses";
import { variables } from "styles/Variables";

const ProductListWrapper = styled.ul`
  ${ulReset};
  width: 100%;
  max-width: 500px;
  background-color: ${variables.white};
  margin: 0 auto;
`;

export { ProductListWrapper };
