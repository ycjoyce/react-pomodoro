import React, { FC } from "react";
import StyledCircle from "../../styles/components/Circle";
import AudioButton from "../AudioButton/AudioButton";
import {
  StyledTaskItemTitleContainer,
  StyledTaskItemTitleBox,
  StyledTaskItemDoneBox,
  StyledTaskItemTitle,
  StyledTaskItemButton,
} from "../TaskItemTitle/TaskItemTitle.style";

export interface RingtoneItemProps {
  checked?: boolean;
  title: string;
  ringtone: string;
  playing?: boolean;
  onSelect?: (title: string) => void;
  onAudioClick?: (nextPlaying: boolean) => void;
}

const RingtoneItem: FC<RingtoneItemProps> = ({
  checked = false,
  title,
  ringtone,
  playing = false,
  onSelect = () => {},
  onAudioClick = () => {},
}) => {
  return (
    <StyledTaskItemTitleContainer>
      <StyledTaskItemTitleBox onClick={() => onSelect(title)}>
        <StyledTaskItemDoneBox>
          <StyledCircle active={checked} />
        </StyledTaskItemDoneBox>

        <StyledTaskItemTitle style={{ marginBottom: 0 }}>
          {title}
        </StyledTaskItemTitle>
      </StyledTaskItemTitleBox>

      <StyledTaskItemButton>
        <AudioButton
          playing={playing}
          audio={ringtone}
          onClick={onAudioClick}
        />
      </StyledTaskItemButton>
    </StyledTaskItemTitleContainer>
  );
};

export default RingtoneItem;
