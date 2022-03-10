import styled from "styled-components";
import { barWidth } from "../OperateSection/OperateSection.style";
import { mobile, mobileLandscape } from "../../styles/abstracts/mixin";

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

export const StyledSection = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor = "#fff" }) => backgroundColor};
`;

export const StyledTimer = styled(StyledSection)`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;

  ${mobileLandscape} {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }

  ${mobile} {
    margin-bottom: ${barWidth}px;
  }
`;

export const StyledOperate = styled(StyledSection)`
  flex-shrink: 1;

  ${mobile} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export default StyledApp;
