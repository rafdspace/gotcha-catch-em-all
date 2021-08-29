import React from "react";
import styled from "@emotion/styled";
import CardList from "./CardList";
import Card from "./Card";

const TabOwnedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TabOwned = () => {
  return (
    <TabOwnedWrapper>
      <CardList>
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
        <Card name="test" />
      </CardList>
    </TabOwnedWrapper>
  );
};

export default TabOwned;
