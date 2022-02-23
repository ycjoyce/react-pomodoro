import React, { FC } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { StyledContentBox, StyledTitle } from "../Modal/Modal.style";
import { StyledButtonGroup } from "../Button/Button.style";

export interface AddTaskModalProps {
  root?: string;
  success?: boolean;
  onClose?: () => void;
}

const AddTaskModal: FC<AddTaskModalProps> = ({
  root,
  success = true,
  onClose = () => {},
}) => {
  return (
    <Modal root={root} onClose={onClose}>
      <StyledContentBox>
        <StyledTitle>{success ? "Success" : "Error"}</StyledTitle>
        <p>
          {success
            ? "Add a new task successfully!"
            : "Please enter the complete task data!"}
        </p>
        <StyledButtonGroup>
          <Button primary large onClick={onClose}>
            OK
          </Button>
        </StyledButtonGroup>
      </StyledContentBox>
    </Modal>
  );
};

export default AddTaskModal;
