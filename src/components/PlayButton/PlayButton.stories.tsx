import { Story } from "@storybook/react/types-6-0";
import PlayButton, { PlayButtonProps, PlayType } from "./PlayButton";

export default {
  title: "PlayButton",
  component: PlayButton,
};

const Template: Story<PlayButtonProps> = (args) => <PlayButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  operate: PlayType.PLAY,
};
