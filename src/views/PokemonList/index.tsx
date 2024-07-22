import useInfiniteScroll from "../../entities/hooks/useInfiniteScroll";
import CardItem from "../../presentations/CardItem";
import CardList from "../../presentations/CardList";
import Page from "../../presentations/Page";
import TotalOwned from "../../presentations/TotalOwned";
import { useGetPokemonList } from "../../usecases/useGetPokemonList";

const PokemonList = () => {
  const {
    pokemonList,
    loading: loadingGetPokemonList,
    handleLoadMore,
  } = useGetPokemonList();

  const loadMoreRef = useInfiniteScroll(() => {
    console.log("trigger");
    handleLoadMore();
  }, loadingGetPokemonList);

  return (
    <Page>
      <TotalOwned />
      <CardList>
        {pokemonList.map((item, index) => (
          <CardItem
            name={item.name}
            image={item.image}
            onClick={() => console.log("click card")}
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
