import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CountPanel, { CountPanelProps } from "./CountPanel";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "CountPanel",
  component: CountPanel,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<CountPanelProps> = (args) => <CountPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { count: 0, label: "today" },
    { count: 0, label: "2/13 - 2/19" },
  ],
};
