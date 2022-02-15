import React, { FC } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { StyledButtonGroup } from "../Button/Button.style";
import StyledDoneModal, { StyledTitle } from "./DoneModal.style";

export interface DoneModalProps {
  type: "task" | "break";
  ringtone?: string;
  onBreak?: () => void;
  onTask?: () => void;
}

const DoneModal: FC<DoneModalProps> = ({
  type,
  ringtone,
  onBreak = () => {},
  onTask = () => {},
}) => (
  <Modal>
    <StyledDoneModal>
      <StyledTitle>
        {type === "task" ? "Task Done" : "Break time is over"}
      </StyledTitle>
      <p>
        {type === "task"
          ? "You have done the task!"
          : "Would you like to start the next task?"}
      </p>
      <StyledButtonGroup>
        {type === "task" ? (
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
    </StyledDoneModal>

    {ringtone && <audio src={ringtone} autoPlay />}
  </Modal>
);

export default DoneModal;
