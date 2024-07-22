import { PokemonsQuery } from "../../__generated__/graphql";
import { PokemonListItem } from "../../model/pokemon-list";

type PokemonsQueryData = NonNullable<PokemonsQuery["pokemons"]>;
type PokemonsResults = NonNullable<PokemonsQueryData["results"]>;

export const normalizePokemonList = (
  data?: PokemonsResults | null
): PokemonListItem[] => {
  if (!data) return [];

  return data.map((item) => ({
    id: item?.id || 0,
    name: item?.name || "",
    image: item?.image || "",
    url: item?.url || "",
  }));
};
