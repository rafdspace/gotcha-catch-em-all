import { css } from "@emotion/react";

const styLoadingWrapper = ({ isCentered }: { isCentered: boolean }) => css`
  width: 100%;
  margin: auto;
  animation: blip 1s infinite ease-in-out;
  text-align: center;

  ${isCentered &&
  `position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);`}

  @keyframes blip {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }
`;

interface Props {
  text: string;
  isCentered?: boolean;
}

const Loading = ({ text, isCentered = true }: Props) => {
  return <div css={styLoadingWrapper({ isCentered })}>{text}</div>;
};

export default Loading;
