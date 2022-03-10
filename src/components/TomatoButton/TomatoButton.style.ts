import styled from "styled-components";
import coloredTomato from "../../images/tomato_small_color.svg";
import grayTomato from "../../images/tomato_small_gray.svg";

interface Props {
  active: boolean;
  "data-number": number;
}

const StyledTomatoButton = styled.button<Props>`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ active }) =>
    active ? coloredTomato : grayTomato});
  background-position: center;
`;

export default StyledTomatoButton;
