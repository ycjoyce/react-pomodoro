import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CountPanelItem, { CountPanelItemProps } from "./CountPanelItem";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "CountPanelItem",
  component: CountPanelItem,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<CountPanelItemProps> = (args) => (
  <CountPanelItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 0,
  label: "Today",
};
