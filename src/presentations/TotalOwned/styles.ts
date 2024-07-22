import { css } from "@emotion/react";

export const styTotalOwnedWrapper = css`
  padding: 10px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
`;

export const styTotalOwnedContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: fit-content;
  }
`;

export const styTotalOwnedText = css`
  margin: 0;
  letter-spacing: 1px;
`;
