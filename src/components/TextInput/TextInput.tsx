import React, { FC } from "react";
import StyledTextInput from "./TextInput.style";

export interface TextInputProps {
  type?: "password" | "text";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  const handleChange = (e: React.FormEvent) => {
    onChange((e.target as HTMLInputElement).value);
  };

  return (
    <StyledTextInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextInput;
