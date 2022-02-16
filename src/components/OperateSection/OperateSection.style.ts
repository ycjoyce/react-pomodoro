import styled, { css } from "styled-components";
import StyledLabel from "../Label/Label.style";
import StyledToggleButton from "../ToggleButton/ToggleButton.style";

const barWidth = 80;

export const StyledOperate = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  & ${StyledLabel} {
    margin-bottom: 10px;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  height: 100%;
`;

export const StyledBar = styled.div`
  width: ${barWidth}px;
  height: 100%;
  position: relative;
  border-right: 1px solid #000;

  & ${StyledToggleButton} {
    position: absolute;
    bottom: 80px;
    left: -40px;
  }
`;

export const StyledOperateBox = styled.div<{ opened?: boolean }>`
  flex: 1 1 auto;
  padding: 30px;
  width: calc(50vw - ${barWidth}px);
  ${({ opened }) => {
    if (!opened) {
      return css`
        display: none;
      `;
    }
  }}
`;
