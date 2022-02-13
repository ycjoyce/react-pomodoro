import React, { FC } from "react";
import StyledPanelList from "./PanelList.style";

export interface PanelListProps {
  children: React.ReactNode;
}

const PanelList: FC<PanelListProps> = ({ children }) => {
  return <StyledPanelList>{children}</StyledPanelList>;
};

export default PanelList;
