import { css } from "@emotion/react";

export const styHeaderWrapper = css`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #e3350d;
  box-shadow: 1px 1px 3px 1px rgba(255 197 0 / 0.5);
  background-image: linear-gradient(
      rgba(179, 42, 10, 0.2) 1px 25%,
      transparent 1px
    ),
    linear-gradient(to right, rgba(179, 42, 10, 0.2) 1px, transparent 1px);
  background-size: 5px 5px;
  background-position: center;
`;

export const styHeaderInner = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  max-width: 1080px;
  margin: auto;
`;

export const styHeaderImage = css`
  height: 45px;
  width: fit-content;
  & > img {
    height: 100%;
    width: auto;
  }
`;

export const styHeaderNav = css`
  display: flex;
  align-items: center;
`;

export const styHeaderNavItem = css`
  margin: 0 5px;
  color: #ffffff;
  font-size: 12px;

  & > div {
    padding: 10px;
    cursor: pointer;
  }
`;
