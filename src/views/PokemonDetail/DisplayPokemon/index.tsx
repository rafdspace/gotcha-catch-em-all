import {
  styDisplayPokemonContent,
  styDisplayPokemonImage,
  styDisplayPokemonInner,
  styDisplayPokemonTitle,
  styDisplayPokemonType,
  styDisplayPokemonTypeItem,
  styDisplayPokemonWrapper,
} from "./styles";
import { PokemonDetail } from "../../../entities/models/pokemon-detail";
import { convertStr } from "../../../entities/utils/convertStr";
import { typeColor } from "../../../entities/utils/typeColor";

interface Props {
  data: PokemonDetail;
  loading?: boolean;
}

const DisplayPokemon = ({ data, loading }: Props) => {
  return (
    <div css={styDisplayPokemonWrapper}>
      <div css={styDisplayPokemonContent}>
        <div css={styDisplayPokemonInner}>
          <h4 css={styDisplayPokemonTitle}>
            {!loading ? convertStr(data.name) : ""}
          </h4>
          <div css={styDisplayPokemonImage}>
            {!loading ? <img src={data.imageUrl} alt={"name"} /> : "is-loading"}
          </div>
          <div css={styDisplayPokemonType}>
            {data?.types.map((item, index) => (
              <div
                css={styDisplayPokemonTypeItem(typeColor(item))}
                key={`pokemon-type-${index}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPokemon;
