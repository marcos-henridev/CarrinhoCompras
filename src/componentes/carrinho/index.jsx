import {
  Section,
  H3,
  Caixa,
  Produto,
  Preco,
  Quantidade,
  Total,
  Cupon,
  Label,
  Input,
  Botao,
} from "./style.jsx";
import { useModalProduct } from "../../customizedHook/useModalProduct.js";
import { carrinhoState } from "../../utils/atom.js";
import { useRecoilState } from "recoil";
import Plus from '../../assets/icons8-mais-24.png'
import Menos from '../../assets/icons8-menos-50.png'

function InfoProduto() {
  const [serchProducts, setCarrinho] = useRecoilState(carrinhoState);
  const modal = useModalProduct();

  const adicionarQuantidade = (id) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === id
          ? { ...item, quantidade: (item.quantidade ?? 1) + 1 }
          : item,
      ),
    );
  };

  const diminuirQuantidade = (id) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: Math.max(1, (item.quantidade ?? 1) - 1),
            }
          : item,
      ),
    );
  };

  return (
    <>
      <Section className="relative">
        <H3>MEU CARRINHO</H3>

        {serchProducts.map((item) => (
          <Caixa className="overflow-scroll" key={item.id}>
            <Produto className="items-center mb-2 max-w-[400px] pl-4">
              <img className="h-20" src={item.image} alt={item.title} />{" "}
              {item.title}
            </Produto>
            <Preco className="flex items-center justify-center">
              R$ {item.price.toFixed(2)}
            </Preco>
            <Quantidade className="flex items-center justify-center">
              <button className="" onClick={() => diminuirQuantidade(item.id)}>
                <img className="h-5" src={Menos} alt="" />
              </button>
              <span className="mx-3">{item.quantidade ?? 1}</span>
              <button className="" onClick={() => adicionarQuantidade(item.id)}>
                <img className="h-5" src={Plus} alt="" />
              </button>
            </Quantidade>
            <Total className="flex items-center justify-center">
              R$ {(item.price * (item.quantidade ?? 1)).toFixed(2)}
            </Total>
          </Caixa>
        ))}
        <Cupon>
          <Label htmlFor="">CUPOM DE DESCONTO</Label>
          <Input
            className="border border-gray-400 outline-none"
            placeholder="Código"
            type="text"
          />
          <Botao className="border border-gray-400 border-l-0 hover:bg-gray-200 ">
            Adicionar
          </Botao>
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
        <div className="flex gap-5 ">
          <button
            onClick={modal.ModalVerify}
            className="border p-3 ml-auto rounded-[6px] border-gray-400 hover:bg-gray-200"
          >
            {" "}
            Adicionar Produtos
          </button>
          <button className=" btn-prod text-[15px] font-bold border rounded-[6px] p-3 bg-green-500 text-white border-green-300 w-[200px] hover:bg-green-600">
            Fechar Pedido
          </button>
        </div>
      </Section>
    </>
  );
}
export default InfoProduto;
