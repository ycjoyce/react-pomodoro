import { Story } from "@storybook/react/types-6-0";
import SectionEmpty from "./SectionEmpty";

export default {
  title: "SectionEmpty",
  component: SectionEmpty,
};

const Template: Story = () => <SectionEmpty />;

export const Default = Template.bind({});
