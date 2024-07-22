import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScreenWrapper from "../presentations/ScreenWrapper";
import Header from "../presentations/Header";
import Footer from "../presentations/Footer";
import PokemonList from "../views/PokemonList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/:name",
    element: <div>Pokemon name</div>,
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
