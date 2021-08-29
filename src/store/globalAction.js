export const releasePokemon = (name) => {
  return {
    type: "RELEASE_POKEMON",
    payload: name,
  };
};
