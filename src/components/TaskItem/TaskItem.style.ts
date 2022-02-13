import styled from "styled-components";
import StyledTaskItemOperate from "../TaskItemOperate/TaskItemOperate.style";

const StyledTaskItem = styled.div`
  & hr {
    height: 1px;
    background-color: ${({ theme }) => theme.color.black};
    border: none;
    margin: 10px 0 0 0;
  }

  & ${StyledTaskItemOperate} {
    padding: 20px 40px;
  }
`;

export default StyledTaskItem;
