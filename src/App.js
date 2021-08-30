import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Screen from "./layouts/Screen";
import Homepage from "./pages/Homepage";
import configureStore from "./store/configure-store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DetailPokemon from "./pages/DetailPokemon";
import MyPokemonPage from "./pages/MyPokemonPage";

const apllotClient = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

const { persistor, store } = configureStore();

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ApolloProvider client={apllotClient}>
            <Screen>
              <Header />
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route
                  path="/pokemon/:species"
                  exact
                  component={DetailPokemon}
                />
                <Route path="/my-pokemon" component={MyPokemonPage} />
                <Route path="*" exact>
                  <Redirect to="/" />
                </Route>
              </Switch>
              <Footer />
            </Screen>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
