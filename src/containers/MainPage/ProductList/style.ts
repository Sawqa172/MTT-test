import styled from "styled-components";
import { ulReset } from "styles/ResetByClasses";

const ProductListWrapper = styled.ul`
  ${ulReset};
  width: 100%;
  max-width: 500px;
  background-color: ${(p) => p.theme.colors.white};
  margin: 0 auto;
`;

export { ProductListWrapper };
