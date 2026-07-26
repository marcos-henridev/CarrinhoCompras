import { useState } from "react";
import Home from "./Pages/home";
import style from "@emotion/styled";
import Navegacao from "./componentes/navegacoa";

const Container = style.div`
  margin: 0;
  
  
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  
  
 

`;

const Header = style.div`
  margin: 0;
  
  
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 6px 21px -3px #000000;

`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="conteiner">
        <Header>
          <Navegacao />
        </Header>
        <Home />
      </Container>
    </>
  );
}

export default App;
