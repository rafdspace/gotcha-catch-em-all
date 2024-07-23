import { css } from "@emotion/react";

export const styTabInfoWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const styTabInfoStats = css`
  display: flex;
  flex-direction: column;
`;

export const styTabInfoTitle = css`
  padding: 10px;
  margin: 4px;
  background: #efefef;
  border-radius: 5px;
  color: #222629;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`;

export const styTabInfoStatsLists = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const styTabInfoStatsItem = css`
  flex-basis: 50%;
  display: flex;
`;

export const styTabInfoStatsContent = css`
  border-radius: 5px;
  padding: 10px;
  margin: 4px;
  border: 1px solid #efefef;
  background: #222629;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;

  & > div {
    width: 100%;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }
`;

export const styTabInfoAbilitiesLists = css`
  display: flex;
  flex-direction: column;
`;

export const styTabInfoAbilitiesItem = css`
  width: 100%;
`;
