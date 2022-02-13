import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import RingtoneItem, { RingtoneItemProps } from "./RintoneItem";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "RingtoneItem",
  component: RingtoneItem,
  args: {
    title: "test",
    ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    playing: false,
    checked: false,
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground>{story()}</StyledDarkBackground>
    ),
  ],
};

const Template: Story<RingtoneItemProps> = (args) => {
  const [{ title, playing }, updateArgs] = useArgs();
  const handleAudioClick = (nextPlaying: boolean) => {
    updateArgs({ playing: nextPlaying });
  };
  const handleSelect = (selectedTitle: string) => {
    updateArgs({ checked: title === selectedTitle });
  };
  return (
    <RingtoneItem
      {...args}
      playing={playing}
      onAudioClick={handleAudioClick}
      onSelect={handleSelect}
    />
  );
};

export const Default = Template.bind({});
