import styled from "styled-components";
import { StyledButtonGroup } from "../Button/Button.style";
import { mobile } from "../../styles/abstracts/mixin";

export const StyledModalBackground = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledModalContent = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  max-width: 600px;
  padding: 50px;
  border-radius: 5px;
  transform: translate(-50%, -50%);

  ${mobile} {
    width: 80%;
    padding: 30px;
  }
`;

const StyledModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  left: 0;
  top: 0;
  z-index: 1;
`;

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font[2]};
`;

export const StyledContentBox = styled.div`
  text-align: center;

  & ${StyledTitle} {
    margin-bottom: 20px;
  }

  & ${StyledButtonGroup} {
    margin-top: 80px;
  }
`;

export default StyledModal;
