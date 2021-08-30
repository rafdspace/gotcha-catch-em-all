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
import Modal from "../layouts/Modal";
import Button from "../components/Button";
import InputField from "../components/InputField";

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

const ModalContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > input {
    margin-bottom: 5px;
  }

  & > div {
    display: flex;
    margin: 0 -5px;

    & > button {
      margin: 5px 5px 0 5px;
    }
  }
`;

const DetailPokemon = () => {
  const { species } = useParams();
  const [tabActive, setTabActive] = useState(0);
  const [modal, setModal] = useState("catch-success");
  const [pokemonName, setPokemonName] = useState("");

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

  const onCatch = async () => {
    console.log("catch");
    setModal("catch-loading");
    await setTimeout(function () {
      if (Math.random() < 0.5) setModal("catch-failed");
      else setModal("catch-success");
    }, 1500);
  };

  const onKeep = () => {
    console.log(pokemonName);
  };

  return (
    <Page>
      <DetailWrapper>
        <DetailLoading isLoading={loading}>
          <Loading text="Please wait..." />
        </DetailLoading>
        <Pokeball onClick={onCatch} />
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
        <Modal show={modal === "catch-loading"}>
          <Loading text="Catching Pokemon..." />
        </Modal>
        <Modal
          show={modal === "catch-success"}
          title="gotcha"
          description={`You've captured a ${species.toUpperCase()}!!!`}
        >
          <ModalContent>
            <InputField
              value={pokemonName}
              type="text"
              placeholder="Your pokemon name"
              handleChange={(e) => setPokemonName(e)}
            />
            <div>
              <Button text="Keep" onClick={onKeep} />
              <Button
                text="Release"
                onClick={() => setModal("")}
                type="secondary"
              />
            </div>
          </ModalContent>
        </Modal>
        <Modal
          show={modal === "catch-failed"}
          title="uh-oh"
          description={`You failed! Try harder!`}
        >
          <ModalContent>
            <Button text="try again" onClick={onCatch} />
            <Button
              text="Leave"
              onClick={() => setModal("")}
              type="secondary"
            />
          </ModalContent>
        </Modal>
      </DetailWrapper>
    </Page>
  );
};

export default DetailPokemon;
