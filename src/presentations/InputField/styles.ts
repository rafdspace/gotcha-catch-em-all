import { css } from "@emotion/react";

export const styFieldWrapper = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const styField = ({ isError }: { isError: boolean }) => css`
  padding: 10px;
  font: inherit;
  letter-spacing: 0.35px;
  border-radius: 5px;
  border: none;
  color: black;
  text-align: center;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${isError ? "#e3350d" : "black"};
  box-shadow: ${isError ? "inset 0 0 0 1px #e3350d" : "none"};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const styFieldErrorMessage = ({ isError }: { isError: boolean }) => css`
  color: #e3350d;
  font-size: 12px;
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 100%;
  visibility: ${isError ? "visible" : "hidden"};
`;
