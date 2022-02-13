import styled from "styled-components";
import StyledCircle from "../../styles/components/Circle";

const StyledRecordGroup = styled.div`
  & ${StyledCircle}:not(:last-child) {
    margin-right: 0.2em;
  }
`;

export default StyledRecordGroup;
