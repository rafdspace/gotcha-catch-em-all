import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: auto;
`;

const ScreenContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ScreenContainer;
