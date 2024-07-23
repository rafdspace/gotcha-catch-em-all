import { useLazyQuery } from "@apollo/client";

import type {
  PokemonQuery,
  PokemonQueryVariables,
} from "../__generated__/graphql";
import GET_POKEMON_DETAIL_QUERY from "../repositories/queries/pokemon.graphql";
import { castError } from "../entities/utils/castError";
import { normalizePokemonDetail } from "../repositories/normalizer/pokemon-detail-normalizer";

export const useGetPokemonDetail = () => {
  const [getPokemonDetail, { data, loading }] = useLazyQuery<
    PokemonQuery,
    PokemonQueryVariables
  >(GET_POKEMON_DETAIL_QUERY, {
    onError: (errorObj: Error) => {
      const errorMessage = castError(errorObj).message;
      console.error({ errorMessage });
    },
  });

  return {
    data: normalizePokemonDetail(data?.pokemon),
    loading,
    getPokemonDetail,
  };
};
