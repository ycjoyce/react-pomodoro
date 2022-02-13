import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import AudioButton, { AudioButtonProps } from "./AudioButton";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "AudioButton",
  component: AudioButton,
  args: {
    playing: false,
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "10px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<AudioButtonProps> = (args) => {
  const [{ playing }, updateArgs] = useArgs();
  const handleClick = (nextPlaying: boolean) => {
    updateArgs({ playing: nextPlaying });
  };
  return <AudioButton {...args} playing={playing} onClick={handleClick} />;
};

const defaultArgs = {
  audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
};

export const Default = Template.bind({});

Default.args = {
  ...defaultArgs,
};

export const Playing = Template.bind({});
Playing.args = {
  ...defaultArgs,
  playing: true,
};
