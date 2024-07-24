import { useLocation, useNavigate } from "react-router-dom";
import {
  styHeaderImage,
  styHeaderInner,
  styHeaderNav,
  styHeaderNavItem,
  styHeaderWrapper,
} from "./styles";
import Logo from "../../assets/logo-pokemon.png";
import Button from "../Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div css={styHeaderWrapper}>
      <div css={styHeaderInner}>
        <div css={styHeaderImage} onClick={() => navigate("/")}>
          <img src={Logo} alt="pokemon-logo" />
        </div>
        <div css={styHeaderNav}>
          {location.pathname === "/my-pokemon" ? (
            <div css={styHeaderNavItem}>
              <Button text="Home" onClick={() => navigate("/")} />
            </div>
          ) : (
            <div css={styHeaderNavItem}>
              <Button
                color="#ffc500"
                text="My pokemon"
                onClick={() => navigate("/my-pokemon")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
