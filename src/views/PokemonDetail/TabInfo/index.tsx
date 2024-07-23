import {
  styTabInfoAbilitiesItem,
  styTabInfoAbilitiesLists,
  styTabInfoStats,
  styTabInfoStatsContent,
  styTabInfoStatsItem,
  styTabInfoStatsLists,
  styTabInfoTitle,
  styTabInfoWrapper,
} from "./style";
import { PokemonDetail } from "../../../entities/models/pokemon-detail";
import TabInfoAbilitiesContent from "../TabInfoAbilitiesContent";

interface Props {
  data: PokemonDetail;
  loading?: boolean;
}
const TabInfo = ({ data, loading }: Props) => {
  const { stats, abilities } = data;
  return (
    <div css={styTabInfoWrapper}>
      <div css={styTabInfoStats}>
        <div css={styTabInfoTitle}>Status</div>
        <div css={styTabInfoStatsLists}>
          {!loading &&
            stats.map((item, index) => (
              <div css={styTabInfoStatsItem} key={index}>
                <div css={styTabInfoStatsContent}>
                  <div>{item.statName}</div>
                  <div>{item.baseStat}</div>
                </div>
              </div>
            ))}
        </div>
        <div css={styTabInfoTitle}>Abilities</div>
        <div css={styTabInfoAbilitiesLists}>
          {!loading &&
            abilities.map((item, index) => (
              <div css={styTabInfoAbilitiesItem} key={index}>
                <TabInfoAbilitiesContent abilityName={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TabInfo;
