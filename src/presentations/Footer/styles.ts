import { css } from "@emotion/react";

export const styFooterWrapper = css`
  width: 100%;
  background-color: #000000;
  background-image: linear-gradient(
      rgba(178, 178, 178, 0.1) 1px 25%,
      transparent 1px
    ),
    linear-gradient(to right, rgba(178, 178, 178, 0.1) 1px, transparent 1px);
  background-size: 5px 5px;
  background-position: center;
`;

export const styFooterInner = css`
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  max-width: 1080px;
  margin: auto;
`;

export const styFooterInnerText = css`
  color: #ffc500;
  line-height: 150%;
`;
