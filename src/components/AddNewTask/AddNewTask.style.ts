import styled from "styled-components";
import StyledLabel from "../Label/Label.style";

const StyledAddNewTask = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  & ${StyledLabel} {
    margin-bottom: 10px;
  }
`;

export default StyledAddNewTask;
