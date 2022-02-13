import styled from "styled-components";
import { TextInputProps } from "./TextInput";

const StyledTextInput = styled.input.attrs(
  ({ type, value }: TextInputProps) => ({
    type,
    value,
  })
)`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
`;

export default StyledTextInput;
