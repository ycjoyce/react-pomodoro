import styled from "styled-components";
import { PieProps } from "./Pie";

export const StyledCircle = styled.div<{ color: string }>`
  width: 300px;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.light};
  background-image: linear-gradient(
    to right,
    transparent 50%,
    ${({ color }) => color} 0px
  );

  &::after {
    content: "";
    display: block;
    margin-top: 100%;
  }
`;

export const StyledRotateBox = styled.div<PieProps>`
  display: block;
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: left;
  transform: rotate(
    ${({ degree }) => (degree > 180 ? degree - 180 : degree)}deg
  );
  background-color: ${({ theme, color, degree }) =>
    degree > 180 ? color : theme.color.light};
`;

export const StyledChildrenBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
`;
