import React from "react";
import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-item: center;
  justify-content: center;
  background: rgba(34 38 41 / 0.5);

  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
`;

const ModalBody = styled.div`
  width: 100%;
  min-width: 200px;
  max-width: 450px;
  padding: 20px;
  background: black;
  margin: auto 15px;
  border-radius: 5px;
  background-color: rgb(34 38 41);
  border: 2px solid #efefef;
  box-shadow: 0 0 0 5px rgb(239 239 239 / 0.5);
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  color: #efefef;
  text-align: center;
`;

const ModalHeader = styled.div`
  padding: 0 0 20px 0;
`;

const ModalTitle = styled.h4`
  margin: 0 0 10px 0;
`;

const ModalDescription = styled.p`
  margin: 0;
`;

const Modal = ({ show, title, description, children }) => {
  return (
    <ModalWrapper isShow={show}>
      <ModalBody>
        <ModalInner>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
          </ModalHeader>
          {children}
        </ModalInner>
      </ModalBody>
    </ModalWrapper>
  );
};
export default Modal;
