import { Story } from "@storybook/react/types-6-0";
import TomatoButton, { TomatoButtonProps } from "./TomatoButton";

export default {
  title: "TomatoButton",
  component: TomatoButton,
};

const Template: Story<TomatoButtonProps> = (args) => <TomatoButton {...args} />;

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  active: true,
};
