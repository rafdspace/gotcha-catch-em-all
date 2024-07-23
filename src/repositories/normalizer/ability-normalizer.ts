import { AbilityQuery } from "../../__generated__/graphql";
import { AbilityData } from "../../entities/models/pokemon-ability";

type AbilityQueryResponse = NonNullable<AbilityQuery["ability"]>;

export const normalizeAbility = (
  data?: AbilityQueryResponse | null
): AbilityData => {
  if (!data) {
    return {
      name: "",
      description: "",
    };
  }

  return {
    name: data.params?.ability || "",
    description:
      (data.response?.effect_entries || []).find(
        (item: any) => item.language.name === "en"
      )?.short_effect || "",
  };
};
