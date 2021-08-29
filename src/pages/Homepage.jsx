import React from "react";
import CardList from "../components/CardList";
import TotalOwned from "../components/TotalOwned";
import Page from "../layouts/Page";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import GET_POKEMONS from "../graphql/getPokemon";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { limit: 1180, offset: 0 },
  });

  return (
    <Page>
      <TotalOwned action />
      <CardList>
        {/* todo handle loading */}
        {loading
          ? "is-loading"
          : data.pokemons.results.map(({ name, image, id }) => (
              <Card
                key={id}
                name={name}
                image={image}
                onClick={() => history.push(`/pokemon/${name}`)}
              />
            ))}
      </CardList>
    </Page>
  );
};

export default Homepage;
