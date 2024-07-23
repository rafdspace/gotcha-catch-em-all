import { useNavigate } from "react-router-dom";
import useInfiniteScroll from "../../entities/hooks/useInfiniteScroll";
import CardItem from "../../presentations/CardItem";
import CardList from "../../presentations/CardList";
import Page from "../../presentations/Page";
import TotalOwned from "../../presentations/TotalOwned";
import { useGetPokemonList } from "../../usecases/useGetPokemonList";

const PokemonList = () => {
  const navigate = useNavigate();

  const {
    pokemonList,
    loading: loadingGetPokemonList,
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
      <TotalOwned />
      <CardList>
        {pokemonList.map((item, index) => (
          <CardItem
            name={item.name}
            image={item.image}
            onClick={() => handleOpenPokemonDetail(item.name)}
            // owned={2}
            key={`pokemon-${item.name}-${index}`}
          />
        ))}
        <div ref={loadMoreRef} />
      </CardList>
    </Page>
  );
};

export default PokemonList;
