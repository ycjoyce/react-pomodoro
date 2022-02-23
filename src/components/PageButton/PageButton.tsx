import React, { FC } from "react";
import StyledPageButton from "./PageButton.style";
import { paths } from "../OperateRoutes/OperateRoutes";

export interface PageButtonProps {
  page: keyof typeof paths;
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
