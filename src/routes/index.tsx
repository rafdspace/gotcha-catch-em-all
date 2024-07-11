import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScreenWrapper from "../presentations/ScreenWrapper";
import Header from "../presentations/Header";
import Footer from "../presentations/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Vite + React + Emotion</div>,
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
      <Footer />
    </ScreenWrapper>
  );
};

export default Routes;
