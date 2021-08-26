import React from "react";
import styled from "@emotion/styled";
import ScreenContainer from "../components/ScreenContainer";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #000000;
`;

const FooterInner = styled.div`
  padding: 15px;
  text-align: center;
`;

const FooterInnerText = styled.p`
  color: #ffc500;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ScreenContainer>
        <FooterInner>
          <FooterInnerText>Made from Yogyakarta</FooterInnerText>
        </FooterInner>
      </ScreenContainer>
    </FooterWrapper>
  );
};

export default Footer;
