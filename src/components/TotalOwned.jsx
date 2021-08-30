import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const TotalOwnedWrapper = styled.div`
  padding: 10px;
  color: #efefef;
  border: 2px solid #efefef;
  border-radius: 5px;
  background-color: #222629;
`;

const TotalOwnedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: fit-content;
  }
`;

const TotalOwnedText = styled.h4`
  margin: 0;
  letter-spacing: 1px;
`;

const TotalOwned = ({ action }) => {
  const history = useHistory();
  const ownedTotal = useSelector((state) => state.ownedPokemons).length;
  return (
    <TotalOwnedWrapper>
      <TotalOwnedContent>
        <TotalOwnedText>You owned {ownedTotal} Pokemon</TotalOwnedText>
        {action && (
          <Button
            color="#ffc500"
            text="Manage"
            onClick={() => history.push("/my-pokemon")}
          />
        )}
      </TotalOwnedContent>
    </TotalOwnedWrapper>
  );
};

export default TotalOwned;
