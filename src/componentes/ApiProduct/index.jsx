import { useProdutos } from "../../customizedHook/useProdutos";
import { useModalProduct } from "../../customizedHook/useModalProduct";
import {
  carrinhoState,
  produtosState,
} from "../../utils/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

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
    console.log("Excelente!!");
    console.log(produtoEncontrado);
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
      <div
        onClick={unModal.ModalVerify}
        className="fixed inset-0    bg-black/40 backdrop-blur-sm"
      >
        <section
          onClick={(event) => event.stopPropagation()}
          className=" absolute
        left-1/2
        top-1/2
        w-4/5
        max-h-[70vh]
        -translate-x-1/2
        -translate-y-1/2     
        rounded-[10px]
        overflow-y-auto
        
        max-w-[37%]
        bg-[#293032]
        p-3"
        >
          <div className="w-ful pl-5 p-2 ">
            <button
              onClick={unModal.ModalVerify}
              className="flex border-2 px-2 rounded-[3px] text-[#747f8a]"
            >
              X
            </button>
          </div>{" "}
          {produtos.map((item) => (
            <div
              className="rounded-[10px] mb-1 bg-[#3e4c50] grid grid-cols-4 items-center place-content-center  text-white  h-[180px]  px-10"
              key={item.id}
            >
              <img src={item.image} alt={produtos.title} width="70" />
              <h2 className="text-[15px]">{item.title}</h2>
              <span className=" font-extrabold flex items-center justify-center">
                R$ {item.price}
              </span>
              <button
                onClick={() => adicionarAoCarrinho(item.id)}
                className="border border-green-600  py-2 rounded-[0.5rem] bg-green-600 text-white "
              >
                Adicionar
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default ApiProduct;
