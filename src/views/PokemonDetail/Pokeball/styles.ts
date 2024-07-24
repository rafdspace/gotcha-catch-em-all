import { css } from "@emotion/react";
import PokeballImg from "../../../assets/pokeball.png";

export const styPokeballContent = ({
  isDisabled,
}: {
  isDisabled: boolean;
}) => css`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 50px;
  height: 50px;
  cursor: ${isDisabled ? "default" : "pointer"};
  border: 4px solid #ffc500;
  background-color: #ffc500;
  border-radius: 50%;
  background-image: url(${PokeballImg});
  background-size: cover;
  box-shadow: 0 0 0 5px rgb(239 239 239 / 0.5);
`;

export const styPokeballBg = ({ isShow }: { isShow: boolean }) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background: rgba(34, 38, 41, 0.8);
  z-index: 2;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${isShow && `opacity: 1; visibility: visible;`}
`;

export const styPokeballBgContent = css`
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

export const styPokeballBgText = css`
  margin: 10px;
`;
