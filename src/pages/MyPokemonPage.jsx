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

const MyPokemonPage = () => {
  const ownedPokemons = useSelector((state) => state.ownedPokemons);
  const [releasePokemonName, setReleasePokemonName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleRelease = (name) => {
    setReleasePokemonName(name);
    setShowModal(true);
  };

  const onRelease = () => {
    dispatch(releasePokemon(releasePokemonName));
    setReleasePokemonName("name");
    setShowModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  return (
    <Page>
      <Modal
        show={showModal}
        title="Release"
        description={`Are you sure  want to release ${releasePokemonName}`}
      >
        <ModalContent>
          <Button text="Release" onClick={onRelease} />
          <Button text="Cancel" onClick={onCancel} type="secondary" />
        </ModalContent>
      </Modal>
      <TotalOwned />
      <CardList>
        {ownedPokemons.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            image={item.sprite}
            disabled
            onRelease={handleRelease}
          />
        ))}
      </CardList>
    </Page>
  );
};

export default MyPokemonPage;
