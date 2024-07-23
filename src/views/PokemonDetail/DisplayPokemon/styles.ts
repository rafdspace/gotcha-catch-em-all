import { css } from "@emotion/react";

export const styDisplayPokemonWrapper = css`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 100%;
  min-height: 200px;
`;

export const styDisplayPokemonContent = css`
  height: 100%;
  border-radius: 5px;
  border-bottom: 1px solid #e3350d;
`;

export const styDisplayPokemonInner = css`
  height: 100%;
  background-color: #222629;
  border-radius: 5px;
  background-image: linear-gradient(rgba(179, 42, 10, 0.4) 1px, transparent 1px),
    linear-gradient(to right, rgba(179, 42, 10, 0.4) 1px, transparent 1px);
  background-size: 10px 10px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const styDisplayPokemonTitle = css`
  margin: 0;
  background-color: #e3350d;
  text-align: center;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const styDisplayPokemonImage = css`
  width: 100%;
  height: calc(100% - 100px);
  margin: 10px 0;
  text-align: center;
  & > img {
    width: auto;
    height: 100%;
  }
`;

export const styDisplayPokemonType = css`
  padding: 5px 0 10px 0;
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const styDisplayPokemonTypeItem = (color: string) => css`
  text-transform: uppercase;
  color: #ffffff;
  padding: 5px 15px;
  margin: 0 5px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  letter-spacing: 1.2px;
  font-size: 8px;
  background: ${color};
  border-radius: 20px;
  border: 1px solid;

  @media screen and (min-width: 325px) {
    font-size: 10px;
  }

  @media screen and (min-width: 720px) {
    font-size: 12px;
  }
`;
