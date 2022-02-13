import styled from "styled-components";

export const StyledTitleBox = styled.div`
  & hr {
    height: 1px;
    background-color: ${({ theme }) => theme.color.light};
    border: none;
    margin: 0;
  }
`;

export const StyledTitle = styled.h1`
  color: #fff;
  font-size: ${({ theme }) => theme.font[2]};
  letter-spacing: 0.1rem;
  margin: 0 0 20px 0;
`;
