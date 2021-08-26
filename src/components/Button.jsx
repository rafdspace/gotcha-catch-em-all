import React from "react";
import styled from "@emotion/styled";

const MyButton = styled.button`
  font-family: "Roboto", sans-serif;
  padding: 10px 15px;
  text-align: center;
  box-shadow: inset 0 0 1px #ffffff;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: capitalize;
  width: 100%;
  cursor: pointer;
  background-color: #${(props) => props.color};
`;

const Button = ({ text, color }) => {
  return <MyButton color={color}>{text}</MyButton>;
};

export default Button;
