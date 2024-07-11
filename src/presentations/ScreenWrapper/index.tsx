import { type ReactElement } from "react";
import { styScreenWrapper } from "./styles";

const ScreenWrapper = ({ children }: { children: ReactElement[] }) => {
  return <div css={styScreenWrapper}>{children}</div>;
};

export default ScreenWrapper;
