import styled from "styled-components";
import StyledLabel from "../Label/Label.style";

export const StyledOperate = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  & ${StyledLabel} {
    margin-bottom: 10px;
  }
`;
