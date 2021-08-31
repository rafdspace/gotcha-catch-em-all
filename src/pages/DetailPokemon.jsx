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
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Modal from "../layouts/Modal";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { closeCatchInfo, keepPokemon } from "../store/globalAction";
import { convertStr } from "../helpers/convertString";

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
  flex-direction: column;

  & > div > input {
    margin: 0 5px 25px 5px;
  }

  & > div {
    display: flex;
    margin: 5px -5px 0 -5px;

    & > button {
      margin: 0 5px;
    }
  }
`;

const DetailPokemon = () => {
  const dispatch = useDispatch();

  const { species } = useParams();

  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: species },
  });

  const [tabActive, setTabActive] = useState(0);
  const [modal, setModal] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dataTabs = [
    { tab: "info", color: "#E3350D" },
    { tab: "moves", color: "#30A7D7" },
    { tab: "owned", color: "#4DAD5B" },
  ];

  const catchInfo = useSelector((state) => state.catchInfo);

  const ownedPokemonsName = useSelector((state) => state.ownedPokemons).map(
    (item) => item.name
  );

  const ownedPokemon = useSelector((state) => state.ownedPokemons).filter(
    (item) => item.species === species
  );

  const onChangeTab = (tab) => {
    setTabActive(tab);
  };

  const onCatch = async () => {
    setPokemonName("");
    setModal("catch-loading");
    await setTimeout(function () {
      if (Math.random() < 0.5) setModal("catch-failed");
      else setModal("catch-success");
    }, 1500);
  };

  const onKeep = () => {
    if (ownedPokemonsName.includes(pokemonName)) {
      setErrorMsg("Please choose another name!");
      return;
    }
    const newPokemon = {
      species,
      name: pokemonName,
      sprite: data?.pokemon.sprites.front_default,
    };
    dispatch(keepPokemon(newPokemon));
    setModal("catch-ended");
  };

  const handleChangeName = (e) => {
    setErrorMsg("");
    setPokemonName(e.toUpperCase());
  };

  if (!loading && !data.pokemon.status) return <Redirect to="/" />;

  return (
    <Page>
      <DetailWrapper>
        <DetailLoading isLoading={loading}>
          <Loading text="Please wait..." />
        </DetailLoading>
        <Pokeball
          onClick={onCatch}
          info={catchInfo}
          closeInfo={() => dispatch(closeCatchInfo())}
        />
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
          show={modal === "catch-ended"}
          title="New friend"
          description={`${pokemonName} is now your friend!`}
        >
          <Button text="Ok" onClick={() => setModal("")} />
        </Modal>

        <Modal
          show={modal === "catch-success"}
          title="gotcha"
          description={`You've captured a ${convertStr(
            species
          ).toUpperCase()}!!!`}
        >
          <ModalContent>
            <InputField
              errorMsg={errorMsg}
              value={pokemonName}
              type="text"
              placeholder="Your pokemon name"
              handleChange={handleChangeName}
            />
            <div>
              <Button isDisabled={!pokemonName} text="Keep" onClick={onKeep} />
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
            <div>
              <Button text="try again" onClick={onCatch} />
              <Button
                text="Leave"
                onClick={() => setModal("")}
                type="secondary"
              />
            </div>
          </ModalContent>
        </Modal>
      </DetailWrapper>
    </Page>
  );
};

export default DetailPokemon;
