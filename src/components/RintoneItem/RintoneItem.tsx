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

export interface Ringtone {
  id: string;
  title: string;
  ringtone: string;
}

export interface RingtoneItemProps extends Ringtone {
  checked?: boolean;
  playing?: boolean;
  onSelect?: (id: string) => void;
  onAudioClick?: (goingToPlay: boolean) => void;
}

const RingtoneItem: FC<RingtoneItemProps> = ({
  checked = false,
  id,
  title,
  ringtone,
  playing = false,
  onSelect = () => {},
  onAudioClick = () => {},
}) => {
  return (
    <StyledTaskItemTitleContainer>
      <StyledTaskItemTitleBox onClick={() => onSelect(id)}>
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
