import React from "react";
import styled from "@emotion/styled";

const MyButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  padding: 10px 15px;
  text-align: center;
  box-shadow: inset 0 0 1px #ffffff;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: capitalize;
  width: 100%;
  cursor: pointer;
  background-color: ${({ color }) => color};
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ type }) =>
    type === "secondary" ? "background-color:transparent;color:#efefef;" : null}

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;

const Button = ({ text, color, type, onClick, isDisabled }) => {
  return (
    <MyButton
      disabled={isDisabled}
      color={color}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {text}
    </MyButton>
  );
};

export default Button;
