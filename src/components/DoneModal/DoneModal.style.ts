import styled from "styled-components";
import { StyledButtonGroup } from "../Button/Button.style";

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font[2]};
`;

export const StyledContent = styled.p``;

const StyledDoneModal = styled.div`
  text-align: center;

  & ${StyledTitle} {
    margin-bottom: 20px;
  }

  & ${StyledButtonGroup} {
    margin-top: 80px;
  }
`;

export default StyledDoneModal;
