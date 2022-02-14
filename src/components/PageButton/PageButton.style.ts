import styled from "styled-components";
import { PageButtonProps, Page } from "./PageButton";

const images: { [page in keyof typeof Page]: string } = {
  [Page.ADD_NEW_TASK]: "add",
  [Page.TASK_LIST]: "list",
  [Page.ANALYTICS_REPORT]: "analysis",
  [Page.RINGTONE]: "ringtone",
};

const StyledPageButton = styled.button<PageButtonProps>`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border: none;
  background-color: transparent;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ active, page }) =>
    require(`../../images/${images[Page[page]]}_${
      active ? "red" : "white"
    }.svg`)});
`;

export default StyledPageButton;
