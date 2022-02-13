import React, { FC } from "react";
import StyledCountPanelItem, {
  StyledCount,
  StyledLabel,
} from "./CountPanelItem.style";

export interface CountPanelItemProps {
  count: number;
  label: string;
}

const CountPanelItem: FC<CountPanelItemProps> = ({ count, label }) => (
  <StyledCountPanelItem>
    <StyledCount>{count}</StyledCount>
    <StyledLabel>{label.trim().toUpperCase()}</StyledLabel>
  </StyledCountPanelItem>
);

export default CountPanelItem;
