import {
  styCardCaption,
  styCardContent,
  styCardImage,
  styCardInner,
  styCardTitle,
  styCardWrapper,
} from "./styles";

interface CardItemProps {
  name: string;
  image: string;
  owned?: number;
  isDisabled?: boolean;
  onClick?: () => void;
  onRelease?: (args: string) => void;
}
const CardItem = (props: CardItemProps) => {
  const {
    name,
    image,
    owned = 0,
    isDisabled = false,
    onClick = () => undefined,
    onRelease,
  } = props;

  return (
    <div css={styCardWrapper} onClick={() => !isDisabled && onClick()}>
      <div css={styCardContent(isDisabled)}>
        <div css={styCardInner(Boolean(owned))}>
          <div css={styCardTitle}>{name}</div>
          <div css={styCardImage}>
            <img src={image} alt={name} />
          </div>
          {!!owned && <div css={styCardCaption()}>Owned: {owned}</div>}
          {onRelease && (
            <div css={styCardCaption(true)} onClick={() => onRelease(name)}>
              Release
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
