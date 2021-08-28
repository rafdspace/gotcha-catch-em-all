import React from "react";
import styled from "@emotion/styled";

const InfoTabsWrapper = styled.div`
  margin-top: 8px;
  flex: 1;
  background-color: #383838;

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const InfoTabsInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
`;

const InfoTabsItem = styled.div`
  background: #efefef;
  padding: 5px 0;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Item = styled.div`
  color: #222629;
  text-align: center;
  flex-basis: calc(100% / 3);
  font-size: 12px;
  margin: 0 2px;
  padding: 5px 0;
  line-height: 120%;
`;
const InfoTabsContent = styled.div`
  background-color: #383838;
  padding: 12px 10px 10px 10px;
`;
const InfoTabs = () => {
  return (
    <InfoTabsWrapper>
      <InfoTabsInner>
        <InfoTabsItem>
          <Item>Info</Item>
          <Item>Moves</Item>
          <Item>Owned</Item>
        </InfoTabsItem>
        <InfoTabsContent>asd</InfoTabsContent>
      </InfoTabsInner>
    </InfoTabsWrapper>
  );
};

export default InfoTabs;
