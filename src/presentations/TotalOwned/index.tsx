import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  styTotalOwnedContent,
  styTotalOwnedText,
  styTotalOwnedWrapper,
} from "./styles";
import { RootState } from "../../store/configureStore";
import Button from "../Button";

interface Props {
  withAction?: boolean;
}

const TotalOwned = ({ withAction }: Props) => {
  const navigate = useNavigate();
  const ownedTotal = useSelector(
    (state: RootState) => state.ownedPokemons
  ).length;

  return (
    <div css={styTotalOwnedWrapper}>
      <div css={styTotalOwnedContent}>
        <h4 css={styTotalOwnedText}>You owned {ownedTotal} Pokemon</h4>
        {withAction && (
          <Button
            color="#ffc500"
            text="Manage"
            onClick={() => navigate("/my-pokemon")}
          />
        )}
      </div>
    </div>
  );
};

export default TotalOwned;
