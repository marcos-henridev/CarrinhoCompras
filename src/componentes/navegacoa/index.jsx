import Cart from "../../assets/icons8-carrinho-de-compras-48.png";
import { CartContainer, Nav, NavItem, NavSection, Ul } from "./style";
import { useRecoilValue } from "recoil";
import { navegacaoState } from "../../utils/atom";

function Navegacao() {
  const attCompras = useRecoilValue(navegacaoState);

  return (
    <>
      <Nav>
        <CartContainer>
          <img src={Cart} alt="" />
        </CartContainer>
        <NavSection>
          <Ul>
            {attCompras.map((item, index) => (
              <NavItem key={index}>
                {item}
              </NavItem>
            ))}
          </Ul>
        </NavSection>
      </Nav>
    </>
  );
}
export default Navegacao;
