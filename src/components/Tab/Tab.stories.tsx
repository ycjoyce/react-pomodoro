import { Story } from "@storybook/react/types-6-0";
import Tab, { TabProps } from "./Tab";

export default {
  title: "Tab",
  component: Tab,
};

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});

export const Wording = Template.bind({});
Wording.args = {
  children: "Test",
};

export const Active = Template.bind({});
Active.args = {
  children: "Test",
  active: true,
};
