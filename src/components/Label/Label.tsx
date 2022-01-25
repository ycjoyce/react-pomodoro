import React, { FC } from "react";

export interface LabelProps {
  children: string;
}

const Label: FC<LabelProps> = ({ children }) => (
  <label>{children.trim().toUpperCase()}</label>
);

export default Label;
