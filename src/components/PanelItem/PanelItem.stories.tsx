import { Story } from "@storybook/react/types-6-0";
import PanelItem, { PanelItemProps } from "./PanelItem";

export default {
  title: "PanelItem",
  component: PanelItem,
};

const Template: Story<PanelItemProps> = (args) => <PanelItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <h3>Hello World</h3>,
};
