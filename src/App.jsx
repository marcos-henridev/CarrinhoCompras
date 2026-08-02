import Home from "./Pages/home";
import Navegacao from "./componentes/navegacoa";
import RodaPe from "./componentes/footer";
import { Container, Header, FooterContainer } from "./App.style";

function App() {
  return (
    <>
      <Container>
        <Header>
          <Navegacao />
        </Header>
        <Home />
        <FooterContainer>
          <RodaPe />
        </FooterContainer>
      </Container>
    </>
  );
}

export default App;
