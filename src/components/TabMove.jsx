import React from "react";
import styled from "@emotion/styled";

const TabMoveWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TabMoveItem = styled.p`
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

const TabMove = ({ data, loading }) => {
  return (
    <TabMoveWrapper>
      {!loading
        ? data.moves.map((item, index) => (
            <TabMoveItem key={index}>
              {item.move.name.split("-").join(" ")}
            </TabMoveItem>
          ))
        : "is-loading"}
    </TabMoveWrapper>
  );
};

export default TabMove;
