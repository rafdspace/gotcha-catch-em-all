import React from "react";
import Page from "../layouts/Page";
import styled from "@emotion/styled";
import DisplayPokemon from "../components/DisplayPokemon";
import { useQuery } from "@apollo/client";
import GET_POKEMON_DETAIL from "../graphql/getPokemonDetail";
import TabsDetail from "../components/TabsDetail";
import TabMoves from "../components/TabMoves";
import TabInfo from "../components/TabInfo";
import TabOwned from "../components/TabOwned";
import { useState } from "react";
import Pokeball from "../components/Pokeball";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

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

const DetailLoading = styled.div`
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

  ${({ isLoading }) => !isLoading && "top:100%; opacity:0; visibility:hidden;"}
`;

const DetailPokemon = () => {
  const { species } = useParams();
  const [tabActive, setTabActive] = useState(0);
  const dataTabs = [
    { tab: "info", color: "#E3350D" },
    { tab: "moves", color: "#30A7D7" },
    { tab: "owned", color: "#4DAD5B" },
  ];
  const ownedPokemon = useSelector((state) => state.ownedPokemons).filter(
    (item) => item.species === species
  );

  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: species },
  });

  const onChangeTab = (tab) => {
    setTabActive(tab);
  };

  return (
    <Page>
      <DetailWrapper>
        <DetailLoading isLoading={loading}>
          <Loading text="Please wait..." />
        </DetailLoading>
        <Pokeball />
        <DisplayPokemon data={data?.pokemon} loading={loading} />
        <TabsDetail
          data={dataTabs}
          currentTab={tabActive}
          changeTab={onChangeTab}
        >
          {tabActive === 0 ? (
            <TabInfo data={data?.pokemon} loading={loading} />
          ) : tabActive === 1 ? (
            <TabMoves data={data?.pokemon} loading={loading} />
          ) : (
            <TabOwned data={ownedPokemon} />
          )}
        </TabsDetail>
      </DetailWrapper>
    </Page>
  );
};

export default DetailPokemon;
