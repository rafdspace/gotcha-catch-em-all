import Header from "./components/Header";
import styled from "@emotion/styled";

const Screen = styled.div`
  width:100vw;
`
const App = () => {
  return (
    <Screen>
      <Header />
    </Screen>
  );
}

export default App;
