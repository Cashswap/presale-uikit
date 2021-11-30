import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
