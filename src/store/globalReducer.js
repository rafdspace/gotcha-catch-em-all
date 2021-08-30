const initialState = {
  data: [],
  ownedPokemons: [
    {
      species: "bulbasaur",
      name: "bulba 1",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      species: "bulbasaur",
      name: "bulba 2",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      species: "charizard",
      name: "chari 1",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      species: "pidgeotto",
      name: "pidgy 1",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    },
  ],
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
    default:
      return state;
  }
};

export default globalReducer;
