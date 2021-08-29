import React from "react";
import styled from "@emotion/styled";
import CardList from "../components/CardList";
import TotalOwned from "../components/TotalOwned";
import Page from "../layouts/Page";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import GET_POKEMONS from "../graphql/getPokemon";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Homepage = () => {
  const history = useHistory();
  const ownedPokemons = useSelector((state) => state.ownedPokemons);
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { limit: 1180, offset: 0 },
  });

  return (
    <Page>
      <TotalOwned action />
      <CardList>
        {/* todo handle loading */}
        {loading ? (
          <Loading text="Please wait..." />
        ) : (
          data.pokemons.results.map(({ name, image, id }) => (
            <Card
              key={id}
              name={name}
              image={image}
              onClick={() => history.push(`/pokemon/${name}`)}
              owned={
                ownedPokemons.filter((item) => item.species === name).length
              }
            />
          ))
        )}
      </CardList>
    </Page>
  );
};

export default Homepage;
