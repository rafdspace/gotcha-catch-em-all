import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Screen from "./layouts/Screen";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Screen>
      <Header />
      <Homepage />
      <Footer />
    </Screen>
  );
};

export default App;
