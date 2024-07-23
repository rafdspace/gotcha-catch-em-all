import {
  styTabMovesItemStyle,
  styTabMovesPlaceholderStyle,
  styTabMovesWrapperStyle,
} from "./styles";
import { PokemonDetail } from "../../../entities/models/pokemon-detail";

interface Props {
  data: PokemonDetail["moves"];
}

const TabMoves = ({ data }: Props) => {
  return (
    <div css={styTabMovesWrapperStyle(data.length === 0)}>
      {!data.length ? (
        <p css={styTabMovesPlaceholderStyle}>Moves not found</p>
      ) : (
        data.map((item, index) => (
          <p css={styTabMovesItemStyle} key={index}>
            {item.split("-").join(" ")}
          </p>
        ))
      )}
    </div>
  );
};

export default TabMoves;
