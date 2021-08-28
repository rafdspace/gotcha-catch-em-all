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
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Item = styled.div`
  position: relative;
  color: ${({ color }) => color};
  text-align: center;
  flex-basis: calc(100% / 3);
  font-size: 12px;
  margin: 0 3px;
  padding: 10px 0;
  line-height: 120%;
  border-bottom: 4px solid ${({ color }) => color};
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isActive, color }) =>
    isActive && `background-color: ${color}; color:#efefef;`}

  &:hover {
    color: #efefef;
    background-color: ${({ color }) => color};
  }
`;

const InfoTabsContent = styled.div`
  background-color: #383838;
  padding: 12px 10px 10px 10px;
`;

const InfoTabs = ({ children }) => {
  return (
    <InfoTabsWrapper>
      <InfoTabsInner>
        <InfoTabsItem>
          <Item color="#E3350D">Info</Item>
          <Item isActive color="#30A7D7">
            Moves
          </Item>
          <Item color="#4DAD5B">Owned</Item>
        </InfoTabsItem>
        <InfoTabsContent>{children}</InfoTabsContent>
      </InfoTabsInner>
    </InfoTabsWrapper>
  );
};

export default InfoTabs;
