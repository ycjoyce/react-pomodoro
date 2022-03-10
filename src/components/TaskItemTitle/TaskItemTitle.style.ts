import styled from "styled-components";

const titlePaddingLeft = 40;
const doneIconWidth = 20;

export const StyledTaskItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTaskItemTitleBox = styled.div`
  flex: 1;
  position: relative;
  padding-left: ${titlePaddingLeft}px;
`;

export const StyledTaskItemTitle = styled.p`
  margin: 0;
  color: #fff;
  margin-bottom: 5px;
`;

export const StyledTaskItemButton = styled.div`
  flex: 0 0 auto;
`;

export const StyledTaskItemDoneBox = styled.div`
  width: ${doneIconWidth}px;
  height: ${doneIconWidth}px;
  display: inline-block;
  position: absolute;
  left: ${(titlePaddingLeft - doneIconWidth) / 2}px;
  top: 50%;
  transform: translateY(-50%);
`;
