import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonList from "../views/PokemonList";
import PokemonDetail from "../views/PokemonDetail";
import MyPokemon from "../views/MyPokemon";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PokemonList />,
      },
      {
        path: "pokemon/:name",
        element: <PokemonDetail />,
      },
      {
        path: "my-pokemon",
        element: <MyPokemon />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
