import { Story } from "@storybook/react/types-6-0";
import CompleteButton, { CompleteButtonProps } from "./CompleteButton";

export default {
  title: "CompleteButton",
  component: CompleteButton,
};

const Template: Story<CompleteButtonProps> = (args) => (
  <CompleteButton {...args} />
);

export const Default = Template.bind({});
