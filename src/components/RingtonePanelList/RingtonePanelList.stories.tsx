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
      title: "test1",
      ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "test2",
      ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "test3",
      ringtone: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ],
};
