import React, { FC } from "react";
import StyledPageButton from "./PageButton.style";

export interface PageButtonProps {
  page: "add" | "list" | "analysis" | "ringtone";
  active?: boolean;
  onClick?: () => void;
}

const PageButton: FC<PageButtonProps> = ({
  page,
  active = false,
  onClick = () => {},
}) => {
  return <StyledPageButton active={active} page={page} onClick={onClick} />;
};

export default PageButton;
