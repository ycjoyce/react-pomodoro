import { Story } from "@storybook/react/types-6-0";
import Modal, { ModalProps } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p style={{ textAlign: "center" }}>My Modal</p>,
};
