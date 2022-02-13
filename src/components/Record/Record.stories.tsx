import { Story } from "@storybook/react/types-6-0";
import Record, { RecordProps } from "./Record";

export default {
  title: "Record",
  component: Record,
};

const Template: Story<RecordProps> = (args) => <Record {...args} />;

export const Default = Template.bind({});

export const Completed = Template.bind({});
Completed.args = {
  completed: true,
};
