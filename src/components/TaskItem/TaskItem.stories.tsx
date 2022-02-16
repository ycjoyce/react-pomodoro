import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import TaskItem, { TaskItemProps } from "./TaskItem";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "TaskItem",
  component: TaskItem,
  args: {
    id: "task1",
    opened: false,
    title: "test",
    recordLength: 5,
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<TaskItemProps> = (args) => {
  const [{ opened }, updateArgs] = useArgs();
  const handleToggle = (toOpen: boolean) => {
    updateArgs({ opened: toOpen });
  };
  return <TaskItem {...args} opened={opened} onToggle={handleToggle} />;
};

export const Default = Template.bind({});

export const Opened = Template.bind({});
Opened.args = {
  opened: true,
  tomatoAmount: 5,
};

export const Done = Template.bind({});
Done.args = {
  done: true,
};
