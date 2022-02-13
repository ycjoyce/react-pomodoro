import styled from "styled-components";
import StyledPanelItem from "../PanelItem/PanelItem.style";

const StyledPanelList = styled.ul`
  & ${StyledPanelItem}:not(:last-child) {
    border-bottom: 1px solid #333;
  }
`;

export default StyledPanelList;
