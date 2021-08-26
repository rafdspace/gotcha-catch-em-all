import React from "react";
import styled from "@emotion/styled";
import bg from "../assets/pokemon-bg.jpg";

const ScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  background-image: url(${bg});
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Screen = ({ children }) => {
  return <ScreenWrapper>{children}</ScreenWrapper>;
};

export default Screen;
