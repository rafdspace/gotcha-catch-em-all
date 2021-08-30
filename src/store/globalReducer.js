const initialState = {
  catchInfo: true,
  ownedPokemons: [],
  currentOffset: 0,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "KEEP_POKEMON":
      return {
        ...state,
        ownedPokemons: [action.payload, ...state.ownedPokemons],
      };
    case "RELEASE_POKEMON":
      return {
        ...state,
        ownedPokemons: state.ownedPokemons.filter(
          (item) => item.name !== action.payload
        ),
      };
    case "CLOSE_CATCH_INFO":
      return {
        ...state,
        catchInfo: false,
      };
    case "SET_OFFSET":
      return {
        ...state,
        currentOffset: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
