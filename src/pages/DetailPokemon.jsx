import React from "react";
import Page from "../layouts/Page";
import styled from "@emotion/styled";
import DisplayPokemon from "../components/DisplayPokemon";
import { useQuery } from "@apollo/client";
import GET_POKEMON_DETAIL from "../graphql/getPokemonDetail";
import InfoTabs from "../components/InfoTabs";

const DetailWrapper = styled.div`
  padding: 10px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailPokemon = () => {
  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: "blaziken" },
  });

  return (
    <Page>
      <DetailWrapper>
        <DisplayPokemon data={data?.pokemon} loading={loading} />
        <InfoTabs />
      </DetailWrapper>
    </Page>
  );
};

export default DetailPokemon;
