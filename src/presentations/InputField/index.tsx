import { styField, styFieldErrorMessage, styFieldWrapper } from "./styles";

interface Props {
  value: string;
  type: string;
  placeholder: string;
  handleChange: (v: string) => void;
  errorMsg: string;
}

const InputField = ({
  value,
  type,
  placeholder,
  handleChange,
  errorMsg,
}: Props) => {
  return (
    <div css={styFieldWrapper}>
      <input
        css={styField({ isError: Boolean(errorMsg) })}
        value={value}
        type={type}
        placeholder={placeholder}
        maxLength={16}
        onChange={(e) => handleChange && handleChange(e.target.value)}
      />
      <p css={styFieldErrorMessage({ isError: Boolean(errorMsg) })}>
        {errorMsg}
      </p>
    </div>
  );
};

export default InputField;
