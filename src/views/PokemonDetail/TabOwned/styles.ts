import { css } from "@emotion/react";

export const styTabOwnedWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & > div {
    margin-top: 0;
  }
`;

export const styTabOwnedPlaceholder = css`
  text-align: center;
  margin: auto;
`;
