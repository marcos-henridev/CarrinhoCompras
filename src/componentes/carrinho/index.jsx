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
import {
  carrinhoState,
  cuponState,
  viewFormCepState,
  validacaoCuponComcluida,
} from "../../utils/atom.js";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Plus from "../../assets/icons8-mais-24.png";
import Menos from "../../assets/icons8-menos-50.png";
import CepSeach from "../cepLocalizar/index.jsx";
import { useState } from "react";

function InfoProduto() {
  const [cuponDigitado, setCuponDigitado] = useState("");
  const validarCuponDesconto = useSetRecoilState(validacaoCuponComcluida);
  const vercupon = useRecoilValue(validacaoCuponComcluida);
  const calcularTotalProduto = (preco, quantidade) => {
    return preco * quantidade;
  };

  const cupon = useRecoilValue(cuponState);

  const validarCupon = () => {
    if (cuponDigitado === cupon) {
      validarCuponDesconto((prev) => !prev);
      alert("PARABENS VOCÊ GANHOU 10% DE DESCONTO");
    }
    setCuponDigitado("");
  };

  const mostrarForm = () => {
    return setFORM((prev) => !prev);
  };
  const [form, setFORM] = useRecoilState(viewFormCepState);

  const [carrinho, setCarrinho] = useRecoilState(carrinhoState);
  const modal = useModalProduct();

  const adicionarQuantidade = (id) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: (item.quantidade ?? 1) + 1,
            }
          : item,
      ),
    );
  };

  // const subtotal = carrinho.reduce((soma, item) => {
  //   const TotalProduto = calcularTotalProduto(item.price, item.quantidade ?? 1);
  //   return soma + TotalProduto;
  // }, 0);

  const diminuirQuantidade = (id) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: Math.max(1, (item.quantidade ?? 1) - 1),
            }
          : item,
      ),
    );
  };

  const subtotalSemDesconto = carrinho.reduce((soma, item) => {
    const totalProduto = calcularTotalProduto(item.price, item.quantidade ?? 1);
    return soma + totalProduto;
  }, 0);
  const subtotal = vercupon ? subtotalSemDesconto * 0.9 : subtotalSemDesconto;

  return (
    <>
      <Section className="relative">
        <H3>MEU CARRINHO</H3>

        {carrinho.map((item) => (
          <Caixa className=" " key={item.id}>
            <Produto className="items-center max-w-[400px] pl-4">
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
              R${item.price * item.quantidade}
            </Total>
          </Caixa>
        ))}
        <Cupon>
          <Label htmlFor="">CUPOM DE DESCONTO</Label>
          <Input
            className="border border-gray-400 outline-none"
            placeholder="Código"
            type="text"
            value={cuponDigitado}
            onChange={(e) => setCuponDigitado(e.target.value)}
          />
          <Botao
            onClick={validarCupon}
            className="border border-gray-400 border-l-0 hover:bg-gray-200 "
          >
            Adicionar
          </Botao>
        </Cupon>
        <div className=" grid grid-cols-2 mt-4 ">
          <div className="">{form && <CepSeach />}</div>
          <div className="flex flex-col gap-5  p-4">
            <div className="border-b border-gray-300 flex justify-between">
              <p className="text-[15px] ">SUBTOTAL</p>{" "}
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className=" border-b border-gray-300 flex justify-between">
              <p className="text ">ENTREGA</p>
              <span>
                <button onClick={mostrarForm} lassName="border  cursor-pointer">
                  calcular
                </button>
              </span>
            </div>
            <div className="  border-b border-gray-300 flex justify-between">
              <p>TOTAL</p> <span>total</span>
            </div>{" "}
          </div>
        </div>
        <div className="flex gap-5 ">
          <button
            onClick={modal.ModalVerify}
            className=" mb-[2rem]  border p-3 ml-auto rounded-[6px] border-gray-400 hover:bg-gray-200"
          >
            {" "}
            Adicionar Produtos
          </button>
          <button className="mb-[2rem] btn-prod text-[15px] font-bold border rounded-[6px] p-3 bg-green-500 text-white border-green-300 w-[200px] hover:bg-green-600">
            Fechar Pedido
          </button>
        </div>
      </Section>
    </>
  );
}
export default InfoProduto;
