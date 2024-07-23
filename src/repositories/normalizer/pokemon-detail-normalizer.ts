import { PokemonQuery } from "../../__generated__/graphql";
import { PokemonDetail } from "../../entities/models/pokemon-detail";

type PokemonQueryData = NonNullable<PokemonQuery["pokemon"]>;

export const normalizePokemonDetail = (
  data?: PokemonQueryData | null
): PokemonDetail => {
  if (!data) {
    return {
      id: 0,
      name: "",
      status: false,
      moves: [],
      imageUrl: "",
      types: [],
      stats: [],
      abilities: [],
    };
  }

  return {
    id: data.id || 0,
    name: data.name || "",
    status: data.status || false,
    moves: data.moves?.map((item) => item?.move?.name || "") || [],
    imageUrl: data.sprites?.front_default || "",
    types: data.types?.map((item) => item?.type?.name || "") || [],
    stats:
      data.stats?.map((item) => ({
        baseStat: item?.base_stat || 0,
        statName: item?.stat?.name || "",
      })) || [],
    abilities: data.abilities?.map((item) => item?.ability?.name || "") || [],
  };
};
