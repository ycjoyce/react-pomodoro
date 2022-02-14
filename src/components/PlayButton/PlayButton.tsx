import React, { FC } from "react";
import StyledPlayButton from "./PlayButton.style";

export interface PlayButtonProps {
  operate?: "start" | "pause" | "reset";
  primary?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const PlayButton: FC<PlayButtonProps> = ({
  operate = "start",
  primary = true,
  active = false,
  onClick = () => {},
}) => (
  <StyledPlayButton
    operate={operate}
    primary={primary}
    active={active}
    onClick={onClick}
  />
);

export default PlayButton;
