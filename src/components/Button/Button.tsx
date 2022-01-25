import React, { FC } from "react";
import StyledButton from "./Button.style";

export interface ButtonProps {
  label?: string;
  primary?: boolean;
  outline?: boolean;
  onClick?(): void;
}

const Button: FC<ButtonProps> = ({
  label = "Button",
  primary = true,
  outline = false,
  onClick = () => {},
}) => {
  return (
    <StyledButton primary={primary} outline={outline} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
