import React, { FC } from "react";
import StyledToggleButton from "./ToggleButton.style";

export interface ToggleButtonProps {
  opened: boolean;
  onClick(e: React.MouseEvent): void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ opened, onClick }) => {
  return (
    <StyledToggleButton opened={opened} onClick={onClick}>
      ...
    </StyledToggleButton>
  );
};

export default ToggleButton;
