import Navegacao from "../../componentes/navegacoa";
import style from "@emotion/styled";
import InfoProduto from "../../componentes/carrinho";
import { telaProd } from "../../utils/atom";
import ApiProduct from "../../componentes/ApiProduct";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useModalProduct } from "../../customizedHook/useModalProduct";

const Main = style.main`
width:70% ;
display:flex;
flex-direction: column;
margin: 0 auto;
margin-top:2rem;
position: relative;

`;

function Home() {
  const telaViewApi = useRecoilValue(telaProd);

  return (
    <Main>
      <InfoProduto />
      {telaViewApi && <ApiProduct />}
    </Main>
  );
}
export default Home;
