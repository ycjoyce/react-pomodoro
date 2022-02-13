import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { useArgs } from "@storybook/client-api";
import TextInput, { TextInputProps } from "./TextInput";
import StyledDarkBackground from "../../styles/components/DarkBackground";

export default {
  title: "TextInput",
  component: TextInput,
  args: {
    value: "",
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <StyledDarkBackground style={{ padding: "20px" }}>
        {story()}
      </StyledDarkBackground>
    ),
  ],
};

const Template: Story<TextInputProps> = (args) => {
  const [, updateArgs] = useArgs();
  const handleChange = (value: string) => updateArgs({ value });

  return <TextInput {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});

export const Password = Template.bind({});
Password.args = { type: "password" };
