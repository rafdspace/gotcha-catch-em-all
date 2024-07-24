// src/store/globalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "./types";
import { OwnedPokemon } from "../entities/models";

const initialState: GlobalState = {
  catchInfo: true,
  ownedPokemons: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    keepPokemon(state, action: PayloadAction<OwnedPokemon>) {
      state.ownedPokemons.push(action.payload);
    },
    releasePokemon(state, action: PayloadAction<string>) {
      state.ownedPokemons = state.ownedPokemons.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
    closeCatchInfo(state) {
      state.catchInfo = false;
    },
  },
});

export const { keepPokemon, releasePokemon, closeCatchInfo } =
  globalSlice.actions;

export default globalSlice.reducer;
