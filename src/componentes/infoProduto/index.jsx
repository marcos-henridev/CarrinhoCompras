import style from "@emotion/styled";

const Section = style.section`
width: 100%;
font-size:13px;
`;
const H3 = style.h3`
border-bottom: 1px solid;
width: 100%;
`;
const Caixa = style.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr ;


`;
const Produto = style.div`
border:1px solid;
height:8rem;
display: grid;
grid-template-rows: 20px 1fr;
justify-content: center;
align-items: center;

`;

const Preco = style(Produto)`
`;
const Quantidade = style(Produto)`
`;
const Entrega = style(Produto)`
`;
const Cupon = style.div`

border:1px solid;
margin-top: 1rem;
padding:15px;

`;
const Label = style.label`
margin-right: 1rem;
`;
const Input = style.input`
padding: 0.3rem;

`;
const Botao = style.button`
padding: 0.3rem;

`;
function InfoProduto() {
  return (
    <>
      <Section>
        <H3>MEU CARRINHO</H3>

        <Caixa>
          <Produto>
            <p>PRODUTOS</p>
            <div></div>
          </Produto>
          <Preco>
            <p>PREÇO</p>
            <div></div>
          </Preco>
          <Quantidade>
            <p>QUANT</p>
            <div></div>
          </Quantidade>
          <Entrega>
            <p>TOTAL</p>
            <div></div>
          </Entrega>
        </Caixa>
        <Cupon>
          <Label htmlFor="">CUPOM DE DESCONTO</Label>
          <Input placeholder="Código" type="text" />
          <Botao>Adicionar</Botao>
        </Cupon>
      </Section>
    </>
  );
}
export default InfoProduto;
