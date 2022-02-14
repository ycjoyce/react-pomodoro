import styled from "styled-components";
import StyledTimer from "../Timer/Timer.style";

export const StyledTimerBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & ${StyledTimer} {
    font-size: ${({ theme }) => theme.font[2]};
  }
`;
