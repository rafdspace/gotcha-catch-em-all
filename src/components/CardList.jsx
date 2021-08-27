import React from "react";
import styled from "@emotion/styled";

const CardListWrapper = styled.div`
  margin-top: 15px;
  padding: 10px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
  flex: 1;
`;

const CardListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`;

const CardList = ({ children }) => {
  return (
    <CardListWrapper>
      <CardListContent>{children}</CardListContent>
    </CardListWrapper>
  );
};

export default CardList;
