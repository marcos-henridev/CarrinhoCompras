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
  ProductImage,
  QuantityButton,
  QuantityIcon,
  QuantityValue,
  SummaryGrid,
  AddressContainer,
  Summary,
  SummaryRow,
  SummaryLabel,
  DeliveryButton,
  Actions,
  AddProductsButton,
  CheckoutButton,
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
      validarCuponDesconto(true);
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
      <Section>
        <H3>MEU CARRINHO</H3>

        {carrinho.map((item) => (
          <Caixa key={item.id}>
            <Produto>
              <ProductImage src={item.image} alt={item.title} />{" "}
              {item.title}
            </Produto>
            <Preco>
              R$ {item.price.toFixed(2)}
            </Preco>
            <Quantidade>
              <QuantityButton onClick={() => diminuirQuantidade(item.id)}>
                <QuantityIcon src={Menos} alt="" />
              </QuantityButton>
              <QuantityValue>{item.quantidade ?? 1}</QuantityValue>
              <QuantityButton onClick={() => adicionarQuantidade(item.id)}>
                <QuantityIcon src={Plus} alt="" />
              </QuantityButton>
            </Quantidade>
            <Total>
              R${item.price * item.quantidade}
            </Total>
          </Caixa>
        ))}
        <Cupon>
          <Label htmlFor="">CUPOM DE DESCONTO</Label>
          <Input
            placeholder="Código"
            type="text"
            value={cuponDigitado}
            onChange={(e) => setCuponDigitado(e.target.value)}
          />
          <Botao
            $ativo={!vercupon}
            disabled={vercupon}
            onClick={validarCupon}
          >
            Adicionar
          </Botao>
        </Cupon>
        <SummaryGrid>
          <AddressContainer>{form && <CepSeach />}</AddressContainer>
          <Summary>
            <SummaryRow>
              <SummaryLabel>SUBTOTAL</SummaryLabel>{" "}
              <span>R$ {subtotal.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>ENTREGA</SummaryLabel>
              <span>
                <DeliveryButton onClick={mostrarForm}>
                  calcular
                </DeliveryButton>
              </span>
            </SummaryRow>
           
          </Summary>
        </SummaryGrid>
        <Actions>
          <AddProductsButton onClick={modal.ModalVerify}>
            {" "}
            Adicionar Produtos
          </AddProductsButton>
          <CheckoutButton>
            Fechar Pedido
          </CheckoutButton>
        </Actions>
      </Section>
    </>
  );
}
export default InfoProduto;
