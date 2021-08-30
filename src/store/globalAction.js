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

export const closeCatchInfo = () => {
  return {
    type: "CLOSE_CATCH_INFO",
  };
};

export const setOffset = (offset) => {
  return {
    type: "SET_OFFSET",
    payload: offset,
  };
};
