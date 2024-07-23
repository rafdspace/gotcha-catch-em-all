import { css } from "@emotion/react";

export const styPokemonDetailWrapper = css`
  padding: 10px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const styPokemonDetailLoading = (isLoading?: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 4;
  background-color: #222629;
  display: flex;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${!isLoading && "top:100%; opacity:0; visibility:hidden;"}
`;
