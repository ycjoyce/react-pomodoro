import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { useArgs } from "@storybook/client-api";
import ToggleButton, { ToggleButtonProps } from "./ToggleButton";
import StyledDarkBackground from "../../styles/components/DarkBackground";

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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
Primary.decorators = [
  (story: () => React.ReactNode) => (
    <StyledDarkBackground style={{ padding: "10px" }}>
      {story()}
    </StyledDarkBackground>
  ),
];
