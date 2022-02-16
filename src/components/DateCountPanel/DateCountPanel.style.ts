import styled from "styled-components";

const StyledDateCountPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.color.dark};
  padding: 10px;
`;

export default StyledDateCountPanel;
