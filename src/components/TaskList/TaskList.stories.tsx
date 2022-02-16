import React from "react";
import { Story } from "@storybook/react/types-6-0";
import TaskList, { TaskListProps } from "./TaskList";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "OperateSection/TaskList",
  component: TaskList,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: "task1", title: "todo1", done: false, recordLength: 5 },
    { id: "task2", title: "todo2", done: false, recordLength: 6 },
    {
      id: "task3",
      title: "done1",
      done: true,
      recordLength: 8,
      recordCompletedNumber: 8,
    },
  ],
};
