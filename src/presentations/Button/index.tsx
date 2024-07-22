import { styButton } from "./styles";
import { type ButtonProps } from "./types";

const Button = ({ text, type, color, isDisabled, onClick }: ButtonProps) => {
  return (
    <button
      css={styButton({ type, color })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
