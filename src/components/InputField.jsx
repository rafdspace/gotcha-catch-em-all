import React from "react";
import styled from "@emotion/styled";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Field = styled.input`
  padding: 10px;
  font: inherit;
  letter-spacing: 0.35px;
  border-radius: 5px;
  border: none;
  color: black;
  text-align: center;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ isError }) => (isError ? "#e3350d" : null)};
  box-shadow: ${({ isError }) => (isError ? "inset 0 0 0 1px #e3350d" : null)};

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const FieldErrorMessage = styled.p`
  color: #e3350d;
  font-size: 12px;
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 100%;
  visibility: ${({ isError }) => (isError ? "visible" : "hidden")};
`;

const InputField = ({ value, type, placeholder, handleChange, errorMsg }) => {
  return (
    <FieldWrapper>
      <Field
        isError={errorMsg}
        value={value}
        type={type}
        placeholder={placeholder}
        maxLength={16}
        onChange={(e) => handleChange && handleChange(e.target.value)}
      />
      <FieldErrorMessage isError={errorMsg}>{errorMsg}</FieldErrorMessage>
    </FieldWrapper>
  );
};

export default InputField;
