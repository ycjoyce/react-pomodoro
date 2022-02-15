import styled from "styled-components";
import { StyledCircle as StyledPie } from "../Pie/Pie.style";
import StyledRecord from "../../styles/components/Circle";

export const StyledTitleBox = styled.div`
  & ${StyledRecord} {
    width: 0.7em;
    height: 0.7em;
  }

  & ${StyledRecord}:not(:last-child) {
    margin-right: 0.5em;
  }

  & [data-title] {
    font-size: ${({ theme }) => theme.font[3]};
    margin: 0 0 10px 0;
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTaskTimer = styled.div`
  text-align: center;

  & ${StyledPie} {
    margin: 0 auto;
    margin-bottom: 30px;
  }

  & ${StyledTitleBox} {
    margin-bottom: 10px;
  }

  & ${StyledButtonGroup} {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 300px;
  }
`;

export default StyledTaskTimer;
