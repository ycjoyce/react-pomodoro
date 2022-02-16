import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
`;

export const StyledSection = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor = "#fff" }) => backgroundColor};
`;

export const StyledTimer = styled(StyledSection)`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledOperate = styled(StyledSection)`
  flex-shrink: 1;
`;

export default StyledApp;
