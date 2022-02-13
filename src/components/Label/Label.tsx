import React, { FC } from "react";
import StyledLabel from "./Label.style";

export interface LabelProps {
  children: string;
}

const Label: FC<LabelProps> = ({ children }) => (
  <StyledLabel>{children.trim().toUpperCase()}</StyledLabel>
);

export default Label;
