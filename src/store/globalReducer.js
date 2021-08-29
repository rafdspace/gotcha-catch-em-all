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
    default:
      return state;
  }
};

export default globalReducer;
