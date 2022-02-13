import React, { FC } from "react";
import StyledTextInput from "./TextInput.style";

export interface TextInputProps {
  type?: "password" | "text";
  value: string;
  onChange: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({ type = "text", value, onChange }) => {
  return (
    <StyledTextInput
      type={type}
      value={value}
      onChange={(e: React.FormEvent) =>
        onChange((e.target as HTMLInputElement).value)
      }
    />
  );
};

export default TextInput;
