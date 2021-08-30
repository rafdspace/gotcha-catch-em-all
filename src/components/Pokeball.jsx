import React from "react";
import styled from "@emotion/styled";
import PokeballImg from "../assets/pokeball.png";
import Button from "./Button";

const PokeballWrapper = styled.div``;

const PokeballContent = styled.div`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 50px;
  height: 50px;
  cursor: ${({ disabled }) => (disabled ? null : "pointer")};
  border: 4px solid #ffc500;
  background-color: #ffc500;
  border-radius: 50%;
  background-image: url(${PokeballImg});
  background-size: cover;
  box-shadow: 0 0 0 5px rgb(239 239 239 / 0.5);
`;

const PokeballBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background: rgba(34 38 41 / 0.8);
  z-index: 2;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isShow }) => isShow && `opacity:1; visibility:visible;`}
`;

const PokeballBgContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  text-align: center;

  & > button {
    width: fit-content;
  }
`;

const PokeballBgText = styled.p`
  margin: 10px;
`;

const Pokeball = ({ info, onClick, closeInfo }) => {
  return (
    <PokeballWrapper>
      <PokeballBg isShow={info}>
        <PokeballBgContent>
          <PokeballBgText>Click pokeball to catch this pokemon</PokeballBgText>
          <Button text="ok" onClick={() => closeInfo()} />
        </PokeballBgContent>
      </PokeballBg>
      <PokeballContent disabled={info} onClick={() => !info && onClick()} />
    </PokeballWrapper>
  );
};

export default Pokeball;
