import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) {
    flex-basis: 50%;
  }
  @media screen and (min-width: 720px) {
    flex-basis: 25%;
  }
  @media screen and (min-width: 1024px) {
    flex-basis: 20%;
  }
`;

const CardContent = styled.div`
  flex: 1;
  margin: 5px;
  padding: 3px;
  background: whitesmoke;
  border: 2px solid #ffc500;
  border-radius: 5px;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ disabled }) =>
    !disabled
      ? `
      cursor: pointer; 
      &:hover {
        transform: translateY(-2px);
      }`
      : ""}
`;

const CardInner = styled.div`
  height: 100%;
  background-color: #222629;
  border-radius: 5px;
  background-image: linear-gradient(rgba(179, 42, 10, 0.4) 1px, transparent 1px),
    linear-gradient(to right, rgba(179, 42, 10, 0.4) 1px, transparent 1px);
  background-size: 10px 10px;
  background-position: center;
  display: flex;
  flex-direction: column;

  ${({ owned }) => (!owned ? `justify-content: space-between;` : "")}
`;

const CardTitle = styled.h5`
  widht: 100%;
  margin: 0;
  background-color: #e3350d;
  text-align: center;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardImage = styled.div`
  widht: 100%;
  height: 100px;
  margin: 10px 0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardCaption = styled.p`
  margin: 0;
  padding: 5px;
  background-color: #ffc500;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  letter-spacing: 1.2px;
  font-size: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 275ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ release }) =>
    release
      ? `
      cursor: pointer; 
      &:hover {
        background-color: #d2a200;
      }`
      : ""}
`;

const Card = ({ name, image, owned, isDisabled, onClick, onRelease }) => {
  return (
    <CardWrapper onClick={() => !isDisabled && onClick()}>
      <CardContent disabled={isDisabled}>
        <CardInner owned>
          <CardTitle>{name}</CardTitle>
          <CardImage>
            <img src={image} alt={name} />
          </CardImage>
          {!!owned && <CardCaption>Owned: {owned}</CardCaption>}
          {onRelease && (
            <CardCaption release onClick={() => onRelease(name)}>
              Release
            </CardCaption>
          )}
        </CardInner>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
