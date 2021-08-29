import { gql } from "@apollo/client";

const GET_ABILITY = gql`
  query ability($ability: String!) {
    ability(ability: $ability) {
      params
      status
      message
      response
    }
  }
`;

export default GET_ABILITY;
