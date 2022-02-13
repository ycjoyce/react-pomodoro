import styled from "styled-components";

const StyledCountPanelItem = styled.div`
  text-align: center;
`;

export const StyledCount = styled.p`
  font-size: ${({ theme }) => theme.font[1]};
  color: ${({ theme }) => theme.color.primary};
  margin: 0 0 10px 0;
`;

export const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: #fff;
  margin: 0;
`;

export default StyledCountPanelItem;
