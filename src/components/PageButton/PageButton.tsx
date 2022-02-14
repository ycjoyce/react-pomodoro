import React, { FC } from "react";
import StyledPageButton from "./PageButton.style";

export interface PageButtonProps {
  page: "add" | "list" | "analysis" | "ringtone";
  active?: boolean;
}

const PageButton: FC<PageButtonProps> = ({ page, active = false }) => {
  return <StyledPageButton active={active} page={page} />;
};

export default PageButton;
