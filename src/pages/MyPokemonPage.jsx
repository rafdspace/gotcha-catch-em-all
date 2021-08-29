import React from "react";
import styled from "@emotion/styled";
import Page from "../layouts/Page";
import TotalOwned from "../components/TotalOwned";
import CardList from "../components/CardList";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const MyPokemonPage = () => {
  const ownedPokemons = useSelector((state) => state.ownedPokemons);

  const handleRelease = () => {
    console.log("click");
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
