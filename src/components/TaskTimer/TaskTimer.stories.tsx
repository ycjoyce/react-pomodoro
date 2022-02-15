import React from "react";
import { Story } from "@storybook/react/types-6-0";
import TaskTimer, { TaskTimerProps } from "./TaskTimer";

export default {
  title: "TaskTimer",
  component: TaskTimer,
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ backgroundColor: "#eaeaea" }}>{story()}</div>
    ),
  ],
};

const Template: Story<TaskTimerProps> = (args) => <TaskTimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "test",
  recordLength: 5,
  recordCompletedNumber: 2,
  tomatoUnitTime: 10,
};

export const Break = Template.bind({});
Break.args = {
  title: "test",
  recordLength: 1,
  breaktime: true,
  tomatoUnitTime: 10,
};
