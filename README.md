# Pokemon - Gotta Catch 'em All

A web-app used for collecting pokemons created using Create-React-App with PWA (progressive web application). The design is inspired by [Pokemon Wiki - Fandom](https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki).

<img width="1270" alt="Screenshot 2024-08-28 at 11 12 24" src="https://github.com/user-attachments/assets/652feeb8-6a1c-4d95-9cbd-0eb5d44d6045">

## Homepage

https://pokedex-rafdian.vercel.app/

## Pages

### `/` - Homepage

Page shows a list pokemons that can be captured. In this page you can see a list of pokemon cards consist of name, image, and total of pokemons you have.

### `/pokemon/:species` - Detail pokemon page

Page shows the detail of pokemon you choose from homepage. In this page you can see detail information about a pokemon consists of status, abilities, moves, and name of the pokemon you have. From this page you can also try to capture the pokemon with 50% chance of success and name it.

### `/my-pokemon` - My pokemon page

Page shows a list of pokemon that you have. In this page you can see the name of the pokemon you have and you can release it.

## Tools

- `graphql` using `@apollo/client` for accessing pokemon data from [PokeApi](https://github.com/mazipan/graphql-pokeapi)
- `react-router-dom` for setting up routes
- `react-redux` for managing state
- `@emotion/react` for styling components

## Folders

- Assets - for keeping images
- Entities - for keeping shared types, constant, and functions
- Presentations - for creating shared components
- Repositories - for keeping queries and normalizer
- Store - for keeping store
- Routes - for keeping pages routes and layouts
- Usecases - for keeping business logic used in code
- Views - for keeping pages components

## Credits

- [The Unofficial GraphQL for PokeAPI](https://github.com/mazipan/graphql-pokeapi)
- [Pokemon Wiki - Fandom](https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki)
