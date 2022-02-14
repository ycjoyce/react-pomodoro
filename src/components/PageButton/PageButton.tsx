import React, { FC } from "react";
import StyledPageButton from "./PageButton.style";

export enum Page {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  TASK_LIST = "TASK_LIST",
  ANALYTICS_REPORT = "ANALYTICS_REPORT",
  RINGTONE = "RINGTONE",
}

export interface PageButtonProps {
  page: Page;
  active?: boolean;
}

const PageButton: FC<PageButtonProps> = ({ page, active = false }) => {
  return <StyledPageButton active={active} page={page} />;
};

export default PageButton;
