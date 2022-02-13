import React, { FC } from "react";
import StyledPanelItem from "./PanelItem.style";

export interface PanelItemProps {
  children: React.ReactNode;
}

const PanelItem: FC<PanelItemProps> = ({ children }) => {
  return <StyledPanelItem>{children}</StyledPanelItem>;
};

export default PanelItem;
