import { Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const defaultArgs = { label: "按鈕" };

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  primary: false,
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  ...defaultArgs,
  primary: true,
  outline: true,
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  ...defaultArgs,
  primary: false,
  outline: true,
};
