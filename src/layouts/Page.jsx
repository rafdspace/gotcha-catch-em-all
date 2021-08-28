import React from "react";
import styled from "@emotion/styled";
import ScreenContainer from "../components/ScreenContainer";

const PageWrapper = styled.div`
  margin-top: 75px;
  flex: 1;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const PageInner = styled.div`
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <ScreenContainer>
        <PageContent>
          <PageInner>{children}</PageInner>
        </PageContent>
      </ScreenContainer>
    </PageWrapper>
  );
};

export default Page;
