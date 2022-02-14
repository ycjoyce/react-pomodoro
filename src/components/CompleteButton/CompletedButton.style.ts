import styled from "styled-components";
import completeIcon from "../../images/complete_colored.svg";

const StyledCompletedButton = styled.button`
  letter-spacing: 0.05rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${completeIcon});
    margin-right: 5px;
  }
`;

export default StyledCompletedButton;
