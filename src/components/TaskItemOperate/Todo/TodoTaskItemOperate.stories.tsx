import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import TodoTaskItemOperate, {
  TodoTaskItemOperateProps,
} from "./TodoTaskItemOperate";
import StyledDarkBackground from "../../../styles/components/DarkBackground";

export default {
  title: "TaskItemOperate/TodoTask",
  component: TodoTaskItemOperate,
  args: {
    title: "test",
    tomatoAmount: 0,
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<TodoTaskItemOperateProps> = (args) => {
  const [{ title }, updateArgs] = useArgs();
  const handleChange = (value: string) => {
    updateArgs({ title: value.trim() });
  };
  const handleSelect = (number: number) => {
    updateArgs({ tomatoAmount: number });
  };

  return (
    <TodoTaskItemOperate
      {...args}
      title={title}
      onTitleChange={handleChange}
      onSelectTomato={handleSelect}
    />
  );
};

export const Default = Template.bind({});
