import styled from "styled-components";
import StyledLabel from "../Label/Label.style";

const StyledTaskItemOperate = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & ${StyledLabel} {
    margin-bottom: 10px;
  }
`;

export default StyledTaskItemOperate;
