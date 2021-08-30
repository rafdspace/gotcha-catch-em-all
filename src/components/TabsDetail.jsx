import React from "react";
import styled from "@emotion/styled";

const TabsDetailWrapper = styled.div`
  margin-top: 8px;
  flex: 1;
  background-color: #383838;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const TabsDetailInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
`;

const TabsDetailItem = styled.div`
  background: #efefef;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Item = styled.div`
  width: 100%;
  position: relative;
  color: ${({ color }) => color};
  text-align: center;
  text-transform: capitalize;
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

const TabsDetailContent = styled.div`
  flex: 1;
  background-color: #383838;
  padding: 12px 10px 10px 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const TabsDetail = ({ data, currentTab, changeTab, children }) => {
  return (
    <TabsDetailWrapper>
      <TabsDetailInner>
        <TabsDetailItem>
          {data.map(({ tab, color }, index) => (
            <Item
              key={index}
              isActive={currentTab === index}
              color={color}
              onClick={() => changeTab(index)}
            >
              {tab}
            </Item>
          ))}
        </TabsDetailItem>
        <TabsDetailContent>{children}</TabsDetailContent>
      </TabsDetailInner>
    </TabsDetailWrapper>
  );
};

export default TabsDetail;
