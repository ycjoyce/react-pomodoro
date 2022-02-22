import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import Ringtone, { RingtoneProps, WorkType } from "./Ringtone";
import StyledDarkBackground from "../../styles/components/DarkBackground";
import ringtones from "../../ringtones";

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
