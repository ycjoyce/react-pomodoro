import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import Ringtone, { RingtoneProps, WorkType } from "./Ringtone";
import StyledDarkBackground from "../../styles/components/DarkBackground";

const ringtones = [
  {
    id: "ringtone1",
    title: "test1",
    ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "ringtone2",
    title: "test2",
    ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "ringtone3",
    title: "test3",
    ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

export default {
  title: "OperateSection/Ringtone",
  component: Ringtone,
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
  args: {
    ringtones: {
      work: ringtones,
      break: ringtones,
    },
    checkedItem: {
      work: "ringtone1",
      break: "ringtone3",
    },
  },
};

const Template: Story<RingtoneProps> = (args) => {
  const [{ checkedItem }, updateArgs] = useArgs();
  const handleSelect = (type: WorkType, id: string) => {
    updateArgs({ checkedItem: { ...checkedItem, [type]: id } });
  };

  return <Ringtone {...args} onSelect={handleSelect} />;
};

export const Default = Template.bind({});
