import styled from "styled-components";
import { PageButtonProps } from "./PageButton";

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
    require(`../../images/${page}_${active ? "red" : "white"}.svg`)});
`;

export default StyledPageButton;
