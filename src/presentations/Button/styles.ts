import { css } from "@emotion/react";
import { type StyleButtonProps } from "./types";

export const styButton = ({ type, color }: StyleButtonProps) => css`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  padding: 10px 15px;
  text-align: center;
  box-shadow: inset 0 0 1px #ffffff;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: capitalize;
  width: 100%;
  cursor: pointer;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${color};

  ${type === "secondary" ? "background-color:transparent;color:#efefef;" : null}

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;
