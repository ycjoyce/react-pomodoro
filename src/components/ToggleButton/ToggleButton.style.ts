import styled from "styled-components";
import { ToggleButtonProps } from "./ToggleButton";

const StyledToggleButton = styled.button<ToggleButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
`;

export const StyledPrimaryButton = styled(StyledToggleButton)`
  width: 90px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px 5px 5px 25px;

  & [data-image] {
    flex: 0 0 auto;
  }

  & [data-image="tomato"] {
    width: 25px;
  }

  & [data-image="arrow"] {
    width: 20px;
    transform: rotate(${({ opened }) => (opened ? "0deg" : "180deg")});
  }
`;

export const StyledSecondaryButton = styled(StyledToggleButton)`
  width: 40px;
  height: 40px;
  transform: rotate(${({ opened }) => (opened ? "90deg" : "0deg")});
  color: ${({ theme }) => theme.color.light};
`;

export default StyledToggleButton;
