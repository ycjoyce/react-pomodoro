import styled from "styled-components";
import { ButtonProps } from "./Button";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ primary, theme, outline }) => {
    if (outline) {
      return "transparent";
    }
    return primary ? theme.primary : theme.secondary;
  }};
  color: ${({ primary, theme, outline }) => {
    if (outline) {
      return primary ? theme.primary : theme.secondary;
    }
    return "#fff";
  }};
  border-color: ${({ primary, theme }) =>
    primary ? theme.primary : theme.secondary};
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  padding: 0.5em 1em;
  font-weight: bolder;
  cursor: pointer;
`;

export default StyledButton;
