import React from "react";
import Page from "../layouts/Page";
import TotalOwned from "../components/TotalOwned";
import CardList from "../components/CardList";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { releasePokemon } from "../store/globalAction";

const MyPokemonPage = () => {
  const ownedPokemons = useSelector((state) => state.ownedPokemons);
  const dispatch = useDispatch();

  const handleRelease = (name) => {
    dispatch(releasePokemon(name));
  };

  return (
    <Page>
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
