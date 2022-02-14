import React from "react";
import { Story } from "@storybook/react/types-6-0";
import DateCountPanel, { DateCountPanelProps } from "./DateCountPanel";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "DateCountPanel",
  component: DateCountPanel,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<DateCountPanelProps> = (args) => (
  <DateCountPanel {...args} />
);

export const Default = Template.bind({});
