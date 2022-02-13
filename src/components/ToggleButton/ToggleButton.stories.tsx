import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import ToggleButton, { ToggleButtonProps } from "./ToggleButton";

export default {
  title: "ToggleButton",
  component: ToggleButton,
  args: {
    opened: false,
  },
};

const Template: Story<ToggleButtonProps> = (args) => {
  const [{ opened }, updateArgs] = useArgs();
  const handleClick = () => {
    updateArgs({ opened: !opened });
  };

  return <ToggleButton {...args} onClick={handleClick} />;
};

export const Default = Template.bind({});
