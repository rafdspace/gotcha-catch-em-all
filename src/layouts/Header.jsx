import React from "react";
import styled from "@emotion/styled";
import ScreenContainer from "../components/ScreenContainer";
import Logo from "../assets/logo-pokemon.png";
import Button from "../components/Button";
import { Link, useHistory, useLocation } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #e3350d;
  box-shadow: 1px 1px 3px 1px rgba(255 197 0 / 0.5);
  background-image: linear-gradient(
      rgba(179, 42, 10, 0.2) 1px 25%,
      transparent 1px
    ),
    linear-gradient(to right, rgba(179, 42, 10, 0.2) 1px, transparent 1px);
  background-size: 5px 5px;
  background-position: center;
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
  font-size: 12px;

  & > div {
    padding: 10px;
    cursor: pointer;
  }
`;

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <HeaderWrapper>
      <ScreenContainer>
        <HeaderInner>
          <Link to="/">
            <HeaderImage>
              <img src={Logo} alt="Logo" />
            </HeaderImage>
          </Link>
          <HeaderNav>
            {location.pathname === "/my-pokemon" ? (
              <HeaderNavItem>
                <Button text="Home" onClick={() => history.push("/")} />
              </HeaderNavItem>
            ) : (
              <HeaderNavItem>
                <Button
                  color="#ffc500"
                  text="My pokemon"
                  onClick={() => history.push("/my-pokemon")}
                />
              </HeaderNavItem>
            )}
          </HeaderNav>
        </HeaderInner>
      </ScreenContainer>
    </HeaderWrapper>
  );
};

export default Header;
