import React, { FC } from "react";
import StyledPlayButton from "./PlayButton.style";

export enum PlayType {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  RESET = "RESET",
}

export interface PlayButtonProps {
  operate: PlayType;
  primary?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const PlayButton: FC<PlayButtonProps> = ({
  operate,
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
