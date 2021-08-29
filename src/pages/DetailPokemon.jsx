import React from "react";
import Page from "../layouts/Page";
import styled from "@emotion/styled";
import DisplayPokemon from "../components/DisplayPokemon";
import { useQuery } from "@apollo/client";
import GET_POKEMON_DETAIL from "../graphql/getPokemonDetail";
import InfoTabs from "../components/InfoTabs";
import TabMove from "../components/TabMove";
import TabInfo from "../components/TabInfo";
import TabOwned from "../components/TabOwned";
import { useState } from "react";

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
  const [tabActive, setTabActive] = useState(0);

  const dataTabs = [
    { tab: "info", color: "#E3350D" },
    { tab: "moves", color: "#30A7D7" },
    { tab: "owned", color: "#4DAD5B" },
  ];

  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: "blaziken" },
  });

  const onChangeTab = (tab) => {
    setTabActive(tab);
  };

  return (
    <Page>
      <DetailWrapper>
        <DisplayPokemon data={data?.pokemon} loading={loading} />
        <InfoTabs data={dataTabs} changeTab={onChangeTab}>
          {tabActive === 0 ? (
            <TabInfo data={data?.pokemon} loading={loading} />
          ) : tabActive === 1 ? (
            <TabMove data={data?.pokemon} loading={loading} />
          ) : (
            <TabOwned />
          )}
        </InfoTabs>
      </DetailWrapper>
    </Page>
  );
};

export default DetailPokemon;
