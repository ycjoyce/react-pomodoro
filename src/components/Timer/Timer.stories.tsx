import { Story } from "@storybook/react/types-6-0";
import Timer, { TimerProps } from "./Timer";

export default {
  title: "Timer",
  component: Timer,
};

const Template: Story<TimerProps> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
