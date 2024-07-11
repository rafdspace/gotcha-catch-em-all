import { css } from "@emotion/react";
import bg from "../../assets/pokemon-bg.jpg";

export const styScreenWrapper = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  background-image: url(${bg});
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
