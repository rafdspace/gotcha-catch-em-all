import { css } from "@emotion/react";

export const styModalWrapper = ({ isShow }: { isShow: boolean }) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 38, 41, 0.5);
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${isShow ? "1" : "0"};
  visibility: ${isShow ? "visible" : "hidden"};
`;

export const styModalBody = css`
  width: 100%;
  min-width: 200px;
  max-width: 450px;
  padding: 20px;
  background: black;
  margin: auto 15px;
  border-radius: 5px;
  background-color: rgb(34, 38, 41);
  border: 2px solid #efefef;
  box-shadow: 0 0 0 5px rgb(239, 239, 239, 0.5);
`;

export const styModalInner = css`
  display: flex;
  flex-direction: column;
  color: #efefef;
  text-align: center;
`;

export const styModalHeader = css`
  padding: 0 0 20px 0;
`;

export const styModalTitle = css`
  margin: 0 0 10px 0;
`;

export const styModalDescription = css`
  margin: 0;
`;

export const styModalContent = css`
  display: flex;
  flex-direction: column;

  & > div > input {
    margin: 0 5px 25px 5px;
  }

  & > div {
    display: flex;
    margin: 5px -5px 0 -5px;

    & > button {
      margin: 0 5px;
    }
  }
`;
