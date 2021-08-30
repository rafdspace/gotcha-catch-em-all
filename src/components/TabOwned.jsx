import React from "react";
import styled from "@emotion/styled";
import CardList from "./CardList";
import Card from "./Card";

const TabOwnedWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & > div {
    margin-top: 0;
  }
`;

const TabOwnedPlaceholder = styled.p`
  text-align: center;
  margin: auto;
`;

const TabOwned = ({ data }) => {
  return (
    <TabOwnedWrapper>
      {data.length === 0 ? (
        <TabOwnedPlaceholder>
          You don't have this pokemon yet
        </TabOwnedPlaceholder>
      ) : (
        <CardList>
          {data.map((item, index) => (
            <Card key={index} name={item.name} image={item.sprite} isDisabled />
          ))}
        </CardList>
      )}
    </TabOwnedWrapper>
  );
};

export default TabOwned;
