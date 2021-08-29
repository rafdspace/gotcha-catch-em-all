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
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
      </CardList>
    </Page>
  );
};

export default MyPokemonPage;
