import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";

const TotalOwnedWrapper = styled.div`
  padding: 15px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
`;

const TotalOwnedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalOwnedText = styled.h4`
  margin: 0;
  letter-spacing: 1px;
`;

const TotalOwnedActions = styled.div``;

const TotalOwned = () => {
  return (
    <TotalOwnedWrapper>
      <TotalOwnedContent>
        <TotalOwnedText>You owned 0 Pokemon</TotalOwnedText>
        <TotalOwnedActions>
          <Button color="#ffc500" text="Manage" />
        </TotalOwnedActions>
      </TotalOwnedContent>
    </TotalOwnedWrapper>
  );
};

export default TotalOwned;
