import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import TaskItemTitle, { TaskItemTitleProps } from "./TaskItemTitle";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "TaskItemTitle",
  component: TaskItemTitle,
  args: {
    opened: false,
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground>{story()}</StyledDarkBackground>
    ),
  ],
};

const Template: Story<TaskItemTitleProps> = (args) => {
  const [{ opened }, updateArgs] = useArgs();
  const handleToggle = () => {
    updateArgs({ opened: !opened });
  };

  return <TaskItemTitle {...args} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
const defaultArgs = {
  title: "test",
  recordLength: 5,
  recordCompletedNumber: 0,
};
Default.args = {
  ...defaultArgs,
};

export const Done = Template.bind({});
Done.args = {
  ...defaultArgs,
  done: true,
};
