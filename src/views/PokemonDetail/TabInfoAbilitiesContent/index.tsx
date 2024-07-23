import { useEffect } from "react";
import {
  styTabInfoAbilitiesContentDescription,
  styTabInfoAbilitiesContentTitle,
  styTabInfoAbilitiesContentWrapper,
} from "./styles";
import { useGetAbility } from "../../../usecases/useGetAbility";

interface Props {
  abilityName?: string;
}

const TabInfoAbilitiesContent = ({ abilityName }: Props) => {
  const { getAbility, data, loading } = useGetAbility();

  useEffect(() => {
    if (!abilityName) return;
    getAbility({ variables: { ability: abilityName } });
  }, [abilityName]);

  if (loading) return null;

  return (
    <div css={styTabInfoAbilitiesContentWrapper}>
      <h4 css={styTabInfoAbilitiesContentTitle}>{data.name}</h4>
      <p css={styTabInfoAbilitiesContentDescription}>{data.description}</p>
    </div>
  );
};

export default TabInfoAbilitiesContent;
