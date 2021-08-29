import React from "react";
import styled from "@emotion/styled";
import PokeballImg from "../assets/pokeball.png";
import Button from "./Button";
import { useState } from "react";

const PokeballWrapper = styled.div``;

const PokeballContent = styled.div`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  cursor: pointer;
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
  top: -100%;
  left: 0;
  background: rgba(34 38 41 / 0.8);
  z-index: 9;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isShow }) => isShow && `top: 0;`}
`;

const PokeballBgContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;

  & > button {
    width: fit-content;
  }
`;

const PokeballBgText = styled.p`
  margin: 10px;
`;

const Pokeball = () => {
  const [show, setShow] = useState(true);

  return (
    <PokeballWrapper>
      <PokeballBg isShow={show}>
        <PokeballBgContent>
          <PokeballBgText>
            Click pokeball to capture this pokemon
          </PokeballBgText>
          <Button text="ok" onClick={() => setShow(false)} />
        </PokeballBgContent>
      </PokeballBg>
      <PokeballContent></PokeballContent>
    </PokeballWrapper>
  );
};

export default Pokeball;
