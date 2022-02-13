import styled from "styled-components";
import { ToggleButtonProps } from "./ToggleButton";

const StyledToggleButton = styled.button<ToggleButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 40px;
  height: 40px;
  transform: rotate(${({ opened }) => (opened ? "90deg" : "0deg")});
  color: ${({ theme }) => theme.color.light};
`;

export default StyledToggleButton;
