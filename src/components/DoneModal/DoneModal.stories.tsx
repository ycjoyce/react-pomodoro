import { Story } from "@storybook/react/types-6-0";
import DoneModal, { DoneModalProps } from "./DoneModal";

export default {
  title: "DoneModal",
  component: DoneModal,
};

const Template: Story<DoneModalProps> = (args) => <DoneModal {...args} />;

export const Task = Template.bind({});
Task.args = {
  type: "task",
};

export const Break = Template.bind({});
Break.args = {
  type: "break",
};
