import { css } from "@emotion/react";

export const styTabMovesWrapperStyle = (fullHeight: boolean) => css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: ${fullHeight ? "100%" : "auto"};
`;

export const styTabMovesItemStyle = css`
  padding: 5px 15px;
  margin: 4px;
  background: #222629;
  border-radius: 20px;
  border: 1px solid;
  text-transform: capitalize;
  font-size: 10px;

  @media screen and (min-width: 325px) {
    font-size: 12px;
  }

  @media screen and (min-width: 720px) {
    font-size: 14px;
    padding: 5px 15px;
  }
`;

export const styTabMovesPlaceholderStyle = css`
  text-align: center;
  margin: auto;
`;
