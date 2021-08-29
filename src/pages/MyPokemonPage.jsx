import React from "react";
import styled from "@emotion/styled";
import Page from "../layouts/Page";
import TotalOwned from "../components/TotalOwned";
import CardList from "../components/CardList";
import Card from "../components/Card";

const MyPokemonPage = () => {
  return (
    <Page>
      <TotalOwned />
      <CardList>
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
        <Card
          name="test"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
        />
      </CardList>
    </Page>
  );
};

export default MyPokemonPage;
