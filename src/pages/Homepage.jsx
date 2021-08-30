import React, { useState } from "react";
import CardList from "../components/CardList";
import TotalOwned from "../components/TotalOwned";
import Page from "../layouts/Page";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import GET_POKEMONS from "../graphql/getPokemon";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { convertStr } from "../helpers/convertString";
import styled from "@emotion/styled";
import Button from "../components/Button";

const ActionNav = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  flex-basis: 100%;

  & > button {
    width: 100px;
    margin: 0 10px;
  }
`;

const Homepage = () => {
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const ownedPokemons = useSelector((state) => state.ownedPokemons);
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { limit: 20, offset: offset },
  });

  return (
    <Page>
      <TotalOwned action />
      <CardList isLoading={loading}>
        {loading ? (
          <Loading text="Please wait..." />
        ) : (
          data.pokemons.results.map(({ name, image, id }) => (
            <Card
              key={id}
              name={convertStr(name)}
              image={image}
              onClick={() => history.push(`/pokemon/${name}`)}
              owned={
                ownedPokemons.filter((item) => item.species === name).length
              }
            />
          ))
        )}
        {!loading && (
          <ActionNav>
            {!!offset && (
              <Button
                text="Back"
                onClick={() => setOffset((old) => old - 20)}
              />
            )}
            <Button text="Next" onClick={() => setOffset((old) => old + 20)} />
          </ActionNav>
        )}
      </CardList>
    </Page>
  );
};

export default Homepage;
