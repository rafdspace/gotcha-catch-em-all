import { useQuery } from "@apollo/client";
import {
  PokemonsQuery,
  PokemonsQueryVariables,
} from "../__generated__/graphql";
import GET_POKEMON_LIST_QUERY from "../repositories/queries/pokemons.graphql";
import { normalizePokemonList } from "../repositories/normalizer/pokemon-list-normalizer";
import { castError } from "../entities/utils/castError";
import { useRef, useState } from "react";

export const useGetPokemonList = () => {
  const offset = useRef<number>(0);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const { data, loading, fetchMore } = useQuery<
    PokemonsQuery,
    PokemonsQueryVariables
  >(GET_POKEMON_LIST_QUERY, {
    variables: { limit: 30, offset: 0 },
    onError: (errorObj: Error) => {
      const errorMessage = castError(errorObj).message;
      console.error({ errorMessage });
    },
  });

  const hasNextPage = Boolean(data?.pokemons?.next);

  const handleLoadMore = () => {
    if (!loading && hasNextPage && !isLoadMore) {
      setIsLoadMore(true);
      offset.current = offset.current + 30;

      fetchMore({
        variables: {
          limit: 30,
          offset: offset.current,
        },
        updateQuery: (
          prev: PokemonsQuery,
          { fetchMoreResult }: { fetchMoreResult: PokemonsQuery }
        ) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            pokemons: {
              ...(prev.pokemons || {}),
              next: fetchMoreResult.pokemons?.next || false,
              results: [
                ...(prev.pokemons?.results || []),
                ...(fetchMoreResult.pokemons?.results || []),
              ],
            },
          } as PokemonsQuery;
        },
      })
        .catch((err) => console.error("Failed to load more pokemons data", err))
        .finally(() => setIsLoadMore(false));
    }
  };

  return {
    pokemonList: normalizePokemonList(data?.pokemons?.results),
    loading,
    isLoadMore,
    handleLoadMore,
  };
};
