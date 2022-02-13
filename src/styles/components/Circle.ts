import styled from "styled-components";

export interface CircleProps {
  active: boolean;
}

const StyledCircle = styled.div<CircleProps>`
  width: 0.5em;
  height: 0.5em;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 100%;
  display: inline-block;
  background-color: ${({ theme, active }) => {
    return active ? theme.color.primary : "transparent";
  }};
`;

export default StyledCircle;
