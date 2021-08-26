import React from "react";
import CardList from "../components/CardList";
import TotalOwned from "../components/TotalOwned";
import Page from "../layouts/Page";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import GET_POKEMONS from "../graphql/getPokemon";

const Homepage = () => {
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { limit: 20, offset: 0 },
  });

  return (
    <Page>
      <TotalOwned />
      <CardList>
        {/* todo handle loading */}
        {loading
          ? "is-loading"
          : data.pokemons.results.map(({ name, image, id }) => (
              <Card key={id} name={name} image={image} />
            ))}
      </CardList>
    </Page>
  );
};

export default Homepage;
