import { Story } from "@storybook/react/types-6-0";
import RingtonePanelList, { RingtonePanelListProps } from "./RingtonePanelList";
import ringtones from "../../ringtones";

export default {
  title: "RingtonePanelList",
  component: RingtonePanelList,
};

const Template: Story<RingtonePanelListProps> = (args) => (
  <RingtonePanelList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  contents: ringtones,
};
