import { styHeaderImage, styHeaderInner, styHeaderWrapper } from "./styles";
import Logo from "../../assets/logo-pokemon.png";

const Header = () => {
  return (
    <div css={styHeaderWrapper}>
      <div css={styHeaderInner}>
        <div css={styHeaderImage}>
          <img src={Logo} alt="pokemon-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
