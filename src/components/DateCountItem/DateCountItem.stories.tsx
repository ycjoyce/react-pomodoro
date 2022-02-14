import React from "react";
import { Story } from "@storybook/react/types-6-0";
import DateCountItem, { DateCountItemProps } from "./DateCountItem";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "DateCountItem",
  component: DateCountItem,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground>{story()}</StyledDarkBackground>
    ),
  ],
};

const Template: Story<DateCountItemProps> = (args) => (
  <DateCountItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  tomatoAmount: 5,
};

export const NoTomato = Template.bind({});
NoTomato.args = {
  date: new Date(),
  tomatoAmount: 0,
};
