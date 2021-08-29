import React from "react";
import styled from "@emotion/styled";
import TabInfoAbilitiesContent from "./TabInfoAbilitiesContent";

const TabInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabInfoStats = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabInfoTitle = styled.div`
  padding: 10px;
  margin: 4px;
  background: #efefef;
  border-radius: 5px;
  color: #222629;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`;

const TabInfoStatsLists = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const TabInfoStatsItem = styled.div`
  flex-basis: 50%;
  display: flex;
`;

const TabInfoStatsContent = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 4px;
  border: 1px solid #efefef;
  background: #222629;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;

  & > div {
    width: 100%;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }
`;

const TabInfoAbilitiesLists = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabInfoAbilitiesItem = styled.div`
  width: 100%;
`;

const TabInfo = ({ data, loading }) => {
  return (
    <TabInfoWrapper>
      <TabInfoStats>
        <TabInfoTitle>Status</TabInfoTitle>
        <TabInfoStatsLists>
          {!loading &&
            data.stats.map((item, index) => (
              <TabInfoStatsItem key={index}>
                <TabInfoStatsContent>
                  <div>{item.stat.name}</div>
                  <div>{item.base_stat}</div>
                </TabInfoStatsContent>
              </TabInfoStatsItem>
            ))}
        </TabInfoStatsLists>
        <TabInfoTitle>Abilities</TabInfoTitle>
        <TabInfoAbilitiesLists>
          {!loading &&
            data.abilities.map((item, index) => (
              <TabInfoAbilitiesItem key={index}>
                <TabInfoAbilitiesContent ability={item.ability.name} />
              </TabInfoAbilitiesItem>
            ))}
        </TabInfoAbilitiesLists>
      </TabInfoStats>
    </TabInfoWrapper>
  );
};

export default TabInfo;
