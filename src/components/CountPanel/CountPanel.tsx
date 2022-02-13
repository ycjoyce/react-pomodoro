import React, { FC } from "react";
import CountPanelItem, {
  CountPanelItemProps,
} from "../CountPanelItem/CountPanelItem";
import StyledCountPanel from "./CountPanel.style";

export interface CountPanelProps {
  items: CountPanelItemProps[];
}

const CountPanel: FC<CountPanelProps> = ({ items }) => {
  const renderItems = (items: CountPanelItemProps[]) => {
    return items.map((item) => <CountPanelItem {...item} key={item.label} />);
  };
  return <StyledCountPanel>{renderItems(items)}</StyledCountPanel>;
};

export default CountPanel;
