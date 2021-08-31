# Pokemon - Gotta Catch 'em All

A web-app used for collecting pokemons created using Create-React-App with PWA (progressive web application). The design is inspired from [Pokemon Wiki - Fandom](https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki).

![alt text](https://github.com/rafdianr/gotcha-catch-em-all/blob/development/public/ss.png?raw=true)

## Homepage

https://pokemon-rafdian.netlify.app/ (deployed by Netlify)

## Pages

### `/` - Homepage

Page showing a list pokemons that can be captured. In this page you can see a pokemon card list consist of name, image, and a total of pokemon you have.

### `/pokemon/:species` - Detail pokemon page

Page showing a detail of pokemon you choose from homepage. In this page you can see detail information about a pokemon consist of status, abilities, moves, and name of the pokemon you have. From this page you can also try to capture the pokemon with 50% chance of success and named it.

### `/my-pokemon` - My pokemon page

Page showing a list of pokemons that we have. In this page you can see pokemon name you have and you can release it.

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
