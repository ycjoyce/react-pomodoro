import React from "react";
import { Story } from "@storybook/react/types-6-0";
import AnalyticsReport, { AnalyticsReportProps } from "./AnalyticsReport";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "OperateSection/AnalyticsReport",
  component: AnalyticsReport,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<AnalyticsReportProps> = (args) => (
  <AnalyticsReport {...args} />
);

const count = (n: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor((n / 2) * 5));
    }, 500);
  });
};

export const Default = Template.bind({});
Default.args = {
  getTomato(date) {
    return count(date.getDay());
  },
};
