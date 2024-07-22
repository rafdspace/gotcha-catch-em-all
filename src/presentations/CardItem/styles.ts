import { css } from "@emotion/react";

export const styCardWrapper = css`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) {
    flex-basis: 50%;
  }
  @media screen and (min-width: 720px) {
    flex-basis: 25%;
  }
  @media screen and (min-width: 1024px) {
    flex-basis: 20%;
  }
`;

export const styCardContent = (isDisabled?: boolean) => css`
  flex: 1;
  margin: 5px;
  padding: 3px;
  background: whitesmoke;
  border: 2px solid #ffc500;
  border-radius: 5px;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${!isDisabled
    ? `
      cursor: pointer; 
      &:hover {
        transform: translateY(-2px);
      }`
    : ""}
`;

export const styCardInner = (isOwned?: boolean) => css`
  height: 100%;
  background-color: #222629;
  border-radius: 5px;
  background-image: linear-gradient(rgba(179, 42, 10, 0.4) 1px, transparent 1px),
    linear-gradient(to right, rgba(179, 42, 10, 0.4) 1px, transparent 1px);
  background-size: 10px 10px;
  background-position: center;
  display: flex;
  flex-direction: column;

  // ${!isOwned ? `justify-content: space-between;` : ""}
`;

export const styCardTitle = css`
  widht: 100%;
  margin: 0;
  background-color: #e3350d;
  text-align: center;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const styCardImage = css`
  widht: 100%;
  height: 100px;
  margin: 10px 0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const styCardCaption = (isReleased?: boolean) => css`
  margin: 0;
  padding: 5px;
  background-color: #ffc500;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  letter-spacing: 1.2px;
  font-size: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${isReleased
    ? `
      cursor: pointer; 
      &:hover {
        background-color: #d2a200;
      }`
    : ""}
`;
