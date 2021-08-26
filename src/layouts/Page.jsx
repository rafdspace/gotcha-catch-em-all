import React from "react";
import styled from "@emotion/styled";
import ScreenContainer from "../components/ScreenContainer";

const PageWrapper = styled.div`
  margin-top: 75px;
  flex: 1;
`;

const PageContent = styled.div`
  padding: 15px;
  height: 100%;
`;

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <ScreenContainer>
        <PageContent>{children}</PageContent>
      </ScreenContainer>
    </PageWrapper>
  );
};

export default Page;
