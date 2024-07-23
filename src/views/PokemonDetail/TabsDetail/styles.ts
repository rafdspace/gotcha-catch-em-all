import { css } from "@emotion/react";

export const styTabsDetailWrapper = css`
  margin-top: 8px;
  flex: 1;
  background-color: #383838;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const styTabsDetailInner = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
`;

export const styTabsDetailItem = css`
  background: #efefef;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const styTabsItem = (color: string, isActive: boolean) => css`
  width: 100%;
  position: relative;
  color: ${color};
  text-align: center;
  text-transform: capitalize;
  font-size: 12px;
  margin: 0 3px;
  padding: 10px 0;
  line-height: 120%;
  border-bottom: 4px solid ${color};
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${isActive && `background-color: ${color}; color:#efefef;`}

  &:hover {
    color: #efefef;
    background-color: ${color};
  }
`;

export const styTabsDetailContent = css`
  flex: 1;
  background-color: #383838;
  padding: 12px 10px 10px 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
