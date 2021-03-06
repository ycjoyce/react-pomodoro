import React, { FC } from "react";
import StyledCompletedButton from "./CompletedButton.style";

export interface CompleteButtonProps {
  onClick?: () => void;
}

const CompleteButton: FC<CompleteButtonProps> = ({ onClick = () => {} }) => (
  <StyledCompletedButton onClick={onClick}>
    TASK COMPLETED
  </StyledCompletedButton>
);

export default CompleteButton;
