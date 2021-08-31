# Pokemon - Gotta Catch 'em All

A web-app used for collecting pokemons created using Create-React-App with PWA (progressive web application). The design is inspired by [Pokemon Wiki - Fandom](https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki).

![alt text](https://github.com/rafdianr/gotcha-catch-em-all/blob/development/public/ss.png?raw=true)

## Homepage

https://pokemon-rafdian.netlify.app/ (deployed by Netlify)

## Pages

### `/` - Homepage

Page shows a list pokemons that can be captured. In this page a list of pokemon card consists of name, image, and total of pokemons you have.

### `/pokemon/:species` - Detail pokemon page

Page shows the detail of pokemon you choose from homepage. In this page you can see detail information about a pokemon consists of status, abilities, moves, and name of the pokemon you have. From this page you can also try to capture the pokemon with 50% chance of success and name it.

### `/my-pokemon` - My pokemon page

Page shows a list of pokemon that you have. In this page you can see the name of the pokemon you have and you can release it.

## Tools

- `graphql` using `@apollo/client` for accessing pokemon data from [PokeApi](https://github.com/mazipan/graphql-pokeapi)
- `react-router-dom` for setting up routes
- `react-redux` for managing state
- `@emotion/styled` for styling components

## Folders

- Assets - for keeping images
- Components - for keeping used components
- Graphql - for creating queries
- Helpers - for creating additional javascript code
- Layout - for keeping components that can be used in every pages
- Pages - for keeping components in a page
- Store - for managing state and creating store

## Credits

- [The Unofficial GraphQL for PokeAPI](https://github.com/mazipan/graphql-pokeapi)
- [Pokemon Wiki - Fandom](https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki)
