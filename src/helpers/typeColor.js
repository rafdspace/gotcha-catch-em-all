export const typeColor = (type) => {
  switch (true) {
    case type === "normal":
      return "#A8A878";
    case type === "fighting":
      return "#C03028";
    case type === "flying":
      return "#A890F0";
    case type === "poison":
      return "#A040A0";
    case type === "ground":
      return "#E0C068";
    case type === "rock":
      return "#B8A038";
    case type === "bug":
      return "#A8B820";
    case type === "ghost":
      return "#705898";
    case type === "steel":
      return "#B8B8D0";
    case type === "fire":
      return "#F08030";
    case type === "water":
      return "#6890F0";
    case type === "grass":
      return "#78C850";
    case type === "electric":
      return "#F8D030";
    case type === "psychic":
      return "#F85888";
    case type === "ice":
      return "#98D8D8";
    case type === "dragon":
      return "#7038F8";
    case type === "dark":
      return "#705848";
    case type === "fairy":
      return "#F0B6BC";
    case type === "shadow":
      return "#000000";
    default:
      return "#ffc500";
  }
};
