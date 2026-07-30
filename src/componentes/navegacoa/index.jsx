import Cart from "../../assets/icons8-carrinho-de-compras-48.png";
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
              <li className="text-[#d5d7d8]" key={index}>
                {item}
              </li>
            ))}
          </Ul>
        </div>
      </Nav>
    </>
  );
}
export default Navegacao;
