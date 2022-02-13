import styled from "styled-components";
import StyledCountPanelItem from "../CountPanelItem/CountPanelItem.style";

const StyledCountPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & ${StyledCountPanelItem} {
    flex: 1 0 auto;
  }

  & ${StyledCountPanelItem}:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.light};
  }
`;

export default StyledCountPanel;
