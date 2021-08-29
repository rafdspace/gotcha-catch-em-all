import React from "react";
import styled from "@emotion/styled";

const TabMovesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TabMovesItem = styled.p`
  padding: 5px 15px;
  margin: 4px;
  background: #222629;
  border-radius: 20px;
  border: 1px solid;
  text-transform: capitalize;
  font-size: 10px;
  @media screen and (min-width: 325px) {
    font-size: 12px;
  }

  @media screen and (min-width: 720px) {
    font-size: 14px;
    padding: 5px 15px;
  }
`;

const TabMovesPlaceholder = styled.p`
  text-align: center;
  margin: auto;
`;

const TabMoves = ({ data }) => {
  return (
    <TabMovesWrapper>
      {!data.length ? (
        <TabMovesPlaceholder>Moves not found</TabMovesPlaceholder>
      ) : (
        data?.moves.map((item, index) => (
          <TabMovesItem key={index}>
            {item.move.name.split("-").join(" ")}
          </TabMovesItem>
        ))
      )}
    </TabMovesWrapper>
  );
};

export default TabMoves;
