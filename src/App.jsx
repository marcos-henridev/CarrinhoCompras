import { useState } from "react";
import Home from "./Pages/home";
import style from "@emotion/styled";
import Navegacao from "./componentes/navegacoa";
import ApiProduct from "./componentes/ApiProduct";
import RodaPe from "./componentes/footer";
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
        <div className="mt-auto bg-[#293032]">
          <RodaPe />
        </div>
      </Container>
    </>
  );
}

export default App;
