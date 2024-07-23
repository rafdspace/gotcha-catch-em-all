import { useLazyQuery } from "@apollo/client";

import type {
  AbilityQuery,
  AbilityQueryVariables,
} from "../__generated__/graphql";
import GET_ABILITY_QUERY from "../repositories/queries/ability.graphql";
import { castError } from "../entities/utils/castError";
import { normalizeAbility } from "../repositories/normalizer/ability-normalizer";

export const useGetAbility = () => {
  const [getAbility, { data, loading }] = useLazyQuery<
    AbilityQuery,
    AbilityQueryVariables
  >(GET_ABILITY_QUERY, {
    onError: (errorObj: Error) => {
      const errorMessage = castError(errorObj).message;
      console.error({ errorMessage });
    },
  });

  return {
    data: normalizeAbility(data?.ability),
    loading,
    getAbility,
  };
};
