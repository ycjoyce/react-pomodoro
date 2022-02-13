import React, { FC } from "react";
import { StyledTitleBox, StyledTitle } from "./Title.style";

export interface TitleProps {
  children: string;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <StyledTitleBox>
      <StyledTitle>{children.trim().toUpperCase()}</StyledTitle>
      <hr />
    </StyledTitleBox>
  );
};

export default Title;
