export const releasePokemon = (name) => {
  return {
    type: "RELEASE_POKEMON",
    payload: name,
  };
};

export const keepPokemon = (payload) => {
  return {
    type: "KEEP_POKEMON",
    payload,
  };
};
