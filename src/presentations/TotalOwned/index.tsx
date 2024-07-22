import {
  styTotalOwnedContent,
  styTotalOwnedText,
  styTotalOwnedWrapper,
} from "./styles";
import Button from "../Button";

const TotalOwned = () => {
  return (
    <div css={styTotalOwnedWrapper}>
      <div css={styTotalOwnedContent}>
        <h4 css={styTotalOwnedText}>You owned {0} Pokemon</h4>
        <Button
          color="#ffc500"
          text="Manage"
          onClick={() => console.log("/my-pokemon")}
        />
      </div>
    </div>
  );
};

export default TotalOwned;
