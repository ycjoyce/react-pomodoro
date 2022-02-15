import styled from "styled-components";
import tomatoIcon from "../../images/tomato_small_color.svg";

export const StyledLogo = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${tomatoIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  line-height: 300px;
  color: #fff;
  font-size: ${({ theme }) => theme.font[2]};
  letter-spacing: 0.2rem;
  font-weight: lighter;
`;

export const StyledDesc = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  margin: 0;
`;

const StyledSection = styled.div`
  & ${StyledLogo} {
    margin: 0 auto;
    margin-bottom: 60px;
  }

  text-align: center;
`;

export default StyledSection;
