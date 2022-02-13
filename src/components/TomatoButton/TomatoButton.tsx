import React, { FC } from "react";
import StyledTomatoButton from "./TomatoButton.style";

export interface TomatoButtonProps {
  active?: boolean;
  number: number;
}

const TomatoButton: FC<TomatoButtonProps> = ({ active = false, number }) => {
  return <StyledTomatoButton active={active} data-number={number} />;
};

export default TomatoButton;
