import styled from "styled-components";

export interface ButtonProps {
  primary: boolean;
  outline: boolean;
  "data-large": boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ primary, theme, outline }) => {
    if (outline) {
      return "transparent";
    }
    return primary ? theme.color.primary : theme.color.secondary;
  }};
  color: ${({ primary, theme, outline }) => {
    if (outline) {
      return primary ? theme.color.primary : theme.color.secondary;
    }
    return "#fff";
  }};
  border-color: ${({ primary, theme }) =>
    primary ? theme.color.primary : theme.color.secondary};
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  padding: 0.5em 1em;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.font.small};
  cursor: pointer;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  margin: -5px;

  & ${StyledButton} {
    flex: 0 0 auto;
    margin: 5px;
  }

  & ${StyledButton}[data-large=true] {
    flex: 1 1 auto;
  }
`;

export default StyledButton;
