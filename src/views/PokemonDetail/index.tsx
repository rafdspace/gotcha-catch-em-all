import Page from "../../presentations/Page";
import {
  styPokemonDetailLoading,
  styPokemonDetailWrapper,
} from "../PokemonList/styles";
import Loading from "../../presentations/Loading";
import { useParams } from "react-router-dom";
import { useGetPokemonDetail } from "../../usecases/useGetPokemonDetail";
import { useEffect, useState } from "react";
import DisplayPokemon from "./DisplayPokemon";
import TabsDetail from "./TabsDetail";
import TabMoves from "./TabMoves";
import TabInfo from "./TabInfo";

const PokemonDetail = () => {
  const { name } = useParams();
  const { getPokemonDetail, data, loading } = useGetPokemonDetail();

  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    if (!name) return;

    getPokemonDetail({ variables: { name } });
  }, [name, getPokemonDetail]);

  return (
    <Page>
      <div css={styPokemonDetailWrapper}>
        <div css={styPokemonDetailLoading(loading)}>
          <Loading text="Please wait..." />
        </div>
        <DisplayPokemon data={data} loading={loading} />
        <TabsDetail currentTab={tabActive} changeTab={(v) => setTabActive(v)}>
          {tabActive === 0 ? (
            <TabInfo data={data} loading={loading} />
          ) : tabActive === 1 ? (
            <TabMoves data={data.moves} />
          ) : (
            <>te</>
          )}
        </TabsDetail>
      </div>
    </Page>
  );
};

export default PokemonDetail;
