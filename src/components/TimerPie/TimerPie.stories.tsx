import { Story } from "@storybook/react/types-6-0";
import TimerPie, { TimerPieProps } from "./TimerPie";

export default {
  title: "TimerPie",
  component: TimerPie,
};

const Template: Story<TimerPieProps> = (args) => <TimerPie {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalTime: 60,
  passedTime: 10,
};
