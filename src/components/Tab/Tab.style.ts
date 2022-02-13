import styled from "styled-components";
import { TabProps } from "./Tab";

const StyledTab = styled.button<TabProps>`
  padding: 5px 20px;
  cursor: pointer;
  border: none;
  border-radius: 8px 8px 0 0;
  background-color: ${({ theme, active }) => {
    return active ? theme.color.primary : theme.color.secondary;
  }};
  color: ${({ theme, active }) => {
    return active ? "#fff" : theme.color.light;
  }};
  font-size: ${({ theme }) => theme.font.small};
`;

export const StyledTabGroup = styled.div`
  & ${StyledTab}:not(:last-child) {
    margin-right: 5px;
  }
`;

export default StyledTab;
