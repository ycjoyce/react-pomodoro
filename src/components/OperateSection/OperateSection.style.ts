import styled, { css } from "styled-components";
import StyledLabel from "../Label/Label.style";
import { StyledPrimaryButton } from "../ToggleButton/ToggleButton.style";
import StyledPageButton from "../PageButton/PageButton.style";
import { mobile, mobileLandscape } from "../../styles/abstracts/mixin";

export const barWidth = 80;
export const mobileBarWidth = 60;

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

  ${mobile} {
    flex-direction: column-reverse;
  }
`;

const mobileToggleButton = `
  left: 0;
  bottom: 70px;
  width: auto;
  height: auto;
  padding: 5px 10px;
  border-radius: 0 15px 15px 0;

  [data-image="tomato"] {
    display: none;
  }
`;

export const StyledBar = styled.div`
  width: ${barWidth}px;
  height: 100%;
  position: relative;
  border-right: 1px solid #000;

  & ${StyledPrimaryButton} {
    position: absolute;
    bottom: 80px;
    left: -40px;
  }

  ${mobileLandscape} {
    width: ${mobileBarWidth}px;

    & ${StyledPrimaryButton} {
      ${mobileToggleButton}
      bottom: 20px;
    }

    & ${StyledPageButton} {
      width: ${mobileBarWidth}px;
      height: ${mobileBarWidth}px;
    }
  }

  ${mobile} {
    height: ${barWidth}px;
    width: 100%;
    border-right: none;
    border-top: 1px solid #000;
    display: flex;
    justify-content: space-around;

    & ${StyledPrimaryButton} {
      ${mobileToggleButton}
    }
  }
`;

export const StyledOperateBox = styled.div<{ opened?: boolean }>`
  flex: 1 1 auto;
  padding: 30px;
  width: calc(50vw - ${barWidth}px);
  overflow-y: scroll;
  ${({ opened }) => {
    if (!opened) {
      return css`
        display: none;
      `;
    }
  }}

  ${mobileLandscape} {
    padding: 20px 10px;
  }

  ${mobile} {
    width: 100%;
    height: calc(100vh - ${barWidth}px);
    height: calc(var(--vh, 1vh) * 100 - ${barWidth}px);

    ${({ opened }) => {
      if (!opened) {
        return css`
          background-color: red;
        `;
      }
    }}
  }
`;
