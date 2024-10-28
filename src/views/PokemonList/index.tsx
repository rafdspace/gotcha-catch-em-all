import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInfiniteScroll from "../../entities/hooks/useInfiniteScroll";
import CardItem from "../../presentations/CardItem";
import CardList from "../../presentations/CardList";
import Page from "../../presentations/Page";
import TotalOwned from "../../presentations/TotalOwned";
import { useGetPokemonList } from "../../usecases/useGetPokemonList";
import Loading from "../../presentations/Loading";
import { RootState } from "../../store/configureStore";
import Button from "../../presentations/Button";
import { usePWAInstall } from "../../usecases/usePWAInstall";

const PokemonList = () => {
  const { isAppInstallable, installPWA } = usePWAInstall();

  const navigate = useNavigate();
  const ownedPokemons = useSelector((state: RootState) => state.ownedPokemons);

  const {
    pokemonList,
    loading: loadingGetPokemonList,
    isLoadMore,
    handleLoadMore,
  } = useGetPokemonList();

  const loadMoreRef = useInfiniteScroll(() => {
    handleLoadMore();
  }, loadingGetPokemonList);

  const handleOpenPokemonDetail = (name: string) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <Page>
      <div style={{margin: '24px 0'}}>{true && <Button onClick={installPWA} text="Install PWA" />}</div>
      <TotalOwned withAction />
      <CardList>
        {loadingGetPokemonList && !isLoadMore && (
          <Loading text="Please wait..." />
        )}
        {pokemonList.map((item, index) => (
          <CardItem
            name={item.name}
            image={item.image}
            onClick={() => handleOpenPokemonDetail(item.name)}
            owned={
              ownedPokemons.filter((owned) => owned.species === item.name)
                .length
            }
            key={`pokemon-${item.name}-${index}`}
          />
        ))}
        <div ref={loadMoreRef} />
        {isLoadMore && (
          <Loading text="Load more pokemon..." isCentered={false} />
        )}
      </CardList>
    </Page>
  );
};

export default PokemonList;
