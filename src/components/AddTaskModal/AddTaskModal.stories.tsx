import { Story } from "@storybook/react/types-6-0";
import AddTaskModal, { AddTaskModalProps } from "./AddTaskModal";

export default {
  title: "AddTaskModal",
  component: AddTaskModal,
};

const Template: Story<AddTaskModalProps> = (args) => <AddTaskModal {...args} />;

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  success: true,
};

export const Fail = Template.bind({});
Fail.args = {
  success: false,
};
