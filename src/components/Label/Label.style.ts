import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.font.small};
  letter-spacing: 0.05rem;
  display: block;
`;

export default StyledLabel;
