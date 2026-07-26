import { useState } from "react";
import styled from "@emotion/styled";
import Cart from "../../assets/cartLogo.svg";

const Nav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  color: black;
  gap: 15px;
  list-style: none;
`;

function Navegacao() {
  const [attCompras, setAttCompras] = useState([
    "CARRINHO",
    "PAGAMENTO",
    "CONFIRMAÇÃO",
  ]);

  return (
    <>
      <Nav>
        <div>
          <img src={Cart} alt="" />
        </div>
        <div>
          <Ul>
            {attCompras.map((item) => (
              <li>{item}</li>
            ))}
          </Ul>
        </div>
      </Nav>
    </>
  );
}
export default Navegacao;
