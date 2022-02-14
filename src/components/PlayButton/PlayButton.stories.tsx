import React from "react";
import { Story } from "@storybook/react/types-6-0";
import PlayButton, { PlayButtonProps } from "./PlayButton";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "PlayButton",
  component: PlayButton,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<PlayButtonProps> = (args) => <PlayButton {...args} />;

export const Default = Template.bind({});
