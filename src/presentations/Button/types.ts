import { type CSSProperties } from "react";

export type ButtonType = "primary" | "secondary";

export interface StyleButtonProps {
  type?: ButtonType;
  color?: CSSProperties["color"];
}

export interface ButtonProps extends StyleButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}
