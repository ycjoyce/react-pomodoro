import React, { FC } from "react";
import StyledTab from "./Tab.style";

export interface TabProps {
  children?: string;
  active?: boolean;
  onClick?(value: string): void;
}

const Tab: FC<TabProps> = ({
  children = "",
  active = false,
  onClick = () => {},
}) => {
  const value = children.trim().toUpperCase();

  return (
    <StyledTab active={active} onClick={() => onClick(value)}>
      {value}
    </StyledTab>
  );
};

export default Tab;
