import styled from "styled-components";

const StyledPanelItem = styled.li<{ empty?: boolean }>`
  padding: ${({ empty }) => (empty ? 30 : 10)}px;
  list-style: none;
  background-color: ${({ theme }) => theme.color.dark};
  color: #fff;
  text-align: ${({ empty }) => (empty ? "center" : "inherit")};
`;

export default StyledPanelItem;
