import { Story } from "@storybook/react/types-6-0";
import Label, { LabelProps } from "./Label";

export default {
  title: "Label",
  component: Label,
};

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "test",
};
