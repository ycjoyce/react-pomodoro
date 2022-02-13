import React, { FC } from "react";
import StyledButton from "./Button.style";

export interface ButtonProps {
  children?: string;
  primary?: boolean;
  outline?: boolean;
  large?: boolean;
  onClick?(): void;
}

const Button: FC<ButtonProps> = ({
  children = "Button",
  primary = true,
  outline = false,
  large = false,
  onClick = () => {},
}) => {
  return (
    <StyledButton
      data-large={large}
      primary={primary}
      outline={outline}
      onClick={onClick}
    >
      {children.trim().toUpperCase()}
    </StyledButton>
  );
};

export default Button;
