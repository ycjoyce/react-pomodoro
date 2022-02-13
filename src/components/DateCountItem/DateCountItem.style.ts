import styled from "styled-components";

export const StyledTomato = styled.div`
  width: 25px;
  height: 9px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const StyledTomatoBox = styled.div`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;

  & ${StyledTomato} {
    margin: 0 auto;
  }

  & ${StyledTomato}:not(:last-child) {
    margin-bottom: 2px;
  }
`;

export const StyledTomatoTitle = styled.p`
  margin: 0 0 5px 0;
`;

export const StyledDate = styled.div``;

const StyledDateCountItem = styled.div`
  text-align: center;

  & ${StyledTomatoBox} {
    margin-bottom: 10px;
  }
`;

export default StyledDateCountItem;
