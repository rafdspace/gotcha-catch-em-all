export interface PokemonStats {
  baseStat: number;
  statName: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  status: boolean;
  moves: string[];
  imageUrl: string;
  types: string[];
  stats: PokemonStats[];
  abilities: string[];
}
