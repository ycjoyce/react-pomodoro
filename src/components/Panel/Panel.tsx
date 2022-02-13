import React, { FC, useState } from "react";
import Tab from "../Tab/Tab";
import StyledPanel from "./Panel.style";
import { StyledTabGroup } from "../Tab/Tab.style";

export interface PanelContent {
  tab: string;
  list: React.ReactNode;
}

export interface PanelProps {
  contents: PanelContent[];
}

const Panel: FC<PanelProps> = ({ contents }) => {
  const [active, setActive] = useState(contents[0].tab);

  const renderTabs = (tabs: string[]) => {
    return tabs.map((tab) => (
      <Tab
        active={tab.toUpperCase() === active.toUpperCase()}
        key={tab}
        onClick={setActive}
      >
        {tab}
      </Tab>
    ));
  };

  return (
    <StyledPanel>
      <StyledTabGroup>
        {renderTabs(contents.map((content) => content.tab))}
      </StyledTabGroup>
      {
        contents.find(
          (content) => content.tab.toUpperCase() === active.toUpperCase()
        )?.list
      }
    </StyledPanel>
  );
};

export default Panel;
