import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Screen from "./layouts/Screen";
import Homepage from "./pages/Homepage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import configureStore from "./store/configure-store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DetailPokemon from "./pages/DetailPokemon";
const apllotClient = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

const { persistor, store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={apllotClient}>
          <Screen>
            <Header />
            <DetailPokemon />
            {/* <Homepage /> */}
            <Footer />
          </Screen>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
