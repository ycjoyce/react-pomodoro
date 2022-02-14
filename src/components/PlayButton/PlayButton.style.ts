import styled from "styled-components";
import { PlayButtonProps } from "./PlayButton";

const StyledPlayButton = styled.button<PlayButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #fcfcfc;
  border: none;
  cursor: pointer;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${({ operate, active, primary }) =>
    require(`../../images/${operate}_${
      active ? (primary ? "red" : "green") : "gray"
    }.svg`)});
`;

export default StyledPlayButton;
