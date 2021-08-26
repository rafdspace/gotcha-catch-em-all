import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Screen from "./layouts/Screen";
import Homepage from "./pages/Homepage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apllotClient = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={apllotClient}>
      <Screen>
        <Header />
        <Homepage />
        <Footer />
      </Screen>
    </ApolloProvider>
  );
};

export default App;
