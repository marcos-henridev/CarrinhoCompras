import {
  Section,
  H3,
  Caixa,
  Produto,
  Preco,
  Quantidade,
  Entrega,
  Cupon,
  Label,
  Input,
  Botao,
  P,
} from "./style.jsx";

function InfoProduto() {
  return (
    <>
      <Section className="relative">
        <H3>MEU CARRINHO</H3>

        <Caixa>
          <Produto>
            <div className="aqui">
              <P>PRODUTOS</P>
            </div>
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
          <Input className="border" placeholder="Código" type="text" />
          <Botao className="border bg-gray-200">Adicionar</Botao>
        </Cupon>
        <div className=" grid grid-cols-2 mt-4 ">
          <div className=""></div>
          <div className="flex flex-col gap-5  p-4">
            <div className="border-b border-gray-300 flex justify-between">
              <p className="text-[15px] ">SUBTOTAL</p> <span>0,00</span>
            </div>
            <div className=" border-b border-gray-300 flex justify-between">
              <p className="text ">ENTREGA</p>
              <span>calcular</span>
            </div>
            <div className="  border-b border-gray-300 flex justify-between">
              <p className="text">TOTAL</p> <span>total</span>
            </div>{" "}
          </div>
        </div>
        <div className="flex gap-5 absolute right-0">
          <button className="border p-3 hover:bg-gray-200">
            {" "}
            Adicionar Produtos
          </button>
          <button className="btn-prod text-[15px] font-bold border p-3 bg-green-500 text-white border-green-300 w-[200px]">
            Fechar Pedido
          </button>
        </div>
      </Section>
    </>
  );
}
export default InfoProduto;
