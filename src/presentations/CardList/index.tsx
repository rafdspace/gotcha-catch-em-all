import { type ReactNode } from "react";
import { styCardListContent, styCardListWrapper } from "./styles";

const CardList = ({ children }: { children: ReactNode }) => {
  return (
    <div css={styCardListWrapper}>
      <div css={styCardListContent}>{children}</div>
    </div>
  );
};

export default CardList;
