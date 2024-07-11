import { styFooterInner, styFooterInnerText, styFooterWrapper } from "./styles";

const Footer = () => {
  return (
    <div css={styFooterWrapper}>
      <div css={styFooterInner}>
        <div css={styFooterInnerText}>@rafdspace</div>
      </div>
    </div>
  );
};

export default Footer;
