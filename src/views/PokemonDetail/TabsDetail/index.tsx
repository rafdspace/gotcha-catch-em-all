import { type PropsWithChildren } from "react";
import {
  styTabsDetailContent,
  styTabsDetailInner,
  styTabsDetailItem,
  styTabsDetailWrapper,
  styTabsItem,
} from "./styles";

const dataTabs = [
  { tab: "info", color: "#E3350D" },
  { tab: "moves", color: "#30A7D7" },
  { tab: "owned", color: "#4DAD5B" },
];

interface Props {
  currentTab: number;
  changeTab: (v: number) => void;
}

const TabsDetail = ({
  currentTab,
  changeTab,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div css={styTabsDetailWrapper}>
      <div css={styTabsDetailInner}>
        <div css={styTabsDetailItem}>
          {dataTabs.map(({ tab, color }, index) => (
            <div
              css={styTabsItem(color, index === currentTab)}
              key={index}
              onClick={() => changeTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div css={styTabsDetailContent}>{children}</div>
      </div>
    </div>
  );
};

export default TabsDetail;
