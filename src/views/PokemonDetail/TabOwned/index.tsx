import { OwnedPokemon } from "../../../entities/models";
import CardItem from "../../../presentations/CardItem";
import CardList from "../../../presentations/CardList";
import { styTabOwnedPlaceholder, styTabOwnedWrapper } from "./styles";

interface Props {
  data: OwnedPokemon[];
}

const TabOwned = ({ data }: Props) => {
  return (
    <div css={styTabOwnedWrapper}>
      {data.length === 0 ? (
        <p css={styTabOwnedPlaceholder}>You don't have this pokemon yet</p>
      ) : (
        <CardList>
          {data.map((item, index) => (
            <CardItem
              key={index}
              name={item.name}
              image={item.image}
              isDisabled
            />
          ))}
        </CardList>
      )}
    </div>
  );
};

export default TabOwned;
