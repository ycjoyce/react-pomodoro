import React from "react";
import { Story } from "@storybook/react/types-6-0";
import AddNewTask, { AddNewTaskProps } from "./AddNewTask";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "AddNewTask",
  component: AddNewTask,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<AddNewTaskProps> = (args) => <AddNewTask {...args} />;

export const Default = Template.bind({});
