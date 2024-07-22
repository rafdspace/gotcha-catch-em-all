/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query pokemon($name: String!) {\n  pokemon(name: $name) {\n    id\n    name\n    status\n    abilities {\n      ability {\n        name\n      }\n    }\n    moves {\n      move {\n        name\n      }\n    }\n    sprites {\n      front_default\n    }\n    types {\n      type {\n        name\n      }\n    }\n    stats {\n      base_stat\n      stat {\n        name\n      }\n    }\n  }\n}": types.PokemonDocument,
    "query pokemons($limit: Int, $offset: Int) {\n  pokemons(limit: $limit, offset: $offset) {\n    count\n    next\n    previous\n    status\n    results {\n      id\n      url\n      name\n      image\n    }\n  }\n}": types.PokemonsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query pokemon($name: String!) {\n  pokemon(name: $name) {\n    id\n    name\n    status\n    abilities {\n      ability {\n        name\n      }\n    }\n    moves {\n      move {\n        name\n      }\n    }\n    sprites {\n      front_default\n    }\n    types {\n      type {\n        name\n      }\n    }\n    stats {\n      base_stat\n      stat {\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query pokemon($name: String!) {\n  pokemon(name: $name) {\n    id\n    name\n    status\n    abilities {\n      ability {\n        name\n      }\n    }\n    moves {\n      move {\n        name\n      }\n    }\n    sprites {\n      front_default\n    }\n    types {\n      type {\n        name\n      }\n    }\n    stats {\n      base_stat\n      stat {\n        name\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query pokemons($limit: Int, $offset: Int) {\n  pokemons(limit: $limit, offset: $offset) {\n    count\n    next\n    previous\n    status\n    results {\n      id\n      url\n      name\n      image\n    }\n  }\n}"): (typeof documents)["query pokemons($limit: Int, $offset: Int) {\n  pokemons(limit: $limit, offset: $offset) {\n    count\n    next\n    previous\n    status\n    results {\n      id\n      url\n      name\n      image\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;