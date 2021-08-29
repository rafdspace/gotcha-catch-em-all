import React from "react";
import styled from "@emotion/styled";
import GET_ABILITY from "../graphql/getAbility";
import { useQuery } from "@apollo/client";

const TabInfoAbilitiesContentWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 4px;
  border: 1px solid #efefef;
  background: #222629;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TabInfoAbilitiesContentTitle = styled.h6`
  margin: 0;
  padding: 0 10px;
`;

const TabInfoAbilitiesContentDescription = styled.p`
  margin: 5px 0;
  padding: 0 10px;
`;

const TabInfoAbilitiesContent = ({ ability }) => {
  const { data, loading } = useQuery(GET_ABILITY, {
    variables: { ability },
  });

  const title = data?.ability.response.name;

  const description = data?.ability.response.effect_entries.find(
    (item) => item.language.name === "en"
  );
  if (loading) return null;

  return (
    <TabInfoAbilitiesContentWrapper>
      <TabInfoAbilitiesContentTitle>{title}</TabInfoAbilitiesContentTitle>
      <TabInfoAbilitiesContentDescription>
        {description?.short_effect}
      </TabInfoAbilitiesContentDescription>
    </TabInfoAbilitiesContentWrapper>
  );
};

export default TabInfoAbilitiesContent;
