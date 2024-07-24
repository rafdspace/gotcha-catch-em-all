import Button from "../../../presentations/Button";
import {
  styPokeballBg,
  styPokeballBgContent,
  styPokeballBgText,
  styPokeballContent,
} from "./styles";

interface Props {
  info: boolean;
  onClick: () => void;
  closeInfo: () => void;
}

const Pokeball = ({ info, onClick, closeInfo }: Props) => {
  return (
    <div>
      <div css={styPokeballBg({ isShow: info })}>
        <div css={styPokeballBgContent}>
          <p css={styPokeballBgText}>Click pokeball to catch this pokemon</p>
          <Button text="ok" onClick={closeInfo} />
        </div>
      </div>
      <div
        css={styPokeballContent({ isDisabled: info })}
        onClick={() => !info && onClick()}
      />
    </div>
  );
};

export default Pokeball;
