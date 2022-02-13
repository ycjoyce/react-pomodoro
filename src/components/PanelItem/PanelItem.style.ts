import styled from "styled-components";

const StyledPanelItem = styled.li`
  padding: 10px;
  list-style: none;
  background-color: ${({ theme }) => theme.color.dark};
  color: #fff;
`;

export default StyledPanelItem;
