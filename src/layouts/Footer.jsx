import React from "react";
import styled from "@emotion/styled";
import ScreenContainer from "../components/ScreenContainer";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #000000;
  background-image: linear-gradient(
      rgba(178, 178, 178, 0.1) 1px 25%,
      transparent 1px
    ),
    linear-gradient(to right, rgba(178, 178, 178, 0.1) 1px, transparent 1px);
  background-size: 5px 5px;
  background-position: center;
`;

const FooterInner = styled.div`
  padding: 5px;
  text-align: center;
`;

const FooterInnerText = styled.p`
  color: #ffc500;
  line-height: 150%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ScreenContainer>
        <FooterInner>
          <FooterInnerText>Made from Yogyakarta – @rafdianr</FooterInnerText>
        </FooterInner>
      </ScreenContainer>
    </FooterWrapper>
  );
};

export default Footer;
