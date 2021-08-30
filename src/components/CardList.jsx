import React from "react";
import styled from "@emotion/styled";

const CardListWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  width: 100%;
  height: ${({ isLoading }) => (isLoading ? "100%" : "fit-content")};
  position: relative;
`;

const CardList = ({ children, isLoading }) => {
  return (
    <CardListWrapper>
      <CardListContent isLoading={isLoading}>{children}</CardListContent>
    </CardListWrapper>
  );
};

export default CardList;
