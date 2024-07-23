import { type ReactNode } from "react";
import { styPageContent, styPageInner, styPageWrapper } from "./styles";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div css={styPageWrapper}>
      <div css={styPageInner}>
        <div css={styPageContent}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
