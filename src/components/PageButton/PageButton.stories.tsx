import React from "react";
import { Story } from "@storybook/react/types-6-0";
import PageButton, { PageButtonProps, Page } from "./PageButton";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "PageButton",
  component: PageButton,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<PageButtonProps> = (args) => <PageButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: Page.ADD_NEW_TASK,
};
