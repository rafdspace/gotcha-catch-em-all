import { gql } from "@apollo/client";

const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      status
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

export default GET_POKEMON_DETAIL;
