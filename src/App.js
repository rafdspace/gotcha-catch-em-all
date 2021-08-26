import Header from "./components/Header";
import styled from "@emotion/styled";
import Footer from "./components/Footer";

const Screen = styled.div`
  width:100vw;
`
const App = () => {
  return (
    <Screen>
      <Header />
      <Footer />
    </Screen>
  );
}

export default App;
