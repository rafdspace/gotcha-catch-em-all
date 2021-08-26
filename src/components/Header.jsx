import React from "react";
import styled from "@emotion/styled";
import ScreenContainer from "./ScreenContainer";
import Logo from "../assets/logo-pokemon.png";
import Button from "./Button";

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #e3350d;
  box-shadow: 1px 1px 3px 1px #cccccc;
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const HeaderImage = styled.div`
  height: 45px;
  width: fit-content;
  & > img {
    height: 100%;
    width: auto;
  }
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderNavItem = styled.div`
  margin: 0 5px;
  color: #ffffff;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ScreenContainer>
        <HeaderInner>
          <HeaderImage>
            <img src={Logo} alt="Logo" />
          </HeaderImage>
          <HeaderNav>
            {/* <HeaderNavItem>Home</HeaderNavItem> */}
            <HeaderNavItem>
              <Button color="#ffc500" text="My pokemon" />
            </HeaderNavItem>
          </HeaderNav>
        </HeaderInner>
      </ScreenContainer>
    </HeaderWrapper>
  );
};

export default Header;
