import { Story } from "@storybook/react/types-6-0";
import RecordGroup, { RecordGroupProps } from "./RecordGroup";

export default {
  title: "RecordGroup",
  component: RecordGroup,
};

const Template: Story<RecordGroupProps> = (args) => <RecordGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  length: 5,
  completedNumber: 0,
};
