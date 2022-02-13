import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Title, { TitleProps } from "./Title";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "Title",
  component: Title,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Test",
};
