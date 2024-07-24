import { type PropsWithChildren } from "react";
import {
  styModalBody,
  styModalDescription,
  styModalHeader,
  styModalInner,
  styModalTitle,
  styModalWrapper,
} from "./styles";

interface Props {
  show: boolean;
  title?: string;
  description?: string;
}

const Modal = ({
  show,
  title,
  description,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div css={styModalWrapper({ isShow: show })}>
      <div css={styModalBody}>
        <div css={styModalInner}>
          <div css={styModalHeader}>
            <h4 css={styModalTitle}>{title}</h4>
            <p css={styModalDescription}>{description}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
