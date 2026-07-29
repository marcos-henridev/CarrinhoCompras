import Cart from "../../assets/cartLogo.svg";
import { Nav, Ul } from "./style";
import { useRecoilValue } from "recoil";
import { navegacaoState } from "../../utils/atom";

function Navegacao() {
  const attCompras = useRecoilValue(navegacaoState);

  return (
    <>
      <Nav>
        <div>
          <img src={Cart} alt="" />
        </div>
        <div>
          <Ul>
            {attCompras.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Ul>
        </div>
      </Nav>
    </>
  );
}
export default Navegacao;
