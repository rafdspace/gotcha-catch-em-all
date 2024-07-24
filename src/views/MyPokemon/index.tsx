import { useState } from "react";
import { useSelector } from "react-redux";

import Page from "../../presentations/Page";
import CardList from "../../presentations/CardList";
import { RootState } from "../../store/configureStore";
import { useDispatch } from "react-redux";
import { releasePokemon } from "../../store/globalSlice";
import CardItem from "../../presentations/CardItem";
import { styEmptyPlaceholder } from "./styles";
import Modal from "../../presentations/Modal";
import { styModalContent } from "../../presentations/Modal/styles";
import Button from "../../presentations/Button";
import TotalOwned from "../../presentations/TotalOwned";

const MyPokemon = () => {
  const dispatch = useDispatch();
  const ownedPokemons = useSelector((state: RootState) => state.ownedPokemons);

  const [releasePokemonName, setReleasePokemonName] = useState("");
  const [modal, setModal] = useState("");

  const handleRelease = (name: string) => {
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
            <CardItem
              key={index}
              name={item.name}
              image={item.image}
              isDisabled
              onRelease={handleRelease}
            />
          ))
        ) : (
          <div css={styEmptyPlaceholder}>You don't have any pokemon yet!</div>
        )}
      </CardList>
      <Modal
        show={modal === "release-start"}
        title="Release"
        description={`Are you sure  want to release ${releasePokemonName}`}
      >
        <div css={styModalContent}>
          <Button text="Release" onClick={onRelease} />
          <Button text="Cancel" onClick={onCancel} type="secondary" />
        </div>
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

export default MyPokemon;
