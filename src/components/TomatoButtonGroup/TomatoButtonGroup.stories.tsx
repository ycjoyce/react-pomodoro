import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import TomatoButtonGroup, { TomatoButtonGroupProps } from "./TomatoButtonGroup";

export default {
  title: "TomatoButtonGroup",
  component: TomatoButtonGroup,
  args: {
    selectedNumber: 0,
  },
};

const Template: Story<TomatoButtonGroupProps> = (args) => {
  const [, updateArgs] = useArgs();
  const handleSelect = (number: number) => {
    updateArgs({ selectedNumber: number });
  };
  return <TomatoButtonGroup {...args} onSelect={handleSelect} />;
};

export const Default = Template.bind({});
Default.args = {
  length: 10,
};

export const DefaultSelectedNumber = Template.bind({});
DefaultSelectedNumber.args = {
  length: 10,
  selectedNumber: 3,
};
