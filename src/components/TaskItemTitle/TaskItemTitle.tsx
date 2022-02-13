import React, { FC } from "react";
import RecordGroup from "../RecordGroup/RecordGroup";
import {
  StyledTaskItemTitleContainer,
  StyledTaskItemTitleBox,
  StyledTaskItemTitle,
  StyledTaskItemButton,
  StyledTaskItemDoneBox,
} from "./TaskItemTitle.style";
import completeIcon from "../../images/complete.svg";
import ToggleButton from "../ToggleButton/ToggleButton";

export interface TaskItemTitleProps {
  opened?: boolean;
  done?: boolean;
  title: string;
  recordLength: number;
  recordCompletedNumber: number;
  onToggle(): void;
}

const TaskItemTitle: FC<TaskItemTitleProps> = ({
  opened = false,
  done = false,
  title,
  recordLength,
  recordCompletedNumber,
  onToggle,
}) => (
  <StyledTaskItemTitleContainer>
    <StyledTaskItemTitleBox>
      {done && (
        <StyledTaskItemDoneBox>
          <img src={completeIcon} alt="" />
        </StyledTaskItemDoneBox>
      )}
      <div>
        <StyledTaskItemTitle>{title}</StyledTaskItemTitle>
        <RecordGroup
          length={recordLength}
          completedNumber={recordCompletedNumber}
        />
      </div>
    </StyledTaskItemTitleBox>
    <StyledTaskItemButton>
      <ToggleButton opened={opened} onClick={onToggle} />
    </StyledTaskItemButton>
  </StyledTaskItemTitleContainer>
);

export default TaskItemTitle;
