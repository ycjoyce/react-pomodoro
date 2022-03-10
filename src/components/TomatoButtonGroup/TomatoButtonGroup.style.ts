import styled from "styled-components";
import StyledTomatoButton from "../TomatoButton/TomatoButton.style";

const StyledTomatoButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin: -5px;

  & ${StyledTomatoButton} {
    margin: 5px;
    width: calc(10% - 10px);

    @media all and (max-width: 400px) {
      width: calc(20% - 10px);
    }
  }
`;

export default StyledTomatoButtonGroup;
