import React from "react";
import CardList from "../components/CardList";
import TotalOwned from "../components/TotalOwned";
import Page from "../layouts/Page";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <Page>
      <TotalOwned />
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Page>
  );
};

export default Homepage;
