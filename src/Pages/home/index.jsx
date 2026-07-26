import Navegacao from "../../componentes/navegacoa";
import style from "@emotion/styled";
import InfoProduto from "../../componentes/infoProduto";

const Main = style.main`
width:70% ;
display:flex;
margin: 0 auto;
margin-top:2rem;

`;

function Home() {
  return (
    <Main>
      <InfoProduto />
    </Main>
  );
}
export default Home;
