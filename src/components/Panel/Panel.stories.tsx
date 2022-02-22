import { Story } from "@storybook/react/types-6-0";
import Panel, { PanelProps } from "./Panel";
import TaskPanelList from "../TaskPanelList/TaskPanelList";
import RingtonePanelList from "../RingtonePanelList/RingtonePanelList";
import ringtones from "../../ringtones";

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
            { id: "task1", title: "todo 1", recordLength: 5 },
            { id: "task2", title: "todo 2", recordLength: 5 },
            { id: "task3", title: "todo 3", recordLength: 5 },
          ]}
        />
      ),
    },
    {
      tab: "done",
      list: (
        <TaskPanelList
          contents={[
            { id: "task4", title: "done 1", recordLength: 5 },
            { id: "task5", title: "done 2", recordLength: 5 },
            { id: "task6", title: "done 3", recordLength: 5 },
          ]}
        />
      ),
    },
  ],
};

export const WithEmptyList = Template.bind({});
WithEmptyList.args = {
  contents: [
    {
      tab: "to do",
      list: <TaskPanelList contents={[]} />,
    },
    {
      tab: "done",
      list: <TaskPanelList contents={[]} />,
    },
  ],
};

export const Ringtone = Template.bind({});
Ringtone.args = {
  contents: [
    {
      tab: "work",
      list: <RingtonePanelList contents={ringtones.slice(0, 2)} />,
    },
    {
      tab: "break",
      list: <RingtonePanelList contents={ringtones.slice(3, 5)} />,
    },
  ],
};
