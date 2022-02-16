import { Story } from "@storybook/react/types-6-0";
import RingtonePanelList, { RingtonePanelListProps } from "./RingtonePanelList";

export default {
  title: "RingtonePanelList",
  component: RingtonePanelList,
};

const Template: Story<RingtonePanelListProps> = (args) => (
  <RingtonePanelList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  contents: [
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
  ],
};
