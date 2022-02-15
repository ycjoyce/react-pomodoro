import React, { FC } from "react";
import StyledSection, { StyledLogo, StyledDesc } from "./SectionEmpty.style";

const SectionEmpty: FC = () => (
  <StyledSection>
    <StyledLogo>POMODORO</StyledLogo>
    <StyledDesc>
      You don't have any task now,
      <br />
      please add task first!
    </StyledDesc>
  </StyledSection>
);

export default SectionEmpty;
