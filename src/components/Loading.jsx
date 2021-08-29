import React from "react";
import styled from "@emotion/styled";

const LoadingWrapper = styled.div`
  width: 100%;
  margin: auto;
  animation: blip 1s infinite ease-in-out;
  text-align: center;
  background-color: #222629;
  @keyframes blip {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }
`;

const Loading = ({ text }) => {
  return <LoadingWrapper>{text}</LoadingWrapper>;
};

export default Loading;
