import React, { FC } from "react";
import {
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "./ToggleButton.style";
import tomatoIcon from "../../images/tomato_small_color.svg";
import arrowIcon from "../../images/arrow.svg";

export interface ToggleButtonProps {
  primary?: boolean;
  opened: boolean;
  onClick(e: React.MouseEvent): void;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  primary = false,
  opened,
  onClick,
}) => {
  return (
    <>
      {primary ? (
        <StyledPrimaryButton opened={opened} onClick={onClick}>
          <img src={tomatoIcon} data-image="tomato" alt="" />
          <img src={arrowIcon} data-image="arrow" alt="" />
        </StyledPrimaryButton>
      ) : (
        <StyledSecondaryButton opened={opened} onClick={onClick}>
          ...
        </StyledSecondaryButton>
      )}
    </>
  );
};

export default ToggleButton;
