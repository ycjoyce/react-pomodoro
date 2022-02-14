import { Story } from "@storybook/react/types-6-0";
import Pie, { PieProps } from "./Pie";

export default {
  title: "Pie",
  component: Pie,
};

const Template: Story<PieProps> = (args) => <Pie {...args} />;

export const Default = Template.bind({});
Default.args = {
  degree: 0,
};

export const Children = Template.bind({});
Children.args = {
  children: <p style={{ margin: "0" }}>children</p>,
};
