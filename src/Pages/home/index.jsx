import InfoProduto from "../../componentes/carrinho";
import { telaProd } from "../../utils/atom";
import ApiProduct from "../../componentes/ApiProduct";
import { useRecoilValue } from "recoil";
import { Main } from "./style";

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
