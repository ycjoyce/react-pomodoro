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

export const Default = Template.bind({});
Default.args = {
  getTomato(date: Date) {
    return date.getDay();
  },
};
