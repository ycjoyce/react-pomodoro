import { Story } from "@storybook/react/types-6-0";
import Panel, { PanelProps } from "./Panel";
import TaskPanelList from "../TaskPanelList/TaskPanelList";
import RingtonePanelList from "../RingtonePanelList/RingtonePanelList";

export default {
  title: "Panel",
  component: Panel,
};

const Template: Story<PanelProps> = (args) => <Panel {...args} />;

export const Task = Template.bind({});
Task.args = {
  contents: [
    {
      tab: "to do",
      list: (
        <TaskPanelList
          contents={[
            { title: "todo 1", recordLength: 5 },
            { title: "todo 2", recordLength: 5 },
            { title: "todo 3", recordLength: 5 },
          ]}
        />
      ),
    },
    {
      tab: "done",
      list: (
        <TaskPanelList
          contents={[
            { title: "done 1", recordLength: 5 },
            { title: "done 2", recordLength: 5 },
            { title: "done 3", recordLength: 5 },
          ]}
        />
      ),
    },
  ],
};

export const Ringtone = Template.bind({});
Ringtone.args = {
  contents: [
    {
      tab: "work",
      list: (
        <RingtonePanelList
          contents={[
            {
              title: "test1",
              ringtone:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            },
            {
              title: "test2",
              ringtone:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            },
            {
              title: "test3",
              ringtone:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            },
          ]}
        />
      ),
    },
    {
      tab: "break",
      list: (
        <RingtonePanelList
          contents={[
            {
              title: "test4",
              ringtone:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            },
            {
              title: "test5",
              ringtone:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            },
            {
              title: "test6",
              ringtone:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
            },
          ]}
        />
      ),
    },
  ],
};