import React from "react";
import styled from "@emotion/styled";

const Field = styled.input`
  padding: 10px;
  font: inherit;
  letter-spacing: 0.35px;
  border-radius: 5px;
  border: none;
  color: black;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const InputField = ({ value, type, placeholder, handleChange }) => {
  return (
    <Field
      value={value}
      type={type}
      placeholder={placeholder}
      maxLength={16}
      onChange={(e) => handleChange && handleChange(e.target.value)}
    />
  );
};

export default InputField;
