import React from "react";
import Page from "../layouts/Page";
import styled from "@emotion/styled";
import DisplayPokemon from "../components/DisplayPokemon";

const DetailWrapper = styled.div`
  padding: 10px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DetailPokemon = () => {
  return (
    <Page>
      <DetailWrapper>
        <DisplayPokemon />
        <p style={{ padding: "10px", margin: "0" }}>Tab</p>
      </DetailWrapper>
    </Page>
  );
};

export default DetailPokemon;
