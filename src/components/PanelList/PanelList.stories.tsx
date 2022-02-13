import { Story } from "@storybook/react/types-6-0";
import React from "react";
import PanelList, { PanelListProps } from "./PanelList";
import PanelItem from "../PanelItem/PanelItem";

export default {
  title: "PanelList",
  component: PanelList,
};

const Template: Story<PanelListProps> = (args) => <PanelList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <PanelItem>1</PanelItem>
      <PanelItem>2</PanelItem>
      <PanelItem>3</PanelItem>
    </>
  ),
};
