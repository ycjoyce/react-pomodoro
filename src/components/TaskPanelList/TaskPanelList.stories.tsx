import { Story } from "@storybook/react/types-6-0";
import TaskPanelList, { TaskPanelListProps } from "./TaskPanelList";

export default {
  title: "TaskPanelList",
  component: TaskPanelList,
};

const Template: Story<TaskPanelListProps> = (args) => (
  <TaskPanelList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  contents: [
    { id: "task1", title: "test1", recordLength: 5, recordCompletedNumber: 2 },
    { id: "task2", title: "test2", recordLength: 6 },
    { id: "task3", title: "test3", recordLength: 3 },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  contents: [],
};
