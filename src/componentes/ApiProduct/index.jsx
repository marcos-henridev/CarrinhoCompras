import { useProdutos } from "../../customizedHook/useProdutos";
import { useModalProduct } from "../../customizedHook/useModalProduct";
import {
  carrinhoState,
  produtosState,
} from "../../utils/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  AddButton,
  CloseButton,
  Modal,
  ModalBackdrop,
  ModalHeader,
  Product,
  ProductPrice,
  ProductTitle,
} from "./style";

function ApiProduct() {
  const setCarrinho = useSetRecoilState(carrinhoState);
  const arrayProdutos = useRecoilValue(produtosState);

  //função para selecionar o produto e adicionar no carrinho
  const adicionarAoCarrinho = (id) => {
    const produtoEncontrado = arrayProdutos.find((e) => e.id === id);
    if (!produtoEncontrado) {
      return;
    }
    setCarrinho((prev) => {
      const produtoJaExiste = prev.find(
        (item) => item.id === produtoEncontrado.id,
      );
      //se o produto ja existe no carrinho adicionar +1 na quantidade
      if (produtoJaExiste) {
        return prev.map((item) =>
          item.id === produtoEncontrado.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }
      //se passar pelo if retirna entao mo porduto com a quantidade +1
      return [...prev, { ...produtoEncontrado, quantidade: 1 }];
    });
  };
  /////////////////////////

  const unModal = useModalProduct();
  const { produtos, loading, erro } = useProdutos();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <>
      <ModalBackdrop onClick={unModal.ModalVerify}>
        <Modal
          onClick={(event) => event.stopPropagation()}
        >
          <ModalHeader>
            <CloseButton onClick={unModal.ModalVerify}>
              X
            </CloseButton>
          </ModalHeader>{" "}
          {produtos.map((item) => (
            <Product key={item.id}>
              <img src={item.image} alt={produtos.title} width="70" />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>
                R$ {item.price}
              </ProductPrice>
              <AddButton onClick={() => adicionarAoCarrinho(item.id)}>
                Adicionar
              </AddButton>
            </Product>
          ))}
        </Modal>
      </ModalBackdrop>
    </>
  );
}

export default ApiProduct;
