import React, { FC } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { StyledButtonGroup } from "../Button/Button.style";
import { StyledTitle, StyledContentBox } from "../Modal/Modal.style";
import { WorkType } from "../Ringtone/Ringtone";

export interface DoneModalProps {
  root?: string;
  type: WorkType;
  ringtone?: string;
  onBreak?: () => void;
  onTask?: () => void;
}

const DoneModal: FC<DoneModalProps> = ({
  root,
  type,
  ringtone,
  onBreak = () => {},
  onTask = () => {},
}) => (
  <Modal root={root}>
    <StyledContentBox>
      <StyledTitle>
        {type === "work" ? "Task Done" : "Break time is over"}
      </StyledTitle>
      <p>
        {type === "work"
          ? "You have done the task!"
          : "Would you like to start the next task?"}
      </p>
      <StyledButtonGroup>
        {type === "work" ? (
          <>
            <Button large onClick={onBreak}>
              Take a break
            </Button>
            <Button primary={false} large onClick={onTask}>
              Keep going
            </Button>
          </>
        ) : (
          <Button large onClick={onTask}>
            Start
          </Button>
        )}
      </StyledButtonGroup>
    </StyledContentBox>

    {ringtone && <audio src={ringtone} autoPlay />}
  </Modal>
);

export default DoneModal;
