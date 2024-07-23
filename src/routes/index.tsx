import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScreenWrapper from "../presentations/ScreenWrapper";
import Header from "../presentations/Header";
import PokemonList from "../views/PokemonList";
import PokemonDetail from "../views/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
  {
    path: "/mypokemon",
    element: <div>My Pokemon</div>,
  },
]);

const Routes = () => {
  return (
    <ScreenWrapper>
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </ScreenWrapper>
  );
};

export default Routes;
