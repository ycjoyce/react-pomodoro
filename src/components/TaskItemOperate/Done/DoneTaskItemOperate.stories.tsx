import React from "react";
import { Story } from "@storybook/react/types-6-0";
import DoneTaskItemOperate, {
  DoneTaskItemOperateProps,
} from "./DoneTaskItemOperate";
import StyledDarkBackground from "../../../styles/components/DarkBackground";

export default {
  title: "TaskItemOperate/DoneTask",
  component: DoneTaskItemOperate,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<DoneTaskItemOperateProps> = (args) => (
  <DoneTaskItemOperate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onDelete() {},
  onRedo() {},
};
