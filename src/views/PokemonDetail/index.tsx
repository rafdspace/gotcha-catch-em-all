import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Page from "../../presentations/Page";
import {
  styPokemonDetailLoading,
  styPokemonDetailWrapper,
} from "../PokemonList/styles";
import Loading from "../../presentations/Loading";
import { useGetPokemonDetail } from "../../usecases/useGetPokemonDetail";
import DisplayPokemon from "./DisplayPokemon";
import TabsDetail from "./TabsDetail";
import TabMoves from "./TabMoves";
import TabInfo from "./TabInfo";
import Pokeball from "./Pokeball";
import { type RootState } from "../../store/configureStore";
import { closeCatchInfo, keepPokemon } from "../../store/globalSlice";
import Modal from "../../presentations/Modal";
import Button from "../../presentations/Button";
import { styModalContent } from "../../presentations/Modal/styles";
import { convertStr } from "../../entities/utils/convertStr";
import InputField from "../../presentations/InputField";
import TabOwned from "./TabOwned";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const catchInfo = useSelector((state: RootState) => state.catchInfo);
  const ownedPokemon = useSelector((state: RootState) => state.ownedPokemons);

  const { name: pokemonSpecies } = useParams();
  const { getPokemonDetail, data, loading } = useGetPokemonDetail();

  const [tabActive, setTabActive] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const [modal, setModal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!pokemonSpecies) return;

    getPokemonDetail({ variables: { name: pokemonSpecies } });
  }, [pokemonSpecies, getPokemonDetail]);

  const onCatch = async () => {
    setPokemonName("");
    setModal("catch-loading");
    await setTimeout(function () {
      if (Math.random() < 0.5) setModal("catch-failed");
      else setModal("catch-success");
    }, 1500);
  };

  const handleChangeName = (val: string) => {
    setErrorMsg("");
    setPokemonName(val.toUpperCase());
  };

  const onKeep = () => {
    const ownedPokemonsName = ownedPokemon.map((item) => item.name);
    if (ownedPokemonsName.includes(pokemonName)) {
      setErrorMsg("Please choose another name!");
      return;
    }
    const newPokemon = {
      species: pokemonSpecies || "",
      name: pokemonName,
      image: data.imageUrl,
    };
    dispatch(keepPokemon(newPokemon));
    setModal("catch-ended");
  };

  return (
    <Page>
      <div css={styPokemonDetailWrapper}>
        <div css={styPokemonDetailLoading(loading)}>
          <Loading text="Please wait..." />
        </div>
        <Pokeball
          onClick={onCatch}
          info={catchInfo}
          closeInfo={() => dispatch(closeCatchInfo())}
        />
        <DisplayPokemon data={data} loading={loading} />
        <TabsDetail currentTab={tabActive} changeTab={(v) => setTabActive(v)}>
          {tabActive === 0 ? (
            <TabInfo data={data} loading={loading} />
          ) : tabActive === 1 ? (
            <TabMoves data={data.moves} />
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
            pokemonSpecies || ""
          ).toUpperCase()}!!!`}
        >
          <div css={styModalContent}>
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
          </div>
        </Modal>

        <Modal
          show={modal === "catch-failed"}
          title="uh-oh"
          description={`You failed! Try harder!`}
        >
          <div css={styModalContent}>
            <div>
              <Button text="try again" onClick={onCatch} />
              <Button
                text="Leave"
                onClick={() => setModal("")}
                type="secondary"
              />
            </div>
          </div>
        </Modal>
      </div>
    </Page>
  );
};

export default PokemonDetail;
