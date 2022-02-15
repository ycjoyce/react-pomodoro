import React from "react";
import { Story } from "@storybook/react/types-6-0";
import TimerSection, { TimerSectionProps } from "./TimerSection";

export default {
  title: "TimerSection",
  component: TimerSection,
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ backgroundColor: "#eaeaea" }}>{story()}</div>
    ),
  ],
};

const Template: Story<TimerSectionProps> = (args) => <TimerSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: undefined,
};

export const Task = Template.bind({});
Task.args = {
  task: {
    title: "Test",
    recordLength: 1,
    recordCompletedNumber: 0,
  },
  tomatoUnitTime: 10,
};
