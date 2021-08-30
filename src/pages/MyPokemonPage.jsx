import React from "react";
import styled from "@emotion/styled";
import Page from "../layouts/Page";
import TotalOwned from "../components/TotalOwned";
import CardList from "../components/CardList";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { releasePokemon } from "../store/globalAction";
import Modal from "../layouts/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalContent = styled.div`
  display: flex;
  margin: 0 -5px;

  & > button {
    margin: 0 5px;
  }
`;

const EmptyPlaceholder = styled.p`
  text-align: center;
  margin: auto;
`;

const MyPokemonPage = () => {
  const ownedPokemons = useSelector((state) => state.ownedPokemons);
  const [releasePokemonName, setReleasePokemonName] = useState("");
  const [modal, setModal] = useState("");
  const dispatch = useDispatch();

  const handleRelease = (name) => {
    setReleasePokemonName(name);
    setModal("release-start");
  };

  const onRelease = () => {
    dispatch(releasePokemon(releasePokemonName));
    setModal("release-ended");
  };

  const onCancel = () => {
    setModal("");
  };

  return (
    <Page>
      <TotalOwned />
      <CardList>
        {ownedPokemons.length ? (
          ownedPokemons.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.sprite}
              isDisabled
              onRelease={handleRelease}
            />
          ))
        ) : (
          <EmptyPlaceholder>You don't have any pokemon yet!</EmptyPlaceholder>
        )}
      </CardList>
      <Modal
        show={modal === "release-start"}
        title="Release"
        description={`Are you sure  want to release ${releasePokemonName}`}
      >
        <ModalContent>
          <Button text="Release" onClick={onRelease} />
          <Button text="Cancel" onClick={onCancel} type="secondary" />
        </ModalContent>
      </Modal>
      <Modal
        show={modal === "release-ended"}
        title="Free"
        description={`You set ${releasePokemonName} free!`}
      >
        <Button text="Ok" onClick={() => setModal("")} />
      </Modal>
    </Page>
  );
};

export default MyPokemonPage;
