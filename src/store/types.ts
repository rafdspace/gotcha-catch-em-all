import { OwnedPokemon } from "../entities/models";

export interface GlobalState {
  catchInfo: boolean;
  ownedPokemons: OwnedPokemon[];
}

export const RELEASE_POKEMON = "RELEASE_POKEMON";
export const KEEP_POKEMON = "KEEP_POKEMON";
export const CLOSE_CATCH_INFO = "CLOSE_CATCH_INFO";

export interface ReleasePokemonAction {
  type: typeof RELEASE_POKEMON;
  payload: string;
}

export interface KeepPokemonAction {
  type: typeof KEEP_POKEMON;
  payload: { name: string };
}

export interface CloseCatchInfoAction {
  type: typeof CLOSE_CATCH_INFO;
}

export type GlobalAction =
  | ReleasePokemonAction
  | KeepPokemonAction
  | CloseCatchInfoAction;
